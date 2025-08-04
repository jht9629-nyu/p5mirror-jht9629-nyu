// https://editor.p5js.org/jht9629-nyu/sketches/WHyLQog-U
// day3 squares
// https://editor.p5js.org/yc7143/sketches/02tqN7AyK
// from Ye Chen
// https://editor.p5js.org/jht9629-nyu/sketches/LON5SfvtY
// CCL day3 shapes func parameters

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  let w = width / 2;
  let h = height / 2;
  rectMode(CENTER);
  // translate(-w/2,-h/2);
  drawShape(w / 2, h / 2, w, h);
  drawShape(w / 2 + w, h / 2, w, h);
  drawShape(w / 2, h / 2 + h, w, h);
  drawShape(w / 2 + w, h / 2 + h, w, h);
}
function drawShape(x, y, w, h) {
  // circle(x, y, d)
  fill("red");
  // circle(200, 200, 400)
  square(x, y, w);
  fill("green");
  // circle(200, 200, 300 )
  square(x, y, w * 0.75);
  fill("yellow");
  // circle(200, 200, 200)
  square(x, y, w * 0.5);
  fill("black");
  // circle(200, 200, 100)
  square(x, y, w * 0.25);
}
