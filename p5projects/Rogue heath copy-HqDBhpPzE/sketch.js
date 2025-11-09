// https://editor.p5js.org/StonesGate604/sketches/FJ1w-sVPA
// https://editor.p5js.org/jht9629-nyu/sketches/HqDBhpPzE

let width = 400;
let height = 400;
let x = width/2;
let y =height/2;

function setup() {
  createCanvas(width, height);
  background(255);
  noFill();
  stroke(2);
  frameRate(1)
}

function draw() {
  background(255);
  // lerp(start, stop, amt)
  x = lerp(x, mouseX, 0.2);
  y = lerp(y, mouseY, 0.2);
  circle(x, y, width / 4);
}
