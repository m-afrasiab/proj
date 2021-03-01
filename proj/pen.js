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
var link = $('.pen-title-link').attr('href');
var pTitle = $('.pen-title').text();
var penTitle = pTitle.trim();
var owner = $('.pen-owner-link').attr('href');
// var flink = link.split('https://codepen.io').join('');
var cde = link.replace('https://codepen.io'+owner+'/pen/','');
var embd = '<iframe height="265" scrolling="no" title="'+penTitle+'" src="//codepen.io'+owner+'/embed/'+cde+'/?height=265&theme-id=0&default-tab=css,result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;"></iframe>';

var final = '<h3>'+penTitle+'</h3><br>'+embd+'<br><br>'


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
c.queue(['https://codepen.io/Manoz/pen/pydxK ','https://codepen.io/SaraSoueidan/pen/sBELl ','https://codepen.io/montanaflynn/pen/orxwK ','https://codepen.io/yoannhel/pen/sJpDj ','https://codepen.io/syedrafeeq/pen/yEJKn ','https://codepen.io/suez/pen/dPqxoM ','https://codepen.io/juliangarnier/pen/xOgyjB ','https://codepen.io/chriswrightdesign/pen/cmanI ','https://codepen.io/designcouch/pen/Atyop ','https://codepen.io/RRoberts/pen/ZBYaJr ','https://codepen.io/boudra/pen/YXzLBN ','https://codepen.io/zitrusfrisch/pen/fjbal ','https://codepen.io/ghepting/pen/xnezB ','https://codepen.io/iliadraznin/pen/JcqbE ','https://codepen.io/natewiley/pen/Ciwyn ','https://codepen.io/Michiel/pen/EBtga ','https://codepen.io/saransh/pen/BKJun ','https://codepen.io/thathurtabit/pen/bgWdge ','https://codepen.io/noeldelgado/pen/pGwFx ','https://codepen.io/ispal/pen/LxjgEj ','https://codepen.io/soulrider911/pen/qhEzf ','https://codepen.io/zjun/pen/dGPqzQ ']);

  app.listen(port);
console.log('server is listening on'+port);
