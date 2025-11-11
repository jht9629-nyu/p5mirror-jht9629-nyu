// https://editor.p5js.org/jht9629-nyu/sketches/250TAeMiE
// Conditionals - Bouncing Ball with Gravity v5
// use drag and bounce from
// https://editor.p5js.org/yh6371/sketches/cl9-Q8POR

let ball = {};

function setup() {
  createCanvas(640, 360);

  // Air resistance
  ball.drag = 0.995; 
  // Energy retained on edge bounce
  ball.bounce = 0.88; 
  // Begin with random velocity
  ball.vx = random(-4,4);
  ball.vy = random(-4,4); 

  // position of ball
  ball.x = width / 2;
  ball.y = height / 4;
  ball.radius = 25;
}

function draw() {
  background(0);
  noStroke();
  
  ball.x += ball.vx;
  ball.y += ball.vy;

  ball.vx *= ball.drag;
  ball.vy *= ball.drag;
  
  if (ball.y < ball.radius || ball.y > height - ball.radius) {
    // reduce the speed each time ball hits floor
    ball.vy *= -ball.bounce;
    ball.y = constrain(ball.y, ball.radius, height - ball.radius);
  }
  if (ball.x < ball.radius || ball.x > width - ball.radius) {
    // reduce the speed each time ball hits wall
    ball.vx *= -ball.bounce;
    ball.x = constrain(ball.x, ball.radius, width - ball.radius);
  }

  circle(ball.x, ball.y, ball.radius * 2);
}

function mousePressed() {
  ball.x = mouseX;
  ball.y = mouseY;
  ball.vx = random(-4,4);
  ball.vy = random(-4,4); 
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

// https://editor.p5js.org/jht9629-nyu/sketches/-GzgH4Gnf
// Conditionals - Bouncing Ball with Gravity v4
// added velX bounceX
