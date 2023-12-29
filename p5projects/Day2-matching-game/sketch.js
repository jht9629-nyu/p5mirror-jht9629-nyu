let c1;
let c2;
let match1 = 0;
let hit1 = false;

function setup() {
  createCanvas(400, 400);
  c1 = 0;
  c2 = 0;
  frameRate(1);
}

function draw() {
  background(220);
  textSize(100);

  text(c1, 10, 200);
  if (mouseX < 100) {
    c1 += 1;
    if (c1 >= 10) {
      c1 = 0;
    }
    hit1 = false;
  }
  text(c2, 300, 200);
  if (mouseX > 300) {
    c2 += 1;
    if (c2 >= 10) {
      c2 = 0;
    }
    hit1 = false;
  }
  line(100,0,100,400);
  line(300,0,300,400);

  text(match1, 170, 80);
  if (mouseX > 100 && mouseX < 300) {
    if (c1 == c2 && !hit1) {
      hit1 = true;
      match1 += 1;
    }
  }
}
