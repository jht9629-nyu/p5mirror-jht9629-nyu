// https://editor.p5js.org/jht9629-nyu/sketches/0FlUdupcA
// fix order to first column shows
// https://editor.p5js.org/rafiiia/sketches/e2RvRFAAB
// 20 columns - while loop

function setup() {
  createCanvas(600, 400);
}

function draw() {
  let col = width / 20;
  background(220);
  var x = 0;
  while (x <= width) {
    // console.log("x", x);
    if (mouseX > x && mouseX < x + col) {
      // console.log("red x", x);
      fill("red");
    } else {
      noFill();
    }
    rect(x, 0, col, height);
    x = x + col;
  }
}
