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

  
// insert code here
var download = $('div:contains("Boot Image")').next('.rTableCell');
var urrl = download.find('form').attr('action');
var furl = urrl.replace('/landing','');
var url = furl.replace('img','');

// types of url here
var img = 'https://desktop.firmware.mobi'+url+'img';
var zip = 'https://desktop.firmware.mobi'+url+'zip';
var tar = 'https://desktop.firmware.mobi'+url+'tar';
var md5 = 'https://desktop.firmware.mobi'+url+'tar.md5';

// details
var brand = $('div:contains("Brand")').next('.rTableCell').text();
var name = $('div:contains("Friendly name")').next('.rTableCell').text();
var model = $('div:contains("Model")').next('.rTableCell').text();
var dname = $('div:contains("Name")').next('.rTableCell').text();
var device = $('div:contains("Device")').next('.rTableCell').text();
var board = $('div:contains("Board")').next('.rTableCell').text();
var source = $('div:contains("Source")').next('.rTableCell').text();
var version = $('div:contains("- Release")').next('.rTableCell').text();
var size = $('div:contains("- Size")').first().next('.rTableCell').text();
var incr = $('div:contains("- Incremental")').next('.rTableCell').text();


// title

var title = brand+' '+name+' '+model+' Android '+version+ ' Firmware Download '+ incr;

// content
 
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.ware@blogger.com',
  subject: title,
  html: '<p>If you are in search of the '+brand+' '+name+' firmware file for model '+model+' with android version of '+version+' with baseband version '+incr+', then you are at right page because here we have published '+title+'.The source of the firmware is '+source+'.</p><br><b>Brand Name: </b>'+brand+'<br><b>Phone Name: </b>'+name+'<br><b>Model: </b>'+model+'<br><b>Android Version: </b>'+version+'<br><b>Baseband Version: </b>'+incr+'<br><b>Device: </b>'+device+'<br><b>Board: </b>'+board+'<br><b>Firmware source: </b>'+source+'<br><b>File Size: </b>'+size+'<br><center><h3 class="heading3">Download</h3><br>Below are the four different types of '+model+' '+incr+' firmware files available to Download.<br><ul class="ripplelink button"><li><b>.IMG firmware file: </b><a class="download" href="'+img+'" target="_blank">Download</a></li><br><li><b>.ZIP firmware file: </b><a class="download" href="'+zip+'" target="_blank">Download</a></li><br><li><b>.TAR firmware file: </b><a class="download" href="'+tar+'" target="_blank">Download</a></li><br><li><b>.TAR.MD5 firmware file: </b><a class="download" href="'+md5+'" target="_blank">Download</a></li></ul><br></center>',
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
c.queue(['https://desktop.firmware.mobi/device:469/firmware:14583 ','https://desktop.firmware.mobi/device:469/firmware:14058 ','https://desktop.firmware.mobi/device:469/firmware:13073 ','https://desktop.firmware.mobi/device:469/firmware:12984 ','https://desktop.firmware.mobi/device:469/firmware:12435 ','https://desktop.firmware.mobi/device:469/firmware:11524 ','https://desktop.firmware.mobi/device:469/firmware:9189 ','https://desktop.firmware.mobi/device:469/firmware:169 ','https://desktop.firmware.mobi/device:469/firmware:638 ']);

  app.listen(port);
console.log('server is listening on'+port);
