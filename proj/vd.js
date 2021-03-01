var ffmpeg = require('fluent-ffmpeg');

var proc = ffmpeg('./download/target.mp4')


.audioFilter([

{filter: 'crystalizer', options: {i: '10'}, inputs: 'target.mp4'}

  ])
  // setup event handlers
.on('progress', function(progress) {
    console.log('Processing: ' + progress.percent + '% done');
    })

  .on('end', function() {
    console.log('file has been converted succesfully');
  })
  
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  // save to file
  .save('./download/video.mp4');