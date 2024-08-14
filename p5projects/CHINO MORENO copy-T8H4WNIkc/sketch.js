
let song;
let amp;
let button;
let button2;
let parties1;

let volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
function toggleSong2() {
  if (parties1.isPlaying()) {
    parties1.pause();
  } else {
    parties1.play();
  }
}

function preload() {
  song = loadSound('deftones1.mov');
  parties1 = loadSound('parties1.mov');
}

function setup() {
  createCanvas(200, 200);
  button = createButton('BE QUIET CHINO MORENO!');
  button.mousePressed(toggleSong);
  button2 = createButton('BE QUIET PETER MURPHY!');
  button2.mousePressed(toggleSong);
  
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  push();
  let currentY = map(vol, 0, 1, height, 0);
  translate(0, height / 2 - currentY);
  beginShape();
  for (let i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  line(volhistory.length, 0, volhistory.length, height);
  
}