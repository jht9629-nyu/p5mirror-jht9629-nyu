// Inspired by: https://www.youtube.com/watch?v=88HToL9SwjI by Patt Vira


let cols, rows;
let size = 13;
let font;
let threshold = .5;
let angle = 0;
let fullScreenButton;

function preload() {
  font = loadFont("ibm.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setup_fullScreenButton();
  updateGrid();
  textSize(size);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  angle += 0.05;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size;
      let y = size / 2 + j * size;
      let d = dist(x, y, width / 2, height / 2);
      let path = sin(d - angle);
      fill(155);
      textFont(font);
      if (path > threshold) {
        text("0", x, y);
      } else {
        text(".", x, y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateGrid();
}

// Recalculate columns & rows
function updateGrid() {
  cols = floor(width / size);
  rows = floor(height / size);
}


// button function
function setup_fullScreenButton() {
 fullScreenButton = createButton("Full Screen");
 fullScreenButton.mousePressed(fullScreen_action);
fullScreenButton.style("font-size:42px");
}

function fullScreen_action() {
  // fullScreenButton.remove(); // Remove the button after it's clicked
  fullscreen(!fullscreen()); // Toggle fullscreen
    resizeCanvas(windowWidth, windowHeight);
    updateGrid();

}
