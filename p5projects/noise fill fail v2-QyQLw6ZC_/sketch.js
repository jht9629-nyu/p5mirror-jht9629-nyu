// https://editor.p5js.org/jht9629-nyu/sketches/B2PQd1dxF
// noise fill fail
let my = {}
function setup() {
  my.frameCount = 0;
  createCanvas(100, 100);
  noFill();
  rect(0,0,width,height);
}

function draw() {
  // background(200);
  for (let i = 0; i < 1000; i++) {
    my.frameCount ++;
    draw_noise();
  }
}

function draw_noise() {
  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.005;

  // Scale the input coordinate.
  let nt = noiseScale * my.frameCount;

  // Compute the noise values.
  let x = noiseLevel * noise(nt, 0);
  let y = noiseLevel * noise(nt, 100);

  // Draw the point.
  // strokeWeight(1);
  point(x, y);
}