// https://editor.p5js.org/jht9629-nyu/sketches/rXhPgZ1k6
// 2.2.3 circleX width ui

let my = {
  circleX: 0,
  circleY: 100,
  diam: 64
};
// let circleX = 0;
// let circleY = 100;
// let diam = 64;

let my2 = {
  circleX: 0,
  circleY: 200,
  diam: 64
};

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    my.circleX = mouseX;
    my.circleY = mouseY;
  });
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  draw_my(my);
//   circle(my.circleX, my.circleY, my.diam);
//   my.circleX = (my.circleX + 1) % width;
  
  fill(255,0,0);
  draw_my(my2);
//   circle(my2.circleX, my2.circleY, my2.diam);
//   my2.circleX = (my2.circleX + 1) % width;
}

function draw_my(my) {
  circle(my.circleX, my.circleY, my.diam);
  my.circleX = (my.circleX + 1) % width;
}


// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 circleX width ui

// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 circleX % width ui

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable circleX % width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC