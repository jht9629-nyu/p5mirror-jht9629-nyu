// https://editor.p5js.org/jht9629-nyu/sketches/O2Pgf8nC5
// console.log frameCount

console.log('frameCount', frameCount);

function setup() {
  createCanvas(400, 400);
  console.log('setup frameCount', frameCount);
}

function draw() {
  background(220);
  console.log('draw frameCount', frameCount);
}