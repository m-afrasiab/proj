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
       

  var Title = $('h1').last();
  var postTitle = Title.text();
  var docType = $('.doctype').text();
  var layout = $('.layout').text();
  var contrast = $('.contrast').text();
  var imge = $('.fl_left img').attr('src');
  var perview = $('.demo a').attr('href');
  var download = $('.dld a').attr('href');

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maher786afrasiab786@gmail.com',
  to: 'maherafrasiab786.fresh@blogger.com',
  subject: postTitle+' Download',
  html: '<center><img src="cid:freshimage"/></center><p>Here we have published the '+postTitle+'. The complete details of the template are given below: </p><br><span>Type of Documents: '+docType+'</span><br><span>Layout of Template: '+layout+'</span><br><span>Color Contrast of Template: '+contrast+'</span><br><center><a class="demobtn" href="http://www.free-css.com'+perview+'" target="_blank">Live Perview</a><br><a class="downbtn" href="http://www.free-css.com'+download+'" target="_blank">Download Template</a></center><br><p>This is one of the best '+layout+' template. '+postTitle+' has the color contrast of the '+contrast+'.</p>',
    attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: 'http://www.free-css.com'+imge,
            cid: 'freshimage'
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
c.queue(['http://www.free-css.com/free-css-templates/page228/iland /','http://www.free-css.com/free-css-templates/page228/stamina /','http://www.free-css.com/free-css-templates/page228/beryllium /','http://www.free-css.com/free-css-templates/page227/picxa /','http://www.free-css.com/free-css-templates/page227/charity /','http://www.free-css.com/free-css-templates/page227/exigo /','http://www.free-css.com/free-css-templates/page227/exative /','http://www.free-css.com/free-css-templates/page227/snapshot /','http://www.free-css.com/free-css-templates/page227/wedding /','http://www.free-css.com/free-css-templates/page227/anyar /','http://www.free-css.com/free-css-templates/page227/studio7 ']);

  app.listen(port);
console.log('server is listening on'+port);
