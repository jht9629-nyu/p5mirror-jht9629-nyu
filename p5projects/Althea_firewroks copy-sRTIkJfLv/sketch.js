// https://editor.p5js.org/jht9629-nyu/sketches/sRTIkJfLv
// Althea_firewroks copy

// https://editor.p5js.org/AltheaXiu/sketches/_Tm4RNFcY

//reference: 
// https://youtu.be/CKeyIbT3vXI by codingtrian Daniel Shiffman
// https://editor.p5js.org/codingtrain/sketches/O2M0SO-WO

const fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.1);
  stroke(255);
  background(0);
  textAlign(CENTER, CENTER);
  textFont("Helvetica");
  textSize(min(width, height) * 0.1);
  fill(255);
  noStroke();
  //not sure why noStroke here doesn't work
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 20);

  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }

  //update the fireworks
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
    // noStroke();
    text("Happy Birthday; )", width / 2, height / 2);
  }
}
