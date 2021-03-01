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
       

  var bookName = $('h3').first();
  var bookNamText = bookName.text().trim();
  var author = $('h4').first();
  var authorname = author.text().trim();
  var bookNameText = bookNamText + ' by ' + authorname;
  var type = $('h4').last();
  var bookType = type.text();

  

var content = $('.entry-content p').last();
var link = $('.text-center a:contains("rtf")').attr('href');

// var imge = $('.featured-image-class img').attr('src'); 

// var contentText ="If you are in search of the "+bookNameText+" to download then you are at right page because here we have published the book. You can download pdf here: "+link;

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7865@blogger.com',
  subject: bookNameText,
  html: "<b>The Category of the Book is:</b>"+bookType+"<br><p>If you are in search of the "+bookNameText+" to download then you are at right page because here we have published the book. You can download pdf here:</p><br><a class='down' href=http://english-e-reader.net"+link+">Download</a>"
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
c.queue(['http://english-e-reader.net/book/a-descent-into-the-maelstrom-edgar-allan-poe /','http://english-e-reader.net/book/island-of-dr-moreau-h-g-wells /','http://english-e-reader.net/book/journey-to-the-center-of-the-earth-jules-verne /','http://english-e-reader.net/book/logans-run-william-nolan /','http://english-e-reader.net/book/cold-mountain-frazier-charles /','http://english-e-reader.net/book/forrest-gump-john-escott /','http://english-e-reader.net/book/the-curious-case-of-benjamin-button-f-scott-fitzgerald /','http://english-e-reader.net/book/the-war-of-the-worlds-h-g-wells /','http://english-e-reader.net/book/count-vlad-jenny-dooley /','http://english-e-reader.net/book/frankenstein-mary-shelley /','http://english-e-reader.net/book/turn-of-the-screw-james-henry /','http://english-e-reader.net/book/a-hackers-revenge-john-backhouse /','http://english-e-reader.net/book/airport-arthur-hailey /','http://english-e-reader.net/book/life-exchange-jenny-dooley /','http://english-e-reader.net/book/psycho-robert-bloch /','http://english-e-reader.net/book/the-long-shot-terry-tomscha /','http://english-e-reader.net/book/the-thirty-nine-steps-john-buchan /','http://english-e-reader.net/book/alexander-the-great-beddall-fiona /','http://english-e-reader.net/book/audrey-hepburn-chris-rice /','http://english-e-reader.net/book/jennifer-lopez-rod-smith /','http://english-e-reader.net/book/mary-queen-of-scots-tim-vicary /','http://english-e-reader.net/book/shakespeare-his-life-and-plays-will-fowler /','http://english-e-reader.net/book/the-diary-of-a-young-girl-anne-frank /','http://english-e-reader.net/book/the-true-story-of-pocahontas-kelly-reinhart /','http://english-e-reader.net/book/casino-royale-ian-fleming /','http://english-e-reader.net/book/diamonds-are-forever-ian-fleming /','http://english-e-reader.net/book/doctor-no-ian-fleming /','http://english-e-reader.net/book/goldfinger-ian-fleming /','http://english-e-reader.net/book/live-and-let-die-ian-fleming /','http://english-e-reader.net/book/dracula-bram-stoker /','http://english-e-reader.net/book/great-mysteries-of-our-world-clemen-d-b-gina /','http://english-e-reader.net/book/owl-hall-robert-campbell /','http://english-e-reader.net/book/the-blue-scarab-jenny-dooley /','http://english-e-reader.net/book/the-phantom-airman-allan-flewin-jones /','http://english-e-reader.net/book/the-stranger-norman-whitney /','http://english-e-reader.net/book/the-vampires-tear-clemen-d-b-gina /','http://english-e-reader.net/book/a-midsummer-nights-dream-william-shakespeare /','http://english-e-reader.net/book/about-a-boy-nick-hornby /','http://english-e-reader.net/book/four-weddings-and-a-funeral-richard-curtis /','http://english-e-reader.net/book/mr-bean-in-town-richard-curtis /','http://english-e-reader.net/book/the-merchant-of-venice-william-shakespeare /','http://english-e-reader.net/book/three-men-in-a-boat-jerome-k-jerome /','http://english-e-reader.net/book/viking-tales-chris-rose /','http://english-e-reader.net/book/1984-george-orwell /','http://english-e-reader.net/book/between-two-worlds-stephen-rabley /','http://english-e-reader.net/book/the-earthquake-laird-elizabeth /','http://english-e-reader.net/book/the-house-of-the-seven-gables-nathaniel-hawthorne /','http://english-e-reader.net/book/the-invisible-man-h-g-wells /','http://english-e-reader.net/book/the-picture-of-dorian-gray-oscar-wilde /','http://english-e-reader.net/book/time-machine-h-g-wells /','http://english-e-reader.net/book/urban-myths-phil-healey ']);

  app.listen(port);
console.log('server is listening on'+port);
