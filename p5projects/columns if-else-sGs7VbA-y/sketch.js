// https://editor.p5js.org/jht9629-nyu/sketches/sGs7VbA-y
// columns if-else

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background(220);
  if (mouseX < 100) {
    fill("red");
    rect(0, 0, 100, 200);
  } else if (mouseX < 200) {
    fill("red");
    rect(100, 0, 100, 200);
  } else {
    fill("red");
    rect(200, 0, 100, 200);
  }
}
