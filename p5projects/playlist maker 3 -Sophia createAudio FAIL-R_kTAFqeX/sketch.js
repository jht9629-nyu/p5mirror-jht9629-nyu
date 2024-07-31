// https://editor.p5js.org/jht9629-nyu/sketches/R_kTAFqeX
// https://editor.p5js.org/soj8894/sketches/E6U3ejilz
// playlist maker :3 -Sophia

/*
immer.esm.mjs:1 Uncaught 
RangeError: Maximum call stack size exceeded
    at Bt (immer.esm.mjs:1:2666)
    at It (immer.esm.mjs:1:3259)
    at immer.esm.mjs:1:2742
    at immer.esm.mjs:1:948
    at Array.forEach (<anonymous>)
    at ht (immer.esm.mjs:1:904)
    at Bt (immer.esm.mjs:1:2716)
    at It (immer.esm.mjs:1:3259)
    at immer.esm.mjs:1:2742
    at immer.esm.mjs:1:948
Show 167 more frames
*/

let page = 1;
let lastPage = 3;
let mybeat = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  text("Press the mouse to advance to the next song!", 20, 600);
}

function draw() {
  background(255);
  if (page == 1) {
    drawPage1();
    // let beat = createAudio("afterglow.mp3");
    // beat.showControls();
  }
  if (page == 2) {
    drawPage2();
  }
  if (page == 3) {
    drawPage3();
  }
  if (page == 4) {
    drawPage4();
  }
  if (page == 5) {
    drawPage5();
  }
  if (page == 6) {
    drawPage6();
  }
  if (page == 7) {
    drawPage7();
  }
  drawHeader();
}

function mousePressed() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
}

function drawHeader() {
  fill("black");
  textSize(50);
  text("Song " + page, 10, 100);
}

function drawPage1() {
  fill("black");
  textSize(30);
  text("Afterglow 2", 50, 200);
  if (mybeat === false) {
    console.log('mybeat', mybeat);
    mybeat = createAudio("afterglow.mp3");
    // beat.showControls();
    // beat = true;
    console.log('mybeat2', mybeat);
  }
}

function drawPage2() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage3() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}

function drawPage4() {
  fill("black");
  textSize(64);
  text("-", 100, 300);
}
