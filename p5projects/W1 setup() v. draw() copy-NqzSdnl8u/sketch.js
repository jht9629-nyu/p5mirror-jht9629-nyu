// Code that describes the starting position of a shape that will move
let x = 50;
let y = 0;

function setup() {
  // Code to create a 400x400 canvas
  createCanvas(400, 400);
  // frameRate(1)
  background(220);
  stroke('red');
}

function draw() {
  // Code to draw a gray background
  // background(220);

  if (mouseX > x && mouseX < x + 50) {
    x = mouseX;
  }
  // Code that changes the position of the shape over time
  // x += 100;
  x++;
  // Code to draw the shape
  rect(x, y, 50, 50);
  // Code that describes mouse interaction
  // x = mouseX;
}
