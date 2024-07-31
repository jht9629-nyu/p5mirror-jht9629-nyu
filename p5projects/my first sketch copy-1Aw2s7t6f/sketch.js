// https://editor.p5js.org/jht9629-nyu/sketches/GmkAvUauV
// Day 1, 2 - basic animation

let x = 150

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(200);
  fill("red");
  // circle(x, y, d)
  circle(200, 200, 200);
  // fill(v1, v2, v3)
  // fill( value )
  fill("yellow");
  // rect(x, y, w, h)
  rect(130, 200, 30, 10);
  rect(200, 200, 30, 10);
  fill("green");
  rect(x, 250, 60, 20);
  fill(0)
  rect(190, 300, 20, 400)
  rect(100, 400, 200, 20)
  x = (x + 1) % width;
}
