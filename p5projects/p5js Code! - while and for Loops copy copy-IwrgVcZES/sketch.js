// while and for Loops
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/4.1-while-for.html
// https://youtu.be/cnRD9o6odjk
// https://editor.p5js.org/codingtrain/sketches/1B6jhzI6

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(8);
  strokeWeight(3);
  stroke(400);
  var x = 0;
  while (x <= width) {
    //fill(0, 200, 255);
    fill(random(255), random(255), random(255));
    //ellipse(x, 100, 25, 25);
    triangle(30, 75, 58, 20, 86, 75);
    x = x + 50;
  }
  for (var x = 0; x <= width; x += 50) {
    fill(random(255), random(255), random(255));
    ellipse(x, 300, 25, 25);
    triangle(30, 75, 58, 20, 86, 75);
  }
  for (var x = 0; x <= width; x += 50) {
    fill(random(255), random(255), random(255));
    triangle(x+30, 75, x+58, 20, x+86, 75);
  }
}
