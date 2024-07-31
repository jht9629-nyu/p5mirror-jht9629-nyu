// https://editor.p5js.org/jht9629-nyu/sketches/H9q2sKq8h
// pattern animation color sequence

let x;
let y;
let w;
let h;
let colors = ['red', 'green', 'gold'];
let index = 0;

function setup() {
  // size canvas to accommodate mobile window
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  w = width / 10;
  h = height / 10;
  // frameRate(1);
}

function draw() {
  // background(220);  // TRY enabling

  let c = colors[index];
  fill(c);
  
  index = (index + 1) % colors.length;
  
  rect(x, y, w, h);  

  x = x + w;
  if (x >= width) {
    x = 0;
    y = y + h;
    if (y > height) {
      y = 0;
    }
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors
