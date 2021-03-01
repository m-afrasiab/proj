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

var keywords = $('meta[name="keywords"]').attr("content").split(',');


       var year = keywords[10];
       var group = keywords[7];
       var subject = keywords[0];
       var classs = keywords[1];
       var bise = keywords[9];

var title = $('title').text();
var image = $('.image img').attr('src');
var img = 'https://www.beeducated.pk'+image;
var desc = 'If you are in search of the past papers of matric 9th class English of bise lahore then here w have shared the '+classs+' Class '+subject+' Past paper Group '+group+' '+year+' Bise '+bise;
var table = '<table class="striped highlight centered responsive-table">        <thead>          <tr>              <th>Level</th>              <th>Matric</th>                      </tr>        </thead>        <tbody>          <tr>            <td>Class</td>            <td>'+classs+'</td>        </tr>          <tr>            <td>Subject</td>            <td>'+subject+'</td>          </tr>          <tr>            <td>Year</td>            <td>'+year+'</td> </tr> <tr>    <td>Bise</td>            <td>'+bise+'</td> </tr><tr>    <td>Group</td>            <td>'+group+'</td> </tr><tr>    <td>Medium</td>            <td>English</td> </tr></tbody></table>';



  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.5566@blogger.com',
  subject: classs+' Class '+subject+' Past paper Group '+group+' '+year+' Bise '+bise,
  html: desc + '<br/>'+table + '<div style="text-align: center;" class="urllink"><img class="responsive-img paperimg" src="cid:paperimage"></div>',
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: img,
            cid:'paperimage'
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
c.queue(['https://www.beeducated.pk/pastpapers/math-9th-english-medium-past-paper-group-1-bise-lahore-2018-14157','https://www.beeducated.pk/pastpapers/math-9th-class-english-medium-past-paper-group-2-bise-lahore-2018-14158','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-1-past-paper-2017-7617','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-2-past-paper-2017-7618','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-1-past-paper-2016-6022','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-2-past-paper-2016-6023','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-1-past-paper-2015-6020','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-2-past-paper-2015-6021','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-1-past-paper-2014-6018','https://www.beeducated.pk/pastpapers/math-9th-english-medium-bise-lahore-group-2-past-paper-2014-6019']);
console.log('server is listening on'+port);
