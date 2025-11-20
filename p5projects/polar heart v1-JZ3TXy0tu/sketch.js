// https://editor.p5js.org/jht9629-nyu/sketches/JZ3TXy0tu
// polar heart v1
// draw points as circles

let angle = 0;

function setup() {
  createCanvas(500, 500);
  background(220);

  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
}

function draw() {
  // Move origin to the center of the canvas
  translate(width / 2, height / 2);

  // Parametric equations for a heart shape
  let t = radians(angle);
  let x = 16 * pow(sin(t), 3);
  let y = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));

  // Scale the heart for better visibility
  let scaleFactor = 15; // width approx 500
  x *= scaleFactor;
  y *= scaleFactor;

  circle(x, y, 2);

  angle += 1;
  if (angle >= 360) {
    angle = 0;
    background(220);
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/phdkJtq2y
// polar heart v0
// google: p5js script to draw a heart shape using polar coordinates
