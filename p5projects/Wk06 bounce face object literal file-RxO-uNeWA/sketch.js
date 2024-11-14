// https://editor.p5js.org/jht9629-nyu/sketches/RxO-uNeWA
// Wk06 bounce face object literal file


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

// https://editor.p5js.org/jht9629-nyu/sketches/CFKtjLxAE
// Wk06 bounce face object literal
