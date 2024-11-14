// https://editor.p5js.org/jht9629-nyu/sketches/oboc_6nB3
// windowResized

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  // Draw a circle at the center.
  circle(width / 2, height / 2, 50);
}

// Resize the canvas when the
// browser's size changes.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // console.log(width, height);
}

// https://p5js.org/reference/p5/windowResized/
// A gray canvas with a white circle at its center. 
// The canvas takes up the entire browser window. 
// It changes size to match the browser window.