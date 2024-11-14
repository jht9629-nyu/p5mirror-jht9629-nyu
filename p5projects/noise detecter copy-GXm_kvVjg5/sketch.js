let mic;
let level;
let threshold = 0.1;
let bgColorLow;
let bgColorHigh;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  mic = new p5.AudioIn();
  mic.start();  
  bgColorLow = color(0, 0, 100); 
  bgColorHigh = color(255, 0, 0);
}

function draw() {
  level = mic.getLevel();
  if (level > threshold) {
    background(bgColorHigh);
  } else {
    background(bgColorLow); 
  }  
  let ellipseSize = map(level, 0, 1, 50, width / 2);
  fill(255);
  noStroke();
  ellipse(width / 2, height / 2, ellipseSize, ellipseSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
