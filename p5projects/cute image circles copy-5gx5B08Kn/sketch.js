let img;
let pixelColor;
let numSlices;
let sliceWidth;
let slices = [];

function preload() {
  img = loadImage("RaFiaSantana-headshot.jpg"); // replace with your image path
  
}

function setup() {
  img.resize((img.width)/2, (img.height)/2);
  createCanvas(img.width, img.height); //set the canvas to match the image size
  noStroke();
  // image(img, 0, 0); //draw the image once
}

function draw() {
   // scale(0.2, [0.2]);
  // image(img, 0, 0, (img.width)/2, (img.height)/2);
  let x = random(0, (width));
  let y = random(0, (height));

  pixelColor = img.get(x, y); //get a single pixel

  // fill(pixelColor);
  // circle(x, y, 20);
  fill(pixelColor);
  circle(widthx, y, 20);
  fill(pixelColor);
  circle(x, y, 50);
  
 
  
  
}
