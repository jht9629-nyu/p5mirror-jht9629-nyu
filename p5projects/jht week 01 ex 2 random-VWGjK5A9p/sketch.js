// https://editor.p5js.org/jht9629-nyu/sketches/VWGjK5A9p
// jht week 01 ex 2 random

function setup() {
  createCanvas(400, 200);
  console.log('in setup');
}

function draw() {
  console.log('in draw');
  // background(220);
  // circle(x,y,r)
  circle(random(400),random(200),100);
  noLoop();
}

