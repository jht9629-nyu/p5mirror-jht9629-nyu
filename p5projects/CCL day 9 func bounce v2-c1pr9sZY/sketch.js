// https://editor.p5js.org/jht9629-nyu/sketches/-c1pr9sZY
// CCL day 9 func bounce v2

let ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
  c: "red",
  w: 15,
};
let ball2 = {
  x: 200,
  y: 300,
  xspeed: -4,
  yspeed: 3,
  // c: "green",
  c: [0,255,0,50], // green with alpha
  w: 20,
};
let ball3 = {
  x: 300,
  y: 0,
  xspeed: 1,
  yspeed: 1,
  c: "yellow",
  w: 30,
};
function setup() {
  createCanvas(600, 400);
  strokeWeight(0.5);
  // noStroke();
}
function draw() {
  // background(0);
  draw_ball(ball1);
  draw_ball(ball2);
  draw_ball(ball3);
}
function draw_ball(ball) {
  move(ball);
  bounce(ball);
  display(ball);
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
  // stroke(255);
  // strokeWeight(4);
  // fill(200, 0, 200);
  fill(ball.c);
  ellipse(ball.x, ball.y, ball.w, ball.w);
}

// Function Basics
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/5.1-function-basics.html
// https://youtu.be/wRHAitGzBrg
// https://editor.p5js.org/codingtrain/sketches/omHOuJY1

// https://editor.p5js.org/jht9629-nyu/sketches/rK86DJt_P
// CCL day 9 func bounce v1
