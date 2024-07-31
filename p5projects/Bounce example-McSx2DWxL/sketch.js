// https://editor.p5js.org/jht9629-nyu/sketches/McSx2DWxL
// Bounce example

let x = 200
let s = 1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(x,200,50);
  x = x + s
  if (x > width) {
    // x = 200
    s = -1
  }
  if (x <= 0) {
    s = 1
  }
}