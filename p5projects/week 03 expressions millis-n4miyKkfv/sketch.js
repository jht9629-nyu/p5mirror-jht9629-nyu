// https://editor.p5js.org/jht9629-nyu/sketches/n4miyKkfv
// week 03 expressions millis

function setup() {
  createCanvas(400, 200);
  console.log('in setup');
  frameRate(1);
}

function draw() {
  console.log('in draw', millis() / 1000.0, 'fs', frameRate());
  // background(220);
  // circle(x,y,r)
  circle(random(width),random(height),100);
  // noLoop();
}

// https://editor.p5js.org/jht9629-nyu/sketches/VWGjK5A9p
// jht week 01 ex 2 random
