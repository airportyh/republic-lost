var byNumber = {};
var links = [
  {
    "n": 1,
    "links": [
      {
        "href": "http://www.gallup.com/poll/141512/congress-ranks-last-confidence-institutions.aspx",
        "text": "Congress Ranks Last in Confidence in Institutions"
      },
      {
        "href": " http://www.webcitation.org/5xkOvvaFW",
        "text": "cache"
      }
    ]
  },
  {
    "n": 2,
    "links": [
      {
        "href": " http://www.americanrhetoric.com/speeches/teddyrooseveltmuckrake.htm",
        "text": "http://www.americanrhetoric.com/speeches/teddyrooseveltmuckrake.htm"
      },
      {
        "href": "http://www.webcitation.org/5xkP5wkoP",
        "text": "cache"
      }
    ]
  },
  {
    "n": 3,
    "links": [
      {
        "href": "http://www.econ.umd.edu/research/papers/38/download/238",
        "text": "http://www.econ.umd.edu/research/papers/38/download/238"
      }
    ]
  },
  {
    "n": 4,
    "links": [
      {
        "href": "http://wiki.answers.com/Q/How_far_away_from_the_North_Pole_is_the_Magnetic_Pole_(last_visited_Jan._14,_2011",
        "text": "How far away from the North Pole is the Magnetic Pole (last visited Jan. 14, 2011"
      },
      {
        "href": "http://www.webcitation.org/5xkPQNpuK",
        "text": "cache"
      }
    ]
  },
  {
    "n": 5,
    "links": [
      {
        "href": "http://http://stats.org/stories/2009/Science%20Suppressed_%20America%27s%20Obsession%20with%20BPA_July9_09.pdf",
        "text": "http://http://stats.org/stories/2009/Science%20Suppressed_%20America%27s%20Obsession%20with%20BPA_July9_09.pdf"
      }
    ]
  },
  {
    "n": 6,
    "links": [
      {
        "href": "http://tierneylab.blogs.nytimes.com/2009/06/30/flaws-in-the-case-against-bpa/",
        "text": "Flaws in the Case Against BPA - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5xkPn23PD",
        "text": "cache"
      }
    ]
  },
  {
    "n": 7,
    "links": [
      {
        "href": "http://harpers.org/archive/2009/12/0082737",
        "text": "Spin the bottle (Harper's Magazine)"
      },
      {
        "href": "http://www.webcitation.org/5xwIw3X0Q",
        "text": "cache"
      }
    ]
  },
  {
    "n": 8,
    "links": [
      {
        "href": "http://onlinelibrary.wiley.com/doi/10.1002/cncr.22880/pdf",
        "text": "Prevalence and sociodemographic correlates of beliefs regarding cancer risks - Stein - 2007 - Cancer - Wiley Online Library"
      }
    ]
  },
  {
    "n": 9,
    "links": [
      {
        "href": "http://news.smh.com.au/breaking-news-technology/study-on-cell-phone-link-to-cancer-inconclusive-20100518-v9p4.html",
        "text": "Study on cell phone link to cancer inconclusive"
      },
      {
        "href": "http://www.webcitation.org/61ZVHVd2o",
        "text": "cache"
      }
    ]
  },
  {
    "n": 10,
    "links": [
      {
        "href": "http://www.iarc.fr/en/media-centre/pr/2011/pdfs/pr208_E.pdf",
        "text": "http://www.iarc.fr/en/media-centre/pr/2011/pdfs/pr208_E.pdf"
      }
    ]
  },
  {
    "n": 11,
    "links": [
      {
        "href": "http://ccnmtl.columbia.edu/projects/rcr/rcr_conflicts/foundation/index.html",
        "text": "Responsible Conduct Research : Conflicts of Interest"
      },
      {
        "href": "http://www.webcitation.org/5zc64f9n2",
        "text": "cache"
      }
    ]
  },
  {
    "n": 12,
    "links": [
      {
        "href": "http://web.archive.org/web/20071103060225/http://www.ethics.ubc.ca/people/mcdonald/conflict.htm",
        "text": "CAE: Michael McDonald, Ph.D."
      },
      {
        "href": "http://www.webcitation.org/5zc6D4lyo",
        "text": "cache"
      }
    ]
  },
  {
    "n": 13,
    "links": [
      {
        "href": "http://journals.cambridge.org/action/displayFulltext?type=6&fid=2426116&jid=PNS&volumeId=67&issueId=04&aid=2426112&bodyId=&membershipNumber=&societyETOCSession=&fulltextType=RA&fileId=S0029665108008689",
        "text": "Cambridge Journals Online - Fulltext"
      },
      {
        "href": "http://www.webcitation.org/5zcBcczft",
        "text": "cache"
      }
    ]
  },
  {
    "n": 14,
    "links": [
      {
        "href": "http://www.annals.org/content/153/3/158.full.pdf+html",
        "text": "http://www.annals.org/content/153/3/158.full.pdf+html"
      },
      {
        "href": "http://www.webcitation.org/61ZVVy3Bg",
        "text": "cache"
      }
    ]
  },
  {
    "n": 15,
    "links": [
      {
        "href": "http://www.google.com/adplanner/static/top1000/",
        "text": "Top 1000 sites - DoubleClick Ad Planner"
      },
      {
        "href": "http://www.webcitation.org/5xkQMRTSh",
        "text": "cache"
      }
    ]
  },
  {
    "n": 16,
    "links": [
      {
        "href": "www.lonelyplanet.biz/downloads/lonelyplanet_profile.pdf",
        "text": "www.lonelyplanet.biz/downloads/lonelyplanet_profile.pdf"
      }
    ]
  },
  {
    "n": 17,
    "links": [
      {
        "href": "http://www.cdc.gov/diabetes/pubs/factsheet07.htm",
        "text": "CDC - 2007 National Diabetes Fact Sheet - Publications - Diabetes DDT"
      },
      {
        "href": "http://www.webcitation.org/604mM5aWt",
        "text": "cache"
      }
    ]
  },
  {
    "n": 18,
    "links": [
      {
        "href": "http://news.wustl.edu/news/Pages/4881.aspx",
        "text": "Obesity, Type 2 diabetes rates growing rapidly among children | Newsroom | Washington University in St. Louis"
      },
      {
        "href": "http://www.webcitation.org/5zcBfnBDz",
        "text": "cache"
      }
    ]
  },
  {
    "n": 19,
    "links": [
      {
        "href": "http://www.associatedcontent.com/shared/print.shtml?content_type=article&content_type_id=77300",
        "text": "Obesity in America - Associated Content from Yahoo! - associatedcontent.com"
      },
      {
        "href": "http://www.webcitation.org/5xkQe497Z",
        "text": "cache"
      }
    ]
  },
  {
    "n": 20,
    "links": [
      {
        "href": "http://www.carolinasmedicalcenter.org/110417.cfm",
        "text": "CMC, Charlotte - Reason for increase in number of children with type 2 ..."
      },
      {
        "href": "http://www.webcitation.org/5xkQs8qpX",
        "text": "cache"
      }
    ]
  },
  {
    "n": 21,
    "links": [
      {
        "href": "http://www.cdc.gov/nchs/products/pubs/pubd/hestats/overweight/overweight_adult.pdf",
        "text": "http://www.cdc.gov/nchs/products/pubs/pubd/hestats/overweight/overweight_adult.pdf"
      },
      {
        "href": "http://www.webcitation.org/604mWvqWe",
        "text": "cache"
      }
    ]
  },
  {
    "n": 22,
    "links": [
      {
        "href": "http://www.cdc.gov/nchs/data/hus/hus09.pdf",
        "text": "http://www.cdc.gov/nchs/data/hus/hus09.pdf"
      },
      {
        "href": "http://www.webcitation.org/604mettGq",
        "text": "cache"
      }
    ]
  },
  {
    "n": 23,
    "links": [
      {
        "href": "http://www.associatedcontent.com/shared/print.shtml?content_type=article&content_type_id=2575827",
        "text": "The Facts About High Fructose Corn Syrup - Associated Content from Yahoo! - associatedcontent.com"
      },
      {
        "href": "http://www.webcitation.org/5xkQvui7K",
        "text": "cache"
      }
    ]
  },
  {
    "n": 24,
    "links": [
      {
        "href": "http://www.cato.org/pubs/pas/pa-241.html",
        "text": "Archer Daniels Midland: A Case Study In Corporate Welfare"
      },
      {
        "href": "http://www.webcitation.org/604mlUK6h",
        "text": "cache"
      }
    ]
  },
  {
    "n": 25,
    "links": [
      {
        "href": "http://www.ers.usda.gov/briefing/dairy/policy.htm",
        "text": "USDA ERS Briefing Room - Dairy: Policy"
      },
      {
        "href": "http://www.webcitation.org/5xkRSr3Za",
        "text": "cache"
      }
    ]
  },
  {
    "n": 26,
    "links": [
      {
        "href": "http://ncseonline.org/nle/crsreports/05jun/97-905.pdf",
        "text": "http://ncseonline.org/nle/crsreports/05jun/97-905.pdf"
      }
    ]
  },
  {
    "n": 27,
    "links": [
      {
        "href": "http://www.bloomberg.com/apps/news?pid=newsarchive&sid=aq4.FwewAB4o&refer=asia",
        "text": "U.S. Sets Shrimp Tariffs on Thailand, India, Ecuador, Brazil  - Bloomberg"
      },
      {
        "href": "http://www.webcitation.org/5zcBlIYLZ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 28,
    "links": [
      {
        "href": "http://www.npr.org/blogs/money/2011/01/26/131192182/cotton",
        "text": "Why U.S. Taxpayers Are Paying Brazilian Cotton Growers : Planet Money : NPR"
      },
      {
        "href": "http://www.webcitation.org/5xkRiilxN",
        "text": "cache"
      }
    ]
  },
  {
    "n": 29,
    "links": [
      {
        "href": "www.heritage.org/.../2002/.../agriculture-lobby-wins-big-in-new-farm-bill",
        "text": "www.heritage.org/.../2002/.../agriculture-lobby-wins-big-in-new-farm-bill"
      },
      {
        "href": "http://www.webcitation.org/604mtHJHA",
        "text": "cache"
      }
    ]
  },
  {
    "n": 30,
    "links": [
      {
        "href": "http://georgewbush-whitehouse.archives.gov/news/releases/2002/03/print/20020305-6.html",
        "text": "President Announces Temporary Safeguards for Steel Industry"
      },
      {
        "href": "http://www.webcitation.org/5xkRlX80Z",
        "text": "cache"
      }
    ]
  },
  {
    "n": 31,
    "links": [
      {
        "href": "http://www.cato.org/pub_display.php?pub_id=12363",
        "text": "Counting the Cost of Steel Protection | Daniel Griswold | Cato Institute: Congressional Testimony"
      },
      {
        "href": "http://www.webcitation.org/5xkRtd2X8",
        "text": "cache"
      }
    ]
  },
  {
    "n": 32,
    "links": [
      {
        "href": "http://www.cato.org/pubs/tpa/tpa-011.pdf",
        "text": "http://www.cato.org/pubs/tpa/tpa-011.pdf"
      },
      {
        "href": "http://www.webcitation.org/604n2nR8L",
        "text": "cache"
      }
    ]
  },
  {
    "n": 33,
    "links": [
      {
        "href": "http://s3.amazonaws.com/thf_media/2008/pdf/bg2134.pdf",
        "text": "http://s3.amazonaws.com/thf_media/2008/pdf/bg2134.pdf"
      },
      {
        "href": "http://www.webcitation.org/604nAdbMy",
        "text": "cache"
      }
    ]
  },
  {
    "n": 34,
    "links": [
      {
        "href": "http://www.reclaimdemocracy.org/articles_2005/sugar_industry_subsidies.php",
        "text": "The Sugar Industry: The Sugar Industry and Corporate Welfare"
      },
      {
        "href": "http://www.webcitation.org/5xwK7qUb2",
        "text": "cache"
      }
    ]
  },
  {
    "n": 35,
    "links": [
      {
        "href": "http://www.downsizinggovernment.org",
        "text": "Downsizing the Federal Government"
      },
      {
        "href": "http://www.webcitation.org/5xkS4EyzH",
        "text": "cache"
      }
    ]
  },
  {
    "n": 36,
    "links": [
      {
        "href": "http://assets.panda.org/downloads/sugarandtheenvironment_fidq.pdf",
        "text": "http://assets.panda.org/downloads/sugarandtheenvironment_fidq.pdf"
      }
    ]
  },
  {
    "n": 37,
    "links": [
      {
        "href": "http://www.fff.org/freedom/0498d.asp",
        "text": "The Great Sugar Shaft"
      },
      {
        "href": "http://www.webcitation.org/5xkS71tpE",
        "text": "cache"
      }
    ]
  },
  {
    "n": 38,
    "links": [
      {
        "href": "http://www.cato.org/pub_display.php?pub_id=10668",
        "text": "America's Credibility Goes \"Timber!\" | Daniel J. Ikenson | Cato Institute: Free Trade Bulletin"
      },
      {
        "href": "http://www.webcitation.org/604nXhrqW",
        "text": "cache"
      }
    ]
  },
  {
    "n": 39,
    "links": [
      {
        "href": "http://farm.ewg.org/progdetail.php?fips=00000&progcode=corn",
        "text": "United States Corn Subsidies || EWG Farm Subsidy Database"
      },
      {
        "href": "http://www.webcitation.org/5xwKpOShK",
        "text": "cache"
      }
    ]
  },
  {
    "n": 40,
    "links": [
      {
        "href": "http://www.grist.org/article/food-2010-09-21-op-ed-corn-subsidies-make-unhealthy-food-choices/",
        "text": "Corn subsidies make unhealthy food choices the rational ones | Grist"
      },
      {
        "href": "http://www.webcitation.org/5xkSLqbc5",
        "text": "cache"
      }
    ]
  },
  {
    "n": 41,
    "links": [
      {
        "href": "http://www.ase.tufts.edu/gdae/Pubs/rp/PB07-03FeedingAtTroughDec07.pdf ",
        "text": "http://www.ase.tufts.edu/gdae/Pubs/rp/PB07-03FeedingAtTroughDec07.pdf"
      }
    ]
  },
  {
    "n": 42,
    "links": [
      {
        "href": "http://www.grist.org/industrial-agriculture/2011-05-25-groups-sue-fda-to-stop-big-ag-antibiotic-abuse-just-might-work",
        "text": "Groups sue FDA to stop Big Ag antibiotic abuse—and it just might work | Grist"
      },
      {
        "href": "http://www.webcitation.org/5zSy7x9GV",
        "text": "cache"
      }
    ]
  },
  {
    "n": 43,
    "links": [
      {
        "href": "http://www.nytimes.com/2010/04/18/opinion/18kennedy.html?pagewanted=print",
        "text": "Op-Ed Contributor - Cows on Drugs - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5xkSXwWbi",
        "text": "cache"
      }
    ]
  },
  {
    "n": 44,
    "links": [
      {
        "href": "http://www.ncifap.org/bin/e/j/PCIFAPFin.pdf.",
        "text": "http://www.ncifap.org/bin/e/j/PCIFAPFin.pdf."
      }
    ]
  },
  {
    "n": 45,
    "links": [
      {
        "href": "http://www.nytimes.com/2009/10/04/health/04meat.html?_r=3&pagewanted=print",
        "text": "The Burger That Shattered Her Life - The New York Times"
      },
      {
        "href": "http://www.webcitation.org/5xkSdMurr",
        "text": "cache"
      }
    ]
  },
  {
    "n": 46,
    "links": [
      {
        "href": "http://www.csmonitor.com/2006/0512/p08s01-comv.html",
        "text": "Corn lobby's tall tale of a gas substitute / The Christian Science Monitor - CSMonitor.com"
      },
      {
        "href": "http://www.webcitation.org/5xkSfxRDS",
        "text": "cache"
      }
    ]
  },
  {
    "n": 47,
    "links": [
      {
        "href": "http://www.balancedfoodandfuel.org/ht/a/GetDocumentAction/i/9908",
        "text": "http://www.balancedfoodandfuel.org/ht/a/GetDocumentAction/i/9908"
      }
    ]
  },
  {
    "n": 48,
    "links": [
      {
        "href": "http://www.balancedfoodandfuel.org/ht/a/GetDocumentAction/i/10560",
        "text": "http://www.balancedfoodandfuel.org/ht/a/GetDocumentAction/i/10560"
      }
    ]
  },
  {
    "n": 49,
    "links": [
      {
        "href": "http://nationalpriorities.org/tools/database/",
        "text": "Home - NPP Federal Priorities Database"
      },
      {
        "href": "http://www.webcitation.org/5xkSm7q9I",
        "text": "cache"
      }
    ]
  },
  {
    "n": 50,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/totals.php?cycle=2010&ind=A1200",
        "text": "Sugar Cane & Sugar Beets: Long-Term Contribution Trends | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xwL9akwZ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 51,
    "links": [
      {
        "href": " http://www.opensecrets.org/industries/totals.php?ind=A01++&goButt2.x=14&goButt2.y=9&goButt2=Submit",
        "text": "http://www.opensecrets.org/industries/totals.php?ind=A01++&goButt2.x=14&goButt2.y=9&goButt2=Submit"
      },
      {
        "href": "http://www.webcitation.org/60814NSaT",
        "text": "cache"
      }
    ]
  },
  {
    "n": 52,
    "links": [
      {
        "href": "http://www.copyright.gov/title17/circ92.pdf",
        "text": "http://www.copyright.gov/title17/circ92.pdf"
      }
    ]
  },
  {
    "n": 53,
    "links": [
      {
        "href": "ftp://ftp.eia.doe.gov/pub/oiaf/1605/cdrom/pdf/ggrpt/057308.pdf",
        "text": "ftp://ftp.eia.doe.gov/pub/oiaf/1605/cdrom/pdf/ggrpt/057308.pdf"
      }
    ]
  },
  {
    "n": 54,
    "links": [
      {
        "href": "http://www.pewclimate.org/docUploads/Sequest_Final.pdf",
        "text": "http://www.pewclimate.org/docUploads/Sequest_Final.pdf"
      }
    ]
  },
  {
    "n": 55,
    "links": [
      {
        "href": "http://www.scientificamerican.com/article.cfm?id=future-of-clean-coal-tied-to-success-of-carbon-capture-and-storage&print=true",
        "text": "Future of \"Clean Coal\" Power Tied to (Uncertain) Success of Carbon Capture and Storage: Scientific American"
      },
      {
        "href": "http://www.webcitation.org/5xkSyPnlW",
        "text": "cache"
      }
    ]
  },
  {
    "n": 56,
    "links": [
      {
        "href": "http://www.americanprogress.org/issues/2009/04/pdf/weiss_clean_coal.pdf",
        "text": "http://www.americanprogress.org/issues/2009/04/pdf/weiss_clean_coal.pdf"
      }
    ]
  },
  {
    "n": 57,
    "links": [
      {
        "href": "http://www.catf.us/resources/publications/files/The_Toll_from_Coal.pdf",
        "text": "http://www.catf.us/resources/publications/files/The_Toll_from_Coal.pdf"
      }
    ]
  },
  {
    "n": 58,
    "links": [
      {
        "href": "http://www.opensecrets.org/news/2010/08/pro-environment-groups-were-outmatc.html",
        "text": "Pro-Environment Groups Outmatched, Outspent in Battle Over Climate Change Legislation - OpenSecrets Blog | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkT4Z5hW",
        "text": "cache"
      }
    ]
  },
  {
    "n": 59,
    "links": [
      {
        "href": "http://www.guardian.co.uk/news/datablog/2010/dec/07/world-education-rankings-maths-science-reading",
        "text": "World education rankings: which country does best at reading, maths and science? | News | guardian.co.uk"
      },
      {
        "href": "http://www.webcitation.org/5zcCMK0hQ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 60,
    "links": [
      {
        "href": "http://www.businessweek.com/print/technology/content/jan2011/tc20110112_006501.htm",
        "text": "U.S. Schools Are Still Ahead—Way Ahead - BusinessWeek"
      },
      {
        "href": "http://www.webcitation.org/5xkTvefjU",
        "text": "cache"
      }
    ]
  },
  {
    "n": 61,
    "links": [
      {
        "href": "http://www.huffingtonpost.com/diane-ravitch/is-us-education-better-th_b_75441.html?view=print",
        "text": "Diane Ravitch: Is U.S. Education Better Than Ever?"
      },
      {
        "href": "http://www.webcitation.org/5xkUg9NbM",
        "text": "cache"
      }
    ]
  },
  {
    "n": 62,
    "links": [
      {
        "href": "http://nationsreportcard.gov/ltt_2008/ltt0003.asp?subtab_id=Tab_3&tab_id=tab1#chart",
        "text": "NAEP - 2008 Long-Term Trend: Reading Overall Results"
      },
      {
        "href": "http://www.webcitation.org/5xkUhglon",
        "text": "cache"
      }
    ]
  },
  {
    "n": 63,
    "links": [
      {
        "href": "http://nationsreportcard.gov/ltt_2008/ltt0002.asp?subtab_id=Tab_3&tab_id=tab1#chart",
        "text": "NAEP - 2008 Long-Term Trend: Mathematics Overall Results"
      },
      {
        "href": "http://www.webcitation.org/5xkUjUZcW",
        "text": "cache"
      }
    ]
  },
  {
    "n": 64,
    "links": [
      {
        "href": "http://www.economics.harvard.edu/faculty/fryer/files/hcz%204.15.2009.pdf",
        "text": "http://www.economics.harvard.edu/faculty/fryer/files/hcz%204.15.2009.pdf"
      }
    ]
  },
  {
    "n": 65,
    "links": [
      {
        "href": "http://www.nytimes.com/2009/05/08/opinion/08brooks.html?pagewanted=print",
        "text": "NY Times Advertisement"
      },
      {
        "href": "http://www.webcitation.org/5xkUlsMe7",
        "text": "cache"
      }
    ]
  },
  {
    "n": 66,
    "links": [
      {
        "href": "http://www.econ.ucsb.edu/~jon/Econ230C/HanushekRivkin.pdf",
        "text": "http://www.econ.ucsb.edu/~jon/Econ230C/HanushekRivkin.pdf"
      }
    ]
  },
  {
    "n": 67,
    "links": [
      {
        "href": "http://www.scholastic.com/primarysources/pdfs/Scholastic_Gates_0310.pdf ",
        "text": "http://www.scholastic.com/primarysources/pdfs/Scholastic_Gates_0310.pdf"
      }
    ]
  },
  {
    "n": 68,
    "links": [
      {
        "href": "http://www.kipp.org/files/dmfile/NationalBureauofEconomicResearch_Feb2010.pdf",
        "text": "http://www.kipp.org/files/dmfile/NationalBureauofEconomicResearch_Feb2010.pdf"
      }
    ]
  },
  {
    "n": 69,
    "links": [
      {
        "href": "http://www.kipp.org/files/dmfile/CSOS_KIPP_Ujima_June2007.pdf ",
        "text": "http://www.kipp.org/files/dmfile/CSOS_KIPP_Ujima_June2007.pdf"
      }
    ]
  },
  {
    "n": 70,
    "links": [
      {
        "href": "http://www.ounceofprevention.org/news/publications.php",
        "text": "Publications - Ounce of Prevention Fund"
      },
      {
        "href": "http://www.webcitation.org/5xkUpKhwl",
        "text": "cache"
      }
    ]
  },
  {
    "n": 71,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/totals.php?cycle=2010&ind=L1300",
        "text": "Teachers Unions: Long-Term Contribution Trends | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkUrkebK",
        "text": "cache"
      }
    ]
  },
  {
    "n": 72,
    "links": [
      {
        "href": "http://www.opensecrets.org/pacs/expenditures.php?cmte=C00417733&cycle=2010",
        "text": "Democrats for Education Reform Expenditures | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkUuDy2G",
        "text": "cache"
      }
    ]
  },
  {
    "n": 73,
    "links": [
      {
        "href": "http://www.opensecrets.org/pacs/expenditures.php?cmte=C00417733&cycle=2008",
        "text": "Democrats for Education Reform Expenditures | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkUwRCPZ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 74,
    "links": [
      {
        "href": "http://www.opensecrets.org/pacs/expenditures.php?cmte=C00417733&cycle=2006",
        "text": "Democrats for Education Reform Expenditures | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkV0OkXT",
        "text": "cache"
      }
    ]
  },
  {
    "n": 75,
    "links": [
      {
        "href": "http://www.ritholtz.com/blog/2010/04/top-10-hedge-fund-managers-2009-salary/",
        "text": "Top 10 Hedge Fund Managers 2009 Salary | The Big Picture"
      },
      {
        "href": "http://www.webcitation.org/5zcAJVopa",
        "text": "cache"
      }
    ]
  },
  {
    "n": 76,
    "links": [
      {
        "href": "www.gpo.gov/fdsys/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf",
        "text": "www.gpo.gov/fdsys/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf"
      },
      {
        "href": "http://www.webcitation.org/604oG0hDa",
        "text": "cache"
      }
    ]
  },
  {
    "n": 77,
    "links": [
      {
        "href": "http://www.huffingtonpost.com/lynn-parramore/disappointing-and-inspiri_b_625752.html?view=print",
        "text": "Lynn Parramore: \"Disappointing and Inspiring\": Roosevelt Fellows and Colleagues React to FinReg"
      },
      {
        "href": "http://www.webcitation.org/5xkV3vMVn",
        "text": "cache"
      }
    ]
  },
  {
    "n": 78,
    "links": [
      {
        "href": "http://www.counterpunch.org/auerback02012010.html",
        "text": "A Proposal for Genuine Financial Reform » Counterpunch: Tells the Facts, Names the Names"
      },
      {
        "href": "http://www.webcitation.org/604oaHFSa",
        "text": "cache"
      }
    ]
  },
  {
    "n": 79,
    "links": [
      {
        "href": "http://www.treasury.gov/resource-center/fin-mkts/Documents/otcact.pdf",
        "text": "http://www.treasury.gov/resource-center/fin-mkts/Documents/otcact.pdf"
      }
    ]
  },
  {
    "n": 80,
    "links": [
      {
        "href": "http://www.nytimes.com/2010/12/12/business/12advantage.html",
        "text": "Post-Meltdown, Banks Still Rule Derivatives Trade - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5yxOmXyxf",
        "text": "cache"
      }
    ]
  },
  {
    "n": 81,
    "links": [
      {
        "href": "http://www2.warwick.ac.uk/fac/soc/csgr/research/workingpapers/2001/wp8301.pdf",
        "text": "http://www2.warwick.ac.uk/fac/soc/csgr/research/workingpapers/2001/wp8301.pdf"
      }
    ]
  },
  {
    "n": 82,
    "links": [
      {
        "href": "http://krugman.blogs.nytimes.com/2009/03/03/zombie-financial-ideas/",
        "text": "Zombie financial ideas - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5zcCfnW89",
        "text": "cache"
      }
    ]
  },
  {
    "n": 83,
    "links": [
      {
        "href": "http://ssrn.com/abstract=1567075",
        "text": "The Derivatives Market's Payment Priorities as Financial Crisis Accelerator by Mark  Roe :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zcCl6kqd",
        "text": "cache"
      }
    ]
  },
  {
    "n": 84,
    "links": [
      {
        "href": "http://www.fas.org/sgp/crs/misc/R41542.pdf",
        "text": "http://www.fas.org/sgp/crs/misc/R41542.pdf"
      }
    ]
  },
  {
    "n": 85,
    "links": [
      {
        "href": "http://www.snopes.com/history/american/lincoln-kennedy.asp",
        "text": "snopes.com: Lincoln and Kennedy Coincidences"
      },
      {
        "href": "http://www.webcitation.org/5zSmwlEVG",
        "text": "cache"
      }
    ]
  },
  {
    "n": 86,
    "links": [
      {
        "href": "http://www.fec.gov/press/press2001/051501congfinact/allhouse2000.html",
        "text": "Financial Activity of All U.S. House of Representatives Candidates - 1988-2000"
      },
      {
        "href": "http://www.webcitation.org/5xwUcI3os",
        "text": "cache"
      }
    ]
  },
  {
    "n": 87,
    "links": [
      {
        "href": "http://www.fec.gov/press/press2001/051501congfinact/allsenate2000.html",
        "text": "Financial Activity of All U. S. Senate Candidates - 1988-2000"
      },
      {
        "href": "http://www.webcitation.org/5xkVH7GRU",
        "text": "cache"
      }
    ]
  },
  {
    "n": 88,
    "links": [
      {
        "href": "http://www.cfinst.org/pdf/vital/VitalStats_t13.pdf",
        "text": "http://www.cfinst.org/pdf/vital/VitalStats_t13.pdf"
      }
    ]
  },
  {
    "n": 89,
    "links": [
      {
        "href": "http://ssrn.com/abstract=1662630",
        "text": "Democracy at the Corner of First and Fourteenth: Judicial Campaign Spending and Equality by James Sample :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zdGgifEa",
        "text": "cache"
      }
    ]
  },
  {
    "n": 90,
    "links": [
      {
        "href": "http://www.opensecrets.org/politicians/industries.php?cycle=2008&cid=N00004643&type=C",
        "text": "Max Baucus: Campaign Finance/Money - Industries - Senator 2008 | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkVOXfr1",
        "text": "cache"
      }
    ]
  },
  {
    "n": 91,
    "links": [
      {
        "href": "http://ngrams.googlelabs.com/graph?content=lobbyist&year_start=1800&year_end=2008&corpus=5&smoothing=3",
        "text": "Google Ngram Viewer"
      },
      {
        "href": "http://www.webcitation.org/5xkVSDS8F",
        "text": "cache"
      }
    ]
  },
  {
    "n": 92,
    "links": [
      {
        "href": "http://bioguide.congress.gov/scripts/biodisplay.pl?index=E000053",
        "text": "EDMONDS, George Washington - Biographical Information"
      },
      {
        "href": "http://www.webcitation.org/5xkVWeZT1",
        "text": "cache"
      }
    ]
  },
  {
    "n": 93,
    "links": [
      {
        "href": "http://www.law.harvard.edu/faculty/hjackson/Earmarks_16.pdf",
        "text": "http://www.law.harvard.edu/faculty/hjackson/Earmarks_16.pdf"
      }
    ]
  },
  {
    "n": 94,
    "links": [
      {
        "href": "http://www.hss.caltech.edu/~snowberg/papers/Daley-Snowberg%20Campaign%20Finance.pdf",
        "text": "http://www.hss.caltech.edu/~snowberg/papers/Daley-Snowberg%20Campaign%20Finance.pdf"
      }
    ]
  },
  {
    "n": 95,
    "links": [
      {
        "href": "http://www.hks.harvard.edu/fs/fcampan/Papers/draft_Aug10_JPubE.pdf",
        "text": "http://www.hks.harvard.edu/fs/fcampan/Papers/draft_Aug10_JPubE.pdf"
      }
    ]
  },
  {
    "n": 96,
    "links": [
      {
        "href": "https://members.aamc.org/eweb/DynamicPage.aspx?Action=Add&ObjectKeyFrom=1A83491A-9853-4C87-86A4-F7D95601C2E2&WebCode=PubDetailAdd&DoNotSave=yes&ParentObject=CentralizedOrderEntry&ParentDataObject=Invoice%20Detail&ivd_formkey=69202792-63d7-4ba2-bf4e-a0da41270555&ivd_cst_key=00000000-0000-0000-0000-000000000000&ivd_prc_prd_key=34CCB27D-4F8B-4F8D-8642-47AE48D6E2B4",
        "text": "https://members.aamc.org/eweb/DynamicPage.aspx?Action=Add&ObjectKeyFrom=1A83491A-9853-4C87-86A4-F7D95601C2E2&WebCode=PubDetailAdd&DoNotSave=yes&ParentObject=CentralizedOrderEntry&ParentDataObject=Invoice%20Detail&ivd_formkey=69202792-63d7-4ba2-bf4e-a0da41270555&ivd_cst_key=00000000-0000-0000-0000-000000000000&ivd_prc_prd_key=34CCB27D-4F8B-4F8D-8642-47AE48D6E2B4"
      },
      {
        "href": "http://www.webcitation.org/5xkVizW03",
        "text": "cache"
      }
    ]
  },
  {
    "n": 97,
    "links": [
      {
        "href": "http://ssrn.com/abstract=954368",
        "text": "Corporate Lobbying and Fraud Detection by Fang Yu, Xiaoyun Yu :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zcDktjgu",
        "text": "cache"
      }
    ]
  },
  {
    "n": 98,
    "links": [
      {
        "href": "http://ssrn.com/abstract=1420224",
        "text": "Determinants and Effects of Corporate Lobbying by Matthew D. Hill, G. Kelly, G. Lockhart, Robert  Van Ness :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zcDpX9nu",
        "text": "cache"
      }
    ]
  },
  {
    "n": 99,
    "links": [
      {
        "href": "http://www.foxnews.com/printer_friendly_story/0,3566,479424,00.html",
        "text": "FOXNews.com - Washington's Wealth Boom - Opinion"
      },
      {
        "href": "http://www.webcitation.org/5xkVr41QD",
        "text": "cache"
      }
    ]
  },
  {
    "n": 100,
    "links": [
      {
        "href": "http://www.abanet.org/media/nosearch/lobbying_task_force_report_010311.pdf",
        "text": "http://www.abanet.org/media/nosearch/lobbying_task_force_report_010311.pdf"
      }
    ]
  },
  {
    "n": 101,
    "links": [
      {
        "href": "http://www.morninj.com/lobbyist-money/",
        "text": "Lobbyist Bundles"
      },
      {
        "href": "http://www.webcitation.org/6081HqZE6",
        "text": "cache"
      }
    ]
  },
  {
    "n": 102,
    "links": [
      {
        "href": "http://thehill.com/business-a-lobbying/59851-bundling-rule-doesnt-capture-all-the-fundraising-by-lobbyists",
        "text": "Bundling rule doesn’t capture all the fundraising by lobbyists - TheHill.com"
      },
      {
        "href": "http://www.webcitation.org/5zc7mTWtA",
        "text": "cache"
      }
    ]
  },
  {
    "n": 103,
    "links": [
      {
        "href": "http://en.wikipedia.org/wiki/List_of_current_members_of_the_United_States_House_of_Representatives_by_seniority",
        "text": "List of current members of the United States House of Representatives by seniority - Wikipedia, the free encyclopedia"
      },
      {
        "href": "http://www.webcitation.org/5xkVv8eQK.",
        "text": "cache"
      }
    ]
  },
  {
    "n": 104,
    "links": [
      {
        "href": "http://www.washingtonpost.com/wp-dyn/content/article/2005/07/26/AR2005072601562.html",
        "text": "Hill a Steppingstone to K Street for Some"
      },
      {
        "href": "http://www.webcitation.org/5zdGrDIE3",
        "text": "cache"
      }
    ]
  },
  {
    "n": 105,
    "links": [
      {
        "href": "http://tpmmuckraker.talkingpointsmemo.com/2010/06/shadow_congress_former_lawmakers_become_lobbyists.php",
        "text": "SHADOW CONGRESS: More Than 170 Former Lawmakers Ply The Corridors Of Power As Lobbyists | TPMMuckraker"
      },
      {
        "href": "http://www.webcitation.org/5xkVyefit",
        "text": "cache"
      }
    ]
  },
  {
    "n": 106,
    "links": [
      {
        "href": "http://www.citizen.org/documents/Ca$hing_in.pdf",
        "text": "http://www.citizen.org/documents/Ca$hing_in.pdf"
      }
    ]
  },
  {
    "n": 107,
    "links": [
      {
        "href": "http://www.ideastream.org/soi/entry/39313",
        "text": "The Sound of Ideas: Campaign Finance Reform / ideastream - Northeast Ohio Public Radio, Television and Multiple Media"
      },
      {
        "href": "http://www.webcitation.org/5zcEA9Gej",
        "text": "cache"
      }
    ]
  },
  {
    "n": 108,
    "links": [
      {
        "href": "http://pages.cs.wisc.edu/~gfung/federalist.pdf",
        "text": "http://pages.cs.wisc.edu/~gfung/federalist.pdf"
      }
    ]
  },
  {
    "n": 109,
    "links": [
      {
        "href": "http://www.econ.umd.edu/research/papers/38/download/238",
        "text": "http://www.econ.umd.edu/research/papers/38/download/238"
      }
    ]
  },
  {
    "n": 110,
    "links": [
      {
        "href": "http://politics.innerself.com/html/articles/reforms/general/89-congress-for-life.html",
        "text": "Congress for Life"
      },
      {
        "href": "http://www.webcitation.org/5zcGz8t6H",
        "text": "cache"
      }
    ]
  },
  {
    "n": 111,
    "links": [
      {
        "href": "http://thehill.com/blogs/blog-briefing-room/news/113541-poll-70-percent-believe-congress-is-corrupt?tmpl=component&print=1&page=",
        "text": "Poll: 70 percent believe Congress is corrupt - The Hill's Blog Briefing Room"
      },
      {
        "href": "http://www.webcitation.org/5xwOgDAwd",
        "text": "cache"
      }
    ]
  },
  {
    "n": 112,
    "links": [
      {
        "href": "http://articles.cnn.com/2006-10-19/politics/congress.poll_1_poll-respondents-new-poll-accurate-vote-count?_s=PM:POLITICS",
        "text": "Poll: Half of Americans think Congress is corrupt - CNN"
      },
      {
        "href": "http://www.webcitation.org/5xwOkjXDN",
        "text": "cache"
      }
    ]
  },
  {
    "n": 113,
    "links": [
      {
        "href": "http://people-press.org/files/legacy-pdf/606.pdf",
        "text": "http://people-press.org/files/legacy-pdf/606.pdf"
      },
      {
        "href": "http://www.webcitation.org/604p9oXTZ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 114,
    "links": [
      {
        "href": "http://www.upenn.edu/pnc/ptbradley.html",
        "text": "\"Government and Public Behavior\""
      },
      {
        "href": "http://www.webcitation.org/5xkW41bka",
        "text": "cache"
      }
    ]
  },
  {
    "n": 115,
    "links": [
      {
        "href": "http://www.campaignfreedom.org/doclib/20100723_Ansolabehere2002SoLittle.pdf",
        "text": "http://www.campaignfreedom.org/doclib/20100723_Ansolabehere2002SoLittle.pdf"
      }
    ]
  },
  {
    "n": 116,
    "links": [
      {
        "href": "http://ssrn.com/abstract=1291524",
        "text": "The Political Economy of the U.S. Mortgage Default Crisis by Atif Mian, Amir Sufi, Francesco Trebbi :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zcEUTDFJ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 117,
    "links": [
      {
        "href": " http://www.bsos.umd.edu/gvpt/herrnson/reporttime.html",
        "text": "http://www.bsos.umd.edu/gvpt/herrnson/reporttime.html"
      },
      {
        "href": "http://www.webcitation.org/5xwUkmjVf",
        "text": "cache"
      }
    ]
  },
  {
    "n": 118,
    "links": [
      {
        "href": "http://www.politico.com/livepulse/1109/Senate_bill_weighs_in_at_2074_pages.html",
        "text": "Senate bill weighs in at 2,074 pages - Live Pulse - POLITICO.com"
      },
      {
        "href": "http://www.webcitation.org/5xkWAQ69v",
        "text": "cache"
      }
    ]
  },
  {
    "n": 119,
    "links": [
      {
        "href": "http://www.washingtonpost.com/wp-dyn/content/article/2006/02/17/AR2006021701847_pf.html",
        "text": "Ernest F. Hollings - Stop the Money Chase"
      },
      {
        "href": "http://www.webcitation.org/5xkWCnp1d",
        "text": "cache"
      }
    ]
  },
  {
    "n": 120,
    "links": [
      {
        "href": "http://www.mcclatchydc.com/2010/06/16/96015/former-members-of-congress-dismayed.html",
        "text": "Former members of Congress lament current partisanship | McClatchy"
      },
      {
        "href": "http://www.webcitation.org/5zcEZO5gv",
        "text": "cache"
      }
    ]
  },
  {
    "n": 121,
    "links": [
      {
        "href": "http://www.the-american-interest.com/article.cfm?piece=172 ",
        "text": "http://www.the-american-interest.com/article.cfm?piece=172"
      },
      {
        "href": "http://www.webcitation.org/5xwOyF90F",
        "text": "cache"
      }
    ]
  },
  {
    "n": 122,
    "links": [
      {
        "href": "http://www.opensecrets.org/lobby/index.php",
        "text": "Lobbying Database | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkYn6iBj",
        "text": "cache"
      }
    ]
  },
  {
    "n": 123,
    "links": [
      {
        "href": "http://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=110&session=2&vote=00151",
        "text": "U.S. Senate: Legislation & Records Home > Votes > Roll Call Vote"
      },
      {
        "href": "http://www.webcitation.org/5xkWKVewd",
        "text": "cache"
      }
    ]
  },
  {
    "n": 124,
    "links": [
      {
        "href": "http://clerk.house.gov/evs/2008/roll417.xml",
        "text": "http://clerk.house.gov/evs/2008/roll417.xml"
      },
      {
        "href": "http://www.webcitation.org/5xkWMFrQO",
        "text": "cache"
      }
    ]
  },
  {
    "n": 125,
    "links": [
      {
        "href": "http://www.huffingtonpost.com/2009/12/29/the-cash-committee-how-wa_n_402373.html?view=print",
        "text": "The Cash Committee: How Wall Street Wins On The Hill"
      },
      {
        "href": "http://www.webcitation.org/5xkWOe736",
        "text": "cache"
      }
    ]
  },
  {
    "n": 126,
    "links": [
      {
        "href": "http://www.princeton.edu/~bartels/economic.pdf",
        "text": "http://www.princeton.edu/~bartels/economic.pdf"
      }
    ]
  },
  {
    "n": 127,
    "links": [
      {
        "href": "http://www.vanityfair.com/society/features/2011/05/top-one-percent-201105",
        "text": "Of the 1%, by the 1%, for the 1% | Society | Vanity Fair"
      },
      {
        "href": "http://www.webcitation.org/5yxPorNpU",
        "text": "cache"
      }
    ]
  },
  {
    "n": 128,
    "links": [
      {
        "href": "http://www.the-american-interest.com/article-bd.cfm?piece=907",
        "text": "http://www.the-american-interest.com/article-bd.cfm?piece=907"
      },
      {
        "href": "http://www.webcitation.org/5xkWVLFMQ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 129,
    "links": [
      {
        "href": "http://www.faireconomy.org/files/executive_excess_2008.pdf",
        "text": "http://www.faireconomy.org/files/executive_excess_2008.pdf"
      }
    ]
  },
  {
    "n": 130,
    "links": [
      {
        "href": "http://www.fec.gov/pages/brochures/contriblimits.shtml",
        "text": "Contribution Limits Chart 2011-12"
      },
      {
        "href": "http://www.webcitation.org/5xkWXnP32",
        "text": "cache"
      }
    ]
  },
  {
    "n": 131,
    "links": [
      {
        "href": "http://www.huffingtonpost.com/2011/04/28/swipe-fees-interchange-banks-merchants_n_853574.html?view=print",
        "text": "Swiped: Banks, Merchants And Why Washington Doesn't Work For You"
      },
      {
        "href": "http://www.webcitation.org/5zc9VgnjH",
        "text": "cache"
      }
    ]
  },
  {
    "n": 132,
    "links": [
      {
        "href": "http://people-press.org/http://people-press.org/files/legacy-pdf/606.pdf",
        "text": "http://people-press.org/http://people-press.org/files/legacy-pdf/606.pdf"
      }
    ]
  },
  {
    "n": 133,
    "links": [
      {
        "href": "http://www.electionstudies.org/nesguide/toptable/tab5a_2.htm",
        "text": "Is the Government Run for the Benefit of All"
      },
      {
        "href": "http://www.webcitation.org/5xkWinrrj",
        "text": "cache"
      }
    ]
  },
  {
    "n": 134,
    "links": [
      {
        "href": "http://www.judicialwatch.org/news/2008/oct/new-judicial-watch-zogby-poll-82-7-american-say-political-corruption-played-major-role",
        "text": "New Judicial Watch/Zogby Poll: 81.7% of Americans Say Political Corruption Played a “Major Role” in Financial Crisis | Judicial Watch"
      },
      {
        "href": "http://www.webcitation.org/5zcEhb7vU",
        "text": "cache"
      }
    ]
  },
  {
    "n": 135,
    "links": [
      {
        "href": "http://dyn.politico.com/printstory.cfm?uuid=B04C4C01-18FE-70B2-A82FAA5C0CDA3598",
        "text": "SCOTUS ruling fuels voters' ire - POLITICO.com Print View"
      },
      {
        "href": "http://www.webcitation.org/5zcEmhq3T",
        "text": "cache"
      }
    ]
  },
  {
    "n": 136,
    "links": [
      {
        "href": "http://www.laits.utexas.edu/txp_media/html/poll/files/200910-monpol-summary.pdf",
        "text": "http://www.laits.utexas.edu/txp_media/html/poll/files/200910-monpol-summary.pdf"
      }
    ]
  },
  {
    "n": 137,
    "links": [
      {
        "href": "http://www.rochester.edu/college/psc/primo/primomilyoelj.pdf",
        "text": "http://www.rochester.edu/college/psc/primo/primomilyoelj.pdf"
      }
    ]
  },
  {
    "n": 138,
    "links": [
      {
        "href": "http://www.cato.org/pubs/pas/pa524.pdf",
        "text": "http://www.cato.org/pubs/pas/pa524.pdf"
      }
    ]
  },
  {
    "n": 139,
    "links": [
      {
        "href": "http://en.wikipedia.org/wiki/Rock_the_Vote",
        "text": "Rock the Vote - Wikipedia, the free encyclopedia"
      },
      {
        "href": "http://www.webcitation.org/5xkWr6BAN",
        "text": "cache"
      }
    ]
  },
  {
    "n": 140,
    "links": [
      {
        "href": "http://democracymatters.org/index.php?option=com_content&view=article&id=88%3A4-what-do-elected-officials-think-about-the-role-of-money-in-politics&catid=36&Itemid=60",
        "text": "What do elected officials think about the role of money in politics?"
      },
      {
        "href": "http://www.webcitation.org/5zc9mJqd0",
        "text": "cache"
      }
    ]
  },
  {
    "n": 141,
    "links": [
      {
        "href": "http://www.cbsnews.com/stories/2008/09/28/ftn/main4483699.shtml",
        "text": "Obama: \"No Welfare For Wall Street\" - CBS News"
      },
      {
        "href": "http://www.webcitation.org/5xkWuo0rL",
        "text": "cache"
      }
    ]
  },
  {
    "n": 142,
    "links": [
      {
        "href": "http://dyn.politico.com/printstory.cfm?uuid=330BFC82-3048-5C12-00E5FCA339385498",
        "text": "Hillary defends lobbyists, opens doors for rivals - POLITICO.com Print View"
      },
      {
        "href": "http://www.webcitation.org/5xkX5yc54",
        "text": "cache"
      }
    ]
  },
  {
    "n": 143,
    "links": [
      {
        "href": " http://www.barackobama.com/pdf/issues/HealthCareFullPlan.pdf",
        "text": "http://www.barackobama.com/pdf/issues/HealthCareFullPlan.pdf"
      }
    ]
  },
  {
    "n": 144,
    "links": [
      {
        "href": "http://money.cnn.com/magazines/fortune/fortune500/2009/performers/industries/profits",
        "text": "Fortune 500 2009: Top Performers - Most Profitable Industries: Return on Revenues"
      },
      {
        "href": "http://www.webcitation.org/5zcEz1KdU",
        "text": "cache"
      }
    ]
  },
  {
    "n": 145,
    "links": [
      {
        "href": "http://www.cms.gov/ReportsTrustFunds/downloads/tr2009.pdf",
        "text": "http://www.cms.gov/ReportsTrustFunds/downloads/tr2009.pdf"
      }
    ]
  },
  {
    "n": 146,
    "links": [
      {
        "href": "http://voices.washingtonpost.com/ezra-klein/2010/03/twilight_of_the_interest_group.html",
        "text": "Ezra Klein - Twilight of the interest groups"
      },
      {
        "href": "http://www.webcitation.org/5xkXO1RXk",
        "text": "cache"
      }
    ]
  },
  {
    "n": 147,
    "links": [
      {
        "href": "http://www.salon.com/news/opinion/glenn_greenwald/2010/03/20/health_care",
        "text": "Industry interests are not in their \"twilight\" - Glenn Greenwald - Salon.com"
      },
      {
        "href": "http://www.webcitation.org/5xkXUkypn",
        "text": "cache"
      }
    ]
  },
  {
    "n": 148,
    "links": [
      {
        "href": "http://www.nationalaffairs.com/publications/detail/print/curbing-risk-on-wall-street",
        "text": "Curbing Risk on Wall Street > Publications  > National Affairs"
      },
      {
        "href": "http://www.webcitation.org/5xkY3gk0R",
        "text": "cache"
      }
    ]
  },
  {
    "n": 149,
    "links": [
      {
        "href": "http://nationalpriorities.org/en/tools/tradeoffs/state/US/program/5/tradeoff/0",
        "text": "Trade Offs  - National Priorities Project"
      },
      {
        "href": "http://www.webcitation.org/5xkYX6Rvd",
        "text": "cache"
      }
    ]
  },
  {
    "n": 150,
    "links": [
      {
        "href": "http://krugman.blogs.nytimes.com/2009/03/03/zombie-financial-ideas/?pagemode=print",
        "text": "Zombie financial ideas - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5xkYZsUzl",
        "text": "cache"
      }
    ]
  },
  {
    "n": 151,
    "links": [
      {
        "href": "http://maplight.org/us-congress/bill/111-hr-4173/440236/total-contributions.",
        "text": "Dodd-Frank Wall Street Reform and Consumer Protection Act - Senate Vote: On Passage | Campaign Contributions By Vote | MAPLight.org - Money and Politics"
      },
      {
        "href": "http://www.webcitation.org/5xkual4ZU",
        "text": "cache"
      }
    ]
  },
  {
    "n": 152,
    "links": [
      {
        "href": "http://maplight.org/us-congress/bill/111-s-3217/432614/total-contributions",
        "text": "Restoring American Financial Stability Act of 2010 -  Vote: Committee on Banking, Housing, and Urban Affairs. Original measure reported to Senate by Senator Dodd. Without written report. | Total Campaign Contributions | MAPLight.org - Money and Politics"
      },
      {
        "href": "http://www.webcitation.org/5xkudNBCa",
        "text": "cache"
      }
    ]
  },
  {
    "n": 153,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/indus.php?ind=F03&goButt2.x=15&goButt2.y=9",
        "text": "Commercial Banks | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkuf7jVy",
        "text": "cache"
      }
    ]
  },
  {
    "n": 154,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/indus.php?ind=F06&goButt2.x=12&goButt2.y=7",
        "text": "Finance / Credit Companies | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkuga9ug",
        "text": "cache"
      }
    ]
  },
  {
    "n": 155,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/indus.php?ind=F07&goButt2.x=12&goButt2.y=17",
        "text": "Securities & Investment | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkuiHFjG",
        "text": "cache"
      }
    ]
  },
  {
    "n": 156,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/indus.php?ind=F04&goButt2.x=13&goButt2.y=10",
        "text": "Savings & Loans | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkujr7ax",
        "text": "cache"
      }
    ]
  },
  {
    "n": 157,
    "links": [
      {
        "href": "http://www.opensecrets.org/industries/indus.php?ind=F05&goButt2.x=10&goButt2.y=10",
        "text": "Credit Unions | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkul68oI",
        "text": "cache"
      }
    ]
  },
  {
    "n": 158,
    "links": [
      {
        "href": "http://en.wikipedia.org/wiki/American_Clean_Energy_and_Security_Act",
        "text": "American Clean Energy and Security Act - Wikipedia, the free encyclopedia"
      },
      {
        "href": "http://www.webcitation.org/604qumGo2",
        "text": "cache"
      }
    ]
  },
  {
    "n": 159,
    "links": [
      {
        "href": "http://www.opensecrets.org/lobby/index.php",
        "text": "Lobbying Database | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkYn6iBj",
        "text": "cache"
      }
    ]
  },
  {
    "n": 160,
    "links": [
      {
        "href": "http://prospect.org/cs/articles?article=everyday_corruption",
        "text": "Everyday Corruption"
      },
      {
        "href": "http://www.webcitation.org/5xku8q39Z",
        "text": "cache"
      }
    ]
  },
  {
    "n": 161,
    "links": [
      {
        "href": "http://www.lorencollins.net/tytler1.html",
        "text": "The Truth About Tytler"
      },
      {
        "href": "http://www.webcitation.org/5xkYynMF3",
        "text": "cache"
      }
    ]
  },
  {
    "n": 162,
    "links": [
      {
        "href": "http://www.becker-posner-blog.com/2010/08/how-dismal-is-the-fiscal-future-for-america-and-europe-becker.html",
        "text": "How Dismal is the Fiscal Future For America and Europe? Becker - The Becker-Posner Blog"
      },
      {
        "href": "http://www.webcitation.org/5xkZ1KTTO",
        "text": "cache"
      }
    ]
  },
  {
    "n": 163,
    "links": [
      {
        "href": "http://www.treasurydirect.gov/NP/BPDLogin?application=np",
        "text": "Debt to the Penny (Daily History Search Application)"
      },
      {
        "href": "http://www.webcitation.org/5xkZ58Kln",
        "text": "cache"
      }
    ]
  },
  {
    "n": 164,
    "links": [
      {
        "href": "http://www.heritage.org/Research/Reports/2010/08/New-CBO-Budget-Baseline-Shows-that-Soaring-Spending-Not-Falling-Revenues-Risks-Drowning-America",
        "text": "CBO Budget Baseline Shows that Soaring Spending is Drowning America in Debt"
      },
      {
        "href": "http://www.webcitation.org/5xkZ9OesD",
        "text": "cache"
      }
    ]
  },
  {
    "n": 165,
    "links": [
      {
        "href": "http://www.treasury.gov/initiatives/financial-stability/housing-programs/mha/Pages/default.aspx",
        "text": "US Department of the Treasury"
      },
      {
        "href": "http://www.webcitation.org/5zcF8TrC8",
        "text": "cache"
      }
    ]
  },
  {
    "n": 166,
    "links": [
      {
        "href": "http://www.rasmussenreports.com/public_content/politics/general_politics/april_2009/50_say_rigged_election_rules_explain_high_reelection_rate_for_congress",
        "text": "50% Say 'Rigged' Election Rules Explain High Reelection Rate for Congress - Rasmussen Reports™"
      },
      {
        "href": "http://www.webcitation.org/604rARbPG",
        "text": "cache"
      }
    ]
  },
  {
    "n": 167,
    "links": [
      {
        "href": "http://articles.latimes.com/print/2006/may/05/local/me-taxes5",
        "text": "Maker of Tax Software Opposes State Filing Help - Los Angeles Times"
      },
      {
        "href": "http://www.webcitation.org/5xwRMHmxL",
        "text": "cache"
      }
    ]
  },
  {
    "n": 168,
    "links": [
      {
        "href": "http://online.wsj.com/article/SB10001424052748703963704576005960558986604.html?mod=WSJ_hp_LEFTTopStories#printMode",
        "text": "http://online.wsj.com/article/SB10001424052748703963704576005960558986604.html?mod=WSJ_hp_LEFTTopStories#printMode"
      },
      {
        "href": "http://www.webcitation.org/5zcFEzREh",
        "text": "cache"
      }
    ]
  },
  {
    "n": 169,
    "links": [
      {
        "href": "http://digital.library.unt.edu/ark:/67531/metadc29655/m1/1/high_res_d/RL32648_2010Nov02.pdf",
        "text": "http://digital.library.unt.edu/ark:/67531/metadc29655/m1/1/high_res_d/RL32648_2010Nov02.pdf"
      }
    ]
  },
  {
    "n": 170,
    "links": [
      {
        "href": "http://www.tnr.com/print/article/politics/district-corruption",
        "text": "District of Corruption"
      },
      {
        "href": "http://www.webcitation.org/5xkZLBBBX",
        "text": "cache"
      }
    ]
  },
  {
    "n": 171,
    "links": [
      {
        "href": "http://www.washingtonpost.com/wp-dyn/content/article/2010/08/16/AR2010081605154_pf.html",
        "text": "Federal officials fight back over criticism about salaries"
      },
      {
        "href": "http://www.webcitation.org/5xkZRrePc",
        "text": "cache"
      }
    ]
  },
  {
    "n": 172,
    "links": [
      {
        "href": "http://dyn.politico.com/printstory.cfm?uuid=CA707571-18FE-70B2-A8721899A59ED165",
        "text": "Report: 237 millionaires in Congress - POLITICO.com Print View"
      },
      {
        "href": "http://www.webcitation.org/5xkZXJsXy",
        "text": "cache"
      }
    ]
  },
  {
    "n": 173,
    "links": [
      {
        "href": "http://www.opensecrets.org/pfds/index.php",
        "text": "Personal Finance Disclosure | Personal Finance Disclosure | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkZUqBSL",
        "text": "cache"
      }
    ]
  },
  {
    "n": 174,
    "links": [
      {
        "href": "http://www.thestreet.com/print/story/10618234.html",
        "text": "Evan Bayh: Hypocrisy on the Public Option | Investing Opinion News | Print Financial & Investing Articles | TheStreet"
      },
      {
        "href": "http://www.webcitation.org/5xkbUmDUR",
        "text": "cache"
      }
    ]
  },
  {
    "n": 175,
    "links": [
      {
        "href": "http://uspolitics.about.com/gi/o.htm?zi=1/XJ&zTi=1&sdn=uspolitics&cdn=newsissues&tm=10&f=10&tt=2&bt=1&bts=1&zu=http%3A//opensecrets.org/pacs/industry.php%3Ftxt%3DQ03%26cycle%3D2008",
        "text": "Security Alert:"
      },
      {
        "href": "http://www.webcitation.org/5xkbYflqM",
        "text": "cache"
      }
    ]
  },
  {
    "n": 176,
    "links": [
      {
        "href": "http://ethics.house.gov/print.aspx",
        "text": "Print"
      },
      {
        "href": "http://www.webcitation.org/5xkblpESW",
        "text": "cache"
      }
    ]
  },
  {
    "n": 177,
    "links": [
      {
        "href": "http://www.opensecrets.org/pacs/industry.php?txt=q03&cycle=2010",
        "text": "Leadership PACs | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5zcFN167m",
        "text": "cache"
      }
    ]
  },
  {
    "n": 178,
    "links": [
      {
        "href": "http://www.washingtonpost.com/wp-dyn/content/article/2010/06/01/AR2010060103887_pf.html",
        "text": "Money intended to help candidates often ends up funding PACs themselves"
      },
      {
        "href": "http://www.webcitation.org/5zcFR5xvs",
        "text": "cache"
      }
    ]
  },
  {
    "n": 179,
    "links": [
      {
        "href": "http://www.propublica.org/article/leadership-pacs-let-the-good-times-roll-925",
        "text": "Leadership PACs: Let the Good Times Roll - ProPublica"
      },
      {
        "href": "http://www.webcitation.org/5zcFUIccI",
        "text": "cache"
      }
    ]
  },
  {
    "n": 180,
    "links": [
      {
        "href": "http://app.psd.gov.sg/data/2009%20year-end%20payment.pdf",
        "text": "http://app.psd.gov.sg/data/2009%20year-end%20payment.pdf"
      }
    ]
  },
  {
    "n": 181,
    "links": [
      {
        "href": "http://www.theopenhouseproject.com/2009/12/02/whats-the-average-salary-of-house-staff/",
        "text": "What’s The Average Salary of House Staff? | The Open House Project"
      },
      {
        "href": "http://www.webcitation.org/5xkbywzmS",
        "text": "cache"
      }
    ]
  },
  {
    "n": 182,
    "links": [
      {
        "href": "http://dyn.politico.com/printstory.cfm?uuid=97CF5B1B-18FE-70B2-A853AC91939C149B",
        "text": "2,000 House staffers make six figures - POLITICO.com Print View"
      },
      {
        "href": "http://www.webcitation.org/5xkc2SB6T",
        "text": "cache"
      }
    ]
  },
  {
    "n": 183,
    "links": [
      {
        "href": "http://www.forbes.com/forbes/2009/0330/042-something-about-mary_print.html",
        "text": "Forbes.com - Magazine Article"
      },
      {
        "href": "http://www.webcitation.org/5zcFZDn0Z",
        "text": "cache"
      }
    ]
  },
  {
    "n": 184,
    "links": [
      {
        "href": "http://www.simplyhired.com/a/salary/search/q-securities",
        "text": "Securities Salaries | Simply Hired"
      },
      {
        "href": "http://www.webcitation.org/5xkc8jufM",
        "text": "cache"
      }
    ]
  },
  {
    "n": 185,
    "links": [
      {
        "href": "http://www.careers-in-finance.com/ibsal.htm",
        "text": "Salaries in Investment Banking"
      },
      {
        "href": "http://www.webcitation.org/5xkcBGaLN",
        "text": "cache"
      }
    ]
  },
  {
    "n": 186,
    "links": [
      {
        "href": "http://factcheck.org/2010/12/are-federal-workers-overpaid/",
        "text": "Are Federal Workers Overpaid? | FactCheck.org"
      },
      {
        "href": "http://www.webcitation.org/5xkcFd1lg",
        "text": "cache"
      }
    ]
  },
  {
    "n": 187,
    "links": [
      {
        "href": "http://www.slge.org/vertical/Sites/%7BA260E1DF-5AEE-459D-84C4-876EFE1E4032%7D/uploads/%7B03E820E8-F0F9-472F-98E2-F0AE1166D116%7D.PDF",
        "text": "http://www.slge.org/vertical/Sites/%7BA260E1DF-5AEE-459D-84C4-876EFE1E4032%7D/uploads/%7B03E820E8-F0F9-472F-98E2-F0AE1166D116%7D.PDF"
      }
    ]
  },
  {
    "n": 188,
    "links": [
      {
        "href": "http://www.washingtonpost.com/wp-dyn/content/article/2005/06/21/AR2005062101632_pf.html",
        "text": "The Road to Riches Is Called K Street"
      },
      {
        "href": "http://www.webcitation.org/5xkcLQaSX",
        "text": "cache"
      }
    ]
  },
  {
    "n": 189,
    "links": [
      {
        "href": "http://dyn.politico.com/printstory.cfm?uuid=651FD453-3048-5C12-000859E37AB92C74",
        "text": "The Gilded Capital: Lobbying to riches - POLITICO.com Print View"
      },
      {
        "href": "http://www.webcitation.org/5xkcPkT21",
        "text": "cache"
      }
    ]
  },
  {
    "n": 190,
    "links": [
      {
        "href": "http://www.huffingtonpost.com/2010/09/24/post_529_n_738043.html?view=print",
        "text": "On K Street, An Ex-Senate Staffer Is Worth $740,000 A Year"
      },
      {
        "href": "http://www.webcitation.org/5xkcgFcbe",
        "text": "cache"
      }
    ]
  },
  {
    "n": 191,
    "links": [
      {
        "href": "http://www.williamsandjensen.com/principals.asp?id=13",
        "text": "Williams & Jensen"
      },
      {
        "href": "http://www.webcitation.org/5xkcpXx8U",
        "text": "cache"
      }
    ]
  },
  {
    "n": 192,
    "links": [
      {
        "href": "http://www.opensecrets.org/news/FinancialRevolvingDoors.pdf",
        "text": "http://www.opensecrets.org/news/FinancialRevolvingDoors.pdf"
      }
    ]
  },
  {
    "n": 193,
    "links": [
      {
        "href": "http://www.nytimes.com/2010/08/06/us/politics/06indict.html?_r=1&ref=paul_magliocchetti&pagewanted=print",
        "text": "Lobbyist Charged With Hiding Political Donations - The New York Times"
      },
      {
        "href": "http://www.webcitation.org/5xkdsGOjC",
        "text": "cache"
      }
    ]
  },
  {
    "n": 194,
    "links": [
      {
        "href": "http://www.nytimes.com/2009/02/20/opinion/20fri3.html?ref=earmarks&pagewanted=print",
        "text": "Editorial - 104 Will Get You $300 Million - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5xkdwMDYw",
        "text": "cache"
      }
    ]
  },
  {
    "n": 195,
    "links": [
      {
        "href": "http://tpmmuckraker.talkingpointsmemo.com/2011/01/despite_girl_scout_donations_pma_lobbyist_gets_27_months.php.",
        "text": "404 Not Found"
      },
      {
        "href": "http://www.webcitation.org/5zcFgC71B",
        "text": "cache"
      }
    ]
  },
  {
    "n": 196,
    "links": [
      {
        "href": "http://en.wikipedia.org/wiki/Recording_Industry_Association_of_America",
        "text": "Recording Industry Association of America - Wikipedia, the free encyclopedia"
      },
      {
        "href": "http://www.webcitation.org/5xkdynutJ",
        "text": "cache"
      }
    ]
  },
  {
    "n": 197,
    "links": [
      {
        "href": "http://www.nytimes.com/2006/03/04/politics/04cunningham.html?_r=1&sq=randy%20duke%20cunningham&st=cse&scp=4&pagewanted=print",
        "text": "Ex-Congressman Gets 8-Year Term in Bribery Case - New York Times"
      },
      {
        "href": "http://www.webcitation.org/5xke8UPTI",
        "text": "cache"
      }
    ]
  },
  {
    "n": 198,
    "links": [
      {
        "href": "http://www.nytimes.com/2009/11/14/us/politics/14jefferson.html?ref=william_j_jefferson&pagewanted=print",
        "text": "The New York Times > Page Not Found"
      },
      {
        "href": "http://www.webcitation.org/5xkeBN33E",
        "text": "cache"
      }
    ]
  },
  {
    "n": 199,
    "links": [
      {
        "href": "http://www.badfaithinsurance.org/reference/General/0608a.htm",
        "text": "Justice for Sale - WSJ.com"
      },
      {
        "href": "http://www.webcitation.org/5zcFiz9h8",
        "text": "cache"
      }
    ]
  },
  {
    "n": 200,
    "links": [
      {
        "href": "http://www.parade.com/fdcp?unique=1302796546152",
        "text": "FD-tr-x - Error report"
      },
      {
        "href": "http://www.webcitation.org/5xwSm8fz5",
        "text": "cache"
      }
    ]
  },
  {
    "n": 201,
    "links": [
      {
        "href": "http://www.ajs.org/ethics/pdfs/Brennancenterrecusalreport.pdf",
        "text": "http://www.ajs.org/ethics/pdfs/Brennancenterrecusalreport.pdf"
      }
    ]
  },
  {
    "n": 202,
    "links": [
      {
        "href": "http://www.nytimes.com/2008/01/29/us/29bar.html?pagewanted=print",
        "text": "Sidebar - Looking Anew at Campaign Cash and Elected Judges - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5zcFspL6Y",
        "text": "cache"
      }
    ]
  },
  {
    "n": 203,
    "links": [
      {
        "href": "http://www.opensecrets.org/races/geog.php?cycle=2008?iframe=true&id=MAS2",
        "text": "Congressional Elections: Massachusetts Senate Race: 2008?iframe=true Cycle | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5zcFv279B",
        "text": "cache"
      }
    ]
  },
  {
    "n": 204,
    "links": [
      {
        "href": "http://www.brookings.edu/gs/cf/sourcebk01/historychap.pdf",
        "text": "http://www.brookings.edu/gs/cf/sourcebk01/historychap.pdf"
      }
    ]
  },
  {
    "n": 205,
    "links": [
      {
        "href": "http://www.foxnews.com/politics/2010/11/24/jury-convicts-delay-money-laundering-trial/print",
        "text": "Tom DeLay Convicted Of Money Laundering | Fox News"
      },
      {
        "href": "http://www.webcitation.org/5xkegUwa0",
        "text": "cache"
      }
    ]
  },
  {
    "n": 206,
    "links": [
      {
        "href": "http://www.opensecrets.org/outsidespending/index.php",
        "text": "Outside Spending | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5zcG1k96j",
        "text": "cache"
      }
    ]
  },
  {
    "n": 207,
    "links": [
      {
        "href": "http://obamaspeeches.com/099-Announcement-For-President-Springfield-Illinois-Obama-Speech.htm",
        "text": "Obama Speech - Presidental Annoucement - February 10 2007 - Complete Text"
      },
      {
        "href": "http://www.webcitation.org/604rNR7In",
        "text": "cache"
      }
    ]
  },
  {
    "n": 208,
    "links": [
      {
        "href": "http://www.csmonitor.com/USA/Elections/Vox-News/2010/0928/Jon-Stewart-and-Bill-O-Reilly-bond-over-campaign-corruption",
        "text": "Jon Stewart and Bill O'Reilly bond over campaign corruption - CSMonitor.com"
      },
      {
        "href": "http://www.webcitation.org/5zcAbbXBm",
        "text": "cache"
      }
    ]
  },
  {
    "n": 209,
    "links": [
      {
        "href": "http://www.opensecrets.org/politicians/contrib.php?cid=N00000267&cycle=2010&type=I&newMem=N&recs=100",
        "text": "Michael E. Capuano: Campaign Finance/Money - Top Donors - Representative 2010 | OpenSecrets"
      },
      {
        "href": "http://www.webcitation.org/5xkent1xg",
        "text": "cache"
      }
    ]
  },
  {
    "n": 210,
    "links": [
      {
        "href": "http://www.citizen.org/documents/Eclipsed-Disclosure11182010.pdf",
        "text": "http://www.citizen.org/documents/Eclipsed-Disclosure11182010.pdf"
      },
      {
        "href": "http://www.webcitation.org/604rTj8He",
        "text": "cache"
      }
    ]
  },
  {
    "n": 211,
    "links": [
      {
        "href": "http://papers.ssrn.com/sol3/papers.cfm?abstract_id=978508",
        "text": "The Iceberg Theory of Campaign Contributions: Political Threats and Interest Group Behavior by Ethan Kaplan :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zcG5GQGy",
        "text": "cache"
      }
    ]
  },
  {
    "n": 212,
    "links": [
      {
        "href": "http://citizen.org/documents/Cause-for-Concern.pdf",
        "text": "http://citizen.org/documents/Cause-for-Concern.pdf"
      }
    ]
  },
  {
    "n": 213,
    "links": [
      {
        "href": "http://www.gao.gov/products/GAO-10-390",
        "text": "U.S. GAO - Campaign Finance Reform: Experiences of Two States That Offered Full Public Funding for Political Candidates"
      },
      {
        "href": "http://www.webcitation.org/5zcGBjhab",
        "text": "cache"
      }
    ]
  },
  {
    "n": 214,
    "links": [
      {
        "href": "http://www.gao.gov/new.items/d10391sp.pdf",
        "text": "http://www.gao.gov/new.items/d10391sp.pdf"
      }
    ]
  },
  {
    "n": 215,
    "links": [
      {
        "href": "http://www.google.com/url?sa=t&source=web&cd=1&ved=0CBkQFjAA&url=http%3A%2F%2Fsites.google.com%2Fsite%2Fmillerpolsci%2Fdocs%2FGAOWeb.pdf&rct=j&q=After%20the%20GAO%20Report%3A%20What%20Do%20We%20Know%20About%20Public%20Election%20Funding%3F%20&ei=iQ8BTu7CMvOq0AHc2JWNDg&usg=AFQjCNH9JPvkcJ5r8yn6PS7ZfGSC7Ahe-A&sig2=xWsTxRtHmXNGp24ffLmNNw&cad=rja",
        "text": "http://www.google.com/url?sa=t&source=web&cd=1&ved=0CBkQFjAA&url=http%3A%2F%2Fsites.google.com%2Fsite%2Fmillerpolsci%2Fdocs%2FGAOWeb.pdf&rct=j&q=After%20the%20GAO%20Report%3A%20What%20Do%20We%20Know%20About%20Public%20Election%20Funding%3F%20&ei=iQ8BTu7CMvOq0AHc2JWNDg&usg=AFQjCNH9JPvkcJ5r8yn6PS7ZfGSC7Ahe-A&sig2=xWsTxRtHmXNGp24ffLmNNw&cad=rja"
      }
    ]
  },
  {
    "n": 216,
    "links": [
      {
        "href": "http://users.polisci.wisc.edu/kmayer/466/Keeping_It_Clean.pdf",
        "text": "http://users.polisci.wisc.edu/kmayer/466/Keeping_It_Clean.pdf"
      }
    ]
  },
  {
    "n": 217,
    "links": [
      {
        "href": "http://www.unc.edu/depts/polisci/statepol/conferences/2008/papers/LaRaja.pdf",
        "text": "http://www.unc.edu/depts/polisci/statepol/conferences/2008/papers/LaRaja.pdf"
      }
    ]
  },
  {
    "n": 218,
    "links": [
      {
        "href": "http://www.apsanet.org/imgtest/psoct07wernermayer.pdf",
        "text": "http://www.apsanet.org/imgtest/psoct07wernermayer.pdf"
      }
    ]
  },
  {
    "n": 219,
    "links": [
      {
        "href": "http://papers.ssrn.com/sol3/papers.cfm?abstract_id=1400809",
        "text": "The Effect of Public Financing on the Competitiveness of Elections by Thomas Stratmann :: SSRN"
      },
      {
        "href": "http://www.webcitation.org/5zcGSs1Bd",
        "text": "cache"
      }
    ]
  },
  {
    "n": 220,
    "links": [
      {
        "href": "http://www.maine.gov/ethics/pdf/publications/2008_mcea_overview.pdf",
        "text": "http://www.maine.gov/ethics/pdf/publications/2008_mcea_overview.pdf"
      }
    ]
  },
  {
    "n": 221,
    "links": [
      {
        "href": "http://www.ct.gov/seec/lib/seec/publications/status_as_of_december_31_2009.pdf",
        "text": "http://www.ct.gov/seec/lib/seec/publications/status_as_of_december_31_2009.pdf"
      }
    ]
  },
  {
    "n": 222,
    "links": [
      {
        "href": "http://www.ct.gov/seec/lib/seec/publications/2010_sufficiency_report.pdf",
        "text": "http://www.ct.gov/seec/lib/seec/publications/2010_sufficiency_report.pdf"
      }
    ]
  },
  {
    "n": 223,
    "links": [
      {
        "href": "http://works.bepress.com/cgi/viewcontent.cgi?article=1017&context=mayer",
        "text": "http://works.bepress.com/cgi/viewcontent.cgi?article=1017&context=mayer"
      }
    ]
  },
  {
    "n": 224,
    "links": [
      {
        "href": "http://economix.blogs.nytimes.com/2010/04/13/who-doesnt-pay-taxes/?pagemode=print",
        "text": "Who Doesn't Pay Taxes? - NYTimes.com"
      },
      {
        "href": "http://www.webcitation.org/5xkt5jmZv",
        "text": "cache"
      }
    ]
  },
  {
    "n": 225,
    "links": [
      {
        "href": "http://www.cbo.gov/ftpdocs/100xx/doc10068/effective_tax_rates_2006.pdf",
        "text": "http://www.cbo.gov/ftpdocs/100xx/doc10068/effective_tax_rates_2006.pdf"
      }
    ]
  },
  {
    "n": 226,
    "links": [
      {
        "href": "http://lsr.nellco.org/upenn_wps/3/",
        "text": "\"Genocide, Press Freedom, and the Case of Hassan Ngeze\" by C. Edwin Baker"
      },
      {
        "href": "http://www.webcitation.org/5xkfCO7ZD",
        "text": "cache"
      }
    ]
  },
  {
    "n": 227,
    "links": [
      {
        "href": "http://blogs.abcnews.com/politicalpunch/2010/12/president-obamas-8-billion-earmark-rerun-lesson-not-learned.html",
        "text": "President Obama’s $8 Billion Earmark Rerun: Lesson Not Learned? - ABC News"
      },
      {
        "href": "http://www.webcitation.org/5xkf6bkyH",
        "text": "cache"
      }
    ]
  },
  {
    "n": 228,
    "links": [
      {
        "href": "http://www.initiativesamendment.org/crs1995durbin.htm",
        "text": "Durbin - Full Text - CRS Report for Congress - Amending the U.S. Constitution: by Congress or by Constitutional Convention - 95-589 A, May 1995"
      },
      {
        "href": "http://www.webcitation.org/5xkf0BO5T",
        "text": "cache"
      }
    ]
  },
  {
    "n": 229,
    "links": [
      {
        "href": "http://www.thenewamerican.com/usnews/constitution/5299-states-should-enforce-not-revise-the-constitution",
        "text": "States Should Enforce, Not Revise, the Constitution!"
      },
      {
        "href": "http://www.webcitation.org/5zcGdneVu",
        "text": "cache"
      }
    ]
  },
  {
    "n": 230,
    "links": [
      {
        "href": "http://s3.amazonaws.com/thf_media/1988/pdf/bg637.pdf",
        "text": "http://s3.amazonaws.com/thf_media/1988/pdf/bg637.pdf"
      }
    ]
  },
  {
    "n": 231,
    "links": [
      {
        "href": "http://people-press.org/files/legacy-pdf/635.pdf",
        "text": "http://people-press.org/files/legacy-pdf/635.pdf"
      }
    ]
  },
  {
    "n": 232,
    "links": [
      {
        "href": "http://www.forbes.com/lists/2009/54/rich-list-09_The-400-Richest-Americans_FinalWorth.html",
        "text": "The 400 Richest Americans 2009 - Forbes.com"
      },
      {
        "href": "http://www.webcitation.org/5xwTaiCV0",
        "text": "cache"
      }
    ]
  }
];

links.forEach(function(link) {
  byNumber[link.n] = link;
});

module.exports = byNumber;