// https://editor.p5js.org/jht9629-nyu/sketches/fGxV3hC-6
// https://editor.p5js.org/jht9629-nyu/sketches/F9lp6QHtA
// The flower gets distorted when calling the function.
// https://editor.p5js.org/Emily_Mayling/sketches/y-VjJKtGb
// week 5 exercise

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES); // Set the drawing mode to degrees
}

function draw() {
  background(220);

  // Move the center of the drawing area to the center of the canvas
  // translate(width / 2, height / 2);

  // flower(100, 100);
  flower(width * 0.5, height * 0.5);
  flower(width * 0.1, height * 0.5);
  flower(width * 0.9, height * 0.5);
}

// what is purpose of x, y parameters?
//
function flower(x, y) {
  push()
  translate(x, y);

  fill(0, 150, 50);
  rect(-10, 0, 20, 150); // Draw the stem

  let angleStep = 360 / 5; // 360 degrees in a circle / 5 petals = 72 degrees

  // noStroke();
  // fill(255, 200, 0); // Yellow center
  // ellipse(0, 0, 50, 50);

  for (let i = 0; i < 5; i++) {
    rotate(angleStep); // draw the 5 petals
    fill(255, 0, 200);
    noStroke();
    ellipse(0, 40, 30, 50); // (x, y, width, height);

    // DO we need to do this 5 times?
    fill(255, 200, 0); // Yellow center
    ellipse(0, 0, 50, 50);
  }
  pop()
}
