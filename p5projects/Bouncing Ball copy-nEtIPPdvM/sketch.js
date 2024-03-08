let cx = 50;
let cy = 50;
let cydir = 2;
let cxdir = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);
  circle(cx, cy, 20);
  cx = cx + cxdir;
  cy = cy + cydir;

  if (cy >= height) {
    cydir = -2;
  }

  if (cx >= width) {
    cxdir = -1;
  }

  if (cx <= 0) {
    cxdir = 1;
  }

  if (cy <= 0) {
    cydir = 2;
  }
}

// https://editor.p5js.org/shawn/sketches/6uaEGLKx_
