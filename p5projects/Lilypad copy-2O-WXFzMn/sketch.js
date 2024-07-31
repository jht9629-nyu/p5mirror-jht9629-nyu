// https://editor.p5js.org/LiIypad/sketches/czKYukKjg
// Lilypad

//variable inits
let f = 0;
let gap;
let bg;

function setup() {
  //canvas size
  createCanvas(400, 600);

  //variable inits
  bg = color(28, 163, 263);
  gap = PI / 3;
}

function draw() {
  if (f === 0) {
    background(bg);
    lilypad(
      random(200) + 100,
      random(300) + 150,
      random(95) + 10,
      random(2 * PI),
      gap
    );
  }

  //frame timer that resets the drawing with a new random lilypad every second
  f++;
  if (f === 60) {
    f = 0;
  }
}

//function to draw a lilypad
function lilypad(x, y, r, angle, gap) {
  noStroke();
  fill(0, 150, 0);
  arc(x, y, r, r, angle, angle - gap);
}
