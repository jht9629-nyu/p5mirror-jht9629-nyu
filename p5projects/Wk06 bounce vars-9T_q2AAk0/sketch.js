// x position, x speed
let xp, xs;
// y position, y speed
let yp, ys;

function setup() {
  createCanvas(400, 400);
  xp = width / 2;
  xs = random(-5,5);
  yp = height / 2;
  ys = random(-1,1);
}

function draw() {
  background(220);
  
  circle(xp, yp, 30);
  
  xp += xs;
  yp += ys;
  
  if (xp < 0 || xp > width) {
    xs *= -1;
  }
  if (yp < 0 || yp > height) {
    ys *= -1;
  }
}