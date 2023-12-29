// https://editor.p5js.org/jht1493/sketches/LpHeTo9Hl
// circleX circleY

let acircle = {
  x: 100,
  y: 100,
  c: [255, 0, 0, 10], // [red,green,blue,alpha],
  sx: 2,
  sy: 0
};

let bcircle = {
  x: 100,
  y: 200,
  // c: [255,0,0,10]
  c: 'yellow',
  sx: 0,
  sy: 2
};

function setup() {
  createCanvas(400, 300);
  background(0);
  // noStroke()
}

function draw() {
  fill(acircle.c);
  circle(acircle.x, acircle.y, 64);
  acircle.x = (acircle.x + acircle.sx) % width;
  acircle.y = (acircle.y + acircle.sy) % width;

  fill(bcircle.c);
  circle(bcircle.x, bcircle.y, 64);
  bcircle.x = (bcircle.x + bcircle.sx) % width;
  bcircle.y = (bcircle.y + bcircle.sy) % width;
}

// function mousePressed() {
//   circleX = 0;
// }

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC
