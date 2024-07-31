// https://editor.p5js.org/jht9629-nyu/sketches/BAdPeYbKA
// playlist maker :3 -Sophia loadSound

// https://p5js.org/reference/p5/loadSound/

let page = 1;
let lastPage = 3;

let mySound;
let myFunky;
let myRainbow;
let myAfterGlowSound;

function preload() {
  myFunky = loadSound('funky.mp3');
  myRainbow = loadSound('rainbow.mp3');
  myAfterGlowSound = loadSound('afterglow.mp3');
  // mySound = myFunky;
  // mySound = myRainbow;
  mySound = myAfterGlowSound;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  text("Press the mouse to advance to the next song!", 20, 600);
  checkSound();
}

function draw() {
  background(255);
  if (page == 1) {
    drawPage1();
    // let beat = createAudio("afterglow.mp3");
    // beat.showControls();
    // if (! mySound.isPlaying() ) {
    //   mySound.play();
    // }
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
  checkSound();
}

function checkSound() {
  if (page == 1) {
    startSound( myAfterGlowSound )
  }
  else if (page == 2) {
    startSound( myFunky )
  }
  else if (page == 3) {
    startSound( myRainbow )
  }
  else {
    startSound();
  }
}

function startSound(newSound) {
  if (mySound) mySound.stop();
  mySound = newSound;
  if (mySound) mySound.play();
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

// https://editor.p5js.org/jht9629-nyu/sketches/R_kTAFqeX
// https://editor.p5js.org/soj8894/sketches/E6U3ejilz
// playlist maker :3 -Sophia
