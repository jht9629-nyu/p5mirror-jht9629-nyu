// https://editor.p5js.org/jht9629-nyu/sketches/iOIK7zDHk
// p5js editor setup let width bug

function setup() {
  createCanvas(400, 400);
  background(220);
  let my = { width: 300, height: 200 };
  {
    let width = my.width;
    let height = my.height;
    fill(0);
    rect(0, 0, width, height);
  }
}

// function draw() {
//   background(220);
// }
