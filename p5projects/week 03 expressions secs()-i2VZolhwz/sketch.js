// https://editor.p5js.org/jht9629-nyu/sketches/i2VZolhwz
// week 03 expressions secs()

function setup() {
  createCanvas(400, 200);
  console.log('in setup');
  frameRate(1);
}

function draw() {
  console.log('in draw', secs(), 'fs', frameRate());
  // background(220);
  // circle(x,y,r)
  circle(random(width),random(height),100);
  // noLoop();
}

function secs() {
  return millis() / 1000.0;
}

// https://editor.p5js.org/jht9629-nyu/sketches/VWGjK5A9p
// jht week 01 ex 2 random
