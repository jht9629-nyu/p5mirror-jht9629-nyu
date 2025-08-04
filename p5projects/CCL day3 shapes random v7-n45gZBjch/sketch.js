let w;
let h;
let x;
let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}
function draw() {
  w = width / 8
  h = height / 8
  x = random(width)
  y = random(height)
  drawBulleye(x, y, w, h)
}
function drawBulleye(x,y,w,h) {
  fill(random(255), random(255), random(255));
  circle(x, y, w)
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.75)
  fill(random(255), random(255), random(255));
  circle(x, y, w * 200 / 400)
  fill(random(255), random(255), random(255));
  circle(x, y, w * 100 / 400)
}
function mousePressed() {
  background(random(255), random(255), random(255));
}