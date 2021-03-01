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
       

  var title = $('h1.entry-title').text();

  var iframe = $('iframe').attr('src');
var frame = '<iframe src="'+iframe+'" style="width:100%; height:450px;"></iframe>';
var content = $('.entry-content').text();
var image = $('meta[property="og:image"]').attr('content');
  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.sign@blogger.com',
  subject: title,
  html: '<img style="display:none" src="cid:featureimage"></img><br>'+content+'<br>'+frame+'',
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: image,
            cid:'featureimage'
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
c.queue(['http://www.zemtv.com/2020/03/14/hamuyun-saeed-and-hira-mani-making-fun-of-corona-virus/']);
console.log('server is listening on'+port);
