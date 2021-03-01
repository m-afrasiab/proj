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
var team1 = 'Quetta Gladiators';
var team2 = 'Karachi Kings';
var place = 'Karachi';
var timing = '7:00 PM';
var date = 'March 15';
var number = 'Match 30';
var match = team1 + ' vs '+ team2;

var details = '<p>Now you can watch the '+match+' live easily at Live.sign.pk. Here we have the fastest server available at your disposal to watch a psl live match between '+team1+' and '+team2+'. Now a days it is not easy to watch the live match of psl 2020. But here you can watch all matches of psl 2020 live without any annoying ads.</p><div><h2>Watch '+match+' Live streaming</h2><p>This is the '+number+' of the PSL 2020 which is between the '+team1+' and '+team2+' being played at '+place+'. The match starts at '+timing+' You can watch it live at Live.sign.pk. If you are having trouble watching '+match+' online then do contact us so that we can fix the problem and you can watch it live without any troubles.</p></div>';

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.live@blogger.com',
  subject: match + ' Watch Live streaming online PSL 2020',
  html: details,
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
c.queue([{
    html: '<p>This is a <strong>test</strong></p>'
}]);
console.log('server is listening on'+port);
