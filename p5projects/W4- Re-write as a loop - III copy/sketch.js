function setup() {
  createCanvas(100, 100);
  background(220);
  for (let i = 0; i < 10; i++) {
    let s = (10 - i) * 10;
    rect(i * 10, i * 10, s, s);
  }
}

function nono() {
  rect(0, 0, 100, 100);
  rect(10, 10, 90, 90);
  rect(20, 20, 80, 80);
  rect(30, 30, 70, 70);
  rect(40, 40, 60, 60);
  rect(50, 50, 50, 50);
  rect(60, 60, 40, 40);
  rect(70, 70, 30, 30);
  rect(80, 80, 20, 20);
  rect(90, 90, 10, 10);
}
