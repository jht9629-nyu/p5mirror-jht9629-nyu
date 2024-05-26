// https://editor.p5js.org/qshan/sketches/Lc10s6m60
// CORS bug demo

let img;

function preload() {
  img = loadImage("images/vase.png");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}

// https://github.com/processing/p5.js-web-editor/issues/3089
