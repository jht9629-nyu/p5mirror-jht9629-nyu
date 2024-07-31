function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  drawFlower('💐', 40, 50)
  drawFlower('🏵️', 40, 150)
  drawFlower('🌹', 40, 250)
  fill('red');
  drawFlower('HI', 40, 350)
}
function drawFlower(s, size, x) {
  // Style the text.
  textAlign(CENTER, CENTER);
  // Use the size parameter.
  textSize(size);
  // Draw a flower emoji.
  text(s, x, 50);
}
// 💐 🏵️ 🌹 🌸