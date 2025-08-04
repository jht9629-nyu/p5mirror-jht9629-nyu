// https://editor.p5js.org/jht9629-nyu/sketches/Vb-sQLlNh
// CCL day 9 func bounce v5
let ball1 = {};
let ball2 = {};
let ball3 = {};
let myAlpha = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // strokeWeight(0.5);
  noStroke();
  setup_balls();
}
function draw() {
  // background(0);
  draw_ball(ball1);
  draw_ball(ball2);
  draw_ball(ball3);
}
function setup_balls() {
  ball3.x = width/2;
  ball3.y = height/2;
  ball3.xspeed = random(10,15); // 15
  ball3.yspeed = random(10,15); // 15
  ball3.c = [255,255,0,myAlpha]; // yellow with alpha
  ball3.w = 30;

  ball1.x = width/2;
  ball1.y = height/2;
  ball1.xspeed = random(5,10); // 5;
  ball1.yspeed = -random(5,10);
  ball1.c = [255,0,0,myAlpha]; // red with alpha
  ball1.w = 20;

  ball2.x = width/2;
  ball2.y = height/2;
  ball2.xspeed = -random(5,10); // -5
  ball2.yspeed = random(5,10);
  ball2.c = [0,255,0,myAlpha]; // green with alpha
  ball2.w = 15;

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
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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

// https://editor.p5js.org/jht9629-nyu/sketches/MtMcC5l6Z
// CCL day 9 func bounce v4
