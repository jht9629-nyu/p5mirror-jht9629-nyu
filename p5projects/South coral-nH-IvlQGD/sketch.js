// numbers never match

let c1;
let c2;

function setup() {
  createCanvas(400, 400);
  c1 = 0;
  c2 = 0;
  frameRate(5);
}

function draw() {
  background(220);
  textSize(100);

  text(c1, 10, 200);
  if (mouseX < 200) {
    c1 += 1;
    if (c1 >= 10) {
      c1 = 0;
    }
  }
  text(c2, 300, 200);
  if (mouseX > 200) {
    c2 += 1;
    if (c2 >= 10) {
      c2 = 0;
    }
  }
}
