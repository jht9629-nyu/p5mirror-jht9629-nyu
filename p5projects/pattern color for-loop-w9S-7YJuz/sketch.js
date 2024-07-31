// https://editor.p5js.org/jht9629-nyu/sketches/w9S-7YJuz
// pattern color for-loop

let x;
let y;
let w;
let h;
let c;
let i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  w = width / 10;
  h = height ;
  c = ["red", "green", "gold"];
  
  i = 0;
  y = 0;
  for (let x = 0; x < width; x += w) {
    fill(c[i]);
    rect(x, y, w, h);
    i = (i + 1) % c.length;
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors

// https://editor.p5js.org/jht9629-nyu/sketches/H9q2sKq8h
// pattern animation color sequence
