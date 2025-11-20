// https://editor.p5js.org/jht9629-nyu/sketches/89QM7p9Gb
// polar ellipse
// google: p5js script to draw a ellipse using polar coordinates

let a = 100; // Semi-major axis (half-width)
let b = 150; // Semi-minor axis (half-height)
let angle = 0; // Starting angle for drawing the ellipse
let angleIncrement = 0.05; // How much the angle changes each frame

function setup() {
  createCanvas(600, 400);
  angleMode(RADIANS); // Use radians for trigonometric functions
  noFill(); // Draw only the outline of the ellipse
  stroke(0); // Set stroke color to black
  background(255);
}

function draw() {
  // background(220); // Clear the canvas with a light gray background each frame

  // Translate the origin to the center of the canvas
  // This makes it easier to draw the ellipse centered
  translate(width / 2, height / 2);

  // Calculate x and y coordinates using polar to Cartesian conversion
  // For an ellipse, the radius changes with the angle
  // x = a * cos(angle)
  // y = b * sin(angle)
  let x = a * cos(angle);
  let y = b * sin(angle);

  // Draw a point at the current calculated (x, y) to visualize the path
  // point(x, y);
  circle(x, y, 5);

  // Draw the full ellipse using standard Cartesian coordinates
  // The ellipse function expects the center (0,0 after translate), width (2*a), and height (2*b)
  // ellipse(0, 0, 2 * a, 2 * b);

  // Increment the angle to animate the point moving along the ellipse
  angle += angleIncrement;

  // Optional: Reset angle to keep it within a full circle (0 to TWO_PI)
  if (angle > TWO_PI) {
    angle = 0;
    background(255);
  }
}
