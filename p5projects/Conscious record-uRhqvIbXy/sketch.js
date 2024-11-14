let x;
let y;

function setup() {
  createCanvas(300, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  circle(x, y, 100);
  x = x + 1;
}
