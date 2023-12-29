// https://editor.p5js.org/jht9629-nyu/sketches/hw8qkUuAw
// Slit Scan

let video;

let x = 0;

function setup() {
  createCanvas(400, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(51);
}

function draw() {
  // ?? is this needed
  // video.loadPixels();
  let w = video.width;
  let h = video.height;
  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

// https://editor.p5js.org/codingtrain/sketches/B1L5j8uk4
// Slit Scan
// Daniel Shiffman
// https://thecodingtrain.com
// https://youtu.be/WCJM9WIoudI
// https://youtu.be/YqVbuMPIRwY
