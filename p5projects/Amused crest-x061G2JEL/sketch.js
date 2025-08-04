let soundFile;

let playButton, pauseButton, loopButton;

let fileInput;

let fft;

function setup() {
  createCanvas(600, 300);

  background(200);

  textAlign(CENTER, CENTER);

  textSize(16);

  text("Select an audio file to begin", width / 2, height / 2);

  // File input

  fileInput = createFileInput(handleFile);

  fileInput.position(10, 10);

  // Buttons

  playButton = createButton("Play");

  playButton.position(10, 40);

  playButton.mousePressed(playAudio);

  pauseButton = createButton("Pause");

  pauseButton.position(60, 40);

  pauseButton.mousePressed(pauseAudio);

  loopButton = createButton("Loop");

  loopButton.position(120, 40);

  loopButton.mousePressed(loopAudio);

  // FFT for waveform visualization

  fft = new p5.FFT();
}

function handleFile(file) {
  if (file.type === "audio") {
    if (soundFile) {
      soundFile.stop();
    }

    soundFile = loadSound(file.data, () => {
      background(200);

      text("Audio file loaded. Press play.", width / 2, height / 2);
    });
  } else {
    alert("Please select a valid audio file.");
  }
}

function draw() {
  if (soundFile && soundFile.isLoaded()) {
    background(255);

    stroke(0);

    noFill();

    let waveform = fft.waveform();

    beginShape();

    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, width);

      let y = map(waveform[i], -1, 1, 0, height);

      vertex(x, y);
    }

    endShape();
  }
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
