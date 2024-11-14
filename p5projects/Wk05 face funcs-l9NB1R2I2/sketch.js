// https://editor.p5js.org/jht9629-nyu/sketches/l9NB1R2I2
// Wk05 face funcs

function setup() {
  createCanvas(400, 400);
  strokeWeight(8);
}

function draw() {
  background(220);
  drawHead();
  drawEyes();
  drawMouth();
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

// https://editor.p5js.org/enickles/sketches/GIb81wNrH
// ICM - WK5 - What is this? v2 by enickles


