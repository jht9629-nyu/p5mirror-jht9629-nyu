let x = 197;
function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#fae");
  fill(255, 204, 400);
  circle(197, 250, 330);
  // Right Eye
  fill(255, 204, 200);
  circle(260, 200, 90);
  fill("red");
  circle(260, 200, 55);
  fill(255, 204, 500);
  circle(260, 200, 35);
  fill("#222222");
  circle(x + 63, 200, 15);
  // Left eye
  fill(255, 204, 200);
  circle(130, 200, 90);
  fill("red");
  circle(130, 200, 55);
  fill(255, 204, 500);
  circle(130, 200, 35);
  fill("white");
  circle(x - 67, 200, 15);
  // Nose
  fill(200, 400, 255);
  circle(x, 270, 50);
  // fill("blue");
  x = (x + 1) % width
  fill(205, 104, 200);
  rect(124, 320, 155, 50);
  // console.log('x', x);
}
