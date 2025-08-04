let w;
let h;
let x;
let y;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  rectMode(CENTER)
  w = width / 2
  h = height / 2
  // translate(-w/2,-h/2);
  drawBulleye(w/2, h/2, w, h)
  drawBulleye(w/2+w, h/2, w, h)
  drawBulleye(w/2, h/2+h, w, h)
  drawBulleye(w/2+w, h/2+h, w, h)
}
function drawBulleye(x,y,w,h) {
  // circle(x, y, d)
  fill('red')
  // circle(200, 200, 400)
  square(x, y, w,);
  fill('green')
  // circle(200, 200, 300 )
  square(x, y, w * 0.75,);
  fill('yellow')
  // circle(200, 200, 200)
  square(x, y, w * 0.5,);
  fill('black');
  // circle(200, 200, 100)
  square(x, y, w * 0.25,) ;
}