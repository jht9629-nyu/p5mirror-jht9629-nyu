// https://editor.p5js.org/jht9629-nyu/sketches/gekE9hlfL
// added colors to find the mouse

// https://editor.p5js.org/ChanningMu/sketches/Km5sRcCxs
// Rats by ChanningMu
// Project Documentation: The Rat Catcher Game
// 1. Mouse-controlled ellipse trail.
// 2. Time-based random ellipses to cover the screen.
// 3. A mouse that starts at a random position and moves randomly.

// Spot properties for the random ellipses
var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 225,
  g: 0,
  b: 0
};

// Mouse properties
let mouse = {
  x: 0,
  y: 0,
  size: 0,
  xSpeed: 0,
  ySpeed: 0
};

function setup() {
  createCanvas(600, 400);
  background(255, 204, 0); // Set yellow background once in setup()
  
  // Set the mouse's initial random position
  mouse.x = random(width);
  mouse.y = random(height);
  
  // Set the mouse's random size
  mouse.size = random(20, 40);
  
  // Set the mouse's initial random speed
  mouse.xSpeed = random(-2, 2);
  mouse.ySpeed = random(-2, 2);
}

function draw() {
  // Update the mouse's position
  mouse.x += mouse.xSpeed;
  mouse.y += mouse.ySpeed;
  
  // Prevent the mouse from going off-screen by bouncing
  if (mouse.x > width || mouse.x < 0) {
    mouse.xSpeed *= -1;
  }
  if (mouse.y > height || mouse.y < 0) {
    mouse.ySpeed *= -1;
  }

  // Element 2: Randomly appearing ellipses
  col.r = random(0, 100);
  col.g = random(0, 0);
  col.b = random(100, 255);
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke(); // Remove comma here
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, 50, 50);

  // Element 1: Mouse-controlled trail
  noStroke();
  fill(255, 204, 0); // Yellow fill to match the background
  ellipse(mouseX, mouseY, 40, 40);

  // Element 3: The random mouse drawing
  noStroke();
  fill(50, 200, 100); // Vibrant green for contrast

  // Drawing the mouse: body, head, and tail
  // Body
  push();
  fill('red');
  ellipse(mouse.x, mouse.y, mouse.size, mouse.size * 0.8);
  
  // Head
  fill('gold');
  ellipse(mouse.x + mouse.size * 0.35, mouse.y, mouse.size * 0.7, mouse.size * 0.7);
  
  // Tail
  fill('green');
  stroke(50, 200, 100);
  strokeWeight(2);
  line(mouse.x - mouse.size * 0.5, mouse.y, mouse.x - mouse.size * 0.5 - mouse.size * 0.5, mouse.y);
  pop();
}
