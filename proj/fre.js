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
var font = $('h1').text();
var imge = $('#illustration').attr('src');
var download = $('.family-actions a').first();
var link = download.attr('href');
var final = '<h3>'+font+'</h3><br><center><img src="'+imge+'"/><br><a href="http://www.fontspace.com'+link+'">Download font</a></center><br><br>'

fs.appendFile("./download/post.txt", final,function(err){
if(err) throw err;
console.log('IS WRITTEN')
});


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['http://www.fontspace.com/m%C3%A5ns-greb%C3%A4ck/painter-personal-use-only','http://www.fontspace.com/typhoon-type-suthi-srisopha/sweet-hipster','http://www.fontspace.com/m%C3%A5ns-greb%C3%A4ck/respective','http://www.fontspace.com/billy-argel/blessed-day','http://www.fontspace.com/billy-argel/calling-angels-personal-use','http://www.fontspace.com/billy-argel/great-day-personal-use','http://www.fontspace.com/typesetit/great-vibes','http://www.fontspace.com/typhoon-type-suthi-srisopha/the-west-gate','http://www.fontspace.com/mistis-fonts/stylish-calligraphy-demo','http://www.fontspace.com/m%C3%A5ns-greb%C3%A4ck/mochary-personal-use-only']);

  app.listen(port);
console.log('server is listening on'+port);
