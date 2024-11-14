// https://editor.p5js.org/jht9629-nyu/sketches/DgvbLSY52
// Wk05 array names

let i = 0;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  text(names[i], width /2, height / 2 );
}
function mousePressed() {
  // console.log('mousePressed');
  // if (i lower or equal array size then loop for i is to zero
  if (i < names.length-1) {
    i++;
  }
  else {
    i = 0;
  }
  console.log('i', i);
}
let names = [
  "Trusha",
  "Yifan",
  "Tim",
  "Augusta",
  "William",
  "Suzanne",
  "Niki",
  "Beatrice",
  "Ryan",
  "Han",
  "Sai",
  "Shuai",
  "Runqi",
  "Ali",
];
