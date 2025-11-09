// https://editor.p5js.org/ezeta/sketches/l_Rm8dnhP
//why is this not working???
let img;

function preload() {
  img = loadImage("cat.jpg");
}
function setup() {
  createCanvas(img.width, img.height);
//   img.loadPixels();
// }

// function draw() {
  background(220);
  // image(img, 0, 0);
  img.loadPixels();
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      console.log('y', y, 'x', x);
      var index = (x + y * img.width) * 4;
      // img.pixels[index + 0] = 0;
      // img.pixels[index + 1] = 0;
      // img.pixels[index + 2] = 0;
      // img.pixels[index + 3] = 255;
      if ((x + y) % 2 == 0) {
        img.pixels[index + 0] = 0;
        img.pixels[index + 1] = 255;
        img.pixels[index + 2] = 0;
        img.pixels[index + 3] = 255;
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
