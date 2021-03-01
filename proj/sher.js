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
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
var shers = {};
var all = [];
 
var data = $('.pbgmain').each(function(i) {
    datas = $(this).text().trim(); 
    all.push({sher: datas})  
   
       
});
 

 console.log(all)
///////////////////////////////////////////////
fs.readFile('sher.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    
    obj.shers.push(all); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('sher.json', json, 'utf8', function(err, result) {
     if(err) console.log('error', err);
   }); // write it back 
}});



        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://www.ranjish.com/shayari/sad-shayari']);
console.log('server is listening on'+port);
