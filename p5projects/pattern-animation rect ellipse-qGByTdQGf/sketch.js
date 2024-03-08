// https://editor.p5js.org/jht9629-nyu/sketches/qGByTdQGf
// pattern-animation rect ellipse

let my = {};

function setup() {
  createCanvas(400, 400);
  my.x = 0;
  my.y = 0;
  strokeWeight(0);
  // frameRate(1);
}

function draw() {
  // uncomment to see animation
  // background(220);

  // Select a random color
  fill(random(255), random(255), random(255));

  // select random size
  let rz = random([10, 20, 30]);

  // draw a shape
  if (random([0, 1])) {
    rect(my.x, my.y, rz, rz);
  } else {
    ellipse(my.x, my.y, rz, rz);
  }

  // change the global variables for x,y location
  my.x += rz;
  if (my.x > width) {
    my.x = 0;
    my.y += rz;
    
    
    
    
    if (my.y > height) {
      my.y = 0;
    }
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/IO8kA4nVt
// pattern-animation random rz

// https://editor.p5js.org/jht9629-nyu/sketches/1Tc2xb_4m
// pattern-animation
// global variable x,y used to created pattern or animation
// of shape flowing from left to right, top to bottom of canvas
