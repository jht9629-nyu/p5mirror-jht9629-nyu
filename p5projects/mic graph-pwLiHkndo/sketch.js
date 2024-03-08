// https://editor.p5js.org/jht9629-nyu/sketches/pwLiHkndo
// mic graph
// graph the volume level of the mic

let mic;
let volhistory = [];
let lastMax = 0;
let amp;

function setup() {
  createCanvas(200, 200);
  
  amp = new p5.Amplitude();
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  let vol = mic.getLevel();
  // let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  beginShape();
  let nowMax = 0;
  let nowMin = 1;
  let xline = frameCount % width;
  for (let i = 0; i < volhistory.length; i++) {
    let val = volhistory[i];
    let y = map(val, 0, lastMax, height, 0);
    vertex(i, y);
    if (val > lastMax) {
      lastMax = val;
    }
    if (val > nowMax) {
      nowMax = val;
    }
    if (val < nowMin) {
      nowMin = val;
      xline = i;
    }
  }
  lastMax = nowMax;
  endShape();
  if (volhistory.length > width) {
    volhistory.splice(0, 1);
  }
  stroke(255, 0, 0);
  line(xline, 0, xline, height);
}

// https://editor.p5js.org/jht9629-nyu/sketches/CpRGKpB2X
// 17.9_graphingAmplitude

// https://editor.p5js.org/jht1493/sketches/0SuvHQbKk
// 17.9_graphingAmplitude

