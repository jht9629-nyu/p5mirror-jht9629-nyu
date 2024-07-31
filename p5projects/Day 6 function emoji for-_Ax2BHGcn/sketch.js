let f = ['💐','🏵️','🌹','🌸'];
let i = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //
  i = random([0,1,2,3])
  //
  // this for y will start y with the value 0
  // then add 50 until y reaches the value height
  //
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      // let i = random([0,1,2,3])
      //
      i = (i + 1) % 4
      // 
      drawFlower(f[i], 50, x, y);
      console.log('i', i, 'y', y, 'x', x);
    }
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
