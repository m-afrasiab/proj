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
    rateLimit: 20000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       

 var quotes = $('.entry-content p').map(function () { return $(this).text(); }).get();


$('.entry-content p').each(function (index) {

var quote = '<ons-card><div class="quote urduf">'+ quotes[index] +'</div><ons-button class="copi" modifier="large">Copy</ons-button></ons-card>'
console.log(quote)
});
  


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://urduquotes.pk/arabic-quotes-in-urdu/']);
console.log('server is listening on'+port);
