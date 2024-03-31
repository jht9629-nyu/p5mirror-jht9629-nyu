// https://editor.p5js.org/jht9629-nyu/sketches/i6akdNRS2
// video scan radial v7

// saveCanvas('video scan radial v7');

// 640 x 480 matches default video capture on desktop

let cwidth = 640;
let cheight = 480;
let rcenter = 20;
let x0;
let y0;
let capture;
let ang = 0;
let astep = 1;
let faster = 1;
let img;

let xspan_start = rcenter;
let xspan_end = cwidth;
let xspan = xspan_start;
let xstep = rcenter;

let secsPerUpdate = 0.1;
let secsDelta = 0;

function setup() {
  createCanvas(cwidth, cheight);
  // flipped require latest p5js 1.9.1
  // does not appear to affect capture.get
  // capture.get pixels remain in same orientation
  // capture = createCapture(VIDEO, {flipped:1});
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  x0 = int(cwidth / 2);
  y0 = int(cheight / 2);
  calc_xspan_end();
  strokeWeight(0)
}

function draw() {
  if (! capture.loadedmetadata) return;
  
  img = capture.get();
  let more = 1;
  while (more) {
    more = draw_out();
    if (! faster) more = 0;
  }
}

function draw_out() {

  let r = xspan / 2;
  let rang = radians(ang);
  let x1 = r * cos(rang);
  let y1 = r * sin(rang);

  let c1 = img.get(x0 + x1, y0 + y1);
  fill(c1);
  circle(x0 + x1, y0 + y1, rcenter);
  
  ang = ang + astep;
  if (ang > 360) {
    ang = 0;
    next_step();
    return 0;
  }
  return 1;
}

function next_step() {
  secsDelta += deltaTime / 1000;
  if (secsDelta < secsPerUpdate) {
    return;
  }
  secsDelta = 0;
  xspan += xstep;
  if (xspan > xspan_end) {
    xspan = xspan_start;
  }
}

function calc_xspan_end() {
  let a = cwidth;
  let b = cheight;
  xspan_end = Math.sqrt( a*a + b*b );
}

// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video

// https://editor.p5js.org/jht1493/sketches/gnx2IQn1N
// video scan

// https://editor.p5js.org/jht1493/sketches/Q9jdcICpW
// video scan mouseY

// https://editor.p5js.org/jht1493/sketches/oHVI5tU4BP
// video scan gap

// https://editor.p5js.org/jht1493/sketches/mEXETIijv
// video scan gap center

// https://editor.p5js.org/jht1900/sketches/-Ypn6ODK_
// video scan radial

// https://editor.p5js.org/jht9629-nyu/sketches/cKzXO8eUG
// video scan radial v2

// https://editor.p5js.org/jht9629-nyu/sketches/WdNVtxQzf
// video scan radial v3

// https://editor.p5js.org/jht9629-nyu/sketches/7vllrM5d5
// video scan radial v4

// https://editor.p5js.org/jht9629-nyu/sketches/OReZ4wOR5
// video scan radial v5

// https://editor.p5js.org/jht9629-nyu/sketches/nkw-sZXwN
// video scan radial v6
