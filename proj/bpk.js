var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
var port = 6112;


var c = new Crawler({
    maxConnections : 500,
    // This will be called for each crawled page
    rateLimit: 20000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       

  var bookName = $('h2').first().each(function(){
    $(this).html($(this).html().split(" free download.").join(""));
});
  var title = bookName.each(function(){
    $(this).html($(this).html().split(" Free Download").join(""));
});
  var bookNameText = title.text();



var link = $('.su-highlight a:contains("Download")').attr('href');
// var imge = $('.featured-image-class img').attr('src'); 
 
var contentText ="If you are in search of the "+bookNameText+" to download then you are at right page because here we have published the book. You can download pdf here: "+link;

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7865@blogger.com',
  subject: bookNameText,
  text: contentText
 //  attachments: [
 // {   // use URL as an attachment
 //            filename: 'photo.jpg',
 //            path: imge
 //        }
 //  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://bookspk.site/2016/03/zahreelay-pujari-imran-series.html ','https://bookspk.site/2016/02/taleem-o-tarbiat-february-2016.html ','https://bookspk.site/2014/06/gooband-family.html ','https://bookspk.site/2014/05/mosooa-fiqhiyyah-21.html ','https://bookspk.site/2015/07/bachon-ka-bagh-july-2015.html ','https://bookspk.site/2014/09/hamara-cash-hai-tarak-e-rasoom.html ','https://bookspk.site/2014/05/sahi-bukkhari-13.html ','https://bookspk.site/2014/05/puri-aurat.html ','https://bookspk.site/2014/04/sona-ghat-ka-pujari-07.html ','https://bookspk.site/2014/04/lalkar-3.html ','https://bookspk.site/2016/11/saat-rang-magazine-november-2016.html ','https://bookspk.site/2016/08/post-election-review-report-general-elections-2013.html ','https://bookspk.site/2017/03/ab-tak-thi-kahan.html ','https://bookspk.site/2014/08/wo-khabti-se-deewani-se-01.html ','https://bookspk.site/2014/05/khufia-agency-ki-dehshat-gardi.html ','https://bookspk.site/2017/04/aasibi-kahani.html ','https://bookspk.site/2014/04/amber-naag-maria-series-part-67-pahar-phat-giya.html ','https://bookspk.site/2014/04/aik-bar-muskura-do.html ','https://bookspk.site/2016/04/nirwan-ki-talash-part-9.html ','https://bookspk.site/2014/04/janoobi-hind-kay-janglon-mein.html ','https://bookspk.site/2014/07/suspense-digest-february-2011.html ','https://bookspk.site/2014/07/jasoosi-digest-may-2013.html ','https://bookspk.site/2016/01/sarguzasht-digest-january-2016.html ','https://bookspk.site/2014/04/imran-no-2.html ','https://bookspk.site/2014/05/europe-ka-kohkaaf.html ','https://bookspk.site/2014/04/mitti-ki-mona-lisa.html ','https://bookspk.site/2014/07/khawateen-digest-july-2010.html ','https://bookspk.site/2014/06/pakeeza-digest-july-2014.html ','https://bookspk.site/2014/09/sirate-mustaqeem.html ','https://bookspk.site/2014/02/jab-hawa-e-bahar-chalti-hai.html ','https://bookspk.site/2014/04/bazigar-1.html ','https://bookspk.site/2014/06/dus-10-fateh.html ','https://bookspk.site/2014/05/aawara-gird-badshah.html ','https://bookspk.site/2014/02/klaska-part-1-imran-series.html ','https://bookspk.site/2014/06/khila-main-hungaama-khas-no.html ','https://bookspk.site/2014/04/mera-dost-mera-dushman.html ','https://bookspk.site/2014/07/kiran-digest-july-2007.html ','https://bookspk.site/2014/04/kanzul-ummal-vol-08.html ','https://bookspk.site/2017/07/shua-digest-july-2017.html ']);

  app.listen(port);
console.log('server is listening on'+port);
