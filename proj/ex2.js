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

var url = "https://readingpk.com/abdullah-complete-novel-hashim-nadeem/"
var url1 = "https://readingpk.com/khuda-aur-mohabbat-hashim-nadeem/"
var url2 = "https://readingpk.com/pari-zaad-hashim-nadeem/"
var url3 = "https://readingpk.com/muqadas-hashim-nadeem/"
var url5 = "https://readingpk.com/saleeb-e-ishq-hashim-nadeem/"

//1st url 

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

//2nd url

request(url1, function(err,resp,body){
	var $ = cheerio.load(body);
	var bookName1 = $('.entry-title');
	var bookNameText1 = bookName1.text();

var content1 = $('.entry-content p').last();
var link1 = $('.entry-content a:contains("Download")').attr('href');

var contentText1 ="If you are in search of the "+bookNameText1+" to download then you are at right page because here we have published the book. You can download pdf here:"+link1;

	
	
var transporter1 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions1 = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7865@blogger.com',
  subject: bookNameText1,
  text: contentText1,
};

transporter1.sendMail(mailOptions1, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

	
})

//3rd url

request(url2, function(err,resp,body){
	var $ = cheerio.load(body);
	var bookName2 = $('.entry-title');
	var bookNameText2 = bookName2.text();

var content2 = $('.entry-content p').last();
var link2 = $('.entry-content a:contains("Download")').attr('href');

var contentText2 ="If you are in search of the "+bookNameText2+" to download then you are at right page because here we have published the book. You can download pdf here:"+link2;

	
	
var transporter2 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions2 = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7865@blogger.com',
  subject: bookNameText2,
  text: contentText2,
};

transporter2.sendMail(mailOptions2, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

	
})

//4th url

request(url3, function(err,resp,body){
	var $ = cheerio.load(body);
	var bookName3 = $('.entry-title');
	var bookNameText3 = bookName3.text();

var content3 = $('.entry-content p').last();
var link3 = $('.entry-content a:contains("Download")').attr('href');

var contentText3 ="If you are in search of the "+bookNameText3+" to download then you are at right page because here we have published the book. You can download pdf here:"+link3;

	
	
var transporter3 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions3 = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7865@blogger.com',
  subject: bookNameText3,
  text: contentText3,
};

transporter3.sendMail(mailOptions3, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

	
})

//5th url


request(url5, function(err,resp,body){
	var $ = cheerio.load(body);
	var bookName5 = $('.entry-title');
	var bookNameText5 = bookName5.text();

var content5 = $('.entry-content p').last();
var link5 = $('.entry-content a:contains("Download")').attr('href');

var contentText5 ="If you are in search of the "+bookNameText5+" to download then you are at right page because here we have published the book. You can download pdf here:"+link5;

	
	
var transporter5 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions5 = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7865@blogger.com',
  subject: bookNameText5,
  text: contentText5,
};

transporter5.sendMail(mailOptions5, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

	
})

app.listen(port);
console.log('server is listening on'+port);
