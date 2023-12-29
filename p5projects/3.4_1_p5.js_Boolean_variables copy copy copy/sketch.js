// https://editor.p5js.org/jht9629-nyu/sketches/1OY9mWiG4
// 3.4_1_p5.js_Boolean_variables

// Correction to sketch link in video
// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/4-boolean

// 3.4_1_p5.js_Boolean_variables
// https://github.com/Codingrainbow/Rainbow-Code/blob/master/p5.js/3.4_1_p5.js_Boolean_variables%20/sketch.js

let isGreen = false;
let r1 = { x: 300, y: 200, w: 100, h: 100 };
let r2 = { x: 200, y: 300, w: 100, h: 100 };

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

  if (testRect(r1)) {
    fill(255, 0, 200);
  } else {
    fill(0);
  }
  rect(r1.x, r1.y, r1.w, r1.h);

  if (testRect(r2)) {
    fill(255, 0, 200);
  } else {
    fill(0);
  }
  rect(r2.x, r2.y, r2.w, r2.h);
}

function mousePressed() {
  if (testRect(r1)) {
    // if (isGreen) {
    //   isGreen = false;
    // } else {
    //   isGreen = true;
    // }
    isGreen = !isGreen;
  }
}

function testRect(rp) {
  let withinX = mouseX > rp.x && mouseX < rp.x + rp.w;
  let withinY = mouseY > rp.y && mouseY < rp.y + rp.h;
  return withinX && withinY;
}

// function rectTest() {
//   return mouseX > 300 && mouseX < 300+100 && mouseY > 200 && mouseY < 200+100;
// }
