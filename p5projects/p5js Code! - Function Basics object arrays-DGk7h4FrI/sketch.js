// https://editor.p5js.org/jht9629-nyu/sketches/DGk7h4FrI
// p5js Code! - Function Basics object arrays

var ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
};
var ball2 = {
  x: 300,
  y: 200,
  xspeed: -4,
  yspeed: 3,
};
let balls = [ball1, ball2];

function setup() {
  createCanvas(600, 400);
  balls.push({
    x: random(width),
    y: random(height),
    xspeed: -4,
    yspeed: -3,
  });
  balls.push({
    x: 0,
    y: 0,
    xspeed: -4,
    yspeed: -3,
  });
}
function draw() {
  background(0);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  for (let b of balls) {
    move(b);
    bounce(b);
    display(b);
  }
  // move(balls[1]);
  // bounce(balls[1]);
  // display(balls[1]);
  // move(balls[2]);
  // bounce(balls[2]);
  // display(balls[2]);
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

// https://editor.p5js.org/jht9629-nyu/sketches/cMP27JljG
// p5js Code! - Function Basics object literals
