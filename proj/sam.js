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

//title

var anv = '7.0';

var device = $('#flist tr:contains("'+anv+'")').first().find('td:nth-child(1)').text().replace(' Edge','-Edge');
var model = $('#flist tr:contains("'+anv+'")').first().find('td:nth-child(2)').text();
var os = $('#flist tr:contains("'+anv+'")').first().find('td:nth-child(6)').text();

//manual

var fname = 'Samsung Galaxy Note-5';
// auto

//var fname = 'Samsung '+device;

 var title = fname+' '+model+' Firmware Download Android '+os;
//content

var nhtml = $('#flist tr:contains("'+anv+'")').each(function(){
  $(this).find('td:nth-child(1),td:nth-child(2),td:nth-child(5),td:nth-child(8)').remove();
});

var phtml = nhtml.each(function(){
// $(this).find('td').first().find('a').attr('href', '#');
$(this).find('td').first().find('a').replaceWith(function() { return $(this).contents(); });
$(this).find('td').first().find('span').before(' ');
$(this).find('td').last().find('a').attr('href',function(i,v) {
    return "http://samsung-updates.com" + v;
});
$(this).find('td').last().find('img').remove();
$(this).find('td').last().find('a').addClass('download');
$(this).find('td').last().find('a').attr('rel','nofollow');
$(this).find('td').last().find('a').attr('target','_blank');
$(this).find('td').wrap('<li></li>');
$(this).find('td').last().find('a').text('Download');
$(this).find('td').first().before('<span>Country: </span>');
$(this).wrap('<ul class="ripplelink button"></ul>');
}).toString();
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
  html: '<p>If you are in search of the stock firmware of the '+fname+' model '+model+' then you are at right page because here we have published the '+title+'.<br>Below is the complete list of all the available stock firmwares list with download link. <!--more--><br>'+phtml,
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
c.queue(['http://samsung-updates.com/device/?id=SM-N920P']);

  app.listen(port);
console.log('server is listening on'+port);
