"use strict"
var Epub = require('epub');
var async = require('async');
var epub = new Epub('republic-lost.epub');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var cheerio = require('cheerio');
var slug = require('slug');
var allLinks = require('./links');

epub.on('end', function() {
  build(epub);
});
epub.parse();

function build(epub) {
  getPages(epub, function(err, pages) {
    if (err) return console.error(err);
    var images = getImages(epub, pages);
    saveImages(epub, images, function(err) {
      if (err) return console.error(err);
      pages.forEach(rewriteImagesSrc);
      rewriteAnchorsHref(pages);
      addNavLinks(pages);
      addBreadCrumbs(pages);
      makeTOCTitleBig(pages);
      adjustTitleSizes(pages);
      substituteLinks(pages.filter(function(p) {
        return p.id === 'notes.html';
      })[0]);
      writePages(pages, function(err) {
        if (err) return console.error(err);
        console.log('done');
      });
    });
  });
}

function getPages(epub, callback) {
  var pages = epub.flow.map(function(page, idx) {
    var ext = path.extname(page.id);
    var basename = path.basename(page.id, ext);
    return {
      id: page.id,
      ext: ext,
      basename: basename,
      href: page.href,
      order: page.order,
      index: idx,
      title: page.title
    }
  });
  async.each(pages, function(page, next) {
    epub.getChapterRaw(page.id, function(err, html) {
      if (err) return next(err);
      page.$ = cheerio.load(html);
      var title = page.$('h3').text();
      if (title) {
        page.subTitle = title;
      }
      if (page.title) {
        var title = `${page.title || ''} ${page.subTitle || ''}`.trim();
        page.filename = slug(title.toLowerCase()) + '.html';
      } else {
        page.filename = slug(page.basename) + '.html';
      }
      next()
    });
  }, function(err) {
    if (err) return callback(err);
    callback(null, pages);
  });
}

function getImages(epub, pages) {
  return pages.reduce(function(images, page) {
    var $ = page.$;
    return images.concat($('img').map(function() {
      return path.relative('../Images/', $(this).attr('src'));
    }).toArray());
  }, []).concat([epub.metadata.cover]);
}

function saveImages(epub, images, callback) {
  async.each(images, function(image, next) {
    epub.getImage(image, function(err, buffer) {
      if (err) {
        console.warn(`Could not get image "${image}"`);
        return next();
      }
      fs.writeFile(`images/${image}`, buffer, next);
    });
  }, function(err) {
    if (err) return callback(err)
    callback()
  })
}

function rewriteImagesSrc(page) {
  var $ = page.$;
  $('img').each(function() {
    var src = $(this).attr('src');
    var newSrc = 'images/' + path.relative('../Images/', src);
    $(this).attr('src', newSrc);
  });
}

function rewriteAnchorsHref(pages) {
  var pagesById = {};
  pages.forEach(function(page) {
    pagesById[page.id] = page;
  });
  pages.forEach(function(page) {
    var $ = page.$;
    $('a').each(function() {
      var href = $(this).attr('href');
      if (!href) return;
      if (href.match(/^https?\:/)) return;
      var id = path.relative('../Text/', href);
      var hash = '';
      if (id.indexOf('#') !== -1){
        hash = id.substring(id.indexOf('#'));
        id = id.substring(0, id.indexOf('#'));
      }
      var linkedPage = pagesById[id];
      if (!linkedPage) {
        throw new Error(`Cannot find page ${id}`);
      }
      $(this).attr('href', linkedPage.filename + hash);
    });
  });
}

function writePages(pages, callback) {
  async.each(pages, function(page, next) {
    var html = template(page.$('body').html());
    fs.writeFile(page.filename, html, next);
  }, callback);
}

function addNavLinks(pages) {
  var lastPage = pages.length - 1;
  pages.forEach(function(page, idx) {
    if (page.filename === 'contents.html') return;
    page.$('body').prepend(
      `<div id="nav-top" class="nav">
        <a class="prev-link">Previous</a> |
        <a class="toc-link" href="contents.html">Contents</a> |
        <a class="next-link">Next</a>
      </div>`)
    page.$('body').append(
      `<div id="nav-bottom" class="nav">
        <a class="prev-link">Previous</a> |
        <a class="toc-link" href="contents.html">Contents</a> |
        <a class="next-link">Next</a>
      </div>`)
    var prev = idx === 0 ? null : pages[idx - 1];
    var next = idx === lastPage ? null : pages[idx + 1];
    if (prev) {
      page.$('.prev-link').attr('href', prev.filename);
    }
    if (next) {
      page.$('.next-link').attr('href', next.filename);
    }
  });
}

function makeTOCTitleBig(pages) {
  pages.forEach(function(page) {
    page.$('.sgc-toc-title').replaceWith(
      '<h1>Table of Contents</h1>'
    );
  });
}

function isChapter(page) {
  return page.$('h3').length > 0;
}

function isSection(page) {
  return page.$('h2').length > 0;
}

function adjustTitleSizes(pages) {
  pages.forEach(function(page) {
    if (isChapter(page)) {
      var chapterNum = page.$('h1').text();
      page.$('h1').replaceWith('');
      page.$('h3').replaceWith(
        `<h1>
          <div class="chap_num">${chapterNum}</div>
          ${page.$('h3').text()}
        </h1>`
      );
      return;
    }
    if (isSection(page)) {
      var partNum = page.$('h1').text();
      page.$('h1').replaceWith('');
      page.$('h2').replaceWith(
        `<h1>
          <div class="part_num">${partNum}. </div>
          ${page.$('h2').text()}
        </h1>`
      );
    }
  });
}

function addBreadCrumbs(pages) {
  pages.forEach(function(page, idx) {
    var $ = page.$;
    $('body').prepend(
      `<div id="breadcrumbs">
        <a id="site-logo" href="/">Republic, Lost</a>
        &raquo;
      </div>
      `);
    if (isChapter(page)) {
      var parent = findParent(idx);
      $('#breadcrumbs').append(
        `<a href="${parent.filename}">${parent.title}</a> &raquo; `
      );

      $('#breadcrumbs').append(
        `</span>${page.title}</span>`
      );
    } else {
      $('#breadcrumbs').append(
        `</span>${page.title}</span>`
      );
    }
  });

  function findParent(idx) {
    while (!isSection(pages[idx])) idx--;
    return pages[idx];
  }
}

function substituteLinks(page) {
  var $ = page.$;
  $('p').each(function() {
    var newHTML = $(this).html().replace(/(:?\#[0-9]+)|(:?\$39)/g, function(text) {
      var n = text.substring(1);
      var links = allLinks[n].links
      var ret = `<a href="${links[0].href}">#${n}</a>`;
      if (links.length > 1) {
        ret += ` <a href="${links[1].href}">(cache)</a>`;
      }
      return ret;
    });
    $(this).html(newHTML);
  });
}

function template(text) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="stylesheet.css" rel="stylesheet">
</head>
<body>
  <div id="content">
    ${text}
  </div>
</body>
</html>`
}