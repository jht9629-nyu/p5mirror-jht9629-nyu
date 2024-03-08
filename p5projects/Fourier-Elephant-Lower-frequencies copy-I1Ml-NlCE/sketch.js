/* 
 Title: Discrete Fourier Transform (Cat) with lower frequencies
 Author: Juan Carlos Ponce Campuzano
 Date: 20-Jan-2020
 License: Creative Commons Attribution-NonCommercial 4.0 International License
 http://creativecommons.org/licenses/by-nc/4.0/
 
 Comments: Finally I was able to make a simplified 
 version of the Discrete Fourier Transform (DFT), 
 now with lower frequencies so you can get a 
 better approximation of the signal. It has 
 also the approximation curve.

 Warning: Your signal must have an odd
 number of terms.
*/

let x = [];
let fourierX;
let time;
let path = [];

let sliderTerms;
let sel;
let show = true;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 1, 1, 1);

  //Compute fourier coefficients with DFT
  const skip = 1;
  const scale = 1.7;
  for (let i = 0; i < drawing.length; i += skip) {
    const c = new Complex(scale * drawing[i].x, -scale * drawing[i].y);
    x.push(c);
  }
  fourierX = dft(x);
  fourierX.sort((a, b) => b.amp - a.amp);

  //Set initial potition
  time = -PI;

  //UI
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Epicycles');
  sel.option('Approx. Curve');
  sel.style('font-size:16px');
  sel.changed(options);

  sliderTerms = createSlider(1, fourierX.length, 63, 1);
  sliderTerms.style('width', '400px');
  sliderTerms.position(100, 567);
  sliderTerms.changed(clearPath);

  //Maybe to change speed
  frameRate(60);
  console.log(fourierX);
  noLoop();
}

function draw() {

  background(0);
  translate(width / 2, height / 2)

  if (show === true) {

    //The epicycles
    strokeJoin(ROUND);
    strokeWeight(1.5);
    let v = epicycles(0, 0, 0, fourierX, sliderTerms.value(), time);
    //I want to draw it just once
    if (-PI <= time && time <= PI + PI / 10) {
      path.unshift(v);
    }
    beginShape();
    noFill();
    strokeWeight(4);
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    //Message for epycicles
    textSize(17);
    strokeWeight(1);
    stroke(0);
    fill(1);
    text('' + sliderTerms.value() + ' epicycles', -50, -270);

  } else {

    //The approximation curve
    strokeWeight(4);
    stroke(255);
    strokeJoin(ROUND);
    noFill();
    beginShape();
    for (let k = -180; k < 180; k++) {
      let vs = fourierSeries(fourierX, radians(k), sliderTerms.value());
      vertex(vs.x, vs.y);
    }
    endShape(CLOSE);

    //Message for approx curve
    textSize(17);
    strokeWeight(1);
    stroke(0);
    fill(1);
    text('Parametric curve with n=' + sliderTerms.value() + ' terms', -100, -270);

  }

  //Update time: two options
  const dt = 0.01;
  //const dt = TWO_PI / fourierX.length;
  time += dt;

}

// Extra functions

function options() {
  var item = sel.value();
  if (item === 'Epicycles') {
    clearPath();
    time = -PI;
    show = true;
  } else {
    show = false;
  }
}

function clearPath() {
  path = [];
  time = -PI;
}

function epicycles(x, y, rotation, fourier, terms, t) {
  //I believe I don't need 'rotation' variable
  //I will check later
  for (let i = 0; i < terms; i++) {
    let prevx = x;
    let prevy = y;
    
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    
    x += radius * cos(freq * t + phase + rotation);
    y += radius * sin(freq * t + phase + rotation);

    stroke(3 * i / fourier.length, 1, 1);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(1, 0, 1);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}