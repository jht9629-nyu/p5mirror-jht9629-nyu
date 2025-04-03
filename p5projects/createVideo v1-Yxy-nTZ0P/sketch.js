// https://editor.p5js.org/jht9629-nyu/sketches/Yxy-nTZ0P
// createVideo v1

let video;

function setup() {
  // noCanvas();
  createCanvas(windowWidth, windowHeight);

  // Load a video and add it to the page.
  // Note: this may not work in some browsers.
  video = createVideo('small.mp4', video_callback);

  video.hide();
  // Show the default video controls.
  // video.showControls();

  // !!@ error if enabled
  // TypeError: Cannot read properties of null (reading 'parentNode')
  // describe('A video of a toy robot with playback controls beneath it.');
}

function video_callback() {
  video.play();
  video.loop();
  video.volume(0);
}

function draw() {
  image(video, 0, 0);
}
// https://p5js.org/reference/p5/createVideo/

// https://editor.p5js.org/jht9629-nyu/sketches/uAk60oX6b
// createVideo v0
