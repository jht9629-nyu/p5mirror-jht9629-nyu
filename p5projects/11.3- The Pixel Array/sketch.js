// https://editor.p5js.org/jht9629-nyu/sketches/a0HDzoroq
// https://editor.p5js.org/codingtrain/sketches/A92PDk-1z
// 11.3 The Pixel Array

// The Coding Train / Daniel Shiffman
// The Pixel Array
// https://www.youtube.com/watch?v=nMUMZ5YRxHI

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = x;
      pixels[index + 1] = random(255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}