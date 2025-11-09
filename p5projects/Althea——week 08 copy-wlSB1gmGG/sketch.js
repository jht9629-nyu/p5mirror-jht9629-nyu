// https://editor.p5js.org/jht9629-nyu/sketches/wlSB1gmGG
// https://editor.p5js.org/AltheaXiu/sketches/IPfphdJoE

let img;
//load the image
function preload() {
  img = loadImage("seaside.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  img.resize(width,0);
  // createCanvas(img.width, img.height);
  // noLoop();
}

function draw() {
  background(0);
  img.loadPixels();
  let pixelSize = int(map(mouseX,0,width,5,80))
  // console.log('pixelSize',pixelSize);
  // let pixelSize = 20

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
