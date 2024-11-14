// https://editor.p5js.org/jht9629-nyu/sketches/cSiOjrDQ4
// Wk#03 01 toggle wasHot

let drawRed = false;
let wasHot = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill("red");
  let len = width / 3;
  
  let nowHit = mouseX > len && mouseX < len * 2
  if (nowHit) {
    if (! wasHot) {
      drawRed = !drawRed;
      wasHot = true;
    }
  } 
  wasHot = nowHit;
  // console.log('hasLeft', hasLeft);
  if (drawRed) {
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

// https://editor.p5js.org/jht9629-nyu/sketches/vuUio7brx
// Wk#03 01 hasLeft failed

// https://editor.p5js.org/jht9629-nyu/sketches/R2bB0SiWZ
// Wk#03 01 allowOnce
