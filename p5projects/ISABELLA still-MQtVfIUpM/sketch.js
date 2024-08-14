// https://editor.p5js.org/jht9629-nyu/sketches/MQtVfIUpM
// ISABELLA still

let x = 250;
let y = 200;
let m = 200;
let s = 2;

function setup() {
  createCanvas(400, 400);
  background("'black");
}

function draw() {
  background("'black");
  draw2();
  fill("beige");
  circle(200, y, 200);
  rect(165, y + 50, 70, 20);
  circle(x, 190, 50);
  circle(x - 100, 190, 50);
  square(x - 65, 210, 25);
  fill("rgb(131,56,56)");
  circle(x, y - 10, 20);
  circle(x - 100, y - 10, 20);
  fill("beige");
  square(x - 60, 225, 5);
  square(x - 50, 225, 5);
  x = (x + 1) % 400;
  // y = (y + 1) % 400;
  y = y + s;
  if (y > 400) {
    //  x = 200
    s = -2;
  }
  if (y <= 0) {
    s = 2;
  }
}
let f = ["🪷", "🌷", "🌹", "🩵"];
let i = 0;
function draw2() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  i = 0;
  //i = random([0, 1, 2, 3]);
  for (let y = 0; y < width; y += 50) {
    for (let x = 0; x < width; x += 50) {
      //let i = random([0,1,2,3])
      i = (i + 1) % 4;
      drawFlower(f[i], 50, x, y);
    }
  }
}
function drawFlower(s, size, x, y) {
  textAlign(CENTER, CENTER);
  textSize(size);
  text(s, x, y);
  // 🪷 🌷 🌹 🩵

  // https://editor.p5js.org/jht9629-nyu/sketches/_Ax2BHGcn
  // Day 6 function emoji for

  // https://p5js.org/reference/p5/for/
}
