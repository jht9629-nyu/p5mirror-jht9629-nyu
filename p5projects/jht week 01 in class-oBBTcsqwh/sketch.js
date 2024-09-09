function setup() {
  createCanvas(400, 200);
}

function draw() {
  // background(255); // white
  // background(0); // black
  background(128); // gray
  
  stroke(255)
  strokeWeight(10);
  fill(0, 255, 0); // green
  
  // rect(x, y, w, h)
  rect(10, 10, 200, 100);
  
  // square(x, y, s, [tl], [tr], [br], [bl])
  fill(255, 0, 0); // red
  square(30, 20, 55);
}
