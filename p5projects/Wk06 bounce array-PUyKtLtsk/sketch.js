// https://editor.p5js.org/jht9629-nyu/sketches/bauV8dDz1
// Wk06 bounce array

let xp = [],
  yp = [],
  xs = [],
  ys = [];
function setup() {
  createCanvas(400, 400);
  // randomSeed(0);
  for (let i = 0; i < 5; i++) {
    xp.push( width / 2);
    yp.push( height / 2);
    xs.push( random(-5, 5));
    ys.push( random(-5, 5));
  }
}
function draw() {
  background(220);
  // circle(xp, yp, 20);
  for (let i = 0; i < xp.length; i++) {
    drawFace(xp[i], yp[i], "red");
    xp[i] += xs[i];
    yp[i] += ys[i];
    if (xp[i] < 0 || xp[i] > width) {
      xs[i] *= -1;
    }
    if (yp[i] < 0 || yp[i] > height) {
      ys[i] *= -1;
    }
  }
}

function drawFace(x, y, c) {
  // background(220);
  push();
  noFill();
  stroke(c);
  strokeWeight(8);
  translate(x - 200, y - 200);
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
