// https://editor.p5js.org/jht9629-nyu/sketches/7kECr3e1z
// ICM Week 04 Circles for loop r

function setup() {
  createCanvas(200, 200);
  background(255);

  noFill();
  stroke(0);
  strokeWeight(0.6);

  for (let r = 40; r <= 180; r += 35) {
    circle(100, 100, r);
    console.log( 'r', r);
  }

  // circle(100, 100, 75);
  // circle(100, 100, 110);
  // circle(100, 100, 145);
  // circle(100, 100, 180);
}

// https://editor.p5js.org/jht9629-nyu/sketches/FKwP_H6CG
// ICM Week 04 Circles
