let x = 50;
let x1 = 80;
let x2 = 130;
let x3 = 70;
let x4 = 110;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Six-digit hex RGB notation.
  background("#87cdee");
  fill("#fcc4d7");
  triangle(250, 115, 118, 80, 156, 195);
  triangle(350, 180, 355, 60, 256, 107.2);
  fill("#fcc4d7");
  circle(250, 350, 200);
  circle(250, 200, 200);
  square(160, 400, 55, 20);
  square(290, 400, 55, 20);
  fill("#ADD8E6");
  circle(300, 200, 25);
  fill("#CDAF78");
  circle(200, 200, 25);
  fill("#fae");
  ellipse(250, 230, 80, 40);
  fill("rgba(100%, 0%, 100%, 0.5)");
  circle(235, 230, 25);
  circle(265, 230, 25);
  noStroke();
  fill("#FFFFF");
  ellipse(x, 50, 60, 50);
  ellipse(x1, 40, 60, 50);
  ellipse(x2, 50, 60, 50);
  ellipse(x3, 70, 60, 50);
  ellipse(x4, 65, 60, 50);
  x = x + 1;
  // console.log('x', x);
}
