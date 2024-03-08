// https://editor.p5js.org/codingtrain/sketches/A92PDk-1z
// 11.3: The Pixel Array - p5.js Tutorial

// The Coding Train / Daniel Shiffman
// The Pixel Array
// https://www.youtube.com/watch?v=nMUMZ5YRxHI

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  draw_set()
}


function draw_set() {
  background(51);

  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      set(x,y,[x,random(255),y,255]);
      // var index = (x + y * width) * 4;
      // pixels[index + 0] = x;
      // pixels[index + 1] = random(255);
      // pixels[index + 2] = y;
      // pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

function draw_loadPixels() {
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