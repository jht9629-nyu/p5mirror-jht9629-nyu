let x;

let img;

// Load the image.
function preload() {
  img = loadImage("Blueflowers.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  x = height / 2;
}

function draw() {
  background(200);
  
  x = (x + 1) % width;
  // Draw the image.
  image(img, x, 0);
  
  // Style the circle.
  let c = frameCount % 255;
  fill(c);

  // Display the circle.
  fill("red");
  circle(x, 50, 25);
  
}

// Save a 5-second gif
function mouseClicked() {
  saveGif("mySketch", 5);
}
