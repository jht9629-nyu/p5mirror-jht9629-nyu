// https://editor.p5js.org/jht9629-nyu/sketches/YS8IXXEuP
// pattern-animation-gray
// global variables x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas

let x = 0;
let y = 0;
let len = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
  // frameRate(1)
}

function draw() {
  // uncomment to see animation
  // background(220);

  fill(random([10, 200, 255]));
  rect(x, y, len, len);
  // ellipse(x, y, 10, 10)

  x += len;
  if (x > width) {
    x = 0;
    y = y + len;
    if (y > height) {
      y = 0;
    }
  }
  len = random([10, 20, 30]);
}
