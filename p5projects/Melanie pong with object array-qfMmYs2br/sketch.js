// https://editor.p5js.org/jht9629-nyu/sketches/qfMmYs2br
// Melanie pong with object array

let balls = [];
let nballs = 10;

let speed = 1;

let score = 0;

let song;

let paddleX;
let paddleY;
let paddleW;
let paddleH;

function preload() {
  song = loadSound("mig.wav");
  img = loadImage("nwjns.jpg");
}

// let m = {
//   //
//   x: 40,
//   y: 50,
//   ydir: 1,
//   xdir: 1,
// };

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < nballs; i++) {
    let m = {};
    m.x = random(0,width);
    m.y = random(0,height);
    m.xdir = 1;
    m.ydir = 1;
    m.r = random(255);
    m.g = random(255);
    m.b = random(255);
    balls.push(m)
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function draw() {
  image(img, 0, 0, 400, 400);

  for (let i = 0; i < balls.length; i++) {
    let m = balls[i];
    render_m(m);
  }

  fill("white");

  paddleX = mouseX;
  paddleY = height - 50;
  paddleW = 100;
  paddleH = 20;

  rect(paddleX, paddleY, paddleW, paddleH);

  for (let i = 0; i < balls.length; i++) {
    let m = balls[i];
    check_m(m);
  }

  //Score
  fill("white");
  textSize(24);
  text("score:" + score, 10, 25);
}

function render_m(m) {
  fill(m.r, m.g, m.b);
  circle(m.x, m.y, 20);

  m.x = m.x + m.xdir;
  m.y = m.y + m.ydir;

  if (m.y >= height) {
    m.ydir = m.ydir * -1;
    //  mySound.play();
  }
  if (m.x >= width) {
    m.xdir = m.xdir * -1;
    // mySound.play();
  }
  if (m.x <= 0) {
    m.xdir = m.xdir * -1;
    // mySound.play();
  }
  if (m.y <= 0) {
    m.ydir = m.ydir * -1;
    // mySound.play();
  }
}

function check_m(m) {
  if (
    m.x >= paddleX &&
    m.x <= paddleX + paddleW &&
    m.y >= paddleY &&
    m.y <= paddleY + paddleH
  ) {
    m.ydir = m.ydir * -1;
    score++;
    speed += 2;
    console.log("hit");
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/_8fx3fhlQ
// Melanie pong with object literals
// https://editor.p5js.org/mig9207/full/0mILEU0hW

