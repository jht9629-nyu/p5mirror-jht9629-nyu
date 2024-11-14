// https://editor.p5js.org/jht9629-nyu/sketches/3dNEb_UfI
// Blossom checkboard bool

let ncell = 10;
let xcell;
let ycell;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xcell = width / ncell;
  ycell = height / ncell;
}

function draw() {
  background(220);
  let startBlack = false;
  for (let y = 0; y < height; y += ycell) {
    let isBlack = startBlack;
    startBlack = !startBlack;
    for (let x = 0; x < width; x += xcell) {
      if (isBlack) {
        fill("black");
      } else {
        fill("white");
      }
      rect(x, y, xcell, ycell);
      isBlack = !isBlack;
    }
  }
}
