// https://editor.p5js.org/jht9629-nyu/sketches/KpCniSa1w
// shapes random frameRate v15
let n, i;
function setup() {
  createCanvas(windowWidth, windowHeight);
  new_backg();
  // frameRate(1);
  w = Math.round(width / 8);
  h = Math.round(height / 8);
  mwidth = width - 2 * w;
  mheight = height - 2 * h;
  nx = Math.round(mwidth / w);
  ny = Math.round(mheight / h);
  n = (nx + 1) * (ny + 1) * 10;
  i = 0;
}
function draw() {
  let x = Math.round(random(mwidth / w)) * w;
  let y = Math.round(random(mheight / h)) * h;
  draw_bullseye(w + x, h + y, w, h);
  i = i + 1;
  if (i >= n) {
    i = 0;
    new_backg();
  }
}
function draw_bullseye(x, y, w, h) {
  fill(random(255), random(255), random(255));
  ellipse(x, y, w, h);
  fill(random(255), random(255), random(255));
  ellipse(x, y, w * 0.75, h * 0.75);
  fill(random(255), random(255), random(255));
  ellipse(x, y, w * 0.5, h * 0.5);
  fill(random(255), random(255), random(255));
  ellipse(x, y, w * 0.25, h * 0.25);
}
function new_backg() {
  background(random(255), random(255), random(255));
}
function mousePressed() {
  new_backg();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  new_backg();
}
