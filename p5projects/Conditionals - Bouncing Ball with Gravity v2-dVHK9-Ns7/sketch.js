// https://editor.p5js.org/jht9629-nyu/sketches/dVHK9-Ns7
// Conditionals - Bouncing Ball with Gravity v2
// added friction

// https://editor.p5js.org/codingtrain/sketches/JTIN5dIVB
//
// Bouncing ball with gravity
// The Coding Train / Daniel Shiffman

let x, y, radius;
let velY, accY; //velocity and acceleration
let friction = -0.95;

function setup() {
  createCanvas(640, 360);
  radius = 25;

  velY = 0; //initial velocity
  accY = 0.1; //acceleration/gravity

  //position of ball
  x = width / 2;
  y = height / 4;
}

function draw() {
  background(0);
  noStroke();

  velY += accY;
  y += velY;
  // circle(x, y, radius * 2);

  if (y < radius || y > height - radius) {
    // reduce the speed each time ball hits floor
    velY *= friction; 
    y = height - radius;
  }

  circle(x, y, radius * 2);
}
