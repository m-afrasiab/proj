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
    rateLimit: 10000,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       
var titl = $('h2.mb10').each(function(){
$(this).html($(this).html().split(" Overview").join(""));
});
var title = titl.text();
var price = $('.fs22').text();

/////////////////////////////////////// Specs //////////////////////////////////////////////////////////
var table = $('.version-specifications table');
var engine = table.find('td:contains("Engine") + td').text(); 
var borestroke = table.find('td:contains("Bore & Stroke") + td').text(); 
var clutch = table.find('td:contains("Clutch") + td').text(); 
var starting = table.find('td:contains("Starting") + td').text(); 
var dimension = table.find('td:contains("Dimension") + td').text(); 
var petrolCapacity = table.find('td:contains("Petrol Capacity") + td').text(); 
var tyreBack = table.find('td:contains("Tyre at Back") + td').text(); 
var displacement = table.find('td:contains("Displacement") + td').text(); 
var compressionRatio = table.find('td:contains("Compression Ratio") + td').text(); 
var transmission = table.find('td:contains("Transmission") + td').text(); 
var frame = table.find('td:contains("Frame") + td').text(); 
var groundClearance = table.find('td:contains("Ground Clearance") + td').text(); 
var tyreFront = table.find('td:contains("Tyre at Front") + td').text(); 
var dryWeight = table.find('td:contains("Dry Weight") + td').text(); 
var img = $('#image-gallery img').attr('src');
/////////////////////////////////////// specs end /////////////////////////////////////////////////////

var specDetails = '<div class="bikes version-specifications"><h2>'+title+' Specifications</h2><table cellpadding="0" cellspacing="0" class="table table-striped table-bordered"><tbody><tr><td width="140">Engine</td><td itemprop="vehicleEngine">'+engine+'</td><td width="135">Displacement</td> <td>'+displacement+'</td>  </tr> <tr>          <td>Clutch</td>         <td>'+clutch+'</td>         <td>Transmission</td>         <td itemprop="vehicleTransmission">'+transmission+'</td>       </tr><tr>         <td>Starting</td>         <td>'+starting+'</td>         <td>Frame</td>          <td>'+frame+'</td>        </tr>    <tr><td>Petrol Capacity</td><td itemprop="fuelCapacity">'+petrolCapacity+'</td><td>Dry Weight</td><td itemprop="weight">'+dryWeight+'</td></tr>  <tr> <td>Bore &amp; Stroke</td>  <td>'+borestroke+'</td>          <td>Compression Ratio</td>          <td>'+compressionRatio+'</td>        </tr>                   <tr>         <td>Dimension (Lxwxh)</td>          <td>'+dimension+'</td>         <td>Ground Clearance</td>          <td>'+groundClearance+'</td>        </tr>      <tr><td>Tyre at Back</td><td>'+tyreBack+'</td><td>Tyre at Front</td><td>'+tyreFront+'</td></tr></tbody></table></div>';

  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.0808@blogger.com',
  subject: title ,
  html: '<main><h3 style="text-align:center">pkr '+price+' Price</h3><div class="photo-car"><img src="cid:bikephoto"></div></main>' + specDetails + '<div><p>The new motorcycle '+title+' have '+engine+' engine with '+displacement+' of displacement and total of '+transmission+' transmission gears. The overall total fuel tank capacity of '+title+' is '+petrolCapacity+'. The frame of the bike is made of '+frame+' with the total dry weight of '+dryWeight+'. The ignition system of the bike is '+starting+'. The thickness of back and front tyres is '+tyreBack+' and '+tyreFront+' respectively.</p></div>',
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: img,
            cid:'bikephoto'
        }
  ]
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
c.queue(['https://www.pakwheels.com/bikes/pak-hero/ph-70/']);
console.log('server is listening on'+port);
