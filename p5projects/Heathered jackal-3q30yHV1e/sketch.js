let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('cat1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Draw the image.
  image(img, 0, 0, width, height);
}