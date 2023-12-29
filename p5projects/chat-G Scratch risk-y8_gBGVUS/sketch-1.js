let ellipseSize; // Diameter of the ellipse
let growthRate; // Rate at which the ellipse grows and shrinks

function setup() {
  createCanvas(400, 400);
  ellipseSize = 50; // Initial size of the ellipse
  growthRate = 1; // Rate at which the ellipse grows and shrinks
}

function draw() {
  background(220);
  
  // Update the size of the ellipse
  ellipseSize += growthRate;
  
  // Check if the ellipse has grown too large or too small
  if (ellipseSize > 100 || ellipseSize < 20) {
    growthRate *= -1; // Reverse the growth rate to make the ellipse shrink or grow in the opposite direction
  }
  
  // Draw the ellipse at the center of the canvas
  fill(0, 150, 200);
  ellipse(width / 2, height / 2, ellipseSize, ellipseSize);
}

// https://chat.openai.com/
// provide an coding exercise p5js for variables to create a animation
