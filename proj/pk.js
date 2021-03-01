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

var name = $('.formbox p:contains("Domain not found:")').find('b').first().text();
var domain1 = name.split('Domain not found:').join('').trim();
var name1 = $('.pkheading').text();
var domain2 = name1.split('The Domain record for ').join('').trim();
var date = $('div:contains("Release Date:")').last().clone().children().remove().end().text().trim();
var condd = $('span:contains("Domain De-activated")').text();

  if ($('body').find('#Tside p a').attr('href') == 'http://pk6.pknic.net.pk/pk5/register.PK') {
    console.log('expired:>>>>>>>>>>>>>>>>>>> '+domain1);
  } else if ($('body').find('.msg-ok').attr('class') == 'msg-ok') {
    console.log('Available: '+domain1);
  } else if (condd !== undefined){
console.log(domain2 +' Release Date: '+ date);
  } else {
    console.log('Not Available: '+ domain2);
  }


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue(['https://pk6.pknic.net.pk/pk5/lookup.PK?name= Attock.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Bahawalnagar.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Bahawalpur.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Bhakkar.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Chakwal.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Chiniot.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= D.G.Khan.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Faisalabad.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Gujranwala.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Gujrat.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Hafizabad.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Jhang.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Jhelum.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Kasur.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Khanewal.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Khushab.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Lahore.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Layyah.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Lodhran.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= MandiBahauddin Mianwali.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Multan.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Muzaffargarh.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= NankanaSahib.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Narowal.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Okara.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Pakpattan.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Rahim Yar Khan.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Rajanpur.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Rawalpindi.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Sahiwal.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Sargodha.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Sheikhupura.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Sialkot.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= TobaTekSingh.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= Vehari.com.pk','https://pk6.pknic.net.pk/pk5/lookup.PK?name= ']);


  app.listen(port);
console.log('server is listening on'+port);


