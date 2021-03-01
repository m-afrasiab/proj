var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");
var port = 6113;


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
       

var title = $('h1').first().each(function(){
    $(this).html($(this).html().split(" by ")[0]);

});
var title2 = title.each(function(){
    $(this).html($(this).html().split(" Complete").join(""));c
    });
var title3 = title2.each(function(){
    $(this).html($(this).html().split(" Novel").join(""));
    });
var title4 = title3.text();
  
var urls = $('h1 a').attr("href");


request('https://novels.ratta.pk/search?q='+title4+'', (err, res, body) => {
  if (err) { return console.log(err); }
 var result = $(body).find('article h2').first().text().trim();
if (!result) {
    
 console.log(urls);
}
  
});


        }
        done();
    }
});
c.queue(['https://bookspk.site/2015/05/dalda-ka-dastarkhwan-march-2015.html ','https://bookspk.site/2014/06/aabad-hen-mujh-se-tere-khawab.html ','https://bookspk.site/2015/04/sadiyon-ka-beta-part-2.html ','https://bookspk.site/2016/03/zahreelay-pujari-imran-series.html ','https://bookspk.site/2014/02/lagan.html ','https://bookspk.site/2016/09/tere-shehar-me.html ','https://bookspk.site/2016/02/taleem-o-tarbiat-february-2016.html ','https://bookspk.site/2014/06/gooband-family.html ','https://bookspk.site/2014/05/mosooa-fiqhiyyah-21.html ','https://bookspk.site/2015/07/bachon-ka-bagh-july-2015.html ','https://bookspk.site/2014/07/sajna-kay-sang-eid.html ','https://bookspk.site/2014/09/hamara-cash-hai-tarak-e-rasoom.html ','https://bookspk.site/2014/05/sahi-bukkhari-13.html ','https://bookspk.site/2014/05/puri-aurat.html ','https://bookspk.site/2014/04/sona-ghat-ka-pujari-07.html ','https://bookspk.site/2015/01/hard-agency.html ','https://bookspk.site/2014/04/mukhtasar-sahi-muslim.html ','https://bookspk.site/2014/06/magar-ek-sitara-meharban.html ','https://bookspk.site/2014/04/lalkar-3.html ','https://bookspk.site/2014/10/woh-pehli-bar-jab-hum-miley.html ','https://bookspk.site/2014/10/markah-in-battal-chinarkot-mansehra-1834.html ','https://bookspk.site/2016/11/saat-rang-magazine-november-2016.html ','https://bookspk.site/2014/03/jo-ruke-to-kohe-giran-they-hum-episode-19.html ','https://bookspk.site/2016/08/post-election-review-report-general-elections-2013.html ','https://bookspk.site/2015/03/us-paar.html ','https://bookspk.site/2018/05/fazail-e-shab-e-barat.html ','https://bookspk.site/2014/07/gardish.html ','https://bookspk.site/2017/03/ab-tak-thi-kahan.html ','https://bookspk.site/2014/04/mohaim-jo-2.html ','https://bookspk.site/2014/08/wo-khabti-se-deewani-se-01.html ','https://bookspk.site/2014/05/khufia-agency-ki-dehshat-gardi.html ','https://bookspk.site/2017/04/aasibi-kahani.html ','https://bookspk.site/2015/06/razayee-mother-and-razayee-brother-and-razayee-sis.html ','https://bookspk.site/2015/12/sayyadna-hazrat-khalid-bin-waleed-r-a.html ','https://bookspk.site/2014/04/amber-naag-maria-series-part-67-pahar-phat-giya.html ','https://bookspk.site/2015/01/hun-kee-karey.html ','https://bookspk.site/2014/06/kabhi-ishq-ho-to-pata-chale.html ','https://bookspk.site/2014/10/qazi-jee.html ','https://bookspk.site/2014/03/well-done.html ','https://bookspk.site/2014/05/muhabbat-abr-ki-surat.html ','https://bookspk.site/2014/04/aik-bar-muskura-do.html ','https://bookspk.site/2016/04/nirwan-ki-talash-part-9.html ','https://bookspk.site/2014/04/janoobi-hind-kay-janglon-mein.html ','https://bookspk.site/2015/06/aab-e-kosar-part-3.html ','https://bookspk.site/2014/06/saaiban.html ','https://bookspk.site/2014/03/tumhain-ham-bohat-chahte-hen.html ','https://bookspk.site/2014/02/urdu-tafheem-ul-quran-surah-al-buruj.html ','https://bookspk.site/2014/07/suspense-digest-february-2011.html ','https://bookspk.site/2014/07/ujlay-mausamon-main.html ','https://bookspk.site/2016/01/lajawab-aur-tareekhi-faislay.html ','https://bookspk.site/2014/07/jasoosi-digest-may-2013.html ','https://bookspk.site/2015/05/aba-jan-ke-haan.html ','https://bookspk.site/2014/10/pagal-aankhon-wali.html ','https://bookspk.site/2017/07/shua-digest-july-2017.html ','https://bookspk.site/2016/01/sarguzasht-digest-january-2016.html ','https://bookspk.site/2019/03/you-are-mine-novel.html ','https://bookspk.site/2014/04/imran-no-2.html ','https://bookspk.site/2014/05/europe-ka-kohkaaf.html ','https://bookspk.site/2014/04/mitti-ki-mona-lisa.html ','https://bookspk.site/2014/07/khawateen-digest-july-2010.html ','https://bookspk.site/2014/06/pakeeza-digest-july-2014.html ','https://bookspk.site/2014/09/sirate-mustaqeem.html ','https://bookspk.site/2014/02/jab-hawa-e-bahar-chalti-hai.html ','https://bookspk.site/2014/05/umar-khayaam-volume-2.html ','https://bookspk.site/2014/04/bazigar-1.html ','https://bookspk.site/2017/04/sabran-ka-bhoot-inspector-jamshed-series.html ','https://bookspk.site/2014/06/dus-10-fateh.html ','https://bookspk.site/2014/05/aawara-gird-badshah.html ','https://bookspk.site/2014/02/klaska-part-1-imran-series.html ','https://bookspk.site/2014/06/khila-main-hungaama-khas-no.html ','https://bookspk.site/2014/04/qaisar-o-kisra-04.html ','https://bookspk.site/2014/04/mera-dost-mera-dushman.html ','https://bookspk.site/2014/03/aghaz.html ','https://bookspk.site/2014/07/kiran-digest-july-2007.html ','https://bookspk.site/2014/04/kanzul-ummal-vol-08.html ','https://bookspk.site/2017/01/phir-martial-law-aa-gya.html ','https://bookspk.site/2015/03/mela-akhian-da.html ','https://bookspk.site/2018/07/reham-khan.html ','https://bookspk.site/2014/05/woh-ek-lamha.html ','https://bookspk.site/2016/08/aatshi-tashtari-imran-series.html ']);
  app.listen(port);
console.log('server is listening on'+port);
