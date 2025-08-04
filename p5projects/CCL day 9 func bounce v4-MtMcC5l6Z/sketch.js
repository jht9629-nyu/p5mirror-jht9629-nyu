// https://editor.p5js.org/jht9629-nyu/sketches/MtMcC5l6Z
// CCL day 9 func bounce v4
let ball1 = {};
let ball2 = {};
let ball3 = {};
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0.5);
  setup_balls();
}
function draw() {
  // background(0);
  draw_ball(ball1);
  draw_ball(ball2);
  draw_ball(ball3);
}
function setup_balls() {
  ball1.x = 300;
  ball1.y = 200;
  ball1.xspeed = 4;
  ball1.yspeed = -3;
  ball1.c = [255,0,0,50]; // red with alpha
  ball1.w = 15;

  ball2.x = 200;
  ball2.y = 300;
  ball2.xspeed = -4;
  ball2.yspeed = 3;
  ball2.c = [0,255,0,50]; // green with alpha
  ball2.w = 15;

  ball3.x = 300;
  ball3.y = 0;
  ball3.xspeed = 15;
  ball3.yspeed = 15;
  ball3.c = [255,255,0,50]; // yellow with alpha
  ball3.w = 30;
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

// https://editor.p5js.org/jht9629-nyu/sketches/-c1pr9sZY
// CCL day 9 func bounce v2

// https://editor.p5js.org/jht9629-nyu/sketches/cApxlUPho
// CCL day 9 func bounce v3
