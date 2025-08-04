let bc;
let fc;
function setup() {
  createCanvas(windowWidth, windowHeight);
  bc = 0;
  fc = [random(255),random(255),random(255),50];
  background(bc);
}
function draw() {
  //noStroke();
  //fill(fc, 50);
  // circle(mouseX, mouseY, 24);
  strokeWeight(10);
  // stroke(fc);
  // stroke(random(255),random(255),random(255))
  // stroke(fc,50);
  stroke(fc);
  line(mouseX,mouseY,pmouseX,pmouseY);
}
function mousePressed() {
  if (bc == 255) {
    bc = 0;
  }
  else {
    bc = 255;
  }
  background(bc);
}
function keyPressed() {
  fc = [random(255),random(255),random(255),50];
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// Variables in p5.js (mouseX, mouseY)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.1-mousex-mousey.html
// https://youtu.be/7A5tKW9HGoM
// https://editor.p5js.org/codingtrain/sketches/IeblvUQrf
