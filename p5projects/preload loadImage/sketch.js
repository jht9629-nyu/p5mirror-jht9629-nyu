// https://editor.p5js.org/jht9629-nyu/sketches/Q5q1_WZVS
// preload loadImage

// 1. define the global variable img to reference the image
let img;

// 2. assign the global variable img
function preload() {
  img = loadImage("jht.png");
}

function setup() {
  createCanvas(400, 400);
}

// 3. use the global variable img to draw the image
function draw() {
  background(220);
  // draw the image with no size adjustment
  image(img, 0, 0);
  // image(img, mouseX, 0);
  // image(img, mouseX, mouseY);
  // image(img,mouseX-img.width/2,mouseY-img.height/2);
}

// https://p5js.org/reference/#/p5/image
// syntax:
// image(img, x, y, [width], [height])

// JHT image source:
// http://www.johnhenrythompson.com/0-refections-on-learning
