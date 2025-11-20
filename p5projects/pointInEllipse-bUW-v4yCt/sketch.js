// https://editor.p5js.org/jht9629-nyu/sketches/bUW-v4yCt

// google: p5js test if point is in side ellipse

let ellipseX = 200;
let ellipseY = 150;
let ellipseW = 100;
let ellipseH = 150;
let hit = false;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  
  // Test if the mouse point is inside the ellipse
  hit = pointInEllipse(mouseX, mouseY, ellipseX, ellipseY, ellipseW, ellipseH);

  if (hit) {
    fill(255, 0, 0); // Change color to red if inside
  } else {
    fill(255); // White if outside
  }
  
  // Draw the ellipse
  ellipse(ellipseX, ellipseY, ellipseW, ellipseH);
  
  // Draw the mouse point (optional)
  stroke(0);
  point(mouseX, mouseY);
}

// Custom pointInEllipse function
function pointInEllipse(px, py, cx, cy, w, h) {
  let rx = w / 2;
  let ry = h / 2;
  let value = sq(px - cx) / sq(rx) + sq(py - cy) / sq(ry);
  return value <= 1;
}
