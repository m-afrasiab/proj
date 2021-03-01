var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var spread_sheet = require('spread_sheet');
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

  
//insert code here

var title = $('.features');
var next = title.find('.features').text();

console.log(next);


// content
//   var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'maher786afrasiab786@gmail.com',
//     pass: 'mahar7865'
//   }
// });

// var mailOptions = {
//   from: 'maherafrasiab786@gmail.com',
//   to: 'maherafrasiab786.ware@blogger.com',
//   subject: title,
//   html: '<p>If you are in search of the stock firmware of the '+fname+' model '+model+' then you are at right page because here we have published the '+title+'.<br>Below is the complete list of all the available stock firmwares list with download link. <!--more--><br>'+phtml,
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

        }
        done();
    }
});
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://easy-firmware.com/home/browse/category/id/5056/']);

  app.listen(port);
console.log('server is listening on'+port);
