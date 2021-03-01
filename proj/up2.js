var express = require ('express');
var path = require ('path');
var request = require('request');
var cheerio = require('cheerio');
var nodemailer = require('nodemailer');
var app = express();
var Crawler = require("crawler");

const Youtube = require("youtube-api")
    , fs = require("fs")
    , readJson = require("r-json")
    , Lien = require("lien")
    , Logger = require("bug-killer")
    , opn = require("opn")
    , prettyBytes = require("pretty-bytes")
    ;

// I downloaded the file from OAuth2 -> Download JSON
const CREDENTIALS = readJson('./youcreds.json');

// Init lien server
let server = new Lien({
    host: "localhost"
  , port: 6111
});


            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
       
/**
 * This script uploads a video (specifically `video.mp4` from the current
 * directory) to YouTube,
 *
 * To run this script you have to create OAuth2 credentials and download them
 * as JSON and replace the `credentials.json` file. Then install the
 * dependencies:
 *
 * npm i r-json lien opn bug-killer
 *
 * Don't forget to run an `npm i` to install the `youtube-api` dependencies.
 * */



// Authenticate
// You can access the Youtube resources via OAuth2 only.
// https://developers.google.com/youtube/v3/guides/moving_to_oauth#service_accounts
let oauth = Youtube.authenticate({
    type: "oauth"
  , client_id: CREDENTIALS.web.client_id
  , client_secret: CREDENTIALS.web.client_secret
  , redirect_url: CREDENTIALS.web.redirect_uris[0]
});

opn(oauth.generateAuthUrl({
    access_type: "offline"
  , scope: ["https://www.googleapis.com/auth/youtube.upload"]
}));

// Handle oauth2 callback
server.addPage("/oauth2callback", lien => {
    Logger.log("Trying to get the token using the following code: " + lien.query.code);
    oauth.getToken(lien.query.code, (err, tokens) => {

        if (err) {
            lien.lien(err, 400);
            return Logger.log(err);
        }

        Logger.log("Got the tokens.");

        oauth.setCredentials(tokens);

        lien.end("The video is being uploaded. Check out the logs in the terminal.");
var c = new Crawler({
    maxConnections : 500,
    // This will be called for each crawled page
    rateLimit: 500,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            var tittle = $('meta[property="og:title"]').attr('content').each(function(){
    $(this).html($(this).html().split("| 92NewsHD").join(""));
});


// var thumbb = $('meta[property="og:image"]').attr('content');

            //upload start
        var req = Youtube.videos.insert({
            resource: {
                // Video title and description
                snippet: {
                    title: tittle
                  , description: "here we have uploaded the"+tittle+". Subscribe the channel for more videos."
                }
                // I don't want to spam my subscribers
              , status: {
                    privacyStatus: "public"
                }
            }
            // This is for the callback function
          , part: "snippet,status"

            // Create the readable stream to upload the video
          , media: {
                body: fs.createReadStream("./download/video.mp4")
            }
        }, (err, data) => {
            console.log("Done.");
            process.exit();
        });

        setInterval(function () {
            Logger.log(`${prettyBytes(req.req.connection._bytesDispatched)} bytes uploaded.`);
        }, 250);

//end here
         }
        done();
    }
});
c.queue(['http://videos.92newshd.tv/videogallery/police-officer-being-hailed-who-lost-his-leg-during-fighting-terrorists-26-april-2018-92newshd/']);
    });
});


       




