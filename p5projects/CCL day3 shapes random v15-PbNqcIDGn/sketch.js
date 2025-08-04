function setup() {
  createCanvas(windowWidth, windowHeight);
  new_backg();
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
function new_backg() {
// Integer RGBA notation.
 background('rgba(56,166,56,1.0)');
  // background(random(255), random(255), random(255));
}
function mousePressed() {
  new_backg();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  new_backg();
}

// https://p5js.org/reference/p5/background/
// https://p5js.org/reference/p5/fill/
// Six-digit hex RGB notation.
//  fill('#A251FA');
// Integer RGB notation.
//  fill('rgb(0, 255, 0)');
// Integer RGBA notation.
//  fill('rgba(0, 255, 0, 0.25)');
// Percentage RGB notation.
//   fill('rgb(100%, 0%, 10%)');
// Percentage RGBA notation.
//   fill('rgba(100%, 0%, 100%, 0.5)');
//
