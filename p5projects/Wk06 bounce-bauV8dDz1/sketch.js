// https://editor.p5js.org/jht9629-nyu/sketches/bauV8dDz1
// Wk06 bounce
// x, y -- position and speed
let xp, yp, xs, ys;
function setup() {
  createCanvas(400, 400);
  // randomSeed(0);
  xp = width / 2;
  yp = height / 2;
  xs = random(4,10);
  ys = random(4,10);
  // ys = 0;
}
function draw() {
  // background(220);
  circle(xp, yp, random(20));
  stroke('green');
  xp = xp + xs;
  yp = yp + ys;
  if (xp < 0 || xp > width) {
    xs = xs * -1;
  }
  if (yp < 0 || yp > height) {
    ys = ys * -1;
  }
}
