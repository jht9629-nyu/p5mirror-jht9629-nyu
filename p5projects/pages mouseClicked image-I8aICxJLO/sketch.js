// https://editor.p5js.org/jht9629-nyu/sketches/I8aICxJLO
// pages mouseClicked image

let page = 1;
let lastPage = 3;

// Load the image and create a p5.Image object.
let img1;
let img2;
let img3;
function preload() {
  img1 = loadImage('cat1.png');
  img2 = loadImage('dog1.png');
  img3 = loadImage('pig1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight - 30);
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

function mouseClicked() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
}

function drawHeader() {
  fill("black");
  textSize(64);
  // text("Page " + page + " - Hello class", 20, 64);
  text("Page " + page, 20, 64);
}

function drawPage1() {
  let x0 = width / 2;
  let y0 = height / 2;
  // Draw the image.
  // image(img1, x0, y0);
  let x = mouseX - img1.width;
  let y = mouseY - img1.height;
  // image(img1, x, y, width, height);
  image(img1, x, y);
}

function drawPage2() {
  let x0 = width / 2;
  let y0 = height / 2;
  // image(img2, x0, y0);
  image(img2, 0, 0, width, height);
}

function drawPage3() {
  let x0 = width / 2;
  let y0 = height / 2;
  // image(img3, x0, y0);
  image(img3, 0, 0, width, height);
}

// TRY: fix last page bug
// TRY: code page3
// TRY: remix with knock-knock joke

// https://editor.p5js.org/jht9629-nyu/sketches/ZR8mNfmUZ
// pages - mousePressed to next page

// https://p5js.org/reference/p5/mousePressed/

// https://editor.p5js.org/jht9629-nyu/sketches/7cvx3OfmW
// pages - mouseClicked event to next page
