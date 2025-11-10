// https://editor.p5js.org/jht9629-nyu/sketches/DMRE8MvxF
//ICM-HW-08
//https://editor.p5js.org/codingtrain/sketches/A92PDk-1z
//https://editor.p5js.org/jht9629-nyu/sketches/UYiQ_IKf2

let img;
let pixelSize = 2; // set pixel size

function preload() {
  img = loadImage("photo.jpeg"); // add image
}

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas size- windowwidth windowheight
  create_ui();
  // noLoop();
}

function draw() {
  background(255);
  img.loadPixels();

  // calculate how the image fits inside the canvas
  let canvasW = width / img.width;
  let canvasH = height / img.height;
  let canvasFactor = min(canvasW, canvasH); // keep correct proportions

  // new image size after scaling
  let newW = img.width * canvasFactor;
  let newH = img.height * canvasFactor;

  //center the image
  let offsetX = (width - newW) / 2;
  let offsetY = (height - newH) / 2;

  //pixels re-adjusted
  let adjustedPixelSize = pixelSize / canvasFactor;

  noStroke();

  for (let y = 0; y < img.height; y += adjustedPixelSize) {
    for (let x = 0; x < img.width; x += adjustedPixelSize) {
      let index = (int(x) + int(y) * img.width) * 4;
      if (index < img.pixels.length) {
        let r = img.pixels[index];
        let g = img.pixels[index + 1];
        let b = img.pixels[index + 2];
        fill(r, g, b);
 
//draw rectangle-each rectangle represent one pixel block
        rect(
          offsetX + x * canvasFactor,
          offsetY + y * canvasFactor,
          adjustedPixelSize * canvasFactor,
          adjustedPixelSize * canvasFactor
        );
      }
    }
  }
}

//draw the slider
function create_ui() {
  createSpan("Pixel Size: ");
  createSlider(5, 100, pixelSize, 5).input(function () {
    pixelSize = this.value();
    // redraw(); //update when the slider changed
  });
}
