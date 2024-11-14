// https://editor.p5js.org/jht9629-nyu/sketches/CFKtjLxAE
// Wk06 bounce face object literal

let faces = [];
// {x, xs, y, yx, clr }

let cc = ["red", "green", "gold"];

function setup() {
  createCanvas(400, 400);
  // randomSeed(6);
  for (n = 0; n < 3; n++) {
    faces.push({
      x: width / 2,
      xs: random(-5, 5),
      y: height / 2,
      ys: 0,
      // ys: random(-5, 5),
      clr: cc[n],
    });
  }
}

function draw() {
  background(220);

  for (let i = 0; i < faces.length; i++) {
    //circle(xp, yp, 30);
    let face = faces[i];
    drawFace(face.x, face.y, face.clr);

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

function mousePressed() {
  faces.push({
    x: mouseX,
    xs: random(-5, 5),
    y: mouseY,
    ys: 0,
    // ys: random(-5, 5),
    clr: random(cc),
  });
}

// https://editor.p5js.org/jht9629-nyu/sketches/l9NB1R2I2
// Wk05 face funcs

// https://editor.p5js.org/jht9629-nyu/sketches/qlJQhnTzH
// Wk06 bounce face

// https://editor.p5js.org/jht9629-nyu/sketches/GwACPsRF1
// Wk06 bounce face array
