// https://editor.p5js.org/jht9629-nyu/sketches/mXBXq3kwr
// 1.1.9/p5.js
// https://editor.p5js.org/enickles/sketches/TxKfkmnEI
/* 
mic issues in Firefox, use v0.9.0
seems okay in Chrome
*/

let mic;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(360, 100, 100);
  
  let micLevel = mic.getLevel();
  console.log(micLevel);
  
  let mapLevel = map(micLevel, 0.001, 0.1, 0, width);
  // circle(width/2, height/2, mapLevel);
  
  let sat = map(mapLevel, 0, width, 0, 100);
  
  fill(190, sat, 100)
  circle(width/2, height/2, mapLevel);
}






