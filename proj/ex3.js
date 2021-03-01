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
    rateLimit: 20000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       

  var bookName = $('.entry-title').each(function(){
$(this).html($(this).html().split("By").join(" by "));
});
  var bookName1 = bookName.each(function(){
$(this).html($(this).html().split("Download").join(""));
});
  var bookName2 = bookName1.each(function(){
$(this).html($(this).html().split("Free").join(""));
});
  var bookName3 = bookName2.each(function(){
$(this).html($(this).html().split("Pdf").join(""));
});
  var bookNameText = bookName3.text();

var content = $('.entry-content p').last();
var link = $('.entry-content a:contains("Download")').attr('href');
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
  from: 'maher786afrasiab786@gmail.com',
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
c.queue(['https://www.thelibrarypk.com/mohabbat-gazeeda-novel/ ','https://www.thelibrarypk.com/yeh-jo-reg-dasht-e-firaq-hai/ ','https://www.thelibrarypk.com/dard-e-shab-e-hijran-novel/ ','https://www.thelibrarypk.com/dayar-e-dasht-ka-diya/ ','https://www.thelibrarypk.com/buri-bala-hay-ishq-novel/ ','https://www.thelibrarypk.com/khasara-novel-complete/ ','https://www.thelibrarypk.com/seerat-hazrat-saad-bin-abi-waqas/ ','https://www.thelibrarypk.com/bhatka-hua-rahi-novel/ ']);
console.log('server is listening on'+port);
