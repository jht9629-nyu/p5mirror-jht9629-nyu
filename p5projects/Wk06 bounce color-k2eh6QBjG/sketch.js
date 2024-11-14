// https://editor.p5js.org/jht9629-nyu/sketches/k2eh6QBjG
// Wk06 bounce color

let x, y, xspeed, yspeed;
let s, sspeed;
let c, cs;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  xspeed = random(-5, 5);
  yspeed = random(-5, 5);
  s = 20;
  sspeed = 2;
  c = 100;
  cs = 1;
}

function draw() {
  background(220);

  fill(c, 0, 0);
  circle(x, y, s);

  x += xspeed;
  y += yspeed;
  s += sspeed;
  c += cs;

  if (x < 0 || x > width) {
    xspeed *= -1;
  }
  if (y < 0 || y > height) {
    yspeed *= -1;
  }
  if (s < 10 || s > 50) {
    sspeed *= -1;
  }
  if (c < 100 || c > 255) {
    cs *= -1;
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/bauV8dDz1
// Wk06 bounce
