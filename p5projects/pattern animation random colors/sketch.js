// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors

let x1;
let y1;
let w1;
let h1;

function setup() {
  createCanvas(300, 600);
  x1 = 0;
  y1 = 0;
  w1 = width / 10;
  h1 = height / 10;
  // frameRate(1);
}

function draw() {
  // background(220);

  let r = random(255);
  let g = random(255);
  let b = random(255);
  let a = 255;

  fill(r, g, b, a);
  rect(x1, y1, w1, h1);

  x1 += w1;
  if (x1 >= width) {
    x1 = 0;
    y1 += h1;
    if (y1 > height) {
      y1 = 0;
    }
  }
}

