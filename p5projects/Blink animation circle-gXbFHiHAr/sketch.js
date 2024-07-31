// https://editor.p5js.org/jht9629-nyu/sketches/j1Zb2s-xI
// Blink animation circle

let h = 10
let s = 1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = 200
  let y = 200
  let w = 50
  circle(x,y,h);
  h = h + s
  if (h > 20) {
    s = -1
  }
  if (h <= 0) {
    s = 1;
  }
}

// x = x + s
// if (x > width) {
//   // x = 200
//   s = -1
// }
// if (x <= 0) {
//   s = 1
// }
