// https://editor.p5js.org/jht9629-nyu/sketches/1Tc2xb_4m
// pattern-animation-shape

// global variable x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas

let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // uncomment to see animation
  // background(220);
  
  // draw a shape
  rect(x, y, 10, 10)
  // ellipse(x, y, 10, 10)
  
  // change the global variables for x,y location
  x += 10;
  if (x > width) {
    x = 0;
    y += 10;
  }
}