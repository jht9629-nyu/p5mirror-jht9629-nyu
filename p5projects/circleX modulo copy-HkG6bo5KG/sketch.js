// https://editor.p5js.org/jht9629-nyu/sketches/HkG6bo5KG
// circleX modulo
// using the modulo operation to keep an animation on the canvas

let circleX = 100;
let circleSpeed = 2;

function setup() {
  createCanvas(400, 300).mousePressed(function () {
    circleX = 0;
  })
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circleX, 150, 64);
  circleX = (circleX + circleSpeed) % width;
}

// function mousePressed() {
//   circleX = 0;
// }

// https://editor.p5js.org/jht1493/sketches/JVoQAP3aM
// circleX modulo

// https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// p5js Code! - 2.2 - make your own variable

// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/2-define-variables

// https://www.youtube.com/watch?v=r5Iy3v1co0A
// Guest Tutorial #6: The Modulo Operator with Golan Levin
