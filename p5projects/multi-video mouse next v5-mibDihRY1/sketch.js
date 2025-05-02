// https://editor.p5js.org/jht9629-nyu/sketches/mibDihRY1
// multi-video mouse next v5

// mouse press to show next 1 of 12 videos
// video is displayed centered in the window

let nvideos = 12;
let my = {};
my.videoRootPath = 'https://p5videokit.github.io/ims03-olivia-GirlTime/images';

function setup() {
  createCanvas(windowWidth, windowHeight);
  my.videoIndex = 0;
  my.videos = [];
  my.videoPaths = [];
  my.videoWaitingCount = nvideos;
  for (let num = 1; num <= nvideos; num++) {
    setup_video_index(num);
  }
}

function setup_video_index(num) {
  let path = `${my.videoRootPath}/${num}.mov`;
  // console.log('path', path);
  let vid = createVideo(path, () => {
    my.videoWaitingCount--;
  });
  vid.hide();
  my.videos.push(vid);
  my.videoPaths.push(path);
}

function draw() {
  if (!my.mouseWasPressed || my.videoWaitingCount > 0) {
    return;
  }
  background(220);
  let vid = my.videos[my.videoIndex];
  // loop or play can not be applied until some user action
  // like mouse pressed
  vid.loop();
  let x = width * 0.25;
  let y = height * 0.25;
  let w = width * 0.5;
  let h = height * 0.5;
  image(vid, x, y, w, h);
}

function mousePressed() {
  my.mouseWasPressed = true;
  next_video();
}

function next_video() {
  my.videoIndex = (my.videoIndex + 1) % my.videos.length;
  console.log('my.videoIndex', my.videoIndex);
  let path = my.videoPaths[my.videoIndex];
  console.log('path', path);
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

// https://editor.p5js.org/jht9629-nyu/sketches/aATpuGnPb
// multi-video mouse next v3
// fails with autoplay policy running locally

// https://editor.p5js.org/jht9629-nyu/sketches/0P5zUjzEr
// multi-video mouse next v4
// use undocumented loadedmetadata in draw
/*
running local non-fatal warning
🌸 p5.js says: The media that tried to play (with 'https://p5videokit.github.io/ims03-olivia-GirlTime/images/1.mov') wasn't allowed to by this browser, most likely due to the browser's autoplay policy.
+ More info: https://developer.mozilla.org/docs/Web/Media/Autoplay_guide
*/
