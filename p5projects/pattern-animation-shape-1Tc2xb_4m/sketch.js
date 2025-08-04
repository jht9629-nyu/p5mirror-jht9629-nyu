// global variable x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas
let x = 0;
let y = 0;
let s = 20;
function setup() {
  createCanvas(200, 200);
  frameRate(5)
}
function draw() {
  // uncomment to see animation
  // background(220);
  // draw a shape
  fill(random(255))
  rect(x, y, s, s)
  // ellipse(x, y, s, s)
  // change the global variables for x,y location
  x = x + s;
  if (x > width) {
    x = 0;
    y = y + s;
    if (y > height) {
      y = 0;
    }
  }
  console.log('x',x,'y',y);
}

// https://editor.p5js.org/jht9629-nyu/sketches/1Tc2xb_4m
// pattern-animation-shape
