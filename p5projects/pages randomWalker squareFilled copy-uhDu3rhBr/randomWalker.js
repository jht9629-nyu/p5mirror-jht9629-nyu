// https://editor.p5js.org/jht9629-nyu/sketches/nUcojQexI
// Random Walker remix

let my;

// let x;
// let y;

// let r;
// let g;
// let b;

function randomWalker_setup() {
  // createCanvas(windowWidth, windowHeight);
  my = {};
  my.x = width / 2;
  my.y = height / 2;

  my.r = random(255);
  my.g = random(255);
  my.b = random(255);

  background(32);
}

function randomWalker_draw() {
  if (!my) {
    randomWalker_setup();
  }
  for (let i = 0; i < 100; i++) {
    randomWalker_draw2();
  }
}

function randomWalker_draw2() {
  let nextX = my.x + random(-20, 20);
  let nextY = my.y + random(-20, 20);
  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);

  my.r += random(-10, 10);
  my.g += random(-10, 10);
  my.b += random(-10, 10);
  my.r = constrain(my.r, 0, 255);
  my.g = constrain(my.g, 0, 255);
  my.b = constrain(my.b, 0, 255);

  stroke(my.r, my.g, my.b);
  line(my.x, my.y, nextX, nextY);

  my.x = nextX;
  my.y = nextY;
}

// https://editor.p5js.org/KevinWorkman/sketches/2eAaIBlau
// Random Walker in Ten Minutes
// https://happycoding.io/tutorials/p5js/

