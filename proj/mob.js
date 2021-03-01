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
       
var tit = $('.hdng3').first().each(function(){
    $(this).html($(this).html().split(" Price ").join(" "));
    });
var tit2 = tit.each(function(){
    $(this).html($(this).html().split(" Specs").join(" "));
    });

var title = tit2.text().replace('&','');

var prce = $('th:contains("Price") + td').text();
var proce = prce.replace('Price in ','');
var price = proce.replace('Rs: ','Rs:');
var os = $('th:contains("OS") + td').text();

var internal = $('th:contains("Built-in") + td').text();
var Card = $('th:contains("Card") + td').text();
var Main = $('th:contains("Main") + td').text();
var Front = $('th:contains("Front") + td').text();
var Features = $('th:contains("Features") + td').text();

var Sensors = $('th:contains("Sensors") + td').text();
var SIM = $('th:contains("SIM") + td').text();
var Dimensions = $('th:contains("Dimensions") + td').text();
var Weight = $('th:contains("Weight") + td').text();
var Capacity = $('th:contains("Capacity") + td').text();

var CPU = $('th:contains("CPU") + td').text();
var Chipset = $('th:contains("Chipset") + td').text();
var GPU = $('th:contains("Capacity") + td').text();

var WLAN = $('th:contains("WLAN") + td').text();
var Bluetooth = $('th:contains("Bluetooth") + td').text();
var GPS = $('th:contains("GPS") + td').text();
var USB = $('th:contains("USB") + td').text();
var NFC = $('th:contains("NFC") + td').text();
var Data = $('th:contains("Data") + td').text();

var display = $('th:contains("Technology") + td').text();
var Size = $('th:contains("Size") + td').text();
var Resolution = $('th:contains("Resolution") + td').text();
var Protection = $('th:contains("Protection") + td').text();

var twoG = $('th:contains("2G Band") + td').text();
var threeG = $('th:contains("3G Band") + td').text();
var fourG = $('th:contains("4G Band") + td').text();

var Browser = $('th:contains("Browser") + td').text();
var color = $('th:contains("Colors") + td').text();
var Extra = $('th:contains("Extra") + td').text();
var Messaging = $('th:contains("Messaging") + td').text();

var imge = $('#centerContainer img').attr('src');

  

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maher786afrasiab786@gmail.com',
    pass: 'mahar7865'
  }
});

// '++'Battery
var mailOptions = {
  from: 'maherafrasiab786@gmail.com',
  to: 'maherafrasiab786.7868@blogger.com',
  subject: title+' Price in Pakistan',
  html: '<div dir="ltr" style="text-align: left;" trbidi="on"><center><h3>'+price+'</h3></center><p style="    background: whitesmoke;    margin: 5px;    padding: 5px;    font-family: serif;    color: #616161;">If you are looking for the price of '+title+' in Pakistan then you ara at right page. Here we have shared the updated and latest '+title+' Price with complete specs and details.</p><table class="mobpic"><tbody><tr><td style="background: whitesmoke;"><span><img src="cid:pakmobsimage"></span></td></tr></tbody></table><table class="basicinfo"><tbody><tr><td><i class="fas fa-memory"></i></td><td colspan="2">'+internal+'</td></tr>    <tr><td><i class="fas fa-camera"></i></td><td colspan="2"><b>Back Camera:</b> '+Main+' ;  <br /> <b>Selfie Camera:</b> '+Front+' </td></tr>    <tr><td><i class="fas fa-code"></i></td><td colspan="2">'+os+'</td></tr><tr><td><i class="fas fa-mobile-alt"></i></td><td colspan="2">'+Size+'</td></tr></tbody></table><br /><!-- adsense --><p>Below are the complete details, specs and price of '+title+'. The mobile is running '+os+'operating system. It comes in screen size of '+Size+'with the resulution of '+Resolution+'.The chipset used in this phone is '+Chipset+' with the CPU '+CPU+'. When it comes to storage and RAM '+title+' have '+internal+' respectively. The sensors included in the mobile are '+Sensors+'.The Phone is available in following colors: '+color+'.</p><div class="postad"></div><table border="0" cellpadding="0" cellspacing="0" style="position: relative; width: 100%;"><tbody><h3>Detailed Specifications of '+title+'</h3><tr class="RowBG1" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="29" style="font-size: 10pt; font-weight: bold;">&nbsp;OS&nbsp;</td><td colspan="2">'+os+'<br /></td></tr><tr class="RowBG2" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="29" rowspan="2" style="font-size: 10pt; font-weight: bold;">&nbsp;Storage&nbsp;</td><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Internal&nbsp;</td><td colspan="2" style="background: rgba(255, 255, 255, 0.99); color: #666666;">'+internal+'</td></tr><tr class="RowBG1" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="29" style="font-size: 10pt; font-weight: bold;">&nbsp;Card Slot&nbsp;</td><td colspan="2">'+Card+'<br /></td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" rowspan="3" style="font-size: 10pt; font-weight: bold;">&nbsp;Camera&nbsp;</td><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Back Camera&nbsp;</td><td colspan="2" style="background: rgba(255, 255, 255, 0.99); color: #666666;">'+Main+'</td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Selfie Camera&nbsp;</td><td colspan="2">'+Front+'</td></tr><tr class="RowBG2" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Features&nbsp;</td><td colspan="2">'+Features+'</td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Sensors&nbsp;</td><td colspan="2">'+Sensors+'</td></tr><tr class="RowBG2" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;SIM&nbsp;</td><td colspan="2">'+SIM+'</td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Dimensions</td><td colspan="2">'+Dimensions+'<br /></td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Weight(in grams)&nbsp;</td><td colspan="2">'+Weight+'&nbsp;&nbsp;</td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Battery&nbsp;</td><td colspan="2">'+Capacity+'<br /></td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="29" style="font-size: 10pt; font-weight: bold;">&nbsp;Processor&nbsp;</td><td colspan="2"><b>CPU: </b>'+CPU+'<br /><b>GPU: </b>'+GPU+'<br /><b>Chipset: </b>'+Chipset+'<br /></td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Connectivity&nbsp;</td><td colspan="2"><b>WLAN: </b>'+WLAN+'<br /><b>Bluetooth: </b>'+Bluetooth+'<br /><b>GPS: </b>'+GPS+'<br /><b>USB: </b>'+USB+'<b>NFC: </b>'+NFC+'<br /><b>Data: </b>'+Data+'&nbsp;&nbsp;</td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Display Size&nbsp;</td><td colspan="2"><b>Size: </b>'+Size+'<br /><b>Resolution: </b>'+Resolution+'<br /><b>Protection: </b>'+Protection+'<br /></td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Display Colour&nbsp;</td><td colspan="2">'+display+'<br /></td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="25" style="font-size: 10pt; font-weight: bold;">&nbsp;2G&nbsp;Band&nbsp;</td><td colspan="2">'+twoG+'<br /></td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="25" style="font-size: 10pt; font-weight: bold;">&nbsp;3G Band&nbsp;</td><td colspan="2">'+threeG+'&nbsp;&nbsp;</td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="25" style="font-size: 10pt; font-weight: bold;">&nbsp;4G Band&nbsp;</td><td colspan="2">'+fourG+'<br /></td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Available Colors</td><td colspan="2">'+color+'<br /></td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Ring Tones/sounds&nbsp;</td><td colspan="2">Alert types&nbsp;&nbsp;&nbsp;&nbsp; Vibration; MP3, WAV ringtones<br />Loudspeaker&nbsp;&nbsp;&nbsp;&nbsp; Yes<br />3.5mm jack&nbsp;&nbsp;&nbsp;&nbsp; Yes</td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Messaging&nbsp;</td><td colspan="2">'+Messaging+'<br /></td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;MISC. Features</td><td colspan="2">'+Extra+'</td></tr><tr class="RowBG1" style="background-color: #d1dff3; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Browser</td><td colspan="2">'+Browser+'</td></tr><tr class="RowBG2" style="background-color: #ebf1fa; color: #666666; font-family: Arial, Helvetica, sans-serif; font-size: 16px;"><td class="hdngArial" height="30" style="font-size: 10pt; font-weight: bold;">&nbsp;Price&nbsp;</td><td colspan="2">'+price+'&nbsp;  &nbsp;</td></tr></tbody></table><br /><div class="postad2"></div></div>',
  attachments: [
 {   // use URL as an attachment
            filename: 'photo.jpg',
            path: 'https://www.whatmobile.com.pk/'+imge,
            cid: 'pakmobsimage'
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
c.queue(['https://www.whatmobile.com.pk/Honor_8A-2020']);

  app.listen(port);
console.log('server is listening on'+port);
