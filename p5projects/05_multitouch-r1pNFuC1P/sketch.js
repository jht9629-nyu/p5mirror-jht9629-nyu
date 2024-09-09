// https://editor.p5js.org/jht9629-nyu/sketches/r1pNFuC1P
// 05_multitouch

// https://github.com/IDMNYU/DM-GY-6063B-Creative-Coding/blob/master/mobile-examples/05_multitouch/sketch.js

function setup() {
  // createCanvas(displayWidth, displayHeight);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  noStroke();
  fill(255, 192);
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y,
      100+sin(i+frameCount*0.1)*50,
      100+sin(i+frameCount*0.1)*50);
  }
}

function touchMoved() {
  return false;
}