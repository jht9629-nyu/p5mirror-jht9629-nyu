// https://editor.p5js.org/jht9629-nyu/sketches/wKnsTemeO
// https://editor.p5js.org/rafiiia/sketches/hOGUXUHzU

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
  // img = loadImage("RaFiaSantana-headshot.jpg"); // replace with your image path
  img = createCapture(VIDEO);
}

function setup() {
  // img.resize(windowWidth, 0);
  createCanvas(windowWidth, windowHeight); //set the canvas to match the image size
  noStroke();
  image(img, 0, 0); //draw the image once
}

function draw() {
  let img2 = img.get();
  for (let i = 0; i < 900; i++) {
    draw_one(img2);
  }
}
function draw_one(img2) {
  // scale(0.2, [0.2]);
  // image(img, 0, 0, (img.width)/2, (img.height)/2);
  let x = random(0, width);
  let y = random(0, height);

  pixelColor = img2.get(x, y); //get a single pixel

  fill(pixelColor);
  circle(x, y, 10);
  fill(pixelColor);
  // circle(mouseX, mouseY, 50); //reverse
}
