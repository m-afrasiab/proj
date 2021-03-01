var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
var port = 6111;


var c = new Crawler({
    maxConnections : 500,
    // This will be called for each crawled page
    rateLimit: 500,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       

  var bookName = $('h1');
  var postTitle = bookName.text();

var imge = $('.entry img').attr('src'); 
var link = $('#downloads a:contains("Download")').attr('href');
var fileSize = $('#downloads p:contains("File Size")').text();
 
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maher786afrasiab786@gmail.com',
  to: 'post11@solution.pk',
  subject: postTitle+' Download',
  html: '<center><img src="cid:featurepostimg"/></center><br><p>If you are looking for the '+postTitle+' then you are at right page because here you can download it.</p><br><p>The downloading size of the file is '+fileSize+'.</p><br>Below is the link to download:<br><a href="'+link+'">Download</a>',
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: imge,
            cid: 'featurepostimg'
        }
  ]
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
c.queue(['https://greenhatworld.com/forex-trading/ ','https://greenhatworld.com/free-web-traffic/ ','https://greenhatworld.com/clickbank-data-ebook/ ','https://greenhatworld.com/google-plus-traffic/ ','https://greenhatworld.com/seo-training-course/ ','https://greenhatworld.com/get-traffic/ ','https://greenhatworld.com/youtube-video-editing/ ','https://greenhatworld.com/link-building/ ','https://greenhatworld.com/internet-marketing/ ','https://greenhatworld.com/niche-marketing/ ','https://greenhatworld.com/ebay-store/ ','https://greenhatworld.com/blogging-basics/ ','https://greenhatworld.com/affiliate-marketing-course/ ','https://greenhatworld.com/cpa/ ','https://greenhatworld.com/blogging-guide/ ','https://greenhatworld.com/bitcoins/ ','https://greenhatworld.com/google-traffic/ ','https://greenhatworld.com/keyword-research-guide/ ','https://greenhatworld.com/fiverr-earning-course/ ','https://greenhatworld.com/seo-starter-guide/ ','https://greenhatworld.com/internet-marketing-beginners-guide/ ','https://greenhatworld.com/drive-traffic-from-youtube-videos/ ','https://greenhatworld.com/recover-site-from-penalties/ ','https://greenhatworld.com/seo-video-training/ ','https://greenhatworld.com/make-money-with-bitcoin/ ','https://greenhatworld.com/seo-video-trainings/ ','https://greenhatworld.com/advance-seo-fundamentals/ ','https://greenhatworld.com/seo-site-ranking/ ','https://greenhatworld.com/clickbank-affiliate/ ','https://greenhatworld.com/blogging-pdf-guide/ ','https://greenhatworld.com/ecommerce/ ','https://greenhatworld.com/traffic-using-banner-ads/ ','https://greenhatworld.com/affiliate-marketing-beginner-course/ ','https://greenhatworld.com/rank-youtube-channel-using-silo/ ','https://greenhatworld.com/jvzoo-affiliate-marketing-course/ ','https://greenhatworld.com/affiliate-marketing-training/ ','https://greenhatworld.com/cpa-affiliate-amazon-marketing/ ','https://greenhatworld.com/photoshop-after-effects-course/ ','https://greenhatworld.com/rank-multiple-keywords-on-youtube-1st-page/ ','https://greenhatworld.com/affiliate-marketing-complete-course/ ','https://greenhatworld.com/ecommerce-guide/ ','https://greenhatworld.com/adsense-high-paying-keywords/ ','https://greenhatworld.com/fiverr-earning-complete-course/ ','https://greenhatworld.com/wordpress-theme-development/ ','https://greenhatworld.com/facebook-marketing-course/ ','https://greenhatworld.com/seo-video-training-course/ ','https://greenhatworld.com/youtube-earning-course/ ','https://greenhatworld.com/email-list-building-strategies/ ','https://greenhatworld.com/clickbank-affiliate-marketing-course/ ','https://greenhatworld.com/analyzing-site-improve-seo/ ','https://greenhatworld.com/viral-blogging-complete-course/ ','https://greenhatworld.com/complete-seo-video-training/ ','https://greenhatworld.com/object-oriented-php-tutorials/ ','https://greenhatworld.com/rank-youtube-videos-first-page/ ','https://greenhatworld.com/google-adwords-course/ ','https://greenhatworld.com/product-marketing/ ']);

  app.listen(port);
console.log('server is listening on'+port);
