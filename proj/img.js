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
    rateLimit: 500,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
var imge = $('.featured-image-class img').attr('src');       


console.log(imge);
       
 }
        done();
    }
});

c.queue(['https://www.thelibrarypk.com/urdu-book-kamyabi/ ']);

 app.listen(port);
console.log('server is listening on'+port);