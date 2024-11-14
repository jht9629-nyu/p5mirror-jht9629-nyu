// https://editor.p5js.org/jht9629-nyu/sketches/DPUic6Iyi
// Wk05 balls parameters

let ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
};
let ball2 = {
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
function move(ball) {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
function bounce(ball) {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}
function display(ball) {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 24, 24);
}

// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1
