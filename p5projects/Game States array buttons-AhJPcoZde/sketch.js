// https://editor.p5js.org/jht9629-nyu/sketches/AhJPcoZde
// Game States array buttons

let slides = [drawStart, drawMenu, drawPlay];
let index = 0;

function setup() {
  createCanvas(400, 400).mousePressed(function () {
    index = (index + 1) % slides.length;
  });
  createButton("play").mousePressed(function () {
    index = slides.indexOf(drawPlay);
  });
}

function draw() {
  background(220);
  textSize(100);
  slides[index]();
}

function drawStart() {
  background(0, 255, 0);
  text("start", 10, height/2);
}

function drawMenu() {
  background(255, 0, 0);
  text("menu", 10, height/2);
}

function drawPlay() {
  background(255, 255, 0);
  text("play", 10, height/2);
}

// function mouseClicked() {
//   index = (index + 1) % s.length;
// }

// TRY: more buttons, go next, go previous, go other states

// https://editor.p5js.org/jht9629-nyu/sketches/6HRN2MYyH
// Game States array

// https://editor.p5js.org/jht9629-nyu/sketches/-eVVn0lh2
// Game States explicit

// https://editor.p5js.org/jht9629-nyu/sketches/l3ELOjGdJ
// Game States

// https://editor.p5js.org/shawn/sketches
