// https://editor.p5js.org/jht9629-nyu/sketches/pk9OG8zlf
// https://editor.p5js.org/codingtrain/sketches/goeU3RUbU

// Coding Train / Daniel Shiffman
// http://thecodingtrain.com

// Code for: https://youtu.be/q2IDNkUws-A

let mic;

function setup() {
  createCanvas(200, 200);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  let vol = mic.getLevel();
  // console.log('vol',vol);
  let n = vol * 2000
  ellipse(100, 100, n, n);
}