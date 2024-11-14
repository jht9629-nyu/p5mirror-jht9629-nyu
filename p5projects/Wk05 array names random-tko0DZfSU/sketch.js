// https://editor.p5js.org/jht9629-nyu/sketches/tko0DZfSU
// Wk05 array names random

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

function setup() {
  createCanvas(400, 400);
  shuffle(names, true);
  console.log(names);
}

function draw() {
  background(220);
}

// https://editor.p5js.org/jht9629-nyu/sketches/DgvbLSY52
// Wk05 array names

/*

(10) ["Niki", "Runqi", "Augusta", "William", "Yifan", "Ryan", "Shuai", "Tim", "Trusha", "Sai"]
0: "Niki"
1: "Runqi"w
2: "Augusta"
3: "William"
4: "Yifan"
5: "Ryan"
6: "Shuai"
7: "Tim"
8: "Trusha"
9: "Sai"

*/