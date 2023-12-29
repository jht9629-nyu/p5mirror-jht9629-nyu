// while and for Loops
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/4.1-while-for.html
// https://youtu.be/cnRD9o6odjk
// https://editor.p5js.org/codingtrain/sketches/1B6jhzI6

let x = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(4)
}

function draw() {
  // background(0);
  strokeWeight(4);
  stroke(255);

  if (x <= width) {
    fill(0, 200, 255);
    ellipse(x, 100, 25, 25);
    x = x + 50;
  }

  // for (let x = 0; x <= width; x += 50) {
  //   fill(255, 0, 200);
  //   ellipse(x, 300, 25, 25);
  // }
}
