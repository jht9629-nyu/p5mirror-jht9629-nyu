function setup() {
  createCanvas(400, 400);
  foo() // error 
}

function draw() {
  background(220);
}

// ok on Web Editor: v2.15.8
// causes blank screen in editor.p5js v2.7.0