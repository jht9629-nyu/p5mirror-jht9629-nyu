// https://editor.p5js.org/jht9629-nyu/sketches/-GzgH4Gnf
// Conditionals - Bouncing Ball with Gravity v4
// added velX bounceX

let ball = {};
// let x, y, radius;
// let velY, accY; //velocity and acceleration
let bounceFactor = -0.95;

function setup() {
  createCanvas(640, 360);

  ball.velY = 0; // initial velocity
  ball.accY = 0;
  // ball.accY = 0.1; // acceleration/gravity
  ball.bounceY = bounceFactor;
  ball.velX = 0;
  // ball.accX = 0.0;
  ball.accX = -0.1;
  ball.bounceX = -0.5;

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

  let ovelX = ball.velX;
  ball.velX += ball.accX;
  ball.x += ball.velX;
  
  if (ball.y < ball.radius || ball.y > height - ball.radius) {
    // reduce the speed each time ball hits floor
    ball.velY *= ball.bounceY;
    ball.y = constrain(ball.y, ball.radius, height - ball.radius);
  }
  if (ball.x < ball.radius || ball.x > width - ball.radius) {
    // reduce the speed each time ball hits wall
    ball.velX *= ball.bounceX;
    ball.x = constrain(ball.x, ball.radius, width - ball.radius);
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

// https://editor.p5js.org/jht9629-nyu/sketches/BtdFgAST_
// Conditionals - Bouncing Ball with Gravity v3
// Use object literals
