// https://editor.p5js.org/jht1493/sketches/LpHeTo9Hl
// circleX circleY

let c1 = {
  x: 100,
  y: 100,
  c: [255, 0, 0, 10], // [red,green,blue,alpha],
  sx: 2,
  sy: 2
};

let c2 = {
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
  fill(c1.c);
  circle(c1.x, c1.y, 64);
  c1.x = (c1.x + c1.sx) % width;
  c1.y = (c1.y + c1.sy) % width;

  fill(c2.c);
  circle(c2.x, c2.y, 64);
  c2.x = (c2.x + c2.sx) % width;
  c2.y = (c2.y + c2.sy) % width;
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
