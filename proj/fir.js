var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var spread_sheet = require('spread_sheet');
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

  
// insert code here

var tarr = $('.post-title a').map(function(){
               return $(this).text();
            }).get();
    var larr = $('.post-title a').map(function(){
return $(this).attr('href');
    });

// title







// content1
var cont1 = tarr[0].split(' ');
 var firm1 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont1[8]+'</li><br><li><a class="download" href="'+larr[0]+'">Download</a></li></ul></center>'
 //2
 var cont2 = tarr[1].split(' ');
 var firm2 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont2[8]+'</li><br><li><a class="download" href="'+larr[1]+'">Download</a></li></ul></center>'
 //3
 var cont3 = tarr[2].split(' ');
var firm3 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont3[8]+'</li><br><li><a class="download" href="'+larr[2]+'">Download</a></li></ul></center>'
 //4
 var cont4 = tarr[3].split(' ');
var firm4 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont4[8]+'</li><br><li><a class="download" href="'+larr[3]+'">Download</a></li></ul></center>'
//5
var cont5 = tarr[4].split(' ');
var firm5 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont5[8]+'</li><br><li><a class="download" href="'+larr[4]+'">Download</a></li></ul></center>'
//6
var cont6 = tarr[5].split(' ');
var firm6 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont6[8]+'</li><br><li><a class="download" href="'+larr[5]+'">Download</a></li></ul></center>'
7
var cont7 = tarr[6].split(' ');
var firm7 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont7[8]+'</li><br><li><a class="download" href="'+larr[6]+'">Download</a></li></ul></center>'
//8
var cont8 = tarr[7].split(' ');
var firm8 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont8[8]+'</li><br><li><a class="download" href="'+larr[7]+'">Download</a></li></ul></center>'
//9
var cont9 = tarr[8].split(' ');
var firm9 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont9[8]+'</li><br><li><a class="download" href="'+larr[8]+'">Download</a></li></ul></center>'
// //10
// var cont10 = tarr[9].split(' ');
// var firm10 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont10[8]+'</li><br><li><a class="download" href="'+larr[9]+'">Download</a></li></ul></center>'
// //11
// var cont11 = tarr[10].split(' ');
// var firm11 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont11[8]+'</li><br><li><a class="download" href="'+larr[10]+'">Download</a></li></ul></center>'
// //10
// var cont12 = tarr[9].split(' ');
// var firm12 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont12[8]+'</li><br><li><a class="download" href="'+larr[11]+'">Download</a></li></ul></center>'
// //10
// var cont13 = tarr[9].split(' ');
// var firm13 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont13[8]+'</li><br><li><a class="download" href="'+larr[12]+'">Download</a></li></ul></center>'
// //10
// var cont14 = tarr[9].split(' ');
// var firm14 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont14[8]+'</li><br><li><a class="download" href="'+larr[13]+'">Download</a></li></ul></center>'
// //10
// var cont15 = tarr[9].split(' ');
// var firm15 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont15[8]+'</li><br><li><a class="download" href="'+larr[14]+'">Download</a></li></ul></center>'
// //10
// var cont16 = tarr[9].split(' ');
// var firm16 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont16[8]+'</li><br><li><a class="download" href="'+larr[15]+'">Download</a></li></ul></center>'
// //10
// var cont17 = tarr[9].split(' ');
// var firm17 = '<br><center><ul class="ripplelink button"><li><b>Brand: </b>'+cont1[0]+'</li><br><li><b>Name: </b>'+cont1[1]+' '+cont1[2]+'</li><br><li><b>Model: </b>'+cont1[3]+'</li><br><li><b>Android Version: </b>'+cont1[5]+'</li><br><li><b>Baseband Version: </b>'+cont17[8]+'</li><br><li><a class="download" href="'+larr[16]+'">Download</a></li></ul></center>'



// end -------------------------------------------------
var ttitle = tarr[0].replace(cont1[8],'All-Variants');
var title = ttitle.replace('Android 7.0 Firmware','Firmware - Free');

  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.ware@blogger.com',
  subject: title,
  html: '<p>If you are in search of the stock firmware of the '+cont1[0]+' '+cont1[1]+' '+cont1[2]+' '+cont1[3]+' then you are at right page because here we have provided all the variants of the stock firmware of the '+cont1[1]+' '+cont1[2]+' '+cont1[3]+' for free download.</p><h2>Available Firmwares of '+cont1[1]+' '+cont1[2]+' '+cont1[3]+'</h2><br><p>Below are the all of the available variants of the '+cont1[1]+' '+cont1[2]+' model <b>'+cont1[3]+'</b><br>'+firm1+firm2+firm3+firm4+firm5+firm6+firm7+firm8+firm9,
  // +firm10+firm11+firm12+firm13+firm14+firm15+firm16+firm17,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 

 


  

  

  


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://www.firmwareweb.com/search?q=SM-G955N']);


  app.listen(port);
console.log('server is listening on'+port);
