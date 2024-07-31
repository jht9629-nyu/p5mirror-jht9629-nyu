// https://editor.p5js.org/jht9629-nyu/sketches/VzFp9JrIe
// pattern animation random mix

let x;
let y;
let w;
let h;

function setup() {
  // size canvas to accommodate mobile window
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  w = width / 10;
  h = height / 10;
  // frameRate(1);
}

function draw() {
  // background(220);  // TRY enabling

  let r = random(255);
  let g = random(255);
  let b = random(255);
  let a = 255;  // Alpha - TRY other values 0 to 255

  fill(r, g, b, a);
  rect(x, y, w, h);

  w += random(-2,2) * 5
  
  x = x + w;
  if (x >= width) {
    x = 0;
    y = y + h;
    if (y > height) {
      y = 0;
    }
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors
