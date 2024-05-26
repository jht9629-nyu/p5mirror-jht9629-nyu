// https://editor.p5js.org/jht9629-nyu/sketches/u9tE8NdA2
// 11.7: Slit-Scan p5.js v1.7.0

let video;

let x = 0;

function setup() {
  createCanvas(800, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  background(51);
}

function draw() {
  // video.loadPixels();
  let w = video.width;
  let h = video.height;
  
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

// https://editor.p5js.org/codingtrain/sketches/f_M7gry32
// Daniel Shiffman
// https://thecodingtrain.com
// https://youtu.be/WCJM9WIoudI
// https://youtu.be/YqVbuMPIRwY
