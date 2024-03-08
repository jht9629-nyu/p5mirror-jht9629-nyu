// https://editor.p5js.org/jht1493/sketches/UQSjHZYJL
// 11.3: The Pixel Array Slider

let a_comp = 149;
let a_size = 32;

function setup() {
  createCanvas(a_size, a_size);
  pixelDensity(1);
  // createSlider(min, max, [value], [step])
  createSlider(0, 255, a_comp).input(function ( ) {
    a_comp = this.value();
  })
}

function draw() {
  background(51);

  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = x;
      pixels[index + 1] = a_comp; //random(0,255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
      let r = pixels[index + 0]
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      // console.log('x', x, 'y', y, 'rgb', r, g, b);
    }
  }
  updatePixels();
  // noLoop();
}

// TRY: check performance with frameRate()

// https://editor.p5js.org/jht1493/sketches/GiSAQWxq4
// 11.3: The Pixel Array

// https://github.com/CodingTrain/website/blob/master/
//  Tutorials/P5JS/p5.js_video
