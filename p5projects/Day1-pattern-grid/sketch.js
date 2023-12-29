// https://editor.p5js.org/jht9629-nyu/sketches/XH_F8U6iN
// Day1-pattern-grid

let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = 0;
  y = 0;
  // frameRate(15);
}

function draw() {
  // background(220);
  fill(x, y, 0);
  rect(x, y, 50, 50);
  x += 10;
  if (x > 400) {
    x = 0;
    y += 10;
    if (y > 400) {
      y = 0;
    }
  }
  
  fill(255,0,255,50);
  circle(mouseX,mouseY,150);
  
}
