// https://editor.p5js.org/jht9629-nyu/sketches/sS0ljFfid
// Wk08 #2c - alternate green cat3 copy copy

let cat;
let greenCat;
let counter = 0;
let x = 0;
let y = 0;

function preload() {
  cat = loadImage("cat.jpg");
}

function setup() {
  createCanvas(cat.width, cat.height);

  greenCat = cat;
  greenCat.loadPixels();

  // for (let i = 0; i < greenCat.pixels.length; i += 4) {
  //   counter++;
  //   //alternate green
  // //   if (counter % 2 == 0) {
  // //     greenCat.pixels[i + 1] = 255; //selects Green and maxes it
  // //   }
  // }

  for (let x = 0; x < cat.width; x++) {
    for (let y = 0; y < cat.height; y++) {
      // let i = y * cat.width + x;
      // let c = greenCat.get(x,y);
  
      let fivePxLeftFromCenter = width / 2 - 50;
      let fivePxRightFromCenter = width / 2 + 50;
      if (
        y == height / 2 &&
        x > fivePxLeftFromCenter &&
        x < fivePxRightFromCenter
      ) {
        // greenCat.pixels[red] = 0;
        // greenCat.pixels[green] = 0;
        // greenCat.pixels[blue] = 255;
        let c = [0, 0, 255, 255]
        greenCat.set(x, y, c);
      }

    }
  }

  greenCat.updatePixels();
}

function draw() {
  image(greenCat, 0, 0);
}
