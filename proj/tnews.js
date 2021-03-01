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
var writer = $('.authorFullName').first().text();
var title = article + ' by ' + writer; 



var content = $('.story-detail').html();
  
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
c.queue(['https://www.thenews.com.pk/print/691016-systemic-failure-or-human-error ','https://www.thenews.com.pk/print/691017-autocracy-rising ','https://www.thenews.com.pk/print/691019-india-s-flawed-strategy ','https://www.thenews.com.pk/print/691018-the-weight-of-racism ','https://www.thenews.com.pk/print/691020-the-ptv-conundrum ','https://www.thenews.com.pk/print/691021-human-trafficking ','https://www.thenews.com.pk/print/691022-pakistan-s-aids-problem ','https://www.thenews.com.pk/print/691023-pangs-of-pain ']);
console.log('server is listening on'+port);
