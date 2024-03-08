// https://editor.p5js.org/jht9629-nyu/sketches/_8fx3fhlQ
// Melanie pong with object literals
// https://editor.p5js.org/mig9207/full/0mILEU0hW

let m = {
  //
  x: 40,
  y: 50,
  ydir: 1,
  xdir: 1,
};

let mi = {
  x: 140,
  y: 50,
  ydir: 1,
  xdir: 1,
}

let md = {
  x: 250,
  y: 50,
  ydir: 1,
  xdir: 1,
}

let mn = {
  x: 100,
  y: 100,
  ydir: 1,
  xdir: 1,
}

let mh = {
  x: 200,
  y: 100,
  ydir: 1,
  xdir: 1,
}

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

function setup() {
  createCanvas(400, 400);
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

  fill(151, 189, 244);
  render_m(m);

  fill(239, 182, 232);
  render_m(mi);

  fill(255, 255, 148);
  render_m(md);

  fill(148, 246, 148);
  render_m(mn);

  fill(191, 116, 191);
  render_m(mh);

  fill("white");

  paddleX = mouseX;
  paddleY = height - 50;
  paddleW = 100;
  paddleH = 20;

  rect(paddleX, paddleY, paddleW, paddleH);

  check_m(m);

  check_m(mi);

  check_m(md);
  
  check_m(mn);

  check_m(mh);

  //Score
  fill("white");
  textSize(24);
  text("score:" + score, 10, 25);
}

function render_m(m) {
  // fill(151, 189, 244);
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
