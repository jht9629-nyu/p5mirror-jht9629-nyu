// https://editor.p5js.org/jht9629-nyu/sketches/ZR8mNfmUZ
// pages

let my = { };

function setup() {
  
  my.version = 2;
  my.width = 393; // canvas width
  my.height = 600; // canvas height
  my.counter = 1;

  createCanvas(my.width, my.height);

  createDiv("Press the mouse to advance to next page");
  createDiv("Version:" + my.version);
}

function draw() {
  background(255);
  
  fill("black");
  textSize(64);
  text("Page "+my.counter, 20, 64);
  
  if (my.counter == 1) {
    draw_page1();
  }
  if (my.counter == 2) {
    draw_page2();
  }
  if (my.counter == 3) {
    draw_page3();
  }
}

function mousePressed() {
  my.counter = my.counter + 1;
  if (my.counter > 4) { 
    my.counter = 1;
  }
}

function draw_page1() {
  fill("red");
  let x0 = width / 2;
  let y0 = height / 2;
  rect(x0 - 50, y0 - 50, 100, 100);
}

function draw_page2() {
  fill("green");
  let x0 = width / 2;
  let y0 = height / 2;
  circle(x0, y0, width);
}

function draw_page3() {
  fill("gold");
  let x0 = width / 2;
  let y0 = height / 2;
  let x1 = x0 - 100;
  let y1 = y0 + 100;
  let x2 = x0 + 100;
  let y2 = y1;
  let x3 = x0 ;
  let y3 = y0 - 100;
  triangle(x1, y1, x2, y2, x3, y3)
}



