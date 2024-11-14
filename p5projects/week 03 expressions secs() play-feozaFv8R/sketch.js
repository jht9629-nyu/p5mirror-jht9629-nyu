// https://editor.p5js.org/jht9629-nyu/sketches/feozaFv8R
// week 03 expressions secs() play

function setup() {
  // createCanvas(400, 200);
  createCanvas(windowWidth, windowHeight);
  console.log("in setup");
  // frameRate(1);
}

function draw() {
  // console.log("in draw", secs(), "fs", frameRate());
  // background(220);
  // circle(x,y,r)
  // fill(random(255), random(255), random(255), random([10, 255]));
  fill(random_color());
  let r = random([10, 10, 10, 10, 20, 50]);
  let x = random(width);
  x = x - (x % r);
  let y = random(height);
  y = y - (y % r);
  circle(x, y, r);
  // noLoop();
}

function random_color() {
  return random(['red','green','gold']);
}

function secs() {
  return millis() / 1000.0;
}

// https://editor.p5js.org/jht9629-nyu/sketches/VWGjK5A9p
// jht week 01 ex 2 random

// https://editor.p5js.org/jht9629-nyu/sketches/i2VZolhwz
// week 03 expressions secs()
