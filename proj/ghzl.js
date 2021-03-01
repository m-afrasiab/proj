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
    rateLimit: 1000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       
var title = $('title').text();

var contents = $(content).find('div').remove().html();


var content = $('.post_content').last().clone();
var wrappedString = '<div>' + content + '</div>';
var noScript = wrappedString.replace(/script/g, "THISISNOTASCRIPTREALLY");
var noImg = noScript.replace(/img/g, "THISISNOTASCRIPTREALLY");
var noIns = noImg.replace(/ins/g, "THISISNOTASCRIPTREALLY");
var html = $(noIns);
html.find('THISISNOTASCRIPTREALLY').remove();

var cont = html.html().replace(/THISISNOTASCRIPTREALLY/g, 'script');







var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maherafrasiab1@gmail.com',
    pass: 'maher0987'
  }
});

var mailOptions = {
  from: 'maherafrasiab1@gmail.com',
  to: 'maherafrasiab786.ship@blogger.com',
  subject: title,
  html: cont
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
c.queue(['https://www.eduvision.edu.pk/scholarships/ajk-state-talent-scholarship-scholar-645', 'https://www.eduvision.edu.pk/scholarships/british-council-scholarship-for-women-at-leading-uk-universities-scholar-111', 'https://www.eduvision.edu.pk/scholarships/asf-japan-fully-funded-scholarship-for-matric-and-inter-students-scholar-637']);
console.log('server is listening on'+port);
