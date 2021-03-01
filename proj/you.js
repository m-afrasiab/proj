var phantom = require('phantom');
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
    rateLimit: 1000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;

phantom.create(function (ph) {
  ph.createPage(function (page) {
    
    page.open(c, function() {
      page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
         
var title = $('title').text();
console.log(title)
        }, function(){
          ph.exit()
        });
      });
    });
  });
});
        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://www.youtube.com/watch?v=-nk3tuFltOY' ]);


  app.listen(port);
console.log('server is listening on'+port);

