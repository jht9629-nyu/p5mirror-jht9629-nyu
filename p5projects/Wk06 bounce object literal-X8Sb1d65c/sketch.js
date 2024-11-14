// https://editor.p5js.org/jht9629-nyu/sketches/X8Sb1d65c
// Wk06 bounce object literal

// { x, y, xs, ys, c }
let faces = [];

function setup() {
  createCanvas(400, 400);
  // randomSeed(0);
  for (let i = 0; i < 3; i++) {
    faces.push({
      x: width / 2,
      y: height / 2,
      xs: random(-5, 5),
      ys: random(-5, 5),
      c: random(['red', 'green', 'gold'])
    });
  }
}
function draw() {
  background(220);
  // circle(xp, yp, 20);
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    // drawFace(face.x, face.y, face.c);
    drawFace(face);
    face.x += face.xs;
    face.y += face.ys;
    if (face.x < 0 || face.x > width) {
      face.xs *= -1;
    }
    if (face.y < 0 || face.y > height) {
      face.ys *= -1;
    }
  }
}

// function drawFace(x, y, c) {
function drawFace(face) {
  // background(220);
  push();
  noFill();
  stroke(face.c);
  strokeWeight(8);
  translate(face.x - 200, face.y - 200);
  drawHead();
  drawEyes();
  drawMouth();
  pop();
}
function drawHead() {
  circle(200, 200, 300);
}
function drawEyes() {
  ellipse(150, 150, 40, 100);
  ellipse(250, 150, 40, 100);
}
function drawMouth() {
  arc(200, 225, 200, 160, 0, radians(180), CHORD);
}
