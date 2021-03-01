var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
const download = require('images-downloader').images;
var port = 6111;


const dest = 'download'

// An array of image(s) to download
const images = ['https://www.thelibrarypk.com/urdu-book-kamyabi/']



 app.listen(port);
console.log('server is listening on'+port);