// https://editor.p5js.org/jht9629-nyu/sketches/qmtBJEwMe
// circleX follow
// using expression to create a follow the mouse algorithm

let circleX = 200;
let circleY = 150;
let circleSteps = 20;

function setup() {
  createCanvas(400, 300).mousePressed(function () {
    // move circle to center of canvas
    circleX = 200;
    circleY = 150;
  });
  noStroke();
  // background(0);
}

function draw() {
  background(0);
  fill(255);
  // Adjust circleX/Y to move towards the mouse location
  // by calculating the difference in x and y
  let dx = (mouseX - circleX)/circleSteps;
  let dy = (mouseY - circleY)/circleSteps;
  circleX = circleX + dx;
  circleY = circleY + dy;
  circle(circleX, circleY, 64);
  // circleX = mouseX
  // circleY = mouseY
  // circleX = (circleX + circleSteps) % width;
}

// https://editor.p5js.org/jht1493/sketches/S6fXsaBIi
// circleX follow

// https://editor.p5js.org/jht1493/sketches/JVoQAP3aM
// circleX mousePressed

// function mousePressed() {
//   circleX = 0;
// }

// https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// p5js Code! - 2.2 - make your own variable

// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/2-define-variables

// https://www.youtube.com/watch?v=r5Iy3v1co0A
// Guest Tutorial #6: The Modulo Operator with Golan Levin
