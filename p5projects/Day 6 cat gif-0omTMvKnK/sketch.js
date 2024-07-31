// https://editor.p5js.org/jht9629-nyu/sketches/0omTMvKnK
// Day 6 cat gif

let x;
let img;
let s = 0.1;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('cat1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = height/2;
}

function draw() {
  background(200);
  // Style the circle.
  // let c = frameCount % 255;
  fill('red');
  // Display the circle.
  //circle(x, 50, 25);
  image(img, x, 0);
  x = (x + s) % width
}

// Save a 5-second gif 
function mouseClicked() {
  saveGif('cat1', 2);
}