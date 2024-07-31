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

function setup() {
  createCanvas(windowWidth, windowHeight - 30);
  createDiv("Draw something!");
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
  // Add current mouse loc to drawing array
  let x = mouseX - width / 2;
  let y = mouseY - height / 2;
  let point = { x, y };
  drawing.push(point);

  strokeWeight(drawWeight);
  stroke(trackColor);
  noFill();
  beginShape();
  for (let v of drawing) {
    vertex(v.x + width / 2, v.y + height / 2);
  }
  endShape();
}

function draw_path() {
  let x1 = width / 2;
  let y1 = height / 8;
  let x2 = width / 8;
  let y2 = height / 2;

  let vx = epiCycles(time, x1, y1, 0, fourierX);
  let vy = epiCycles(time, x2, y2, HALF_PI, fourierY);
  let v = { x: vx.x, y: vy.y };

  // adds the specified elements to the beginning of an array
  path.unshift(v);

  strokeWeight(epiWeight);
  stroke(vxyColor);
  line(vx.x, vx.y, v.x, v.y);
  line(vy.x, vy.y, v.x, v.y);

  strokeWeight(drawWeight);
  stroke(drawColor);
  beginShape();
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  time += deltaFt;
  if (time > TWO_PI) {
    time = 0;
    path = [];
  }
}

// var time is used to determine x, y
function epiCycles(time, x, y, rotation, fourier) {
  // parameters x and y modified in this loop
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
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
  state = USER;
  drawing = [];
  time = 0;
  path = [];
}

function mouseReleased() {
  state = FOURIER;
  let xx = [];
  let yy = [];
  for (let i = 0; i < drawing.length; i++) {
    xx.push(drawing[i].x);
    yy.push(drawing[i].y);
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
