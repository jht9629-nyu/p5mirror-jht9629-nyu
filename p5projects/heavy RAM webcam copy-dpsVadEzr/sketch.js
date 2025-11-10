// https://editor.p5js.org/jht9629-nyu/sketches/dpsVadEzr
// to consider all neighboring pixels we use a 3x3 array
// and normalize these values

let video;
let pixelColor;
let numSlices;
let sliceWidth;
let slices = [];
let videoImage;

function preload() {
  // video = loadImage("RaFiaSantana-headshot.jpg"); // replace with your image path
  video = createCapture(VIDEO);
}

function setup() {
  // video.resize(windowWidth, 0);
  createCanvas(windowWidth, windowHeight); //set the canvas to match the image size
  noStroke();
  image(video, 0, 0); //draw the image once
}

function draw() {
  videoImage = video.get();
  for (let i = 0; i < 900; i++) {
    draw_one();
  }
}

function draw_one() {
  // scale(0.2, [0.2]);
  // image(video, 0, 0, (video.width)/2, (video.height)/2);
  let x = random(0, width);
  let y = random(0, height);

  pixelColor = videoImage.get(x, y); //get a single pixel

  fill(pixelColor);
  circle(x, y, 3);
  fill(pixelColor);
  // circle(mouseX, mouseY, 50); //reverse
}
