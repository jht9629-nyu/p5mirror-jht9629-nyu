// https://editor.p5js.org/jht9629-nyu/sketches/1O402DK02
// https://editor.p5js.org/enickles/sketches/KHcDAExYk
// WK11 Distortion by Cassie Tarakajian v0

/* Distortion by Cassie Tarakajian 🙏
https://github.com/ITPNYU/ICM-2019-Media/wiki/Homework-Cassie#week-11

https://p5js.org/reference/#/p5.Distortion
*/

let thunder;
let bird;
let gong;

let reverb
let sample;
let fft;
let knobPosition;

function preload() {
  thunder = loadSound("sounds/thunder.mp3"); 
  bird = loadSound("sounds/bird.mp3"); 
  gong = loadSound("sounds/gong.mp3"); 
}

function setup() {
  createCanvas(256, 384);
  // try different sample
  // sample = gong;
  // sample = bird;
  sample = thunder
  
  distortion = new p5.Distortion();
  sample.disconnect();
  distortion.process(sample, 0.01);
  distortion.amp(0.5);
  
  knobPosition = {
    x: map(0.01, 0, 0.5, 0, width),
    y: 320
  };
  
  let button = createButton("Toggle Sample");
  button.mousePressed(function() {
    if (sample.isPlaying()) {
      sample.stop(); 
    } else {
      sample.loop(); 
    }
  });
  
  fft = new p5.FFT(0.8, 256);
}


function draw() {
  background(0);
  let spectrum = fft.analyze();
  let waveform = fft.waveform();
  
  stroke("red");
  for(let i = 0; i < spectrum.length; i+=1) {
    line(i, 128, i, 128-(spectrum[i]/2)); 
  }
  
  stroke("blue");
  for (let i = 0; i < waveform.length; i +=1) {
    let sampleHeight = map(waveform[i], -1, 1, -64, 64);
    line(i, 192, i, 192 + sampleHeight);
  }
  
  
  if (mouseIsPressed && mouseY > 256 && mouseY < height) {
    let amount = constrain(map(mouseX, 0, width, 0, 0.5), 0, 0.5);
    knobPosition = {
      x: mouseX,
      y: 320
    }
    distortion.set(amount);
  }
  
  stroke("black");
  fill("white");
  ellipse(knobPosition.x, knobPosition.y, 20);
  
}