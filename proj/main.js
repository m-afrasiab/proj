let google = require('googleapis');
let privatekey = require("./privatekey.json");
let blogger = google.google.blogger('v3');
let express = require ('express');
let request = require('request');
let cheerio = require('cheerio');
let app = express();
// configure a JWT auth client
let jwtClient = new google.google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/blogger']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
 }
});

//Google Sheets API
// let spreadsheetId = '1o9HKSd94iRhCOZv7CVBUlY4UpSXLMcFgyMZaFuBYRNI';
// let sheetName = 'title!A5:B0'
// let sheets = google.google.sheets('v4');
// sheets.spreadsheets.values.get({
//    auth: jwtClient,
//    spreadsheetId: spreadsheetId,
//    range: sheetName
// }, function (err, response) {
//    if (err) {
//        console.log('The API returned an error: ' + err);
//    } else {
//        console.log('Movie list from Google Sheets:');
//        for (let row of response.values) {
//            console.log('Title [%s]\t\tRating [%s]', row[0], row[1]);
//        }
//    }
// });


 blogger.posts.insert({
            auth: jwtClient,
            blogId: '4810726687198453249',
            resource: {
              title: 'Sample rootscope',
              content: 'Content rootscope'
            }}, function(err, reponse){
                if(err) {
                    console.log('error inserting blog post: ');
                } else {
                    console.log('blog post success in google blogger' );
                }
            });
// app.post('/creatGoogleBloggerPost', function(req, res, next){
//     console.log('creatGoogleBloggerPost called');
//     auth: jwtClient,

//             blogger.posts.insert({
//                 auth: jwtClient,
//                 blogId: '4810726687198453249',
//                 resource: {
//                   title: 'Sample rootscope',
//                   content: 'Content rootscope'
//                 }
//             }, function(){
//                 console.log('success');
//             });
        
//             });
