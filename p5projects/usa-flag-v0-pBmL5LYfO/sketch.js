// https://editor.p5js.org/jht9629-nyu/sketches/pBmL5LYfO
// usa-flag-v0

// co-pilot:
// p5js code to draw a US of A flag
// >> stars at odd angle

// let angleOffset = 0.8999999999999999;
let angleOffset = 1

function setup() {
  createCanvas(800, 400);
  // noLoop();
}

function draw() {
  background(255);

  // Dimensions
  let stripeHeight = height / 13;
  let unionWidth = width * 0.4;
  let unionHeight = stripeHeight * 7;

  // Draw stripes
  for (let i = 0; i < 13; i++) {
    if (i % 2 === 0) {
      fill(191, 10, 48); // Red
    } else {
      fill(255); // White
    }
    noStroke();
    rect(0, i * stripeHeight, width, stripeHeight);
  }

  // Draw blue union
  fill(10, 49, 97); // Blue
  rect(0, 0, unionWidth, unionHeight);

  // Draw stars
  let starRows = 9;
  let starCols = 11;
  let starSize = stripeHeight * 0.6;
  let xOffset = unionWidth / starCols;
  let yOffset = unionHeight / starRows;

  fill(255); // White stars
  for (let row = 0; row < starRows; row++) {
    for (let col = 0; col < starCols; col++) {
      if ((row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)) {
        let x = col * xOffset + xOffset / 2;
        let y = row * yOffset + yOffset / 2;
        drawStar(x, y, starSize / 2, starSize / 4, 5);
      }
    }
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let aa = 0; aa < TWO_PI; aa += angle) {
    let a = aa + angleOffset
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}