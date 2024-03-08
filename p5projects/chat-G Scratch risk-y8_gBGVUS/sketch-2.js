let circleX; // X-coordinate of the circle
let circleY; // Y-coordinate of the circle
let speedX; // Speed of the circle along the X-axis
let speedY; // Speed of the circle along the Y-axis
let circleColor; // Color of the circle

function setup() {
  createCanvas(400, 400);
  circleX = width / 2; // Start the circle in the middle of the canvas horizontally
  circleY = height / 2; // Start the circle in the middle of the canvas vertically
  speedX = 2; // Initial speed along the X-axis
  speedY = 2; // Initial speed along the Y-axis
  circleColor = color(0, 150, 200); // Initial color of the circle
}

function draw() {
  background(220);
  
  // Update the circle's position based on the speed
  circleX += speedX;
  circleY += speedY;
  
  // Check if the circle has reached the canvas edges
  if (circleX > width || circleX < 0) {
    speedX *= -1; // Reverse the speed to change the circle's horizontal direction
    changeCircleColor(); // Change the color when bouncing off the edges
  }
  
  if (circleY > height || circleY < 0) {
    speedY *= -1; // Reverse the speed to change the circle's vertical direction
    changeCircleColor(); // Change the color when bouncing off the edges
  }
  
  // Draw the circle at the updated position with the current color
  fill(circleColor);
  ellipse(circleX, circleY, 50, 50);
}

function changeCircleColor() {
  // Generate random color values
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
  circleColor = color(r, g, b);
}
