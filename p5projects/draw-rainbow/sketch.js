// https://editor.p5js.org/jht9629-nyu/sketches/bJwxdGIpX
// draw-rainbow

let my = {
  version: 3,
  width: 393, // canvas width
  height: 600, // canvas height
  hue: 0,
  rainbow: true,
  rate: 1
};

function setup() {
  createCanvas(my.width, my.height);

  createDiv("Version:" + my.version);
}

function draw() {
  fill("black");
  textSize(64);
  text("Hello screen", 20, 64);
  
}

function mouseDragged() {
  // console.log('mouseDragged');
  if (my.rainbow) {
    if (my.hue > 360) {
      my.hue = 0;
    } else {
      my.hue += my.rate;
    }
  }
  colorMode(HSL, 360);
  // noStroke();
  // fill(my.hue, 200, 200);
  // ellipse(mouseX, mouseY, 25, 25);
  strokeWeight(20);
  stroke(my.hue, 200, 200);
  line(mouseX, mouseY, pmouseX, pmouseY);

  // Prevent canvas drag on mobile devices
  return false;
}

// https://editor.p5js.org/jht9629-nyu/sketches/owix6hP8S
// Simple-Draw

// https://editor.p5js.org/kellylougheed/sketches/ryPlD16wX
// Rainbow Canvas
// https://kellylougheed.medium.com/rainbow-paintbrush-in-p5-js-e452d5540b25
