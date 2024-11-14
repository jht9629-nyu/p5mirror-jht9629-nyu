let x = 0;
let y = 0;
let x1, y1;

function setup() {
  createCanvas(400, 600);
  x1 = width / 2;
  y1 = height / 2;

  x2 = width / 2;
  y2 = height / 2;

  x3 = width / 2;
  y3 = height / 2;

  x4 = width / 2;
  y4 = height / 2;

  x5 = width / 2;
  y5 = height / 2;

  x6 = width / 2;
  y6 = height / 2;

  x7 = width / 2;
  y7 = height / 2;

  x8 = width / 2;
  y8 = height / 2;
  
  frameRate(2)
}

function draw() {
  background(220);

  // Circle 1
  circle(x1, y1, 50);
  x1 += 1;

  // Circle 2
  circle(x2, y2, 50);
  x2 -= 1;

  //Circle 3
  circle(x3, y3, 50);
  y3 -= 1;

  //Circle 4
  circle(x4, y4, 50);
  y4 += 1;

  // Circle 5
  circle(x5, y5, 50);
  x5 += 1;
  y5 -= 1;

  // Circle 6
  circle(x6, y6, 50);
  x6 -= 1;
  y6 -= 1;

  // Circle 7
  circle(x7, y7, 50);
  x7 -= 1;
  y7 += 1;

  // Circle 8
  circle(x8, y8, 50);
  x8 += 10;
  y8 += 10;
}
