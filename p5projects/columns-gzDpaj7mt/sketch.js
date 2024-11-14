// https://editor.p5js.org/jht9629-nyu/sketches/gzDpaj7mt
// columns

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(220);
  if (mouseX > 0 && mouseX < 100) {
    fill("red");
    rect(0, 0, 100, 200);
  }
  if (mouseX > 100 && mouseX < 200) {
    fill("green");
    rect(100, 0, 100, 200);
  }
  if (mouseX > 200 && mouseX < 300) {
    fill("yellow");
    rect(200, 0, 100, 200);
  }
}
