let w;
let h;
let x;
let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
  // w = width / 2
  // h = height / 2
  // drawBulleye(w/2, h/2, w, h)
}
function draw() {
  // background(220);
  w = width / 8
  h = height / 8
  // drawBulleye(w/2, h/2, w, h)
  drawBulleye(random(width), random(height), w, h)
}
function drawBulleye(x,y,w,h) {
  // circle(x, y, d)
  // fill('red')
  fill(random(255), random(255), random(255));
  // circle(200, 200, 400)
  circle(x, y, w)
  // fill('green')
  fill(random(255), random(255), random(255));
  // circle(200, 200, 300 )
  circle(x, y, w * 0.75)
  // fill('yellow')
  fill(random(255), random(255), random(255));
  // circle(200, 200, 200)
  circle(x, y, w * 200 / 400)
  // fill('black');
  fill(random(255), random(255), random(255));
  // circle(200, 200, 100)
  circle(x, y, w * 100 / 400)
}