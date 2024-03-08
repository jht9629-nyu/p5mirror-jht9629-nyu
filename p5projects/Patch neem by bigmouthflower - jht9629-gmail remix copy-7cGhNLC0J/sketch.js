// https://editor.p5js.org/jht9629-gmail/sketches/CibQhizdZ
// Patch neem by bigmouthflower -- jht9629-gmail remix
// animation based on unit reference and a step cycle

let cx;
let cy;
let arcWidth;
let arcHeight;
let aStrokeWeight;
let aStep = 0.01; // TRY: 0.1, 0.01, 0.5
let aDelta = 0;

function setup() {
  createCanvas(400, 300);  // TRY: other sizes
  // unit reference is the center of canvas
  cx = width / 2;
  cy = height / 2;
  // variables cx and cy are our unit reference
  // all measurements will be expression as ration of these
  arcWidth = cx * 1.5;
  arcHeight = cy * 1.5;
  aStrokeWeight = cx * 0.4;
}

function draw() {
  background(180, 130, 30);

  var x = cx;
  var y = cy;

  let strokeG = 150;
  stroke(strokeG + 90, strokeG, 0);
  strokeWeight(aStrokeWeight);
  noFill();

  // TRY: uncommenting change to arcWidth | arcHeight 
  arcWidth = cx * (1.0 + 0.5 * aDelta);
  arcHeight = cy * (1.0 + 0.5 * aDelta);
  arc(x, y, arcWidth, arcHeight, 0, PI, OPEN);

  stroke(0);
  point(x - cx * 0.4, y - cy * 0.5);
  point(x + cx * 0.4, y - cy * 0.5);

  strokeWeight(1);
  arc(x, y, arcWidth, arcHeight, 0, PI, OPEN);
  
  // Cycle aDelta between 0 and 1
  if (aDelta > 1 || aDelta < 0) {
    aStep *= -1;
  }
  aDelta += aStep;
  console.log('aDelta', aDelta, 'aStep', aStep)
}

// https://editor.p5js.org/jht9629-gmail/sketches/zpk0FK0KZ
// Patch neem by bigmouthflower

// https://editor.p5js.org/bigmouthflower/sketches/KBfVMdXJ0
// Patch neem by bigmouthflower
