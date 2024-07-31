// https://editor.p5js.org/jht9629-nyu/sketches/8DLaaau2E
// Day3 functions | if-conditions

// Global variables, available in all functions
let x = 150;
let h = 10;
let d = 0.2;
let s = -1;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(200);

  drawFace();
  drawEyes();
  drawBody();

  drawMouth();
}

function drawFace() {
  // Face
  fill("red");
  circle(200, 200, 200);
}

function drawEyes() {
  // Eyes
  fill("yellow");
  rect(130, 200, 30, 10);
  rect(200, 200, 30, 10);
}

// TRY: use local variables and expressions to be more descriptive
function drawBody() {
  // Body
  fill(0);
  rect(190, 300, 20, 400);
  // let r = random(-10,10)
  // rect(100-r, 400, 200+r*2, 20);
  let x = 100;
  let y = 400;
  let w = 200;
  let h = 20;
  rect(x, y, w, h);
}

function drawMouth() {
  // Mouth
  fill("green");
  rect(x, 250, 60, h);

  // Open mouth
  h = h + 1;
  if (h > 40) {
    h = 10;
  }

  // Open and close cycle
  // h = h + s * d;
  // if (h > 30) {
  //   s = -1 * s;
  // }
  // if (h < 1) {
  //   s = -1 * s;
  // }

  // increase or decrease variable h
  // h = h + s * d;
  // if (h > 30 || h < 1) {
  //   // flip sign
  //   s = -1 * s;
  // }

  // h = 10 * (sin(frameCount/360 * TWO_PI) + 1.0);
}

// https://bmoren.github.io/p5js-cheat-sheet/

// Animation

// x = (x + 1) % width;
// x = x + 1;
// if (x > 200) {
//   x = 150;
// }

// circle(x, y, d)
// fill(v1, v2, v3)
// fill( value )
// rect(x, y, w, h)

// https://editor.p5js.org/jht9629-nyu/sketches/GmkAvUauV
// Day 1, 2 - basic animation
