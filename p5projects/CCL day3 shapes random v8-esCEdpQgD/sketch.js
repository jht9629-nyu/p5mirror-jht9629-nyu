function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
}
function draw() {
  let w = width / 8
  let h = height / 8
  let x = random(width)
  let y = random(height)
  draw_bullseye(x, y, w, h)
}
function draw_bullseye(x,y,w,h) {
  fill(random(255), random(255), random(255));
  circle(x, y, w)
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.75)
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.50)
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.25)
}
function mousePressed() {
  background(random(255), random(255), random(255));
}