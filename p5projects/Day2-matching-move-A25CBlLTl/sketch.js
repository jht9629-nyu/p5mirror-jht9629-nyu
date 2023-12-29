let c1;
let c2;
let match1 = 0;
let hit1 = false;
let speed1 = 5;

function setup() {
  createCanvas(400, 400);
  c1 = 0;
  c2 = 0;
  // frameRate(12);
}

function draw() {
  background(220);a
  textSize(100);a

  rect(0, c1, 200);
  if (mouseX < 100) {
    c1 += speed1;
    if (c1 >= 400) {
      c1 = 0;
    }
    hit1 = false;
  }
  rect(200, c2, 200);
  if (mouseX > 300) {
    c2 += speed1;
    if (c2 >= 400) {
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
