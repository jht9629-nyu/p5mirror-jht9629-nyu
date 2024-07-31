function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  for (let x = 0; x < width; x += 50) {
    drawFlower('💐', 50, x)
    console.log('x', x);
  }
}
function drawFlower(s, size, x) {
  textAlign(CENTER, CENTER);
  textSize(size);
  text(s, x, 50);
}
// 💐 🏵️ 🌹 🌸

// https://editor.p5js.org/jht9629-nyu/sketches/_Ax2BHGcn
// Day 6 function emoji for

// https://p5js.org/reference/p5/for/

