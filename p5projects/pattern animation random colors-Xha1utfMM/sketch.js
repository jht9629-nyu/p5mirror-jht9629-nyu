// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors

let x1;
let y1;
let w1;
let h1;
let s;
function setup() {
  // size canvas to accommodate mobile window
  createCanvas(windowWidth, windowHeight);
  s = 20;
  x1 = 0;
  y1 = 0;
  w1 = width / s;
  h1 = height / s;
  // frameRate(1);
}

function draw() {
  // background(220);  // TRY enabling

  let r = random(255);
  let g = random(255);
  let b = random(255);
  let a = 255;  // Alpha - TRY other values 0 to 255

  fill(r, g, b, a);
  rect(x1, y1, w1, h1);

  x1 = x1 + w1;
  if (x1 >= width) {
    x1 = 0;
    y1 = y1 + h1;
    if (y1 > height) {
      y1 = 0;
    }
  }
}

