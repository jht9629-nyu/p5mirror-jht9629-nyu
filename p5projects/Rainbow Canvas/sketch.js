// https://editor.p5js.org/jht9629-nyu/sketches/lNRQmapgz
// Rainbow Canvas
// https://editor.p5js.org/kellylougheed/sketches/ryPlD16wX
// Rainbow Canvas
// https://kellylougheed.medium.com/rainbow-paintbrush-in-p5-js-e452d5540b25

var hue;
var rainbow = true;
var rate = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  hue = 0;
}

function draw() {
  // background(220);
}

function mouseDragged() {
  if (rainbow) {
    if (hue > 360) {
      hue = 0;
    } else {
      hue += rate;
    }
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  if (keyCode == 82) {
    hue = 0;
    rainbow = false;
  }
  if (keyCode == 71) {
    hue = 125;
    rainbow = false;
  }
  if (keyCode == 66) {
    hue = 200;
    rainbow = false;
  }
  if (keyCode == 32) {
    rainbow = true;
    rate *= 2;
  }
}
