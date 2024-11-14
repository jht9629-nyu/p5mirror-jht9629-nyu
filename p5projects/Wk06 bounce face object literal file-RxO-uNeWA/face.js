function drawFace(x, y, c) {
  // background(220);
  push();
  translate(x - 200, y - 200);
  stroke(c);
  strokeWeight(8);
  noFill();
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
