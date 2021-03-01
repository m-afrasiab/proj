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
    rateLimit: 20000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       

 var clas = '2nd year';
 var subject = 'Pak study';
 var topic = 'book';
 
 
 var dlink ='https://drive.google.com/uc?export=download&id=0B9B6WCVNkPteWUFQRGxOUUdqZXM';



var stitle = clas +' '+subject+' '+topic+' notes';
var title = '2nd Year Pakistan studies Book in English Pdf Download';

 var content = '<p>If you are in the search of the notes of '+topic+' of '+subject+' for the class '+clas+' then, here we have shared the '+title+'. You can download the desired notes from the below link.</p><p>These notes of '+topic+' are written very carefully for the students of the '+clas+'. These notes will prove very helpful in your preparation for the exams. The notes are free to download. Notes are available in the pdf format.</p> <p>If you find these '+title+' helpful then show us some courtesy by sharing these among your friends on your social profiles. We also have other notes related to the this topic. You can also download them from the website.</p><p style="text-align:center;"><a class="down" href="'+dlink+'" target="_blank">Download Notes</a></p><br /><h3>About These '+subject+' '+clas+' Notes</h3><p>These notes are for both types of students, who are brilliant and can understand all the complicated concepts of '+subject+' as well as average students who need help and explanation to understand the different topics of '+subject+'. All the students of '+clas+' can benefit from these notes alike.</p><h3>How to open and Read notes</h3><p>To be able to open and read the downloaded '+stitle+' on your device you need pdf reader. And in some cases, you will need doc viewer. You can download them both from the web or app store.</p>';

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'MaheR7865@@'
  }
});

var mailOptions = {
  from: 'maher786afrasiab786@gmail.com',
  to: 'maherafrasiab786.notes@blogger.com',
  subject: title,
  html: content
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
    html: '<p class="subs">This is a <strong>test</strong></p>'
}]);
console.log('server is listening on'+port);
