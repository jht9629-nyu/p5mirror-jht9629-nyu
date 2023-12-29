// https://editor.p5js.org/jht9629-nyu/sketches/l3ELOjGdJ
// Game States

let state = 0;
const START = 0;
const MENU = 1;
const PLAY = 2;
const GAMEOVER = 3;
const HIGHSCORE = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(100);
  if (state == START) {
    drawStart();
  } else if (state == MENU) {
    drawMenu();
  } //else if () {

  // }
}

function drawStart() {
  background(0, 255, 0);
  text("start", 10, 100);
}

function drawMenu() {
  background(255, 0, 0);
  text("menu", 10, 100);
}

function mouseClicked() {
  state++;
  if (state > HIGHSCORE) {
    state = 0;
  }
}

// https://editor.p5js.org/shawn/sketches
