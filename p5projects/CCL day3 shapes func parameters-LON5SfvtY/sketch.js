// https://editor.p5js.org/jht9629-nyu/sketches/LON5SfvtY
// CCL day3 shapes func parameters

// let w;
// let h;
// let x;
// let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  let w = width / 2
  let h = height / 2
  drawBulleye(w/2, h/2, w, h)
  drawBulleye(w/2+w, h/2, w, h)
  drawBulleye(w/2, h/2+h, w, h)
  drawBulleye(w/2+w, h/2+h, w, h)
}
function drawBulleye(x,y,w,h) {
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