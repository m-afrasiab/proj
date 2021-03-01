var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
var port = 6111;

var poems = [];

request('http://famouspoetsandpoems.com/poets/louisa_may_alcott/poems', (err, res, body) => {
  if (err) { return console.log(err); }
var $ = res.$;
 $('a[href*="louisa_may_alcott/poems/"]').each(function () {
           var poem = $(this).attr('href');
            poems.push(poem);
             
          })
          console.log(poems)

});
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
       
         


  var poem = $('div[style*="font-family:Arial"]').html();
          var title = $('span[style*="font-family:Times New Roman"]').last().text();
          

var fileExist = true;
var fileName = 'poem';
  var fileType = 'html';
  var fileNumber = 0;
 
         while (fileExist) {

    fileNumber_str = fileNumber.toString(); 

    var current = fileName + fileNumber_str + '.' + fileType;


    if (fs.existsSync(current)) {
        fileNumber++;
    } else {
        var newPath = current;
   var data = '<ons-page id="'+current+'">\n<ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">'+title+' </div></ons-toolbar>\n<div class="urduf">'+poem+'</div></ons-page>';
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
c.queue(['http://famouspoetsandpoems.com/poets/louisa_may_alcott/poems']);
console.log('server is listening on'+port);
