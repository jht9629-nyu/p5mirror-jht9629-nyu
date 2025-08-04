let w;
let h;
function setup() {
  w = windowWidth
  h = windowHeight
  createCanvas(w, h);
}
function draw() {
  background(220);
  // circle(x, y, d)
  fill('red')
  // circle(200, 200, 400)
  circle(w/2, h/2, w)
  fill('green')
  // circle(200, 200, 300 )
  circle(w/2, h/2, w * 0.75)
  fill('yellow')
  // circle(200, 200, 200)
  circle(w/2, h/2, w * 200 / 400)
  fill('black');
  // circle(200, 200, 100)
  circle(w/2, h/2, w * 100 / 400)
}