// https://editor.p5js.org/jht9629-nyu/sketches/mupQOIvCw
// many circles object literal

let c1 = { x: 100, y: 100, c: "red", sx: 2, sy: 0 };

let c2 = { x: 100, y: 200, c: "yellow", sx: 0, sy: 2 };

let c3 = { x: 100, y: 200, c: "white", sx: 2, sy: 2 };

let c4 = { x: 100, y: 0, c: "green", sx: 2, sy: 2 };

function setup() {
  createCanvas(400, 300);
  background(0);
  // noStroke()
  // picking random colors for a set of colors
  // let r = color(255,0,0,10)
  // let g = color(0, 255, 0, 10)
  // let y = color(255, 255, 0, 10)
  // c1.c = random([r,g,y,y,y])
  // c2.c = random([r,g,y])
}

function draw() {
  // background(0);
  draw_circle(c1);
  draw_circle(c2);
  draw_circle(c3);
  draw_circle(c4);
}

function draw_circle(cp) {
  fill(cp.c);
  circle(cp.x, cp.y, 64);
  cp.x = (cp.x + cp.sx) % width;
  cp.y = (cp.y + cp.sy) % width;
}

// https://editor.p5js.org/jht1493/sketches/sPa32siCE
// circle func

// https://editor.p5js.org/jht1493/sketches/LpHeTo9Hl
// circleX circleY

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
