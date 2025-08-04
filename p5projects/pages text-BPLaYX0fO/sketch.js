// https://editor.p5js.org/jht9629-nyu/sketches/BPLaYX0fO
// pages text

let page = 1;
let lastPage = 3;

let x = 0;
let s = -10;
let c = "red"

function setup() {
  createCanvas(windowWidth, windowHeight - 30);
  frameRate(5)
  createDiv("Click the mouse to advance to next page");
}

function draw() {
  background(255);
  // drawHeader();
  if (page == 1) {
    drawPage1();
  }
  if (page == 2) {
    drawPage2();
  }
  if (page == 3) {
    drawPage3();
  }
  drawHeader();
}

function drawPage1() {
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

function mouseClicked() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
}

function drawHeader() {
  fill("black");
  textSize(64);
  text("Page " + page + " - Hello class", 20, 64);
}

// function drawPage1() {
//   fill("red");
//   let x0 = width / 2;
//   let y0 = height / 2;
//   rect(x0 - 50, y0 - 50, 100, 100);
// }


function drawPage2() {
  fill("green");
  let x0 = width / 2;
  let y0 = height / 2;
  circle(x0, y0, width);
}

function drawPage3() {
  fill("gold");
  let x0 = width / 2;
  let y0 = height / 2;
  let x1 = x0 - 100;
  let y1 = y0 + 100;
  let x2 = x0 + 100;
  let y2 = y1;
  let x3 = x0;
  let y3 = y0 - 100;
  triangle(x1, y1, x2, y2, x3, y3);
}

// TRY: fix last page bug
// TRY: code page3
// TRY: remix with knock-knock joke

// https://editor.p5js.org/jht9629-nyu/sketches/ZR8mNfmUZ
// pages - mousePressed to next page

// https://p5js.org/reference/p5/mousePressed/

// https://editor.p5js.org/jht9629-nyu/sketches/7cvx3OfmW
// pages - mouseClicked event to next page
