// https://editor.p5js.org/jht9629-nyu/sketches/57DXiQJnK
// circleX buttons
// creating buttons to set variables

let circleX = 100;
let circleY = 150;
let circleSpeed = 2;
let circleDiam = 64;

function setup() {
  createCanvas(400, 300).mousePressed(function () {
    circleX = 0;
  })
  createButton('backg 0').mousePressed(function() {
    console.log('calling background');
    background(0);
  });
  createButton('down').mousePressed(function() {
    circleY = (circleY + 40) % height
  });
  background(0);
}

function draw() {
  // background(0);
  noStroke();
  // fill(255);
  fill(255, 10);
  circle(circleX, circleY, circleDiam);
  circleX = (circleX + circleSpeed) % width;
}

// https://editor.p5js.org/jht1493/sketches/L55nCCMds
// circleX buttons

// Move to myCanvas.mousePressed to allow buttons
// to work.
// function mousePressed() {
//   circleX = 0;
// }

// https://editor.p5js.org/jht1493/sketches/JVoQAP3aM
// variable circleX myCanvas

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

// https://www.youtube.com/watch?v=r5Iy3v1co0A
// Guest Tutorial #6: The Modulo Operator with Golan Levin
