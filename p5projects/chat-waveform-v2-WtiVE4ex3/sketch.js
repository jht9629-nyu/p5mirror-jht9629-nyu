// https://editor.p5js.org/jht9629-nyu/sketches/WtiVE4ex3
// chat-waveform-v2

let soundFile;
let playButton, pauseButton, loopButton;
let fileInput, volumeSlider;
let fft;

function setup() {
  createCanvas(600, 300);
  background(240);
  textAlign(CENTER, CENTER);
  textSize(16);
  text('Select an audio file to begin', width / 2, height / 2);

  // File input
  fileInput = createFileInput(handleFile);
  fileInput.position(10, 10);

  // Buttons
  playButton = createButton('▶ Play');
  playButton.position(10, 50);
  playButton.mousePressed(playAudio);

  pauseButton = createButton('⏸ Pause');
  pauseButton.position(70, 50);
  pauseButton.mousePressed(pauseAudio);

  loopButton = createButton('🔁 Loop');
  loopButton.position(140, 50);
  loopButton.mousePressed(loopAudio);

  // Volume slider
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.position(10, 90);
  volumeSlider.style('width', '100px');

  // FFT for waveform
  fft = new p5.FFT();
}

function handleFile(file) {
  if (file.type === 'audio') {
    if (soundFile) {
      soundFile.stop();
    }
    soundFile = loadSound(file.data, () => {
      background(240);
      text('Audio loaded: Press ▶ to play', width / 2, height / 2);
    });
  } else {
    alert('Please select a valid audio file.');
  }
}

function draw() {
  background(250);

  // Display status
  fill(0);
  noStroke();
  textSize(14);
  if (soundFile && soundFile.isPlaying()) {
    text("Now Playing", width / 2, 20);
  } else if (soundFile) {
    text("Paused or Ready", width / 2, 20);
  }

  // Volume
  if (soundFile) {
    soundFile.setVolume(volumeSlider.value());
  }

  // Draw waveform
  if (soundFile && soundFile.isLoaded()) {
    let waveform = fft.waveform();
    stroke(30, 150, 200);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, width);
      let y = map(waveform[i], -1, 1, height * 0.75, height * 0.25);
      vertex(x, y);
    }
    endShape();
  }

  // Volume label
  fill(50);
  noStroke();
  textSize(12);
  text("Volume", 65, 115);
}

function playAudio() {
  if (soundFile && !soundFile.isPlaying()) {
    soundFile.play();
  }
}

function pauseAudio() {
  if (soundFile && soundFile.isPlaying()) {
    soundFile.pause();
  }
}

function loopAudio() {
  if (soundFile) {
    soundFile.setLoop(true);
    if (!soundFile.isPlaying()) {
      soundFile.play();
    }
  }
}
