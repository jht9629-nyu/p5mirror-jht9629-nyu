x = 100;

function setup() {
  createCanvas(400, 650);
}

function draw() {
  background(103, 113, 252);
  // ^ backround with rbg

  // v fills all of the shapes w/ a color
  fill(252, 103, 163);
  noStroke();
  // ^ removes stroke around shapes

  circle(x, 200, 100);
  circle(x+100, 200, 100);
  triangle(x-40, 230, x+50, 350, x+140, 230);
  rect(x+30, 200, 50, 50);
  // ^ shapes that make up the heart
  x = frameCount;

  
  // v flower, ignore for now
  push();
  rotate(QUARTER_PI);
  fill(300, 300, 300);
  ellipse(260, -130, 20, 50);
  pop();

  push();
  rotate(HALF_PI);
  fill(300, 300, 300);
  ellipse(70, -270, 20, 50);
  pop();

  push();
  rotate(PI);
  fill(100, 100, 200);
  ellipse(90, 90, 20, 50);
  pop();

  fill(100, 100, 200);
  ellipse(260, -140, 20, 50);

  fill(200, 100, 100);
  circle(300, 70, 40);
}
