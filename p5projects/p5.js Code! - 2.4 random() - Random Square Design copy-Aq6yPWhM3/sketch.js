
let squareSize;
let lineWidth;

function setup() {
  createCanvas(400, 300);
  background(0);
}

function draw() {
  lineWidth = random(4, 28);
  squareSize = random(5, 250);

  rectMode(CENTER);
  // rectMode(mouseX);
  strokeWeight(lineWidth);
  stroke(0, 0, 255, 10);
  let g = map(mouseX, 0, width, 100, 255)
  fill(0, g, 0, 10);
  square(mouseX, mouseY, squareSize);
}

// map(value, start1, stop1, start2, stop2, [withinBounds])

// The random() Function (Random Square Design)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.4-random.html
// https://youtu.be/POn4cZ0jL-o

// Random Square Design: https://editor.p5js.org/codingtrain/sketches/Sl8ml_Lz8
// Random House Exercise: https://editor.p5js.org/codingtrain/sketches/HGq_S0Z5H
// Random Points: https://editor.p5js.org/codingtrain/sketches/h7hFqoV6H
// Painting Exercise 1: https://editor.p5js.org/codingtrain/sketches/stERy5a1D
// Painting Exercise 2: https://editor.p5js.org/codingtrain/sketches/IyyJ1QYKh
