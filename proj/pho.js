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
       
var title = $('title').text();
var title2 = title.replace('Poems and Poetry','');
var title3 = title2.toLowerCase().trim();
var poetName = title3.split(' ').join('_');
var poems = [];
 $('a[href*="c__k__williams/poems/"]').each(function () {
           var poem = $(this).text();
              poems.push(poem);
          });
           poems = poems.filter(item => item);

var list = [];
for (var i = 0; i < poems.length; i++)
list.push('<ons-list-item class="poems poem'+i+'">'+poems[i]+'</ons-list-item>')

       var list2 = ""+list;
       var list3 = list2.split(',').join('');
 


var fileExist = true;
var fileName = 'poet';
  var fileType = 'html';
  var fileNumber = 305;
     
         while (fileExist) {

    fileNumber_str = fileNumber.toString(); 

    var current = fileName + fileNumber_str+ '.' + fileType;


    if (fs.existsSync(current)) {
        fileNumber++;
        
    } else {
        var newPath = current;
        var fileHtml = '<ons-page id="'+current+'"><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">'+title2+'</div></ons-toolbar><ons-search-input id="searchbar1" onkeyup="search_poem()" type="text" name="search" placeholder="Search poems.."></ons-search-input>'+list3+'</ons-page>';
        fs.writeFile(newPath, fileHtml, function (err) {
          
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
c.queue(['http://famouspoetsandpoems.com/poets/c__k__williams/poems']);
console.log('server is listening on'+port);
