let x = 0;
let y = 0;
let i = 0;
let str = ['🐵','🐻‍❄️','🐽','🐥']

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(width/2);
}

function draw() {
  background(220);
  x = width / 2;
  y = height / 2;
  drawStr(str[i])
}

function drawStr(emo) {
  text(emo, x, y);
  // rect(x,y,30,30)
  x += 60;
}

function mouseClicked() {
  i = (i + 1) % 4
}


// 🐵 🐻‍❄️ 🐽 🐥
