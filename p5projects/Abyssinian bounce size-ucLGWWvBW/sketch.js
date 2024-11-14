// https://editor.p5js.org/jht9629-nyu/sketches/ucLGWWvBW
// Abyssinian bounce size

let x;
let sx;
let sz;
let sd;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  sx = 5;
  sz = width / 20;
  sd = 5;
}

function draw() {
  background(220);
  circle(x, height / 2, sz);
  // x += sx;
  x = x + sx;
  if (x > width || x < 0) {
    sx = sx * -1;
  }
  sz += sd;
  if (sz < 20 || sz > width) {
    // sd = sd * -1;
    sd *= -1;
  }
}
