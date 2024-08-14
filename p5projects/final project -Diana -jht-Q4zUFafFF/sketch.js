// https://editor.p5js.org/jht9629-nyu/sketches/Q4zUFafFF
// final project -Diana -jht
let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#fae");
  strokeWeight(4);
  stroke(255);

  for (var x = 0; x <= mouseX; x += 50) {
    for (var y = 0; y <= mouseY; y += 50) {
      if (counter == 0) {
        fill(random(400), 0, random(400));
      } 
      if (counter === 1) {
        fill(0, random(400), random(400));
      }
      rect(x, y, 50, 50);
    }
  }
}

function mousePressed() {
  // fill(random(500), 0, random(200));
  counter = counter + 1;
  console.log("counter", counter);
  if (counter >= 4) {
    counter = 0;
  }
}
