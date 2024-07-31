// https://editor.p5js.org/jht9629-nyu/sketches/FGY0TBrSEf
// Text banner

let x = 0;
let s = -10;
let c = "#72A8A8";

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = random(["#72A8A8", "#98B4B7", "#F3C9CB", "#eebdb6", "#eac09a"]);
  x = width / 2;

  // createDiv("Version: JHT 1");

  // Slow down display update
  frameRate(9);
}

function draw() {
  background(255);

  fill(c);
  textSize(64);

  let y = height / 2;
  let msg = "LETS BUY COPIES OF THE RAINBOW FISH IN BULK";
  text(msg, x, y);

  x = x + s;
  if (x > width) {
    x = 0;
  }
  if (x < -width) {
    c = random(["#72A8A8", "#98B4B7", "#F3C9CB", "#eebdb6", "#eac09a"]);
    x = width / 2;
  }
}

// TRY: adding to pages
