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
       

  var title = $('title').each(function(){
$(this).html($(this).html().split(" FSC Part 1 ").join(" "));
});
  
  var postTitle = title.text();

// var frame = $('.iframe-area').html();
var imge = $('.image img').attr('src'); 
var img = 'https://www.beeducated.pk'+imge;
console.log(img);
var contentText ="Looking for the past papers of 1st year English of Lahore Board? Here we have shared the "+postTitle;

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maher786afrasiab786@gmail.com',
  to: 'maherafrasiab786.7864@blogger.com',
  subject: postTitle,
  html: contentText+'<br><center><img src="cid:123@ratta.pk" style="width:100%"></img></center>',
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: img,
            cid: '123@ratta.pk'
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
c.queue(['https://www.beeducated.pk/pastpapers/english-11th-class-bise-lahore-group-1-past-paper-2018-14908']);
  app.listen(port);
console.log('server is listening on'+port);
