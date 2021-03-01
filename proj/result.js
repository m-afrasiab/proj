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
       

var titl = $('h1');
var title = titl.text();
var bis = titl.each(function(){
    $(this).html($(this).html().split("12th Class result 2019").join(""));
  });
var bis1 = bis.each(function(){
    $(this).html($(this).html().split("12th Class Result 2019").join(""));
  });
var bise = bis1.text();
var iframe = $('.iframe-area iframe').attr('src');
// var date = $('h2').first().text();
// var frame = '<div style="width: 100%; height: 420px;">'+iframe+'</div>';



  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7864@blogger.com',
  subject: title,
  html: '<div style="text-align: center;"><a href="http://2.bp.blogspot.com/-9en8A3nRnk0/XKmTzzrbZNI/AAAAAAAAj9M/-y6IsHf0SU4GxyP56JoTszjSnMYDQ-pKgCK4BGAYYCw/s1600/template.jpg" imageanchor="1"><img alt="'+bise+' 12th Class result 2019 " border="0" src="http://2.bp.blogspot.com/-9en8A3nRnk0/XKmTzzrbZNI/AAAAAAAAj9M/-y6IsHf0SU4GxyP56JoTszjSnMYDQ-pKgCK4BGAYYCw/s1600/template.jpg" title="" /></a></div><p>If you are searching for the result of Inter 12th class of '+bise+' then you are at right page because here we have published the '+title+'.</p><div>Type: Intermediate<br />Class: 12th<br />Board: '+bise+'<br />Year: 2019</div><div class="shortcode-message"><div class="message-title">'+title+' Date<div class="message-content">The result will be annouced on <b>'+date+'</b></div></div></div><p>To check result click on link below:</p><span class="linkButton"><a href="'+iframe+'" rel="nofollow">Check Result of Inter class 12 '+bise+' Here</a></span><br /><p>Every year the annual exams of 12th class held under the supervision of '+bise+' and thousands of students appear in exams. The result of the annual exams of class 12 is also prepared by the '+bise+' and it is get annouced by the delcared date. Students can check their respective results online from '+bise+' official website.</p>'
 //  attachments: [
 // {   // use URL as an attachment
 //            filename: 'photo.jpg',
 //            path: imge
 //        }
 //  ]
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
c.queue(['http://allresults.pk/bise-gujranwala-board-9th-class-result.html ','http://allresults.pk/bise-multan-board-9th-class-result.html ','http://allresults.pk/bise-faisalabad-board-9th-class-result.html ','http://allresults.pk/bise-sargodha-board-9th-class-result.html ','http://allresults.pk/bise-rawalpindi-board-9th-class-result.html ','http://allresults.pk/bise-bahawalpur-board-9th-class-result.html ','http://allresults.pk/bise-dg-khan-board-9th-class-result.html ','http://allresults.pk/bise-sahiwal-board-9th-class-result.html ','http://allresults.pk/bise-federal-board-9th-class-result.html ','http://allresults.pk/bise-peshawar-board-9th-class-result.html ','http://allresults.pk/bise-swat-board-9th-class-result.html ','http://allresults.pk/bise-kohat-board-9th-class-result.html ','http://allresults.pk/bise-malakand-board-9th-class-result.html ','http://allresults.pk/bise-abbottabad-board-9th-class-result.html ','http://allresults.pk/bise-bannu-board-9th-class-result.html ','http://allresults.pk/bise-mardan-board-9th-class-result.html ','http://allresults.pk/bise-di-khan-board-9th-class-result.html ','http://allresults.pk/bsek-karachi-board-9th-class-result.html ','http://allresults.pk/bise-sukkur-board-9th-class-result.html ','http://allresults.pk/bise-hyderabad-board-9th-class-result.html ','http://allresults.pk/bise-larkana-board-9th-class-result.html ','http://allresults.pk/bise-mirpurkhas-board-9th-class-result.html ','http://allresults.pk/aga-khan-board-9th-class-result.html ','http://allresults.pk/bise-quetta-board-9th-class-result.html ','http://allresults.pk/aga-khan-board-9th-class-result.html ']);

  app.listen(port);
console.log('server is listening on'+port);
