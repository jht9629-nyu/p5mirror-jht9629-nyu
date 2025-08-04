// https://editor.p5js.org/jht9629-nyu/sketches/1Tc2xb_4m
// pattern-animation-shape v2 console.log
// global variable x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas
let x = 0;
let y = 0;
let s = 50; // size of shape
function setup() {
  // createCanvas(200, 200);
  createCanvas(windowWidth, windowHeight);
  // frameRate(1);
}
function draw() {
  // uncomment to see animation
  // background(220);
  // draw a shape
  fill(random(255),random(255),random(255))
  rect(x, y, s, s)
  // ellipse(x, y, s, s)
  // change the global variables for x,y location
  x = x + s; // move to the right
  if (x > width) {
    x = 0; // reset to left edge of canvas
    y = y + s; // move down
    // console.log('x',x,'y',y);
    if (y > height) {
      y = 0; // reset to top of canvas
    }
  }
  console.log('x',x,'y',y);
}

// https://editor.p5js.org/jht9629-nyu/sketches/1Tc2xb_4m
// pattern-animation-shape