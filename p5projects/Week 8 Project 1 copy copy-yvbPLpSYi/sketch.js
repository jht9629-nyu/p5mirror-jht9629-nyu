// https://editor.p5js.org/jht9629-nyu/sketches/yvbPLpSYi
// https://editor.p5js.org/jht9629-nyu/sketches/RkKgMSVwG
// https://editor.p5js.org/0731/sketches/JUr6hpFJC

// QS：How do I scale down the entire image proportionally?"

let img;
let blockSize = 5;

function preload() {
  img = loadImage("myImage.jpg");
  console.log("preload img.width", img.width, "img.height", img.height);
}

function setup() {
  console.log("setup img.width", img.width, "img.height", img.height);
  // createCanvas(img.width, img.height);
  let aspect = img.width / img.height;
  let w = windowWidth;
  let h = int(windowWidth / aspect);
  console.log("aspect", aspect, "w", w, "h", h);
  // createCanvas(w, h);
  createCanvas(windowWidth, windowHeight);
  img.resize(width, 0);
  // img.resize(width, height);
  noStroke();
}

function draw() {
  background(0);
  img.loadPixels();

  for (let y = 0; y < img.height; y += blockSize) {
    for (let x = 0; x < img.width; x += blockSize) {
      let mirroredX = img.width - x - blockSize;
      mirroredX = constrain(mirroredX, 0, img.width - blockSize);

      let index = (mirroredX + y * img.width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      fill(r, g, b);
      rect(x, y, blockSize, blockSize);
    }
  }
  noLoop();
}
