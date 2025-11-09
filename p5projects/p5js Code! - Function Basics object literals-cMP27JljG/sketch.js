// https://editor.p5js.org/jht9629-nyu/sketches/cMP27JljG
// p5js Code! - Function Basics object literals

var ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};
var ball2 = {
  x: 300,
  y: 200,
  xspeed: -4,
  yspeed: 3
};
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  move(ball1);
  bounce(ball1);
  display(ball1);
  move(ball2);
  bounce(ball2);
  display(ball2);
}
function bounce(b) {
  if (b.x > width || b.x < 0) {
    b.xspeed = b.xspeed * -1;
  }
  if (b.y > height || b.y < 0) {
    b.yspeed = b.yspeed * -1;
  }
}
function display(b) {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(b.x, b.y, 24, 24);
}
function move(b) {
  b.x = b.x + b.xspeed;
  b.y = b.y + b.yspeed;
}

// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
