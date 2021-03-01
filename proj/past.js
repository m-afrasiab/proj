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
       
var a = [];
$('.thumbnailArrows').children('img').map(function(){
    a = $(this).attr('src')
}).get()

   console.log(a);
   
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'maher786afrasiab786@gmail.com',
//     pass: 'mahar7865'
//   }
// });

// var mailOptions = {
//   from: 'maher786afrasiab786@gmail.com',
//   to: 'maherafrasiab786.7864@blogger.com',
//   subject: bookNameText,
//   text: contentText,
//   html: contentText+'<br>'+cont+'<br>'+frame+'<br><b>Note: The result will be get published here as soon as it get annouced.</b><br>Usually the results of the matric class 9 annouced in the month of july for all boards across the pakistan. This is due to the fact that the annual exams held in the month of march and april<br>.HSSC part 1 result 2018, matric 9 class result.',
//  //  attachments: [
//  // {   // use URL as an attachment
//  //            filename: 'photo.jpg',
//  //            path: imge
//  //        }
//  //  ]
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response+images);
//   }
// });
      
 }
        done();
    }
});

c.queue(['http://www.paper-pk.com/papers/computer-science-10th-past-papers-2017-dg-khan-board/ ']);

 app.listen(port);
console.log('server is listening on'+port);