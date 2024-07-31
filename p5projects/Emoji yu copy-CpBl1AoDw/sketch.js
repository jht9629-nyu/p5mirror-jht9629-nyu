function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  for (let x = 0; x < width; x += 50) {
    drawFlower("👨🏿", 50, x, 50);
    console.log("x", x);
  }
  for (let x = 0; x < width; x += 50) {
    drawFlower("👨🏿", 30, x, 100);
  }
}
function drawFlower(s, size, x, y) {
  textAlign(CENTER, CENTER);
  textSize(size);
  text(s, x, y);
}
// 💐 🏵️ 🌹 🌸

// https://editor.p5js.org/jht9629-nyu/sketches/_Ax2BHGcn
// Day 6 function emoji for

// https://p5js.org/reference/p5/for/
