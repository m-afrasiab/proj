const fs = require('fs');
const ytdl = require('ytdl-core');
const download = require('image-downloader');
var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
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
var urrl = $('iframe').first().attr('src');
// var imge = $('meta[property="og:image"]').attr('content');
// // Download to a directory and save with an another filename
// options = {
//   url: imge,
//   dest: 'c:/Users/Afrasiab/Desktop'        // Save to /path/to/dest/photo.jpg
// }
 
// download.image(options)
//   .then(({ filename, image }) => {
//     console.log('File saved to', filename)
//   }).catch((err) => {
//     throw err
//   })

const video = ytdl(urrl)
  .pipe(fs.createWriteStream('./download/vid.mp4'));

  video.on('progress', (chunkLength, downloaded, total) => {
  console.log('downloading:'+downloaded +':' + total);
});
video.on('end', () => {
  process.stdout.write('\n\n');
});

  }
        done();
    }
});
c.queue(['http://videos.92newshd.tv/videogallery/khawaja-sira-badly-beaten-in-bahawalpur-24-april-2018-92newshd/ ']);


  app.listen(port);
console.log('server is listening on'+port);