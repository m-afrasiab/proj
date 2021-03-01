const fs = require('fs');
const ytdl = require('ytdl-core');
const download = require('image-downloader');
var express = require ('express');
var path = require ('path');
var request = require('request');
var youtubeThumbnail = require('youtube-thumbnail');
var cheerio = require('cheerio');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
var port = 6111;

var imge = '4Qsx4xSHdKw';
// Download to a directory and save with an another filename
options = {
  url: 'https://img.youtube.com/vi/'+imge+'/maxresdefault.jpg',
  dest: 'c:/Users/Afrasiab/Desktop/photo.jpg'        // Save to /path/to/dest/photo.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  }).catch((err) => {
    throw err
  })

ytdl('https://www.youtube.com/watch?v=4Qsx4xSHdKw')
  .pipe(fs.createWriteStream('./download/vid.mp4'));

  



  app.listen(port);
console.log('server is listening on'+port);