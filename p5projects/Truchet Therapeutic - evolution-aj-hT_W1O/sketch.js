// https://editor.p5js.org/jht9629-nyu/sketches/aj-hT_W1O
// Truchet Therapeutic - evolution

function setup() {
  createCanvas(400, 400);
  background(190)
  noStroke();
}

function draw() {
  let d = 100;
  let x0 = 0;
  let y0 = 0;
  fill(220);
  rect(x0, y0, d, d);
  fill(0);
  arc(x0, y0, d, d, HALF_PI * 0, HALF_PI * 1, PIE);
  arc(x0 + 100, y0 + 100, d, d, HALF_PI * 2, HALF_PI * 3, PIE);
  // arc(x, y, w, h, start, stop, [mode], [detail])
  // CHORD, PIE or OPEN

  x0 = 100;
  fill(220);
  rect(x0, y0, d, d);
  fill(0);
  arc(x0 + 100, y0, d, d, HALF_PI * 1, HALF_PI * 2, PIE);
  arc(x0, y0 + 100, d, d, HALF_PI * 3, HALF_PI * 4, PIE);

  x0 = 200;
  fill(0);
  rect(x0, y0, d, d);
  fill(220);
  arc(x0, y0, d, d, HALF_PI * 0, HALF_PI * 1, PIE);
  arc(x0 + 100, y0 + 100, d, d, HALF_PI * 2, HALF_PI * 3, PIE);

  x0 = 300;
  fill(0);
  rect(x0, y0, d, d);
  fill(220);
  arc(x0 + 100, y0, d, d, HALF_PI * 1, HALF_PI * 2, PIE);
  arc(x0, y0 + 100, d, d, HALF_PI * 3, HALF_PI * 4, PIE);
}

// Compare and contrast with
// https://openprocessing.org/sketch/1354815/
// Truchet in p5js by Vamoss

// https://editor.p5js.org/jht1493/sketches/jK_d9a5uK
// Truchet Therapeutic - first rev

// https://editor.p5js.org/jht1493/sketches/V2ifPvqiw
// Truchet func

// https://editor.p5js.org/jht1493/sketches/u13JQBCSD
// Truchet func 2

// https://editor.p5js.org/jht1493/sketches/f5vzsNvfR
// Truchet func 3

// https://editor.p5js.org/jht1493/sketches/zOy0N1rYt
// Truchet func 4

// https://editor.p5js.org/jht1493/sketches/FwfyGjYos
// Truchet func 5

// https://editor.p5js.org/jht1493/sketches/XoCFY-7Yi
// Truchet func 6

// https://editor.p5js.org/jht1493/sketches/3T3NmXA9n
// Truchet func 7

// https://editor.p5js.org/jht1493/sketches/eEkY6Puq2
// Truchet func 8

// https://editor.p5js.org/jht1493/sketches/6wi3Qiz6o
// Truchet func 9

// https://editor.p5js.org/jht1493/sketches/SQrWvF9zQ
// Truchet func 10





