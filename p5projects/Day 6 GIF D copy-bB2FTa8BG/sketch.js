let x;
let img;

// Load the image.
function preload() {
  img = loadImage("heart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = height / 2;
  background(50);

  // Draw the image.
  image(img, x, 0);
  x = (x + 20) % width;
}

// Save a 5-second gif when the user presses the 's' key.
//function keyPressed() {
//if (key === 's') {
function mouseClicked() {
  saveGif("mySketch", 5);
}
