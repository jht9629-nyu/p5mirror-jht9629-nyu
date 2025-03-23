// https://editor.p5js.org/jht9629-nyu/sketches/RU7UEI2x2
// 11.1: Live Video and createCapture copy

let video;

function setup() {
  createCanvas(640, 480);
  background(51);
  video = createCapture(VIDEO);
  // video.size(320, 240);
  video.hide();
}

function draw() {
  // tint(255, 0, 150);
  // image(video, 0, 0, mouseX, height);
  // image(video, mouseX, mouseY, 40, 30);
  // image(video, mouseX, mouseY);
  image(video, 0, 0);
}

// https://p5js.org/reference/#/p5/image
// -- draw entire image, optionally scaled to new size
// image(img, x, y, [width], [height])

// https://editor.p5js.org/codingtrain/sketches/A5NO0q7j7
// 11.1: Live Video and createCapture
