// https://editor.p5js.org/jht9629-nyu/sketches/f6qbi-Yxc
// image cat

let img;

function preload() {
  img = loadImage('cat.jpg');
}

function setup() {
  createCanvas(480, 400);
  // console.log('img', img);
  console.log('Hello', img.width, img.height);
}

function draw() {
  background(220);
  image(img, 0, 0)
}