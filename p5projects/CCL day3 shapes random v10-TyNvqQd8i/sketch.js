function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
  // strokeWeight(2)
}
function draw() {
  let w = Math.round(width / 8);
  let h = Math.round(height / 8);
  let x = Math.round(random(width / w)) * w;
  let y = Math.round(random(height / h)) * h;
  draw_bullseye(x, y, w, h);
}
function draw_bullseye(x, y, w, h) {
  fill(random(255), random(255), random(255));
  circle(x, y, w);
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.75);
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.5);
  fill(random(255), random(255), random(255));
  circle(x, y, w * 0.25);
}
function mousePressed() {
  background(random(255), random(255), random(255));
}
