// https://editor.p5js.org/jht9629-nyu/sketches/phdkJtq2y
// polar heart v0
// google: p5js script to draw a heart shape using polar coordinates

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS); // Ensure angles are in radians for trigonometric functions
}

function draw() {
  background(220); // Light gray background
  translate(width / 2, height / 2); // Move origin to the center of the canvas

  stroke(255, 0, 0); // Red outline
  strokeWeight(2);
  noFill(); // No fill for the heart shape

  beginShape();
  // Loop through angles from 0 to 2*PI to draw the complete heart
  for (let t = 0; t < TWO_PI; t += 0.01) {
    // Parametric equations for a heart shape
    let x = 16 * pow(sin(t), 3);
    let y = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));

    // Scale the heart for better visibility
    let scaleFactor = 10; 
    vertex(x * scaleFactor, y * scaleFactor);
  }
  endShape(CLOSE); // Connect the last vertex to the first to close the shape
}
