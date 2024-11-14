// https://editor.p5js.org/jht9629-nyu/sketches/aRKh1WyNF
// Wk05 array colors
let colors = [];
let i = 0;
function setup() {
  createCanvas(400, 400);
  colors.push('red');
  colors.push('green');
  colors.push('gold');
}
function draw() {
  background(220);
  if (colors.length > 0) {
    text(colors[i], width /2, height / 2 );
  }
}
function mousePressed() {
  console.log('i', i);
  if (i < colors.length-1) {
    i++;
  }
  else {
    i = 0;
  }
  console.log('i', i);
}
