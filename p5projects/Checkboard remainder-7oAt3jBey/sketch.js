// https://editor.p5js.org/jht9629-nyu/sketches/7oAt3jBey
// Checkboard remainder

let col = 10;
let row = 10;
let gridWidth = 400;
let gridHeight = 400;

function setup() {
  createCanvas(gridWidth, gridHeight);
  noLoop();
}
function draw() {
  background(255);
  let cellWidth = gridWidth / col;
  let cellHeight = gridHeight / row;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if ((i + j) % 2 == 0) {
        fill("black");
      } else {
        fill("white");
      }
      rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
    }
  }
}

// https://editor.p5js.org/MarvenMa/sketches/5moDK1_oC
// W4.4 MarvenMa

// https://docs.google.com/document/d/1-UJ1td5BagdOO8F5MzZbggMMcO5l5TEz/edit
