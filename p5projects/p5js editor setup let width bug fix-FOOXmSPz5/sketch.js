// https://editor.p5js.org/jht9629-nyu/sketches/FOOXmSPz5
// p5js editor setup let width bug fix

function setup() {
  createCanvas(400, 400);
  background(220);
  let my = { width: 200, height: 200 };
  {
    let awidth = my.width;
    let aheight = my.height;
    fill(0);
    rect(0, 0, awidth, aheight);
  }
}

function draw() {
  // background(220);
}

// https://editor.p5js.org/jht9629-nyu/sketches/iOIK7zDHk
// p5js editor setup let width bug
