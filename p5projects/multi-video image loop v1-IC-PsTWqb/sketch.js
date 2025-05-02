// https://editor.p5js.org/jht9629-nyu/sketches/IC-PsTWqb
// multi-video image loop v1
// display of video in draw via image
// looping enabled

let my = {};
my.videoPath =
  "https://p5videokit.github.io/ims03-olivia-GirlTime/images/1.mov";

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();
  my.vid = createVideo(my.videoPath);
  my.vid.hide();
  my.vid.loop();
  // vid.showControls();
  // vid.size(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(my.vid, 0, 0, width, height);
}

// https://editor.p5js.org/jht9629-nyu/sketches/X7LY4-mHp
// ims03-olivia v1

// https://editor.p5js.org/jht9629-nyu/sketches/VD7wYHXlN
// multi-video v0

/*

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
