let w;
let h;
let x;
let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  w = windowWidth / 2
  h = windowHeight / 2
  x = w/2
  y = h/2
  drawBulleye()
  x = w/2 + w
  y = h/2
  drawBulleye()
  x = w/2 
  y = h/2 + h
  drawBulleye()
  x = w/2 + w
  y = h/2 + h
  drawBulleye()
}
function drawBulleye() {
  // circle(x, y, d)
  fill('red')
  // circle(200, 200, 400)
  circle(x, y, w)
  fill('green')
  // circle(200, 200, 300 )
  circle(x, y, w * 0.75)
  fill('yellow')
  // circle(200, 200, 200)
  circle(x, y, w * 200 / 400)
  fill('black');
  // circle(200, 200, 100)
  circle(x, y, w * 100 / 400)
}