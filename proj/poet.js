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
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       
var poets = [];
var links = [];
var title = $('title').text();
var title2 = title.replace('Poems and Poetry','');
var title3 = title2.toLowerCase().trim();
var poetName = title3.split(' ').join('_');
var Name = poetName.split(['.']).join('_');
            $('a[href*="'+Name+'/poems/"]').each(function () {
           var poet = $(this).attr('href');
              poets.push(poet);
          })
  poets = poets.filter(item => item);
          for(var i = 0; i < poets.length; i++) {

          links.push("'http://famouspoetsandpoems.com"+poets[i]+"'");
        
        

 }
 var link = ""+links;
 
fs.writeFile('poeta.html', link, function (err) {
          
        });


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['http://famouspoetsandpoems.com/poets/lisa_zaran/poems']);
console.log('server is listening on'+port);
