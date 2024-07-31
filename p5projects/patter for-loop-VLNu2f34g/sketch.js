// https://editor.p5js.org/jht9629-nyu/sketches/VLNu2f34g
// patter for-loop

let x;
let y;
let w;
let h;

function setup() {
  // size canvas to accommodate mobile window
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  w = width / 13;
  h = height

  y = 0;
  for (let x = 0; x < width; x += w) {
    rect(x, y, w, h);
  }
}


// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors

// https://editor.p5js.org/jht9629-nyu/sketches/H9q2sKq8h
// pattern animation color sequence

// https://editor.p5js.org/jht9629-nyu/sketches/w9S-7YJuz
// pattern color for-loop

// https://editor.p5js.org/jht9629-nyu/sketches/hWZe7os95
// pattern gray for-loop map
