let x; // location of ball
let y;
let speed;
let gravity = 0.1;
let w; // width of ball
let im;
function preload() {
  im = loadImage("basketball.png");
}
function setup() {
  createCanvas(480, 270);
  // start at top center of canvas
  x = width / 2;
  y = 0;
  speed = 0;
  w = 20;
}
function draw() {
  background(51);
  fill(175);
  // ellipse(x, y, w, w);
  image(im, x, y, w, w);
  // Add gravity to speed
  speed = speed + gravity;
  // Add speed to location
  y = y + speed;
  // If square reaches the bottom
  // Reverse speed
  if (y > height - w / 2) {
    // ball does not fall below bottom edge of canvas
    y = height - w / 2;
    speed = speed * -0.95;
  }
  //console.log('speed',speed )
}

// 2020-10-11 jht: Corrected bounce test, comments
// https://editor.p5js.org/icm/sketches/BkyUQp1nb

// https://editor.p5js.org/jht9629-nyu/sketches/mYZwG-Lbj
// Two ball objects

// https://editor.p5js.org/jht9629-nyu/sketches/IRcTMVa5eE
// gravity ball two objects

// https://editor.p5js.org/jht9629-nyu/sketches/csLgYCa6h
// gravity ball single
