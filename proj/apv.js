'use strict';

const {google} = require('googleapis');
const sampleClient = require('./sampleClient');
const blogger = google.blogger({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});
//start here

async function runSample () {
  const res = await blogger.posts.insert({
    blogId: '7525914434133284870',
    resource: {
      title: 'Hello from the googleapis npm module!',
      content: 'Visit https://github.com/google/google-api-nodejs-client to learn more!'
    },function(err, success) {
  if (err) {
    console.error('There was a problem creating the blog post!');
    console.error(err);
    return;
  }
  console.log(success);
}
  });
  
}


// end here
if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/blogger'];
  sampleClient.authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};