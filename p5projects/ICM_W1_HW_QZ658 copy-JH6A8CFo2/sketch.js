//  https://editor.p5js.org/qz658/sketches/_6gLk0dSg

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  draw_head();
  draw_body();
}

function draw_head() {
  rectMode(CENTER);
  fill(40);
  stroke(0, 0);
  rect(200, 400, 150, 150);
  ellipse(200, 275, 100);
}

function draw_body() {
  fill(45);
  rect(185, 240, 50, 10);
  fill(60);
  rect(220, 230, 40, 10);
  fill(70);
  rect(240, 210, 30, 10);
  fill(80);
  rect(260, 200, 20, 8);
  fill(100);
  rect(270, 190, 10, 8);
  fill(140);
  square(255, 180, 6);
  fill(180);
  square(270, 170, 4);
  fill(250, 250, 250);
  rect(285, 160, 4, 6);

  noStroke();
  fill(0);
  rect(176, 230, 48, 9);

  fill(230, 230, 255);
  quad(300, 30, 320, 90, 300, 150, 280, 90);
  quad(250, 90, 300, 70, 350, 90, 300, 110);
  fill(255);
  triangle(70, 1, 150, 1, 110, 10);
  triangle(100, 1, 120, 1, 110, 60);
}
