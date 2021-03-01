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
    rateLimit: 10000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       
var article = $('h1').text().trim();
var writer = $('.left-authorbox a').text();
var title = article + ' by ' + writer; 
var tagline = $('.storypage h2').text();


var content = $('.story-text').html();
  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maher786afrasiab786@gmail.com',
  to: 'maherafrasiab786.sign@blogger.com',
  subject: title,
  html: '<b>'+tagline+'</b> <br />'+ content
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
c.queue(['https://tribune.com.pk/story/2256403/afghanistan-india-and-pakistan ','https://tribune.com.pk/story/2256410/taming-the-madman ','https://tribune.com.pk/story/2256439/armenia-azerbaijan-and-pakistans-raelevance ','https://tribune.com.pk/story/2256440/the-virus-and-us ']);
console.log('server is listening on'+port);
