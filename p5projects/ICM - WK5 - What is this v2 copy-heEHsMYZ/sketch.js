// https://editor.p5js.org/jht9629-nyu/sketches/hbS0akCtL
// ICM - WK5 - What is this? v2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(8);
  drawHead();
  drawEyes();
  drawMouth();
  drawTooth(200, 225);
  drawTooth(200+30, 225);
  drawTooth(200+30*2, 225);
}

function drawTooth(x, y) {
  // let x = 200
  // let y = 225
  square(x, y, 16);
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
// ICM - WK5 - What is this? v2 --enickles



