//FFT waveform playback audio v1
//https://editor.p5js.org/novo/sketches/BeYGtHYYo
// https://editor.p5js.org/jht9629-nyu/sketches/hQmTAh6Hh

let my = {};
// let voice;
// let fft;
// let pointSize = 2;
// let wavefWidth = 300;
// let wavefX = 0;
// let wavefY = 150;

function preload() {
  
  my.pointSize = 2;
  my.wavefWidth = 300;
  my.wavefX = 0;
  my.wavefY = 150;

  my.voice = loadSound("Parfum.mp3");
  // try a slow sweep and or 2 single frequencies 1 and 4 khz
  // can you do equivalent with mike?
}

function setup() {
  
// let fft;
  
  createCanvas(600, 600);
  my.fft = new p5.FFT();
  setup_mike();
  setup_audTint();
  my.fft.setInput(mik.mic); 
  // it appears that fft can use two sources:
  // 1. loadSound("Parfum.mp3") -- when playing
  // 2, mic input
}

// END SETUP //////////////////////

function draw() {
  background(80);
  // stroke(255);
  noStroke();
  // use push and pop to isolate
  push();
  draw_mike();
  pop();

  let waveArray = my.fft.waveform();
  // let waveArray = fft.analyze();

  // for (let i = 0; i < width; i++) {
  //   let waveIndex =
  //       floor( map(i, 0,width,                 0,waveArray.length));

  for (let i = 0; i < my.wavefWidth; i++) {
    let waveIndex = floor(map(i, 0, my.wavefWidth, 0, waveArray.length));

    x = i;
    y = waveArray[waveIndex] * 300 + height / 4;

    // point(x,y);
    my.pointSize = random(1, 4);
    //fill(255,0,random(100,255));
    fill(255, 200);
    rect(x, y, my.pointSize);
  }

  draw_audTint();
  // draw_waveform1();
}

// END DRAW ////////////////

function mouseClicked() {
  if (my.voice.isPlaying()) {
    my.voice.pause();
    noLoop();
  } else {
    my.voice.play();
    loop();
  }
}

