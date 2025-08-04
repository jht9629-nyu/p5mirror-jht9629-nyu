
let words = ["Hello","World!"];
let wordIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  // Set text size to fill the screen
  let fontSize = min(width, height) * 0.45; // Adjust multiplier as needed
  textSize(fontSize);
  fill(0);

  // Display text
  let word = words[wordIndex];
  text(word, width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  wordIndex = (wordIndex + 1) % words.length;
}