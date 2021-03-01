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
c.queue([html: '<p>This is a <strong>test</strong></p>']);
  app.listen(port);
console.log('server is listening on'+port);
