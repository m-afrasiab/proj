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
       var content = $('.content p').each(function (){

         $('.content p').removeAttr('style');
 
      
       });
var cont = content.html(); 
 console.log(cont);


        }
        done();
    }
});
 
// Queue a list of URLs
// Queue URLs with custom callbacks & parameters
c.queue([{
    html: '<div class="content"><p style="position:absolute;top:216px;left:308px;white-space:nowrap" class="ft30">OF ARREST, ESCAPE AND RETAKING</p> <p style="position:absolute;top:243px;left:374px;white-space:nowrap" class="ft31"><i>A.­Arrest generally.</i></p> <p style="position:absolute;top:270px;left:127px;white-space:nowrap" class="ft30">46.</p><p style="position:absolute;top:270px;left:209px;white-space:nowrap" class="ft33">Arrest how made. <br/>Resisting endeavour to arrest.</p> <p style="position:absolute;top:313px;left:127px;white-space:nowrap" class="ft30">47.</p><p style="position:absolute;top:313px;left:209px;white-space:nowrap" class="ft30">Search of place entered by person sought to be arrested.</p> <p style="position:absolute;top:339px;left:127px;white-space:nowrap" class="ft30">48.</p><p style="position:absolute;top:339px;left:209px;white-space:nowrap" class="ft33">Procedure where ingress not obtainable. <br/>Breaking open zanana.</p> <p style="position:absolute;top:382px;left:127px;white-space:nowrap" class="ft30">49.</p><p style="position:absolute;top:382px;left:209px;white-space:nowrap" class="ft30">Power to break open doors and windows for purposes of liberation.</p> <p style="position:absolute;top:409px;left:127px;white-space:nowrap" class="ft30">50.</p><p style="position:absolute;top:409px;left:209px;white-space:nowrap" class="ft30">No unnecessary restraint.</p> <p style="position:absolute;top:436px;left:127px;white-space:nowrap" class="ft30">51.</p><p style="position:absolute;top:436px;left:209px;white-space:nowrap" class="ft30">Search of arrested persons.</p> <p style="position:absolute;top:462px;left:127px;white-space:nowrap" class="ft30">52.</p><p style="position:absolute;top:462px;left:209px;white-space:nowrap" class="ft30">Mode of searching women.</p> <p style="position:absolute;top:489px;left:127px;white-space:nowrap" class="ft30">53.</p><p style="position:absolute;top:489px;left:209px;white-space:nowrap" class="ft30">Power to seize offensive weapons.</p> <p style="position:absolute;top:516px;left:127px;white-space:nowrap" class="ft30">53A.</p><p style="position:absolute;top:516px;left:209px;white-space:nowrap" class="ft30">Examination of person accused of rape, etc. by medical practitioner.</p> <p style="position:absolute;top:542px;left:354px;white-space:nowrap" class="ft31"><i>B.­Arrest without warrant.</i></p> <p style="position:absolute;top:570px;left:127px;white-space:nowrap" class="ft30">54.</p><p style="position:absolute;top:570px;left:209px;white-space:nowrap" class="ft30">When police may arrest without warrant.</p> <p style="position:absolute;top:596px;left:127px;white-space:nowrap" class="ft30">55.</p><p style="position:absolute;top:596px;left:209px;white-space:nowrap" class="ft30">Arrest of vagabonds, habitual robbers, etc.</p> <p style="position:absolute;top:623px;left:127px;white-space:nowrap" class="ft30">56.</p><p style="position:absolute;top:623px;left:209px;white-space:nowrap" class="ft30">Procedure when police­officer deputes subordinate to arrest without warrant.</p> <p style="position:absolute;top:650px;left:127px;white-space:nowrap" class="ft30">57.</p><p style="position:absolute;top:650px;left:209px;white-space:nowrap" class="ft30">Refusal to give name and residence.</p> <p style="position:absolute;top:677px;left:127px;white-space:nowrap" class="ft30">58.</p><p style="position:absolute;top:677px;left:209px;white-space:nowrap" class="ft30">Pursuit of offenders into other jurisdictions.</p> <p style="position:absolute;top:703px;left:127px;white-space:nowrap" class="ft30">59.</p><p style="position:absolute;top:703px;left:209px;white-space:nowrap" class="ft30">Arrest by private persons and procedure on such arrest.</p> <p style="position:absolute;top:730px;left:127px;white-space:nowrap" class="ft30">60.</p><p style="position:absolute;top:730px;left:209px;white-space:nowrap" class="ft33">Person arrested to be taken before Magistrate or officer in charge of police­<br/>station.</p> <p style="position:absolute;top:773px;left:127px;white-space:nowrap" class="ft30">61.</p><p style="position:absolute;top:773px;left:209px;white-space:nowrap" class="ft30">Person arrested not to be detained more than twenty­four hours.</p> <p style="position:absolute;top:799px;left:127px;white-space:nowrap" class="ft30">62.</p><p style="position:absolute;top:799px;left:209px;white-space:nowrap" class="ft30">Police to report apprehensions.</p> <p style="position:absolute;top:826px;left:127px;white-space:nowrap" class="ft30">63.</p><p style="position:absolute;top:826px;left:209px;white-space:nowrap" class="ft30">Discharge of person apprehended.</p> <p style="position:absolute;top:853px;left:127px;white-space:nowrap" class="ft30">64.</p><p style="position:absolute;top:853px;left:209px;white-space:nowrap" class="ft30">Offence committed in Magistrates presence.</p> <p style="position:absolute;top:879px;left:127px;white-space:nowrap" class="ft30">65.</p><p style="position:absolute;top:879px;left:209px;white-space:nowrap" class="ft30">Arrest by or in presence of Magistrate.</p> <p style="position:absolute;top:906px;left:127px;white-space:nowrap" class="ft30">66.</p><p style="position:absolute;top:906px;left:209px;white-space:nowrap" class="ft30">Power, on escape, to pursue and retake.</p> <p style="position:absolute;top:933px;left:127px;white-space:nowrap" class="ft30">67.</p><p style="position:absolute;top:933px;left:209px;white-space:nowrap" class="ft30">Provisions of sections 47, 48 and 49 to apply to arrests under section 66.</p> </div>'
}]);
console.log('server is listening on'+port);
