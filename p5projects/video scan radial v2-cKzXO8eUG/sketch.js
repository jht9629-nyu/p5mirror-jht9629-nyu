// https://editor.p5js.org/jht9629-nyu/sketches/cKzXO8eUG
// video scan radial v2

let nwidth = 640;
let nheight = 480;
let n = 3;
let rcenter = 20;
let xgap = nwidth / n;
let ygap = nheight / n;
let x0;
let y0;
let capture;
let ang = 0;
let astep = 1;
let xstep = nwidth / n;
let ystep = nheight / n;

function setup() {
  createCanvas(nwidth, nheight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  x0 = int(nwidth / 2);
  y0 = int(nheight / 2);
}

function draw() {
  draw_out();
  // draw_gap()
}

function draw_out() {
  // colorMode(HSB);
  strokeWeight(1);
  // background(255);

  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight],
  let img = capture.get();
  // image(img, 0, 0, nwidth);

  let r = xgap / 2;
  let rang = radians(ang);
  let x1 = r * cos(rang);
  let y1 = r * sin(rang);

  let c1 = img.get(x0 + x1, y0 + y1);
  stroke(c1);
  fill(c1);
  circle(x0 + x1, y0 + y1, rcenter);

  r = nwidth;
  let x2 = r * cos(rang);
  let y2 = r * sin(rang);
  line(x0 + x1, y0 + y1, x0 + x2, y0 + y2);

  ang = ang + astep;
  if (ang > 360) {
    ang = 0;
    // scan_x0y0()
    // x0 = random(0,width);
    // y0 = random(0,height);
  }
}

function scan_x0y0() {
  x0 += xstep;
  if (x0 > width) {
    x0 = 0;
    y0 += ystep;
    if (y0 > height) {
      y0 = 0;
    }
  }
}

function draw_gap() {
  let img = capture.get();
  let y1 = y0 - ygap / 2;
  let y2 = y0 + ygap / 2;
  let x1 = x0 - xgap / 2;
  let x2 = x0 + xgap / 2;
  for (let x = 0; x < img.width; x++) {
    let c1 = img.get(x, y1);
    stroke(c1);
    line(x, 0, x, y1);
    let c2 = img.get(x, y2);
    stroke(c2);
    line(x, y2, x, nheight);
  }
  for (let y = y1; y < y2; y++) {
    let c1 = img.get(x1, y);
    stroke(c1);
    line(0, y, x1, y);
    let c2 = img.get(x2, y);
    stroke(c2);
    line(x2, y, nwidth, y);
  }
}

// https://editor.p5js.org/jht1900/sketches/-Ypn6ODK_
// video scan radial

// https://editor.p5js.org/jht1493/sketches/mEXETIijv
// video scan gap center

// https://editor.p5js.org/jht1493/sketches/oHVI5tU4BP
// video scan gap

// https://editor.p5js.org/jht1493/sketches/Q9jdcICpW
// video scan mouseY

// https://editor.p5js.org/jht1493/sketches/gnx2IQn1N
// video scan

// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video
