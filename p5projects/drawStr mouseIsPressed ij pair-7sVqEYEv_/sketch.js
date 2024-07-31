let x = 0;
let y = 0;
let i = 0;
let j = 0;
let ts = 0;
let str = ['🐵','🐻‍❄️','🐽','🐥']

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  ts = width/2;
  textSize(ts);
}

function draw() {
  background(220);
  x = ts/2;
  y = height / 2;
  if (mouseIsPressed) {
    if (mouseX < width/2) {
      i = (i + 1) % 4;
    }
    else {
      j = (j + 1) % 4;
    }
  }
  drawStr(str[i])
  drawStr(str[j])
  if (i == j) {
    // console.log('Match!');
    text('Match!', 0, height - 40);
  }
}

function drawStr(emo) {
  text(emo, x, y);
  // rect(x,y,30,30)
  x += ts;
}


// 🐵 🐻‍❄️ 🐽 🐥
