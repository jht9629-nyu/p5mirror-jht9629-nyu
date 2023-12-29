// https://editor.p5js.org/jht9629-nyu/sketches/N5pj99g-N
// two circles object literal

let cir1 = { x: 100, y: 100, c: "red", sx: 2, sy: 2 };

let cir2 = { x: 100, y: 200, c: "yellow", sx: 0, sy: 2 };

//   c: [255, 0, 0, 10], // [red,green,blue,alpha],

function setup() {
  createCanvas(400, 300);
  background(0);
  // noStroke()
}

function draw() {
  fill(cir1.c);
  circle(cir1.x, cir1.y, 64);
  cir1.x = (cir1.x + cir1.sx) % width;
  cir1.y = (cir1.y + cir1.sy) % width;

  fill(cir2.c);
  circle(cir2.x, cir2.y, 64);
  cir2.x = (cir2.x + cir2.sx) % width;
  cir2.y = (cir2.y + cir2.sy) % width;
}

// function mousePressed() {
//   circleX = 0;
// }

// https://editor.p5js.org/jht1493/sketches/LpHeTo9Hl
// circleX circleY

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC
