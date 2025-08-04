function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let i = 10; i > 0; i = i - 1) {
    let x = radians(frameCount) - i / 10;
    let trig = atan(10 * sin(x)) / atan(10);
    let trigMapped = map(trig, -1, 1, -height / 4, height / 4);
    fill(i * 10);
    circle(0, trigMapped, i * 10);
  }
  // if (frameCount == 1){
  //   saveGif('circles.gif', 360, {units: 'frames'});
  // }
  // console.log('frameCount', frameCount);
}

// https://editor.p5js.org/sairamved/sketches/9DkXpqvMO
// Circles by sairamved

// https://editor.p5js.org/jht9629-nyu/sketches/eL5d3vX85
// CCL Circles by sai remix
