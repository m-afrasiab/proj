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
       

var titl = $('h2:contains("Book Name:")');

var titl1 = titl.each(function(){
$(this).html($(this).html().split("Book Name: ").join(""));
});
var titl2 = titl1.each(function(){
$(this).html($(this).html().split("Novel").join(""));
});
var title = titl2.text();
var urls = $('.entry-comments-link a').attr("href");



request('https://novels.ratta.pk/search?q='+title+'', (err, res, body) => {
  if (err) { return console.log(err); }
 var result = $(body).find('article h2').first().text().trim();
if (!result) {
    url = urls.split("#respond").join("");
 console.log(url);
}
  
});


        }
        done();
    }
});
c.queue(['https://www.thelibrarypk.com/lakh-jatan-kar-hari-novel/ ','https://www.thelibrarypk.com/teri-zulf-ke-sar-hone-tak/ ','https://www.thelibrarypk.com/ameer-taimoor/ ','https://www.thelibrarypk.com/pardesi-darakht/ ','https://www.thelibrarypk.com/mashaikh-e-naqshbandia/ ','https://www.thelibrarypk.com/kachi-gagar-toot-gai/ ','https://www.thelibrarypk.com/mughal-darbar-dr-mubarak-ali-pdf-free/ ','https://www.thelibrarypk.com/fawaid-ul-fawad-urdu/ ','https://www.thelibrarypk.com/mohabbat-gazeeda-novel/ ','https://www.thelibrarypk.com/yeh-jo-reg-dasht-e-firaq-hai/ ','https://www.thelibrarypk.com/mopassan-kay-muntkhib-afsanay-maupassant/ ','https://www.thelibrarypk.com/woh-nazneen-novel-urdu/ ','https://www.thelibrarypk.com/dard-e-shab-e-hijran-novel/ ','https://www.thelibrarypk.com/har-pal-sath-novel/ ','https://www.thelibrarypk.com/kaleed-e-masnavi-rumi/ ','https://www.thelibrarypk.com/dard-aashna-novel/ ','https://www.thelibrarypk.com/kashf-ul-asrar-urdu-data-ganj-bakhsh/ ','https://www.thelibrarypk.com/sniper-novel-urdu/ ','https://www.thelibrarypk.com/39-baray-aadmi/ ','https://www.thelibrarypk.com/dayar-e-dasht-ka-diya/ ','https://www.thelibrarypk.com/awarif-ul-maarif-urdu-pdf-free-download/ ','https://www.thelibrarypk.com/bhaid-novel-complete/ ','https://www.thelibrarypk.com/ujalay-mazi-key-dr-abu-talib-ansari-pdf-free/ ','https://www.thelibrarypk.com/samandar-ka-beta-novel/ ','https://www.thelibrarypk.com/buri-bala-hay-ishq-novel/ ','https://www.thelibrarypk.com/khasara-novel-complete/ ','https://www.thelibrarypk.com/bay-sehar-raat-ke-musafir/ ','https://www.thelibrarypk.com/risala-qushayriya-urdu-free-pdf-download/ ','https://www.thelibrarypk.com/seerat-hazrat-saad-bin-abi-waqas/ ','https://www.thelibrarypk.com/73-firqon-ke-tareekhi-haqaiq/ ','https://www.thelibrarypk.com/mohabbat-abla-hai-karb-ka/ ','https://www.thelibrarypk.com/mata-e-dil-novel/ ','https://www.thelibrarypk.com/arzang-e-faqeer-pdf-sarfraz-shah/ ','https://www.thelibrarypk.com/alif-laila-hazar-dastan-complete-pdf-download/ ','https://www.thelibrarypk.com/fi-sabeel-lillah-fasad-karen-armstrong-pdf-free/ ','https://www.thelibrarypk.com/bhatka-hua-rahi-novel/ ']);
  app.listen(port);
console.log('server is listening on'+port);
