function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
  // strokeWeight(2)
}
function draw() {
  let w = Math.round(width / 8);
  let h = Math.round(height / 8);
  let mwidth = width - 2 * w;
  let mheight = height - 2 * h;
  let x = Math.round(random(mwidth / w)) * w;
  let y = Math.round(random(mheight / h)) * h;
  draw_bullseye(w + x, h + y, w, h);
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
function mousePressed() {
  background(random(255), random(255), random(255));
}
