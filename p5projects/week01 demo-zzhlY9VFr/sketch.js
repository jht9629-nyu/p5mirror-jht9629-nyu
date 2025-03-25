function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // circle(x, y, d)
  fill("red");
  circle(200, 200, 100);
  fill("green");
  circle(200, 300, 100);
  triangle(30, 75, 58, 20, 86, 75);
}
