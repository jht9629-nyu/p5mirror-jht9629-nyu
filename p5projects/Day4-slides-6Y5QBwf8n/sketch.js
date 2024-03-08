// slide counter

let count;

function setup() {
  createCanvas(400, 400);
  count = 1;
}

function draw() {
  background(220);
  textSize(100);
  text(count, 10, 100);
  if (count == 1) {
    slide1();
  }
  if (count == 2) {
    slide2();
  }
  if (count == 3) {
    slide3();
  }
}

function slide1() {
  rect(100, 100, 100, 100);
}

function slide2() {
  circle(200, 200, 100);
}

function slide3() {
  strokeWeight(5);
  line(100, 100, 200, 100);
  strokeWeight(10);
  line(100, 150, 200, 150);
  strokeWeight(15);
  line(100, 200, 200, 200);
}

function mouseClicked() {
  count += 1;
  if (count > 3) {
    count = 1;
  }
}
