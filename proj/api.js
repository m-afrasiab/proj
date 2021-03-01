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
    rateLimit: 13000, 
    maxConnections : 500,
    // This will be called for each crawled page
    
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server

  
  var bookName = $('h2').each(function(){
    $(this).html($(this).html().split("by bookspk free download.").join("by Publishers"));
});
  var postTitle = bookName.text();
var link = $('.artcl-body a:contains("Download")').attr('href');
// var imge = $('.featured-image-class img').attr('src'); 

var postContent ="If you are in search of the "+postTitle+" to download then you are at right page because here we have published the book. You can download pdf here:<br> <a class='down' href="+link+">Download</a>"


async function runSample () {

  const res = await blogger.posts.insert({
    blogId: '4810726687198453249',
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
c.queue(['https://bookspk.site/2018/05/sar-utha-ke-jiyo.html ','https://bookspk.site/2018/05/gumshuda-dastavez-a-matter-of-honor.html ','https://bookspk.site/2018/05/six-million-dollar-man-48-hours.html ','https://bookspk.site/2018/05/akbar-badshah-aur-birbal-ki-dastanain.html ','https://bookspk.site/2018/05/irfan-ul-quran-tafseer.html ','https://bookspk.site/2018/05/i-am-malala.html ']);