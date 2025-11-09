//https://editor.p5js.org/jht9629-nyu/sketches/3NH2-WIyF
// https://editor.p5js.org/yueyanZ/sketches/YALi09CJE

//ICM-week2-03 by Amanda
//https://editor.p5js.org/yueyanZ/sketches/YALi09CJE
//Move a circle from the middle of the screen to the right side of the screen.
//Add 3 more, 1 moving left, 1 moving up, 1 moving down.
//Add 4 more, each moving towards each of the 4 corners of the canvas.
//Make one of your circles move 10 times faster than the other circles.
//Challenge (Optional): Re-write 4b  3b. so if I change the width of the canvas, the circles still go to the corners without having to change any other code.

// let width = 600; // dont change p5 globals
// let height = 400;
let X1 = 500 / 2;
let X2;
let y1;
let y2;
let x3;
let y3;
let x4;
let y4;
let x5;
let y5;
let x6;
let y6;

function setup() {
  // createCanvas(width, height);
  createCanvas(windowWidth/2, windowHeight/2);
  X1 = width / 2;
  X2 = width / 2;
  y1 = height / 2;
  y2 = height / 2;
  x3 = width / 2;
  y3 = height / 2;
  x4 = width / 2;
  y4 = height / 2;
  x5 = width / 2;
  y5 = height / 2;
  x6 = width / 2;
  y6 = height / 2;
}

function draw() {
  background(0);
  noStroke();
  fill(255);

  //circle1
  circle(X1, height / 2, 64);
  X1 = X1 + 2;

  //circle2
  circle(X2, height / 2, 64);
  X2 = X2 - 2;

  //circle3
  circle(width / 2, y1, 64);
  y1 = y1 - (height / width) * 2;

  //circle4
  circle(width / 2, y2, 64);
  y2 = y2 + 2;

  //circle5
  circle(x3, y3, 64);
  x3 = x3 + 1;
  y3 = y3 - (height / width) * 1;

  //circle6
  circle(x4, y4, 64);
  x4 = x4 - 1;
  y4 = y4 + (height / width) * 1;

  //circle7
  circle(x5, y5, 64);
  x5 = x5 + 1;
  y5 = y5 + (height / width) * 1;

  //circle7
  circle(x6, y6, 64);
  x6 = x6 - 1;
  y6 = y6 - (height / width) * 1;
}
