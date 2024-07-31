let x;
let y;
let s;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = height / 2;
  s = width / 50;
}
function draw() {
  background(200);
  fill('red');
  // Display the circle.
  circle(x, y, 25);
  x = (x + s) % width;
}
// Save a 5-second gif 
function mousePressed() {
  saveGif('mySketch', 5);
  // console.log('mousePressed');
}