let x = 250;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightblue");
  fill("beige");
  // circle(x, y, d)
  circle(200, 200, 200);
  rect(160, 250, 60, 20);
  // circle(x, 250, 190, 50);
  // circle(x, 150, 190, 50);
  square(185, 210, 25);
  fill("rgb(131,56,56)");
  circle(x, 190, 20);
  circle(x-100, 190, 20);
  fill("beige");
  square(190, 225, 5);
  square(200, 225, 5);
  x = x + 1;
}
