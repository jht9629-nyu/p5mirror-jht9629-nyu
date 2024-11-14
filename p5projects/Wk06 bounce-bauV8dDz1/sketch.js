// https://editor.p5js.org/jht9629-nyu/sketches/bauV8dDz1
// Wk06 bounce

// x, y -- position and speed
let xp, yp, xs, ys;

function setup() {
  createCanvas(400, 400);
  // randomSeed(0);
  xp = width / 2;
  yp = height / 2;
  xs = random(-5, 5);
  ys = random(-5, 5);
}

function draw() {
  background(220);

  circle(xp, yp, 20);

  xp += xs;
  yp += ys;

  if (xp < 0 || xp > width) {
    xs *= -1;
  }
  if (yp < 0 || yp > height) {
    ys *= -1;
  }
}
