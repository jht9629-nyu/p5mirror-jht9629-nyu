// https://editor.p5js.org/jht9629-nyu/sketches/1OY9mWiG4
// 3.4_1_p5.js_Boolean_variables
// let isGreen function rectTest()

// Correction to sketch link in video
// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/4-boolean

// 3.4_1_p5.js_Boolean_variables
// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/3.4_1_p5.js_Boolean_variables%20/sketch.js

let isGreen = false;

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
    isGreen = !isGreen;
  }
}

function rectTest() {
  // return mouseX > 300 && mouseX < 300+100 
  // && mouseY > 200 && mouseY < 200+100;
  return mouseInRect(300, 200, 100, 100);
}

function mouseInRect(x,y,w,h) {
  let inx = mouseX > x && mouseX < x+w
  let iny = mouseY > y && mouseY < y+h
  return inx && iny;
}
