let h = 0;
let s = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = 200;
  let y = 200;
  let w = 50;
  ellipse(x, y, w, h);
  h = h + s;
  if (h <= 20) {
    s = -1;
  }
}

//let x = 200;
//let s = 1

//  x = x + s
//  if (x > width) {
// x = 200
//   s = - 1

//if (x <= 0) {
//  s = 1
