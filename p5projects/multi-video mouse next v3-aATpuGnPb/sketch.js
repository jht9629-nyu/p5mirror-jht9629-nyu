// https://editor.p5js.org/jht9629-nyu/sketches/aATpuGnPb
// multi-video mouse next v3
// fails with autoplay policy running locally

// mouse press to show next 1 of 12 videos


let nvideos = 12;
let my = {};
my.videoRootPath = "https://p5videokit.github.io/ims03-olivia-GirlTime/images";
my.videoIndex = 4;
my.videoPaths = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  my.videos = [];
  for (let num = 1; num <= nvideos; num++) {
    setup_video_index(num);
  }
}

function setup_video_index(num) {
  let path = `${my.videoRootPath}/${num}.mov`;
  // console.log('path', path);
  let vid = createVideo(path);
  vid.hide();
  vid.loop();
  // vid.showControls();
  // vid.size(windowWidth, windowHeight);
  my.videos.push(vid);
  my.videoPaths.push(path);
}

function draw() {
  background(220);
  let vid = my.videos[my.videoIndex];
  image(vid, 0, 0, width, height);
}

function mousePressed() {
  next_video();
}

function next_video() {
  my.videoIndex = (my.videoIndex + 1) % my.videos.length;
  console.log('my.videoIndex',my.videoIndex);
  let path = my.videoPaths[my.videoIndex]
  console.log('path',path);
}

/*

Always plays first video??

https://github.com/p5videoKit/ims03-olivia-GirlTime
>> Fork of https://github.com/olivia-em/GirlTime
>> sharing large assets with github pages

https://p5js.org/reference/p5.MediaElement/loop/
!!@ not obvious
https://github.com/processing/p5.js/blob/v1.11.3/src/dom/dom.js#L4400
    this.elt.setAttribute('loop', true);
    this.play();

https://p5videokit.github.io/ims03-olivia-GirlTime/images/1.mov

https://p5js.org/reference/p5/createVideo/

createVideo(src, [callback]) 
src   - String|String[]: path to a video file, or an array of paths for supporting different browsers.
callback - Function: function to call once the video is ready to play.

*/

// https://editor.p5js.org/jht9629-nyu/sketches/X7LY4-mHp
// ims03-olivia v1

// https://editor.p5js.org/jht9629-nyu/sketches/VD7wYHXlN
// multi-video v0

// https://editor.p5js.org/jht9629-nyu/sketches/IC-PsTWqb
// multi-video image loop v1
// display of video in draw via image
// looping enabled

// https://editor.p5js.org/jht9629-nyu/sketches/4DzVlo-iT
// multi-video n12 fail v2
// Always plays first video??

