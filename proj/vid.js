var ffmpeg = require('fluent-ffmpeg');


var proc = ffmpeg('./download/vid.mp4')

   .complexFilter([
    
        // Duplicate video stream 3 times into streams a, b, and c
         { filter: 'split', options: '4', inputs: 'vid.mp4', outputs: ['a', 'b', 'c', 'd'] },
    
         // Create stream 'red' by cancelling green and blue channels from stream 'a'
         { filter: 'lutrgb', options: { g: 10, b: 20, r: 40 }, inputs: 'a', outputs: 'red' },

   
         // Create stream 'green' by cancelling red and blue channels from stream 'b'
         { filter: 'lutrgb', options: { r: 100, g: 100, b:100 }, inputs: 'b', outputs: 'green' },
   
         // Create stream 'blue' by cancelling red and green channels from stream 'c'
         { filter: 'lutyuv', options: { u: 128, v: 128 }, inputs: 'c', outputs: 'blue' },

   // Create stream 'red' by cancelling green and blue channels from stream 'a'
         { filter: 'lutrgb', options: { g: 10, b: 20, r: 40 }, inputs: 'd', outputs: 'mix' },

         // Pad stream 'red' to 3x width, keeping the video on the left, and name output 'padded''left top'
         { filter: 'pad', options: { w: 'iw*2', h: 'ih*2' }, inputs: 'red', outputs: 'padded' },
   
         // Overlay 'green' onto 'padded', moving it to the center, and name output 'redgreen' 'left bottom'
        { filter: 'overlay', options: { x: 0 , y: '1*h' }, inputs: ['padded', 'green'], outputs: 'redgreen'},
  //'right bottom'
 { filter: 'overlay', options: { x: 'w*1', y: 'h*1' }, inputs: ['redgreen', 'mix'], outputs: 'mixblue'},
       // Overlay 'blue' onto 'redgreen', moving it to the right 'right top'
       {filter: 'scale', options: {w: '1680', h: '1400'}, inputs: ['blue'], outputs: 'finmix'},
         { filter: 'overlay', options: { x: '0.3*w', y: 0 }, inputs: ['mixblue', 'finmix'],},
          
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
  .save('./download/target.mp4');
