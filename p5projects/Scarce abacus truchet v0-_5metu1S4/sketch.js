// https://editor.p5js.org/jht9629-nyu/sketches/_5metu1S4
// Scarce abacus truchet v0

// https://claude.ai/chat/e0ece5a3-909b-44ac-bd46-9098eeb439fe
// p5js code to draw truchet pattern

let tileSize = 60;
let cols, rows;
let pattern = [];
let tileType = 0; // 0 = curves, 1 = diagonal lines

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent(document.body);

  cols = floor(width / tileSize);
  rows = floor(height / tileSize);

  generatePattern();
}

function draw() {
  background(240);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * tileSize;
      let y = j * tileSize;
      let rotation = pattern[i][j];

      push();
      translate(x + tileSize / 2, y + tileSize / 2);
      rotate((rotation * PI) / 2);
      translate(-tileSize / 2, -tileSize / 2);

      if (tileType === 0) {
        drawCurveTile();
      } else {
        drawLineTile();
      }

      pop();
    }
  }
}

function drawCurveTile() {
  fill(255);
  stroke(50);
  strokeWeight(3);
  rect(0, 0, tileSize, tileSize);

  // Draw quarter circles
  stroke(100, 150, 255);
  strokeWeight(4);
  noFill();

  // Top-left to bottom-right curve
  arc(0, 0, tileSize, tileSize, 0, PI / 2);
  arc(tileSize, tileSize, tileSize, tileSize, PI, (3 * PI) / 2);
}

function drawLineTile() {
  fill(255);
  stroke(50);
  strokeWeight(2);
  rect(0, 0, tileSize, tileSize);

  // Draw diagonal lines
  stroke(255, 100, 100);
  strokeWeight(4);

  line(0, 0, tileSize, tileSize);
  line(0, tileSize / 3, tileSize / 3, 0);
  line((2 * tileSize) / 3, tileSize, tileSize, (2 * tileSize) / 3);
}

function generatePattern() {
  pattern = [];
  for (let i = 0; i < cols; i++) {
    pattern[i] = [];
    for (let j = 0; j < rows; j++) {
      pattern[i][j] = random([0,1]); // Random rotation: 0, 1, 2, or 3 (90° increments)
      // pattern[i][j] = floor(random(4)); // Random rotation: 0, 1, 2, or 3 (90° increments)
    }
  }
}

function regeneratePattern() {
  generatePattern();
}

function toggleTileType() {
  tileType = (tileType + 1) % 2;
}

function keyPressed() {
  if (key === " ") {
    generatePattern();
  } else if (key === "t" || key === "T") {
    toggleTileType();
  }
}

function mousePressed() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    let col = floor(mouseX / tileSize);
    let row = floor(mouseY / tileSize);
    if (col < cols && row < rows) {
      pattern[col][row] = (pattern[col][row] + 1) % 4;
    }
  }
}
