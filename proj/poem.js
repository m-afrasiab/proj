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
    rateLimit: 100,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
     var data1 = $('article').first().clone();
     var wrappedString = '<div>' + data1 + '</div>';
var noScript = wrappedString.replace(/h1/g, "THISISNOTASCRIPTREALLY");

var html = $(noScript);
html.find('THISISNOTASCRIPTREALLY').remove();

var cont = html.html().replace(/THISISNOTASCRIPTREALLY/g, 'h1');

     var title = $('h1').text();
        var data = '<ons-page id="ch"> <ons-toolbar><div class="left"> <ons-back-button>Back</ons-back-button> </div><div class="center">'+title+' </div> </ons-toolbar>'+cont+'</ons-page>'
var fileExist = true;
var fileName = 'essay';
  var fileType = 'html';
  var fileNumber = 0;
 
         while (fileExist) {

    fileNumber_str = fileNumber.toString(); 

    var current = fileName + fileNumber_str + '.' + fileType;


    if (fs.existsSync(current)) {
        fileNumber++;
    } else {
        var newPath = current;
        fs.writeFile(newPath, data, function (err) {
          
        });

        break;
    }
} 
      
        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://lineserved.com/hobby-essay-english-10th-class/','https://lineserved.com/boy-scouts-essay-simple-english/','https://lineserved.com/favourite-book-essay-english-class-10/','https://lineserved.com/best-friend-essay-english-class-10/','https://lineserved.com/ambition-essay-english-10th-class/','https://lineserved.com/ambition-essay-english-10th-class/','https://lineserved.com/true-muslim-essay-english-10th-class/','https://lineserved.com/cricket-match-essay-10th-class/','https://lineserved.com/hockey-match-essay-english-class-10/','https://lineserved.com/television-essay-english/','https://lineserved.com/a-rainy-day-essay-in-english-for-10th-class/','https://lineserved.com/scene-railway-station-essay-10-class/','https://lineserved.com/school-canteen-essay-english/','https://lineserved.com/libraries-essay-english-10th-class/','https://lineserved.com/village-life-essay-simple-english/','https://lineserved.com/life-big-city-essay-simple-english-10th-class/','https://lineserved.com/house-essay-english-10th-class/','https://lineserved.com/sports-games-essay-english-10th-class/','https://lineserved.com/my-last-day-at-school-a-farewell-party-essay-for-10th-class/','https://lineserved.com/my-last-day-at-school-a-farewell-party-essay-for-10th-class/']);
console.log('server is listening on'+port);
