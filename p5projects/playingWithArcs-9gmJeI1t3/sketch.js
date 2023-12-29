// https://editor.p5js.org/jht9629-nyu/sketches/9gmJeI1t3
// playingWithArcs

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(8);

  fill(0);
  stroke(0);
  ellipse(200,200,200,200);
  //fill(200,0,0);
  noFill();
  stroke(200,0,0);
  // can also use map function in place of 2*PI....
  arc(200,200,200,200,0,2*PI*mouseX/width);
 
}

// https://editor.p5js.org/des8963/sketches/40_277_67
// playingWithArcs
