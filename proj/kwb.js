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
       

var name = $('.post-title').text();
var title = $('title').text();
var img = $('.entry-content img').attr('src');



  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.tabeer@blogger.com',
  subject: title,
  html: '<p>Agr ap ko '+name+' ke bare me khwab ai hai or ap is ki tabeer janna chahte ho tu ap sahi page pr aye ho. Yaha ham ne '+title+' share ki ha. '+name+' ke bare mein tabeer niche likhi hoi ha. Ap parh skte hain.</p><span><img alt="'+title+'" style="width:100%;" src="cid:tabeerimg"/></span><br/><p><li>khwab me '+name+' ka matlab</li><li>khawab me '+name+' ki tabeer online</li></p><p>Above you can read the interpretation of the dream related to '+name+'. The interpretations provided at this site are from authentic source.</p><br/><p style="background: whitesmoke;font-style: oblique;color: grey;padding: 5px;">Disclaimer:At this site we are just sharing the interpretations of dreams. We are not responsible for any damage done due to this information, read and believe in them at your own discretion. These interpretations may or may not fit for your particular dream. We always recommend to consult some expert to get your dream construed.</p> <p style="    font-weight: 900;    font-family: sans-serif;">Do share '+title+' with others:</p>',
 attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: img,
            cid: 'tabeerimg'
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
c.queue(['https://khwabkitabeer.com/matti-ka-piyalah ','https://khwabkitabeer.com/pauda-jis-ki-bel-kheti-par ','https://khwabkitabeer.com/pani-ki-jaag ','https://khwabkitabeer.com/pahari-derah ','https://khwabkitabeer.com/saaqi-pani-pilany-wal ']);


  app.listen(port);
console.log('server is listening on'+port);
