// https://editor.p5js.org/jht9629-nyu/sketches/6HRN2MYyH
// Game States array

let slides = [drawStart, drawMenu, drawPlay];
let index = 0;

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220);
  textSize(100);
  slides[index]();
}

function drawStart() {
  background(0, 255, 0);
  text("start", 10, 100);
}

function drawMenu() {
  background(255, 0, 0);
  text("menu", 10, 100);
}

function drawPlay() {
  background(255, 255, 0);
  text("play", 10, 100);
}

function mouseClicked() {
  index = (index + 1) % slides.length;
}

// TRY: click on left to go back, right to go next state

// https://editor.p5js.org/jht9629-nyu/sketches/-eVVn0lh2
// Game States explicit

// https://editor.p5js.org/jht9629-nyu/sketches/l3ELOjGdJ
// Game States

// https://editor.p5js.org/shawn/sketches
