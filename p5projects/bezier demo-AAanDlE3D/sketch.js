// Click the mouse near the red dot in the top-left corner
// and drag to change the curve's shape.

let x2 = 10;
let y2 = 10;
let isChanging = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  // Draw the anchor points in black.
  stroke(0);
  strokeWeight(5);
  point(85, 20);
  point(15, 80);

  // Draw the control points in red.
  stroke(255, 0, 0);
  point(x2, y2);
  point(90, 90);

  // Draw a black bezier curve.
  noFill();
  stroke(0);
  strokeWeight(1);
  bezier(85, 20, x2, y2, 90, 90, 15, 80);

  // Draw red lines from the anchor points to the control points.
  stroke(255, 0, 0);
  line(85, 20, x2, y2);
  line(15, 80, 90, 90);
}

// Start changing the first control point if the user clicks near it.
function mousePressed() {
  if (dist(mouseX, mouseY, x2, y2) < 20) {
    isChanging = true;
  }
}

// Stop changing the first control point when the user releases the mouse.
function mouseReleased() {
  isChanging = false;
}

// Update the first control point while the user drags the mouse.
function mouseDragged() {
  if (isChanging === true) {
    x2 = mouseX;
    y2 = mouseY;
  }
}