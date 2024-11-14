// https://editor.p5js.org/jht9629-nyu/sketches/qlJQhnTzH
// Wk06 bounce face

// x position, x speed
let xp, xs;
// y position, y speed
let yp, ys;

function setup() {
  createCanvas(400, 400);
  xp = width / 2;
  xs = random(-5,5);
  yp = height / 2;
  ys = random(-5,5);
}

function draw() {
  background(220);
  
  //circle(xp, yp, 30);
  drawFace(xp, yp, 'red');
  
  xp += xs;
  yp += ys;
  
  if (xp < 0 || xp > width) {
    xs *= -1;
  }
  if (yp < 0 || yp > height) {
    ys *= -1;
  }
}

function drawFace(x, y, c) {
  // background(220);
  push();
  translate(x-200,y-200);
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


// https://editor.p5js.org/jht9629-nyu/sketches/l9NB1R2I2
// Wk05 face funcs

