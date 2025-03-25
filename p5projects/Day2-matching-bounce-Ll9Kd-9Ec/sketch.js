// https://editor.p5js.org/jht9629-nyu/sketches/Ll9Kd-9Ec
// Day2-matching-bounce

let c1;
let c2;
let speed1 = 5;
let speed2 = 5;
let match1 = 0;
let hit1 = false;

function setup() {
  createCanvas(400, 400);
  c1 = 0;
  c2 = 0;
  // frameRate(12);
}

function draw() {
  background(220);
  textSize(100);

  rect(0, c1, 200);
  if (mouseX < 100) {
    c1 += speed1;
    if (c1 >= 400 || c1 < 0) {
      speed1 = -speed1;
    }
    hit1 = false;
  }
  rect(200, c2, 200);
  if (mouseX > 300) {
    c2 += speed2;
    if (c2 >= 400 || c2 < 0) {
      speed2 = -speed2;
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
