// https://editor.p5js.org/jht9629-nyu/sketches/cxDbkJUyx
// Fourier Transform and Epicycles -codingtrain

const USER = 0;
const FOURIER = 1;

let fourierX;
let fourierY;
let time = 0;
let path = [];
let drawing = [];
let state = -1;
let trackColor = 0;
let drawColor = 0;
let epiWeight = 1;
let vxyColor = "gold";
let epiLineColor = "green";
let epiCircleColor = [10, 10, 10, 100];
let drawWeight = 2;
let deltaFt;
let run = 1;
let step;
let centerX;
let centerY;

function setup() {
  createCanvas(windowWidth, windowHeight - 30);
  createSpan("Draw something!");
  let runCbox = createCheckbox("Run", run);
  runCbox.changed(function () {
    run = this.checked();
  });
  runCbox.style("display:inline");
  createButton("Step").mousePressed(function () {
    step = 1;
  });
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255);
  if (state == USER) {
    trackMouse();
  } else if (state == FOURIER) {
    draw_path();
  }
}

function trackMouse() {
  if (mouseOutsideCanvas()) return;

  // Add current mouse loc to drawing array
  let x = mouseX - centerX;
  let y = mouseY - centerY;
  drawing.push({ x, y });

  strokeWeight(drawWeight);
  stroke(trackColor);
  noFill();
  beginShape();
  for (let elm of drawing) {
    vertex(elm.x + centerX, elm.y + centerY);
  }
  endShape();
}

function mouseOutsideCanvas() {
  return mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height;
}

function draw_path() {
  let x1 = centerX;
  let y1 = height / 8;
  let x2 = width / 8;
  let y2 = centerY;

  let vx = epiCycles(time, x1, y1, 0, fourierX);
  let vy = epiCycles(time, x2, y2, HALF_PI, fourierY);
  let v = { x: vx.x, y: vy.y };
  if (run || step) {
    // add element to the beginning of array
    path.unshift(v);
  }
  strokeWeight(epiWeight);
  stroke(vxyColor);
  line(vx.x, vx.y, v.x, v.y);
  line(vy.x, vy.y, v.x, v.y);

  strokeWeight(drawWeight);
  stroke(drawColor);
  beginShape();
  noFill();
  for (let elm of path) {
    vertex(elm.x, elm.y);
  }
  endShape();

  if (run || step) {
    time += deltaFt;
    if (time > TWO_PI) {
      time = 0;
      path = [];
    }
  }
  step = 0;
}

// var time is used to determine x, y
function epiCycles(time, x, y, rotation, fourier) {
  // parameters x and y modified in this loop
  for (let elm of fourier) {
    let prevx = x;
    let prevy = y;
    let freq = elm.freq;
    let radius = elm.amp;
    let phase = elm.phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);
    strokeWeight(epiWeight);
    // strokeWeight(0);
    stroke(epiCircleColor);
    // fill(epiCircleColor);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    // stroke(255);
    stroke(epiLineColor);
    line(prevx, prevy, x, y);
  }
  return { x, y };
}

function mousePressed() {
  if (mouseOutsideCanvas()) return;
  state = USER;
  drawing = [];
  time = 0;
  path = [];
}

function mouseReleased() {
  if (mouseOutsideCanvas()) return;
  state = FOURIER;
  let xx = [];
  let yy = [];
  for (let elm of drawing) {
    xx.push(elm.x);
    yy.push(elm.y);
  }
  fourierX = dft(xx);
  fourierY = dft(yy);

  fourierX.sort((a, b) => b.amp - a.amp);
  fourierY.sort((a, b) => b.amp - a.amp);

  deltaFt = TWO_PI / fourierY.length;
}

// https://editor.p5js.org/codingtrain/sketches/jawHqwfda
// CC 130.2: Drawing with Fourier Transform and Epicycles
// https://thecodingtrain.com/challenges/130-drawing-with-fourier-transform-and-epicycles

// CC 130.2: Drawing with Fourier Transform and Epicycles -codingtrain
// Coding Challenge 130.2: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://youtu.be/n9nfTxp_APM

// replace createVector with {x, y}
// use for (let elm of
