var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
const { Poppler } = require('node-poppler');
const poppler = new Poppler('./usr/bin');
var port = 6111;



 
const file = 'mcat.pdf';
const poppler = new Poppler();
const options = {
    firstPageToConvert: 1,
    lastPageToConvert: 2
};
 
poppler.pdfToHtml(options, file).then((res) => {
    console.log(res);
});


  app.listen(port);
console.log('server is listening on'+port);


