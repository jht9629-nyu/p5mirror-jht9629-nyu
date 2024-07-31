// https://editor.p5js.org/jht9629-nyu/sketches/bJwxdGIpX
// draw-rainbow

let hue = 0;
let rate = 1;

function setup() {
  createCanvas(windowWidth, windowHeight - 30);

  createDiv("Rainbow Draw v1");

  colorMode(HSL, 360);
}

function draw() {
  fill("black");
  textSize(64);
  text("Hello screen", 20, 64);
}

function mouseDragged() {
  // console.log('mouseDragged');
  hue = (hue + rate) % 360
  // noStroke();
  // fill(hue, 200, 200);
  // ellipse(mouseX, mouseY, 25, 25);
  strokeWeight(20);
  stroke(hue, 200, 200);
  line(mouseX, mouseY, pmouseX, pmouseY);

  // Prevent canvas drag on mobile devices
  return false;
}

// https://editor.p5js.org/jht9629-nyu/sketches/owix6hP8S
// Simple-Draw

// https://editor.p5js.org/kellylougheed/sketches/ryPlD16wX
// Rainbow Canvas
// https://kellylougheed.medium.com/rainbow-paintbrush-in-p5-js-e452d5540b25
