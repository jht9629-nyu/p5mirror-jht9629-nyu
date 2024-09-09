// https://editor.p5js.org/jht9629-nyu/sketches/8uQ3OCxZH
// chatgpt bouncing ball

// write a p5js bouncing ball sketch
// https://chatgpt.com/c/66d9a3c0-0930-8002-ab05-3ffd5d7c0c24

let x, y; // Position of the ball
let xSpeed, ySpeed; // Speed of the ball
let ballSize = 50; // Size of the ball

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  xSpeed = 5;
  ySpeed = 3;
}

function draw() {
  background(220);

  // Move the ball
  x += xSpeed;
  y += ySpeed;

  // Check for collision with the walls
  if (x > width - ballSize / 2 || x < ballSize / 2) {
    xSpeed *= -1; // Reverse direction on X-axis
  }
  if (y > height - ballSize / 2 || y < ballSize / 2) {
    ySpeed *= -1; // Reverse direction on Y-axis
  }

  // Draw the ball
  fill(0, 100, 255);
  ellipse(x, y, ballSize, ballSize);
}
