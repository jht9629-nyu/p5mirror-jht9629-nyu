// https://editor.p5js.org/jht9629-nyu/sketches/YS8IXXEuP
// pattern-animation-gray
// global variables x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas

let my = {};

function setup() {
  my.x = 0;
  my.y = 0;
  my.len = 30;
  createCanvas(400, 400);
  strokeWeight(0);
  // frameRate(1)
}

function draw() {
  // uncomment to see animation
  // background(220);

  // change the global variables for x,y location
  // while (my.y < height) {
  // draw a shape
  // fill(random(255),random(255), random(255))

  fill(random([10, 200, 255]));
  rect(my.x, my.y, my.len, my.len);
  // ellipse(my.x, my.y, 10, 10)

  my.x += my.len;
  if (my.x > width) {
    my.x = 0;
    my.y += my.len;
    if (my.y > height) {
      my.y = 0;
    }
  }
  my.len = random([10, 20, 30]);
  // }
}
