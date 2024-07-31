let page = 1;
let lastPage = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  text("Press the mouse to advance to the next song!", 20, 600);
}

function draw() {
  background(255);

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

function mousePressed() {
  page = page + 1;
  if (page > lastPage) {
    page = 1;
  }
  if (page == 1) {
    // Load the audio.
    let beat = createAudio("afterglow.mp3");

    // Show the default audio controls.
    beat.showControls();
    beat.play();
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
  text("Afterglow", 50, 200);
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
