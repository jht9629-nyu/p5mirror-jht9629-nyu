// slide counter

let count = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (count == 0) {
    slide0();
  }
  if (count == 1) {
    slide1();
  }
  if (count == 2) {
    slide2();
  }
  textSize(100);
  text(count, 10, 100);
}

function slide0() {
  background('red');
  rect(100, 100, 100, 100);
}

function slide1() {
  background('green');
  circle(100, 100, 100);
}

function slide2() {
  background('yellow');
  for (let n = 0; n < 1000; n++) {
    strokeWeight(2 * n + 2);
    let h = 100 + 20 * n;
    line(100, h, 300, h);
  }
}

function mouseClicked() {
  count += 1;
  if (count > 2) {
    count = 0;
  }
}
