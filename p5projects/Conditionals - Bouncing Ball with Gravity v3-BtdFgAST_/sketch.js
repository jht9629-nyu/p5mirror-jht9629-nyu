// https://editor.p5js.org/jht9629-nyu/sketches/BtdFgAST_
// Conditionals - Bouncing Ball with Gravity v3
// Use object literals

let ball = {};
// let x, y, radius;
// let velY, accY; //velocity and acceleration
let friction = -0.95;

function setup() {
  createCanvas(640, 360);

  ball.velY = 0; // initial velocity
  ball.accY = 0.1; // acceleration/gravity

  // position of ball
  ball.x = width / 2;
  ball.y = height / 4;
  ball.radius = 25;
}

function draw() {
  background(0);
  noStroke();

  ball.velY += ball.accY;
  ball.y += ball.velY;
  // circle(x, y, radius * 2);

  if (ball.y < ball.radius || ball.y > height - ball.radius) {
    // reduce the speed each time ball hits floor
    ball.velY *= friction; 
    ball.y = height - ball.radius;
  }

  circle(ball.x, ball.y, ball.radius * 2);
}

// https://editor.p5js.org/jht9629-nyu/sketches/dVHK9-Ns7
// Conditionals - Bouncing Ball with Gravity v2
// added friction

// https://editor.p5js.org/codingtrain/sketches/JTIN5dIVB
//
// Bouncing ball with gravity
// The Coding Train / Daniel Shiffman
