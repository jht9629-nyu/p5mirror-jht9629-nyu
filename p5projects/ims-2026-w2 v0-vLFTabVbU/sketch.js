// https://editor.p5js.org/jht9629-nyu/sketches/vLFTabVbU
// ims-2026-w2 v0

// https://editor.p5js.org/jerryisjenny/sketches/-pYXAsW3B
// 
let x, y, dx, dy;
let angle = 0;
let lastTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Use HSB (Hue, Saturation, Brightness) color mode for vibrant neon colors
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  x = width / 2;
  y = height / 2;
  dx = 6;
  dy = 8;
  background(0);
}

function draw() {
  // Make background transparent
  background(0, 10);
  // Get the current time in seconds
  let now = millis() / 1000;
  // Check if 5 seconds have passed since the last teleport
  if (now - lastTime > 5) {
    lastTime = now;
    //Flash a pure white screen upon teleportation
    background(255);
    // Teleport the shape to a new random location
    x = random(width * 0.2, width * 0.8);
    y = random(height * 0.2, height * 0.8);
    dx = random([-8, -6, 6, 8]);
    dy = random([-8, -6, 6, 8]);
  }
  // Bounce off the edges
  x += dx;
  y += dy;
  if (x < 200 || x > width - 200) dx *= -1;
  if (y < 200 || y > height - 200) dy *= -1;
  //Draw the rotating geometry
  // Calculate the current hue based on frame count (loops 0 to 359)
  let hue = frameCount % 360;
  push();
  translate(x, y);
  rotate(angle);
  // Draw the outer square
  noFill();
  stroke(hue, 80, 100); // Dynamic hue based on frameCount
  strokeWeight(2);
  rect(0, 0, 400, 400);
  // Draw the inner square using a complementary color (+180 hue)
  rotate(-angle * 2.5);
  stroke((hue + 180) % 360, 80, 100);
  rect(0, 0, 400, 400);
  pop();
  // Increment the angle slightly for the next frame to create continuous rotation
  angle += 0.03;
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); // Redraw a solid black background immediately to prevent visual glitches on resize
}
