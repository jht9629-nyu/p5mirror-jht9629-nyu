// https://editor.p5js.org/jht9629-nyu/sketches/FKwP_H6CG
// ICM Week 04 Circles

function setup() {
  createCanvas(200, 200);
  background(255);

  noFill();
  stroke(0);
  strokeWeight(0.6);

  for (let i = 0; i < 5; i += 1) {
    let r = 40 + i * 35;
    circle(100, 100, r);
    console.log("i", i, 'r', r);
  }

  // circle(100, 100, 75);
  // circle(100, 100, 110);
  // circle(100, 100, 145);
  // circle(100, 100, 180);
}
