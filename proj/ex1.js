var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var sanitizeHtml = require('sanitize-html');
var nodemailer = require('nodemailer');
var fs = require('fs');
var linkscrape = require('linkscrape');
var app = express();
var _ = require('lodash');
var async = require('async');
var port = 6111;

var url = "https://readingpk.com/alchemist-urdu-by-paulo-coelho/"

request(url, function(err,resp,body){
	var $ = cheerio.load(body);
	var bookName = $('.entry-title');
	var bookNameText = bookName.text();

var content = $('.entry-content p').last();
var link = $('.entry-content a:contains("Download")').attr('href');

var contentText ="If you are in search of the "+bookNameText+" to download then you are at right page because here we have published the book. You can download pdf here:"+link;

	
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
  text: contentText,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

	
})

app.listen(port);
console.log('server is listening on'+port);
