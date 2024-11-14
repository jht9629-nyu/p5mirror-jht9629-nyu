// https://editor.p5js.org/jht9629-nyu/sketches/pxFS9AoPS
// WK02 Q1 rect centered resizeCanvas

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // circle(windowWidth / 2, windowHeight / 2, 100);
  let xlen = width / 2;
  let ylen = height / 2;
  let x = (width - xlen)/2
  let y = (height - ylen)/2
  rect(x, y, xlen, ylen);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// https://editor.p5js.org/aas682/sketches/puA7uRxlg
// Like beaufort -aas682

// https://docs.google.com/document/d/1i05s-XzJNXyXdI5br8txUkJSf8bK1sE2/edit#heading=h.gjdgxs
// Wk 02 ICM s5 2024 • Animation
