let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage("hand.png");
}

let x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = height / 2;
}

function draw() {
  background(200);

  // Style the circle.
  let c = frameCount % 255;
  fill(c);
  fill("lightblue");
  circle(x, 50, 25);
  x = (x + 20) % width;
  // Display the circle.
  // Draw the image.
  image(img, x, 0);
}

// Save a 5-second gif when the user presses the 's' key.
function mouseClicked() {
  saveGif("mySketch", 5);
}
