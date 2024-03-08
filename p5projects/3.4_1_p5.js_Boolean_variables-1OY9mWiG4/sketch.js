// https://editor.p5js.org/jht9629-nyu/sketches/1OY9mWiG4
// 3.4_1_p5.js_Boolean_variables

// Correction to sketch link in video
// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/4-boolean

// 3.4_1_p5.js_Boolean_variables
// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/3.4_1_p5.js_Boolean_variables%20/sketch.js

var isGreen = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (isGreen) {
    background(0, 255, 0);
  } else {
    background(0);
  }
  stroke(255);
  strokeWeight(4);
  noFill();

  if (rectTest()) {
    fill(255, 0, 200);
  }
  // rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {
  if (rectTest()) {
    // if (isGreen) {
    //   isGreen = false;
    // } else {
    //   isGreen = true;
    // }
    isGreen = !isGreen;
  }
}

function testRect(x,y,w,h) {
  return mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h;
}

function rectTest() {
  return mouseX > 300 && mouseX < 300+100 && mouseY > 200 && mouseY < 200+100;
}