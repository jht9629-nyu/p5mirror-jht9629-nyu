// https://editor.p5js.org/jht9629-nyu/sketches/1Tc2xb_4m
// pattern-animation
// global variable x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas

let my = {};

function setup() {
  createCanvas(400, 400);
  my.x = 0;
  my.y = 0;
  strokeWeight(0);
  frameRate(1);
}

function draw() {
  // uncomment to see animation
  background(220);

  // change the global variables for x,y location
  while (my.y < height) {
    // draw a shape
    fill(random(255), random(255), random(255));
    rect(my.x, my.y, 10, 10);
    // ellipse(my.x, my.y, 10, 10)

    my.x += 10;
    if (my.x > width) {
      my.x = 0;
      my.y += 10;
    }
  }
  my.y = 0;
}
