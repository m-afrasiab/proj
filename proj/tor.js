'use strict';
var express = require ('express');
const {google} = require('googleapis');
const sampleClient = require('./sampleClient');
var app = express();
var Crawler = require("crawler");

const blogger = google.blogger({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});
//start here

const c = new Crawler({
    rateLimit: 10000, 
    maxConnections : 500,
    // This will be called for each crawled page
    
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server

  
  var torTitle = $('#title');
  var torTitleText = torTitle.text().trim();

var details = $('.col1').text();
var detail = $('.col2').text();
var link = $('.download a').attr('href');


var postContent ="Details: If you are in searching for the "+torTitleText+" to download then you are at right page because here we have provided the torrent for that. Below you can download the torrent file of it.<br>"+details+"<br>"+detail+"<center><br><div class'downloadb'><a href='"+link+"'>Download</a></div></center>";
var postTitle = torTitleText+' Torrent Download';
async function runSample () {

  const res = await blogger.posts.insert({
    blogId: '7015273087961847019',
    resource: {
      title: postTitle,
      content: postContent
    },function(err, success) {
  if (err) {
    console.error('There was a problem creating the blog post!');
    console.error(err);
    return;
  }
  console.log(success);
}
  });
  
}
// end here
if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/blogger'];
  sampleClient.authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};
         }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://thepiratebay.org/torrent/22311330/A_Cloud_Virtual_Idol_[3D_Hentai]_x264_HD720p.mp4','https://thepiratebay.org/torrent/22308102/TTC_-_The_Great_Trials_of_World_History','https://thepiratebay.org/torrent/22299746/VA_-_Feelings_20_CD_Boxset']);
            



  



