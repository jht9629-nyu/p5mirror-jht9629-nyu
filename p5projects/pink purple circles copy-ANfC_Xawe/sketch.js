// https://editor.p5js.org/jht9629-nyu/sketches/ANfC_Xawe
// https://editor.p5js.org/rafiiia/sketches/dAYI_oiNz

// var x = 300;
let shapeSize;
let lineWidth;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function mousePressed() {
  clear();
  stroke("deeppink");
  strokeWeight(2);
}

function draw() {
  ellipseMode(CENTER);
  lineWidth = random(4, 28);
  shapeSize = (mouseY, mouseX);
  strokeWeight(mouseX);
  stroke(200, 60, 200, 10);
  let g = map(mouseX, 0, mouseY, 100, 0);
  fill(230, 0, 100, 50);

  // ellipse(x, 200, 100, 100);
  ellipse(mouseX, mouseY, shapeSize);
  ellipse(mouseX+width/3, mouseY, shapeSize);
//   if (x > height) {
   
//   }
//   x = x + 3;

  alpha = mouseY;
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
