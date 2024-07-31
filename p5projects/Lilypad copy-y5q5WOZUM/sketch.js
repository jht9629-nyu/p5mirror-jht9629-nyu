function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(200);
  fill("red");
  // circle(x, y, d)
  circle(200, 200, 200);
  // fill(v1, v2, v3)
  fill("yellow");
  rect(130, 200, 30, 20);
  rect(200, 200, 30, 20);
  fill("green");
  rect(150, 250, 60, 20);
}
