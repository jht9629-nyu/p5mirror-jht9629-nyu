// https://editor.p5js.org/jht9629-nyu/sketches/FGY0TBrSEf
// Text banner

let x = 0;
let s = -10;
let c = "red"

function setup() {
  createCanvas(windowWidth, windowHeight);

  c = random(["green", "red", "yellow"])

  x = width / 2;

  // createDiv("Version: JHT 1");

  // Slow down display update
  frameRate(30);
}

function draw() {
  background(255);

  fill(c);
  textSize(64);

  let y = height / 2;
  // let y = mouseY;
  let msg = "Hello - this is a message from the future";
  text(msg, x, y);

  x = x + s;
  if (x > width) {
    x = 0;
  }
  if (x < -width) {
    c = random(["green", "red", "yellow"])
    x = width / 2;
  }
}

// TRY: adding to pages
