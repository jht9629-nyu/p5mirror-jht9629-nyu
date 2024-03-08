// https://editor.p5js.org/jht9629-nyu/sketches/-imqZQyIkv
// 17.11_FFT ui - funky

// FFT graph is displayed with currentTime
let song;
let fft;
let button;
let aspec; // For debugging
let aFile = "funky.mp3";
// let aFile = "rainbow.mp3";

// TRY: adjusting bins for p5.FFT
// TRY: stop vs. pause

function preload() {
  song = loadSound(aFile);
}

function setup() {
  createCanvas(256, 256);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  createButton('stop').mousePressed( function () {
    song.stop();
  });
  song.loop()
  song.play();
  // https://p5js.org/reference/#/p5.FFT
  let bins = 1024; // TRY: 128 256 512 1024
  fft = new p5.FFT(0.9, bins);
  // Create DOM element to display current time
  createSpan(' currentTime: ');
  createSpan('').id('id_currentTime')
}

function draw() {
  // Display the current time in a DOM element
  let ct = song.currentTime();
  select('#id_currentTime').html(ct);
  
  background(0);
  let spectrum = fft.analyze();
  aspec = spectrum;
  //console.log(spectrum);
  //stroke(255);
  noStroke();
  translate(width / 2, height / 2);
  //beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 20, 100);
    //fill(i, 255, 255);
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
    //vertex(x, y);
    //let y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();
}

function toggleSong() {
  if (song.isPlaying()) {
    // TRY: stop vs. pause
    song.pause();
    // song.stop();
  } else {
    song.play();
  }
}

// https://editor.p5js.org/jht1493/sketches/qc-h1wL27
// 17.11_FFT ui

// https://editor.p5js.org/jht1493/sketches/hbUBiLwwD
// 17.11_FFT

// https://editor.p5js.org/jht1493/sketches/JzUpCtscr
// 17.1_playSong

// https://github.com/CodingTrain/website/tree/main/
//  Tutorials/P5JS/p5.js_sound/17.11_FFT

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4

// song rainbow.mp3 extracted from this site
// to be more pleasing to the ear
// and small enough to load into web editor
// https://www.youraccompanist.com/free-scales-and-warm-ups/reference-scales



