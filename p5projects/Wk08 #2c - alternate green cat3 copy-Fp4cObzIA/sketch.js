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

  for (let i = 0; i < greenCat.pixels.length; i += 4) {
    counter++;

    //alternate green
    if (counter % 2 == 0) {
      greenCat.pixels[i + 1] = 255; //selects Green and maxes it
    }
  }

  for (let x = 0; x < cat.width; x++) {
    for (let y = 0; y < cat.height; y++) {
      let i = y * cat.width + x;
      let red = (y * cat.width + x) * 4;
      let green = (y * cat.width + x) * 4 + 1;
      let blue = (y * cat.width + x) * 4 + 2;
      let alpha = (y * cat.width + x) * 4 + 3;

      //       //checkerbox pattern
      //       if((x+y) % 2 == 0){
      //         greenCat.pixels[green] = 255;
      //       }

      //deleting 10 pixels in between
      let fivePxUpFromCenter = height / 2 - 5;
      let fivePxDnFromCenter = height / 2 + 5;
      if (x == width / 2 && 
          y > fivePxUpFromCenter && 
          y < fivePxDnFromCenter) {
        greenCat.pixels[alpha] = 0;
      }

      //making 10px wide blue at center
      let fivePxLeftFromCenter = width / 2 - 5;
      let fivePxRightFromCenter = width / 2 + 5;
      if (
        y == height / 2 &&
        x > fivePxLeftFromCenter &&
        x < fivePxRightFromCenter
      ) {
        greenCat.pixels[red] = 0;
        greenCat.pixels[green] = 0;
        greenCat.pixels[blue] = 255;
      }
    }
  }

  greenCat.updatePixels();
}

function draw() {
  image(greenCat, 0, 0);
}
