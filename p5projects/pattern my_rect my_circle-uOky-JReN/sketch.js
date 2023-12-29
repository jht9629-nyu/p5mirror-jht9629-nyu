// pattern animation my_rect my_circle
let x1;
let y1;
let w1;
let h1;
function setup() {
  createCanvas(400, 400);
  x1 = 0;
  y1 = 0;
  w1 = width / 10;
  h1 = height / 10;
  noStroke();
  frameRate(1);
}

function draw() {
  // background(220);

  // functions called
  my_rect();
  my_circle();

  x1 += w1;
  if (x1 > width) {
    x1 = 0;
    y1 += h1;
    if (y1 > height) {
      y1 = 0;
      // noLoop();
    }
  }
}

// functions defined
function my_rect() {
  let g = random(255);
  fill(g);
  rect(x1, y1, w1, w1);
}

function my_circle() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let a = 255;
  fill(r, g, b, a);
  // ellipse(x1, y1, w1, w1);
  ellipse(x1+w1/2, y1+w1/2, w1/2, w1/2);
}