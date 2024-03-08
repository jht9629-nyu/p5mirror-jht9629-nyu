// pattern animation my_shape
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
}

function draw() {
  // background(220);

  // function created to draw my shape
  my_shape();

  x1 += w1;
  if (x1 > width) {
    x1 = 0;
    y1 += h1;
    if (y1 > height) {
      y1 = 0;
    }
  }
}

// user defined function
function my_shape() {
  
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let a = 255;

  fill(r, g, b, a);
  rect(x1, y1, w1, w1);
}
