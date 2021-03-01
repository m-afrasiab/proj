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
       

  var tittle = $('h1').first().each(function(){
    $(this).html($(this).html().split("Official Firmware").join("Firmware Download"));
});
  var postTitle = tittle.text();
  var androidVersion = $('.entry-content p:contains("Android :")').text();
  var model = $('.entry-content p:contains("Model Number")').text();
  var cpu = $('.entry-content p:contains("asdas")').text();
  var size = $('.entry-content p:contains("File Type :")').text();
  var link = $('.entry-content a:contains("Download")').last().attr('href');
// var imge = $('.featured-image-class img').attr('src'); 


  
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
  subject: postTitle +' Download',
  html: 'Here we have provided the '+postTitle+'. <br> The firmware is appropriate with the <b>'+model+'</b>, android version of <b>'+androidVersion+'</b>,type of the CPU <b>'+cpu+'</b> and the size of the firmware is <b>'+size+'</b>.<br><center><h4>'+model+'</h4><br><h4>'+cpu+'</h4><br><h4>'+androidVersion+'</h4><br><h4>'+size+'</h4><br><h4><a class="downlink" target="_blank" href="'+link+'">Download Firmware</a></h4></center>'
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
c.queue(['http://www.pakfirmware.com/2018/05/samsung-galaxy-s9-sm-g965n-eng-sboot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-2016-sm-j710f-boot-wifi-fix-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-2016-sm-j710f-eng-sboot-frp-reset-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-2016-sm-j710f-eng-boot-file-2/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-2016-sm-j710f-eng-modem-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-2016-sm-j710f-stock-recovery-file-3/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-duo-sm-j720m-eng-boot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-duo-sm-j720m-eng-sboot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-duo-sm-j720m-eng-modem-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-j7-duo-sm-j720m-stock-recovery-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-leader-8-sm-g9298-eng-boot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-leader-8-sm-g9298-eng-modem-file/ ','http://www.pakfirmware.com/2018/05/samsung-leader-8-stock-recovery/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s6-edge-sm-g928w8-stock-recovery-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s9-sm-g965n-stock-recovery-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s6-edge-sm-g928w8-eng-sboot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s6-edge-sm-g928w8-eng-modem-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s6-edge-sm-g928w8-eng-boot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s9-sm-g965n-eng-boot-file/ ','http://www.pakfirmware.com/2018/05/samsung-galaxy-s9-sm-g965n-eng-modem-file/ ']);
  app.listen(port);
console.log('server is listening on'+port);
