function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < width; i += 40) {
    drawFlower("👁️", 40, i);
  }
}
function drawFlower(s, size, x) {
  // Style the text.
  textAlign(CENTER, CENTER);

  // Use the size parameter.
  textSize(size);

  // Draw a flower emoji.
  text(s, x, 50);
}
//👁️
