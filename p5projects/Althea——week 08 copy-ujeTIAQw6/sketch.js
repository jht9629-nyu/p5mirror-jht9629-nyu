
let img;
//load the image
function preload() {
  img = loadImage("seaside.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop();
}

function draw() {
  background(0);
  img.loadPixels();
  let pixelSize = 4;

  for (let y = 0; y < img.height; y += pixelSize) {
    for (let x = 0; x < img.width; x += pixelSize) {
      let index = (x + y * img.width) * 4;
      if (index < img.pixels.length) {
        let r = img.pixels[index];
        let g = img.pixels[index + 1];
        let b = img.pixels[index + 2];
        fill(r, g, b);
        noStroke();
        rect(x, y, pixelSize, pixelSize);
      }
    }
  }
}
