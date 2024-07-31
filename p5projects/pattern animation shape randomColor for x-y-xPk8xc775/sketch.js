// https://editor.p5js.org/jht9629-nyu/sketches/xPk8xc775
// pattern animation shape randomColor for x-y

let x;
let y;
let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  w = width / 10;
  h = height / 10;

  for (y = 0; y < height; y += h) {
    for (x = 0; x < width; x += w) {
      drawRect();
      drawShape();
    }
  }
}

function drawShape() {
  randomColor();
  ellipse(x + w / 2, y + h / 2, w, h);
}

function drawRect() {
  randomColor();
  rect(x, y, w, h);
}

function randomColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let a = 255; // Alpha - TRY other values 0 to 255
  fill(r, g, b, a);
}

// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors

// https://editor.p5js.org/jht9629-nyu/sketches/VvotY-hls
// pattern animation shape randomColor
