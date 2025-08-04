// Declare graphics buffers for double buffering
let bufferA;
let bufferB;

// Array to store colors used in the palette
let palette;
// Background color
let bk;
let video;

function setup() {
  //frameRate(1);
  createCanvas(windowWidth, windowHeight);
  // createCanvas(640, 360);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Initialize color palette with predefined colors
  palette = [
    color(11, 106, 136),
    color(45, 197, 244),
    color(112, 50, 126),
    color(146, 83, 161),
    color(164, 41, 99),
    color(236, 1, 90),
    color(240, 99, 164),
    color(241, 97, 100),
    color(248, 158, 79),
    color(252, 238, 33),
  ];

  // Select a random color from the palette for the background
  bk = palette[2];

  // Set pixel density (useful for high DPI displays)
  pixelDensity(1);

  // Create a graphics buffers
  bufferA = createGraphics(width, height);
  bufferB = createGraphics(width, height);
  bufferA.background(bk);
}

function draw() {
  //image(video, 0, 0);
  drop(random(width), random(height));
  image(bufferB, 0, 0);
  image(video, 0, height - 36, 64, 36);
}

// Create a drop
function drop(cx, cy) {
  // Randomly pick a color from the palette
  // let col = random(palette);
  // let rVal = red(col);
  // let gVal = green(col);
  // let bVal = blue(col);
  video.loadPixels();
  bufferA.loadPixels();
  bufferB.loadPixels();

  // Center of the drop
  let centerInk = createVector(cx, cy);

  // Radius of the drop
  let r = random(25, 100);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const index = (x + y * width) * 4;

      // Vector position of the current pixel
      const q = createVector(x, y);
      // Vector from center to current pixel
      const v = p5.Vector.sub(q, centerInk);
      const d = v.mag();

      if (d < r) {
        // Inside the radiu hi s, set the color
        bufferB.pixels[index + 0] = video.pixels[index + 0];
        bufferB.pixels[index + 1] = video.pixels[index + 1];
        bufferB.pixels[index + 2] = video.pixels[index + 2];
        bufferB.pixels[index + 3] = 255;
      } else {
        // Outside the radius, apply displacement
        q.sub(centerInk);
        q.mult(1 - (r * r) / (d * d));
        q.add(centerInk);
        let indexB = (floor(q.x) + floor(q.y) * width) * 4;
        bufferB.pixels[index + 0] = bufferA.pixels[indexB + 0];
        bufferB.pixels[index + 1] = bufferA.pixels[indexB + 1];
        bufferB.pixels[index + 2] = bufferA.pixels[indexB + 2];
        bufferB.pixels[index + 3] = bufferA.pixels[indexB + 3];
      }
    }
  }

  bufferB.updatePixels();
  // Copy the contents of bufferB to bufferA
  bufferA = bufferB.get();
}
