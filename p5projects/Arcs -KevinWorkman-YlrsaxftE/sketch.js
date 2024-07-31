// https://editor.p5js.org/jht9629-nyu/sketches/YlrsaxftE
// https://editor.p5js.org/KevinWorkman/sketches/T_x83Y_HU
// Arcs -KevinWorkman

function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(32);
  strokeCap(SQUARE);
  noFill();
  
  noLoop();
}

function draw() {
  background(32);
  let x = width/2;
  let y = height/2;
  
  stroke(random(255), random(255), random(255));
  arc(x, y, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(x, y, 64, 64, PI, 0);
  
  stroke(random(255), random(255), random(255));
  arc(x, y, 160, 160, PI / 6, PI * 5 / 6);
  stroke(random(255), random(255), random(255));
  arc(x, y, 160, 160, PI * 5 / 6, PI * 3 / 2);
  stroke(random(255), random(255), random(255));
  arc(x, y, 160, 160, PI * 3 / 2, PI / 6);
  
  stroke(random(255), random(255), random(255));
  arc(x, y, 256, 256, 0, PI / 2);
  stroke(random(255), random(255), random(255));
  arc(x, y, 256, 256, PI / 2, PI);
  stroke(random(255), random(255), random(255));
  arc(x, y, 256, 256, PI, PI * 3 / 2);
  stroke(random(255), random(255), random(255));
  arc(x, y, 256, 256, PI * 3 / 2, 0);
  
  stroke(random(255), random(255), random(255));
  arc(x, y, 352, 352, PI * 3 / 10, PI * 7 / 10);
  stroke(random(255), random(255), random(255));
  arc(x, y, 352, 352, PI * 7 / 10, PI * 11 / 10);
  stroke(random(255), random(255), random(255));
  arc(x, y, 352, 352, PI * 11 / 10, PI * 3 / 2);
  stroke(random(255), random(255), random(255));
  arc(x, y, 352, 352, PI * 3 / 2, PI * 19 / 10)
  stroke(random(255), random(255), random(255));
  arc(x, y, 352, 352, PI * 19 / 10, PI * 3 / 10)
}