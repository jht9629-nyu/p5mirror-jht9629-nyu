// https://editor.p5js.org/rafiiia/sketches/YZWhLaG5N

// to consider all neighboring pixels we use a 3x3 array
// and normalize these values
// kernel is the 3x3 matrix of normalized values
let kernel = [
  [-1, -1, -1],
  [-1, 9, -1],
  [-1, -1, -1],
];

let img;
let pixelColor;
let numSlices;
let sliceWidth;
let slices = [];

function preload() {
  img = loadImage("RaFiaSantana-headshot.jpg"); // replace with your image path
}

function setup() {
  img.resize(windowWidth, 0);
  // img.resize(img.width / 2, img.height / 2);
  createCanvas(img.width, img.height); //set the canvas to match the image size
  noStroke();
  image(img, 0, 0); //draw the image once
}

function draw() {
  for (let i = 0; i < 100; i++) {
    draw_one();
  }
}

function draw_one() {
  // scale(0.2, [0.2]);
  // image(img, 0, 0, (img.width)/2, (img.height)/2);
  let x = random(0, width);
  let y = random(0, height);

  pixelColor = img.get(x, y); //get a single pixel

  fill(pixelColor);
  circle(x, y, 20);
  fill(pixelColor);
  noFill();
  stroke(10);
  circle(x, y, 20);
  // circle(width - x, y, 20);
  // circle(mouseX, mouseY, 50); //reverse
}
