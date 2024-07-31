let x = 0;
let str = ['🐵','🐻‍❄️','🐽','🐥']

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(60);
}

function draw() {
  background(220);
  x = 20
  drawStr('🌸')
  drawStr('🐵')
  drawStr('🐽')
  drawStr('🐥')
  drawStr('X')
}

function drawStr(emo) {
  text(emo, x, 50);
  // rect(x,50,30,30)
  x += 60;
}

// 🐵 🐻‍❄️ 🐽 🐥
