
// https://editor.p5js.org/jht9629-nyu/sketches/hWZe7os95
// pattern gray for-loop map

let x;
let y;
let w;
let h;

function setup() {
  // size canvas to accommodate mobile window
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  let n = 20;
  w = width / n;
  h = height

  y = 0;
  for (let x = 0; x < width; x += w) {
    // map(value, start1, stop1, start2, stop2)
    let c = map(x, 0, width, 0, 255);
    fill(c);
    rect(x, y, w, h);
  }
}

// map(value, start1, stop1, start2, stop2)
// https://p5js.org/reference/p5/map/

// https://editor.p5js.org/jht9629-nyu/sketches/Xha1utfMM
// pattern animation random colors

// https://editor.p5js.org/jht9629-nyu/sketches/H9q2sKq8h
// pattern animation color sequence

// https://editor.p5js.org/jht9629-nyu/sketches/w9S-7YJuz
// pattern color for-loop
