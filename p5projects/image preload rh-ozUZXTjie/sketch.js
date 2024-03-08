// https://editor.p5js.org/jht9629-nyu/sketches/ozUZXTjie
// image preload rh 
// - image is scaled up to match canvas dimensions

let img;

function preload() {
  img = loadImage("jht-w128.png");
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let rh = height / img.height;
  image(img, 0, 0, img.width*rh, img.height*rh)
  // image(img, 0, 0, width, height)
  // image(img, 0, 0)
}

// image(img, x, y, [width], [height])
// image(img, dx, dy, dWidth, dHeight, 
//            sx, sy, [sWidth], [sHeight] ...
