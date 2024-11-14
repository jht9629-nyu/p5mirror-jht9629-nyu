// https://editor.p5js.org/jht9629-nyu/sketches/vuUio7brx
// Wk#03 01 hasLeft failed

let isRed = false;
let hasLeft = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill("red");

  let len = width / 3;

  if (mouseX > len && mouseX < len * 2) {
    // rect(0, 0, width / 3, height);
    if (hasLeft) {
      isRed = !isRed;
      hasLeft = false;
    }
  } else {
    hasLeft = true;
    // hasLeft = false;
  }
  // console.log('hasLeft', hasLeft);

  if (isRed) {
    rect(len, 0, len, height);
  }

  push();
  stroke("white");
  line(width / 3, 0, width / 3, height);
  line((width * 2) / 3, 0, (width * 2) / 3, height);
  pop();
}

// } else if (mouseX >= width / 3 && mouseX < (width * 2) / 3) {
//   // rect(width / 3, 0, width / 3, height);
// } else if (mouseX > (width * 2) / 3 && mouseX < width) {
//   // rect((width * 2) / 3, 0, width / 3, height);
// }
