// https://editor.p5js.org/jht9629-nyu/sketches/i7Lj3oMCW
// https://editor.p5js.org/jht9629-nyu/sketches/1Ri1MGLwp
// https://editor.p5js.org/rafiiia/sketches/YZWhLaG5N

let img;
let pixelColor;
let numSlices;
let sliceWidth;
let slices = [];
let pixelSize = 10;

function preload() {
  img = loadImage("RaFiaSantana-headshot.jpg"); // replace with your image path
}

function setup() {
  // img.resize(img.width / 2, img.height / 2);
  // createCanvas(img.width, img.height); //set the canvas to match the image size
  createCanvas(windowWidth, windowHeight);
  img.resize(width,0);
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
  rectMode(CENTER);
  fill(pixelColor);
  rect(x, y, pixelSize, 3*pixelSize);
  rect(x, y, 4*pixelSize, pixelSize);
  // rect(width - x, y, pixelSize);
  // circle(x, y, pixelSize);
  // circle(width - x, y, 20);
  // circle(x, y, 20);
  // fill(pixelColor);
  // circle(x, y, pixelSize);
  // fill(pixelColor);
  // circle(x, y, pixelSize);
}
