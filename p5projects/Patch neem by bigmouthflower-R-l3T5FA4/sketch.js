// https://editor.p5js.org/bigmouthflower/sketches/KBfVMdXJ0
// Patch neem by bigmouthflower
let frameCounter = 0;
let animationSpeed = 15; // Adjust this value for slower or faster animation

function setup() {
  createCanvas(400, 400);
  frameRate(animationSpeed);
}

function draw() {
  background(mouseX + 180, mouseX + 130, mouseX + 30);

  for (var x = 25; x <= width; x += 100) {
    for (var y = 20; y <= height; y += 50) {
      let arcWidth = random(25, 50); // Random width between 20 and 60
      let arcHeight = random(25, 50); // Random height between 20 and 60
      let strokeG = random(150, 200);
      stroke(strokeG + 90, strokeG, 0);
      strokeWeight(5);
      noFill();
      arc(x, y, arcWidth, arcHeight, 0, PI + QUARTER_PI, OPEN);
      arc(x + 50, y, arcWidth, arcHeight, PI + (3 / 4) * PI, PI, OPEN);
      let pointX = random(x - 5, x + 5);
      let pointY = random(y - 5, y + 5);
      point(pointX, pointY + 10);
      point(pointX + 50, pointY + 10);
    }
  }
}

frameCounter++;
