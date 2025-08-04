let nw, nh, mx, my;
function setup() {
  createCanvas(windowWidth, windowHeight);
  nw = Math.round(width / 8);
  nh = Math.round(height / 8);
  mx = width / 2;
  my = height / 2;
  new_backg();
}
function draw() {
  let w = nw;
  let h = nh;
  let mwidth = width - 2 * w;
  let mheight = height - 2 * h;
  let x = Math.round(random(mwidth / w)) * w;
  let y = Math.round(random(mheight / h)) * h;
  draw_bullseye(w + x, h + y, w, h);
}
function draw_bullseye(x, y, w, h) {
  let xin = (x > nw * 2 && x < width - nw * 2) ;
  let yin = (y > nh * 2 && y < height - nh * 2) ;
  if (xin && yin) return;
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
  // let r = random();
  // if (r < 0.3) background("red");
  // if (r > 0.3 && r < 0.6) background("green");
  // if (r > 0.6) background("yellow");
  background(random(255), random(255), random(255));
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
