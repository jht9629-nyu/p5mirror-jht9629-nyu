// https://editor.p5js.org/jht9629-nyu/sketches/laaq1xki8
// chat-waveform-v1

let soundFile;
let playButton, loopButton, fileInput;
let fft;

function setup() {
  createCanvas(600, 300);
  background(0);
  
  // Create file input
  fileInput = createFileInput(handleFile);
  fileInput.position(10, 10);
  
  // Create play/pause button
  playButton = createButton('Play/Pause');
  playButton.position(10, 40);
  playButton.mousePressed(togglePlayPause);
  
  // Create loop button
  loopButton = createButton('Toggle Loop');
  loopButton.position(100, 40);
  loopButton.mousePressed(toggleLoop);
  
  // Create FFT for waveform visualization
  fft = new p5.FFT();
}

function draw() {
  background(0);
  
  if (soundFile && soundFile.isLoaded()) {
    let waveform = fft.waveform();
    
    noFill();
    stroke(0, 255, 0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, width);
      let y = map(waveform[i], -1, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  } else {
    fill(255);
    textSize(16);
    text('Please upload an audio file to visualize.', 10, height / 2);
  }
}

function handleFile(file) {
  if (file.type === 'audio') {
    if (soundFile) {
      soundFile.stop();
    }
    soundFile = loadSound(file.data, () => {
      console.log('Audio loaded');
    });
  } else {
    alert('Please select a valid audio file.');
  }
}

function togglePlayPause() {
  if (soundFile && soundFile.isLoaded()) {
    if (soundFile.isPlaying()) {
      soundFile.pause();
    } else {
      soundFile.play();
    }
  }
}

function toggleLoop() {
  if (soundFile && soundFile.isLoaded()) {
    soundFile.setLoop(!soundFile._loop);
  }
}
