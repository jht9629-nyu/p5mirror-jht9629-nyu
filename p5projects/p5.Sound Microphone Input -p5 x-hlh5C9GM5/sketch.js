// https://editor.p5js.org/jht9629-nyu/sketches/hlh5C9GM5
// p5.Sound: Microphone Input -p5 x
// https://editor.p5js.org/jht9629-nyu/sketches/ZeYQbRb5F
// p5.Sound: Microphone Input -p5 2.0 lib

// https://editor.p5js.org/jht9629-nyu/sketches/XkD6Gw5jKX
// p5@1.11.11/lib/p5.js

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
  console.log('vol',vol);
  ellipse(100, 100, 200, vol * 200);
}