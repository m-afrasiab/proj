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
       
var article = $('h2.story__title').first().text().trim();
var writer = $('.story__byline').first().text();
var title = article + ' by ' + writer; 

var content = $('.story__content').html();
  
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
  html: content
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
c.queue(['https://www.dawn.com/news/1570856/reopening-schools ','https://www.dawn.com/news/1570855/one-option-for-every-situation ','https://www.dawn.com/news/1570854/covenant-with-god ','https://www.dawn.com/news/1570853/rumblings-to-come ','https://www.dawn.com/news/1570654/a-baloch-blogger ','https://www.dawn.com/news/1570852/sleeper-cells-active-again ','https://www.dawn.com/news/1570851/nfc-change ','https://www.dawn.com/news/1570850/bangladesh-phone-call ']);
console.log('server is listening on'+port);
