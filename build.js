"use strict"
var Epub = require('epub');
var async = require('async');
var epub = new Epub('republic-lost.epub');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var cheerio = require('cheerio');
var slug = require('slug');

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

function template(text) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link href="stylesheet.css" rel="stylesheet">
</head>
<body>
  <div id="content">
    ${text}
  </div>
</body>
</html>`
}