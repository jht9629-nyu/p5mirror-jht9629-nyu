let x;
let s;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  s = 5;
}

function draw() {
  background(220);
  circle(x, height / 2, 20);
  x += s;
  if (x > width || x < 0) {
    s = s * -1;
  }
}
