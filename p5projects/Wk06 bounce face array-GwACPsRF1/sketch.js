// https://editor.p5js.org/jht9629-nyu/sketches/GwACPsRF1
// Wk06 bounce face array

// x position, x speed
let xp = [], xs = [];
// y position, y speed
let yp = [], ys = [];
// colors
let cc = ['red', 'green', 'gold'];

function setup() {
  createCanvas(400, 400);
  for (n = 0; n < 3; n++) {
    xp[n] = width / 2;
    xs[n] = random(-5,5);
    yp[n] = height / 2;
    ys[n] = random(-5,5);
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < xp.length; i++) {
    
    //circle(xp, yp, 30);
  
    drawFace(xp[i], yp[i], cc[i]);

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

// https://editor.p5js.org/jht9629-nyu/sketches/qlJQhnTzH
// Wk06 bounce face

