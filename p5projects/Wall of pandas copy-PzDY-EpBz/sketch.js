p = ["🐼", "🐻"];
// ^ random list
// p='🐼'
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //for (let x = 0; x < width; x += 50) {
  //drawFlower("😎", 50, x, 50);
  //drawFlower('😊', random(50,80),x,y)
  //  console.log("x", x);
  // }
  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      drawFlower(p[random([0, 1])], random(10, 50), x, y);
      //drawFlower("🥹", 30, x, y);
    }
  }
  //for (let x = 0; x < width; x += 50) {
  //drawFlower("😭", 10, x, 150);
  // }
  function drawFlower(s, size, x, y) {
    textAlign(CENTER, CENTER);
    textSize(size);
    text(s, x, y);
  }
  // 💐 🏵️ 🌹 🌸

  // https://editor.p5js.org/jht9629-nyu/sketches/_Ax2BHGcn
  // Day 6 function emoji for

  // https://p5js.org/reference/p5/for/
}
