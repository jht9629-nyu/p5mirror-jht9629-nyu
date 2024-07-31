// https://editor.p5js.org/jht9629-nyu/sketches/_X4HJaves
// pages randomWalker squareFilled

let page = 1;
let lastPage = 3;
let msgDiv;

function setup() {
  createCanvas(windowWidth, windowHeight - 30);

  msgDiv = createDiv("Press the mouse to advance to next page");
}

function draw() {
  // background(255);

  drawHeader();

  if (page == 1) {
    randomWalker_draw();
  }
  if (page == 2) {
    squareFilled_draw();
  }
  if (page == 3) {
    // squareFilled_draw();
  }
}

function mousePressed() {
  my = null;
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
}

function drawHeader() {
  // fill("black");
  // textSize(64);
  // text("Page " + page, 20, 64);
  msgDiv.html("Page " + page);
}

function drawPage1() {
  background(255);
  fill("red");
  let x0 = width / 2;
  let y0 = height / 2;
  rect(x0 - 50, y0 - 50, 100, 100);
}

function drawPage2() {
  background(255);
  fill("green");
  let x0 = width / 2;
  let y0 = height / 2;
  circle(x0, y0, width);
}

function drawPage3() {
  background(255);
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

// https://p5js.org/reference/p5/mousePressed/

// https://editor.p5js.org/jht9629-nyu/sketches/ZR8mNfmUZ
// pages - mousePressed to next page
