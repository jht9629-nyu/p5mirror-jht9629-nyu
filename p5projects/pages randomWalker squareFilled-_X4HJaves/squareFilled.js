// https://happycoding.io/tutorials/p5js/animation/square-fill
// let my.squareSize = 0;
// let my.maxSquareSize;

function squareFilled_setup() {
  // createCanvas(300, 300);
  my = {};
  rectMode(CENTER);
  my.squareSize = 0;
  my.maxSquareSize = width;

  noStroke();
  fill(random(255), random(255), random(255));
  background(50);
}

function squareFilled_draw() {
  if (!my) {
    squareFilled_setup();
  }
  square(width / 2, height / 2, my.squareSize);

  my.squareSize += 5;

  // if the square gets too big, start a new square
  if (my.squareSize >= my.maxSquareSize) {
    my.squareSize = 0;
    fill(random(255), random(255), random(255));

    // make the next square smaller
    my.maxSquareSize -= 10;

    // if the square gets too small, make the next one big again
    if (my.maxSquareSize <= 0) {
      my.maxSquareSize = width;
    }
  }
}
