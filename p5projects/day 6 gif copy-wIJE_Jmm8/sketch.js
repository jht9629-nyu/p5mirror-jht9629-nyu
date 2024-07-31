let x;
let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage("kitty.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = height / 2;
}

function draw() {
  background(200);

  // Style the circle.
  let c = frameCount % 255;
  fill("#fae");

  // Display the circle.
  circle(x, 50, 25);
  x = (x + 20) % width;
  // Draw the image.
  image(img, x, 0);
}

// Save a 5-second gif when the user presses the 's' key.
function mouseClicked() {
  saveGif("mySketch", 5);
}
