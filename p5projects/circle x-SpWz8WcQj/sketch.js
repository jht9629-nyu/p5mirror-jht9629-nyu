// https://editor.p5js.org/jht9629-nyu/sketches/SpWz8WcQj
// circle x


let x = 100;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(200);
  circle(x, 150, 30);
  x = x + 1;
}
