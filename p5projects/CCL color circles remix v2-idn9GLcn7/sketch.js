let w = 400
let h = 400

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width
  h = width
  noFill();
  stroke(255);
  strokeWeight(8);
}

function draw() {
  background(32);

  // corner circles
  stroke('red')
  circle(0, 0, w);
  circle(w, 0, w);
  circle(0, h, w);
  circle(w, h, w);

  // top, bottom, left, and right circles
  stroke('green')
  circle(w/2, 0, w);
  circle(w/2, h, w);
  circle(0, h/2, w);
  circle(w, w/2, w);

  // centered circles
  stroke('gold')
  circle(w/2, h/2, w);
  circle(w/2, h/2, w/2);
}

// https://happycoding.io/tutorials/p5js/calling-functions/circles
