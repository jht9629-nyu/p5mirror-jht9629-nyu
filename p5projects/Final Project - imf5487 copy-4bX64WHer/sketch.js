let stemcolor;

var time;
var wait = 4000;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(700, 500);
  noStroke();
  stemcolor = color(0, 137, 50);
  dirtcolor = color(103, 45, 0);
  time = millis();
}

function draw() {
  // loop();
  // background(157, 242, 235);
  if (millis() - time >= wait) {
    time = millis();
    // background(29, 32, 41);
    background(random(255), random(255), random(255));
  }

  noStroke();
  fill(dirtcolor);
  rect(0, 420, 695, 80);

  fill(255, 201, 0, 255);
  circle(100, 90, 80);

  stroke(stemcolor);
  strokeWeight(6);
  line(600, 300, 600, 700);

  noStroke();
  translate(600, 300);
  fill("rgb(196,164,221)");
  for (let i = 0; i < 10; i++) {
    ellipse(0, 20, 20, 80);
    rotate(PI / 5);
  }
}
