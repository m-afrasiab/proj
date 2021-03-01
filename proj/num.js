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
       

var number = $('._2pbD3').click();
console.log(number);



  
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'maher786afrasiab786@gmail.com',
//     pass: 'mahar7865'
//   }
// });

// var mailOptions = {
//   from: 'maherafrasiab786@gmail.com',
//   to: 'maherafrasiab786.7864@blogger.com',
//   subject: title,
//   html: '<div style="text-align: center;"><a href="http://2.bp.blogspot.com/-9en8A3nRnk0/XKmTzzrbZNI/AAAAAAAAj9M/-y6IsHf0SU4GxyP56JoTszjSnMYDQ-pKgCK4BGAYYCw/s1600/template.jpg" imageanchor="1"><img alt="'+bise+' 9th Class result 2019 " border="0" src="http://2.bp.blogspot.com/-9en8A3nRnk0/XKmTzzrbZNI/AAAAAAAAj9M/-y6IsHf0SU4GxyP56JoTszjSnMYDQ-pKgCK4BGAYYCw/s1600/template.jpg" title="" /></a></div><p>If you are searching for the result of Matric 9th class of '+bise+' then you are at right page because here we have published the '+title+'.</p><div>Type: Matric<br />Class: 9th<br />Board: '+bise+'<br />Year: 2019</div><div class="shortcode-message"><div class="message-title">'+title+' Date<div class="message-content">The result will be annouced on <b>'+date+'</b></div></div></div><p>To check result click on link below:</p><span class="linkButton"><a href="'+iframe+'" rel="nofollow">Check Result of Matric class 9 '+bise+' Here</a></span><br /><p>Every year the annual exams of 9th class held under the supervision of '+bise+' and thousands of students appear in exams. The result of the annual exams of class 9 is also prepared by the '+bise+' and it is get annouced by the delcared date. Students can check their respective results online from '+bise+' official website.</p>'
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
//     console.log('Email sent: ' + info.response);
//   }
// });

  


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://www.olx.com.pk/item/apple-iphone6s-100-garranted-and-full-box-imei-match-iid-1004834690 ']);

  app.listen(port);
console.log('server is listening on'+port);
