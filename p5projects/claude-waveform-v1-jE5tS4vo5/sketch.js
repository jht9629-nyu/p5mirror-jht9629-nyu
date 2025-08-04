// https://editor.p5js.org/jht9629-nyu/sketches/jE5tS4vo5
// claude-waveform-v1

let soundFile;
let amplitude;
let isPlaying = false;
let isLooping = false;
let samples = [];
let fileLoaded = false;
let playButton, pauseButton, loopButton;

function setup() {
  // Create canvas inside the container
  let canvas = createCanvas(750, 200);
  canvas.parent("canvas-container");

  // Initialize amplitude analyzer
  amplitude = new p5.Amplitude();

  // Set up file input handling
  const audioInput = document.getElementById("audio-input");
  const fileName = document.getElementById("file-name");

  audioInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      fileName.innerText = `Selected: ${file.name}`;

      // Load the audio file
      if (soundFile && soundFile.isPlaying()) {
        soundFile.stop();
      }

      // Create a URL for the file
      const fileURL = URL.createObjectURL(file);

      // Load the sound
      soundFile = loadSound(fileURL, soundLoaded);
    }
  });

  // Set up buttons
  playButton = document.getElementById("play-button");
  pauseButton = document.getElementById("pause-button");
  loopButton = document.getElementById("loop-button");

  playButton.addEventListener("click", playSound);
  pauseButton.addEventListener("click", pauseSound);
  loopButton.addEventListener("click", toggleLoop);
}

function soundLoaded() {
  console.log("Sound loaded successfully");
  fileLoaded = true;

  // Enable buttons
  playButton.disabled = false;
  pauseButton.disabled = false;
  loopButton.disabled = false;

  // Analyze the sound file to get waveform data
  samples = [];
  soundFile.disconnect();
  soundFile.connect(amplitude);

  // Pre-compute samples for waveform display
  const sampleRate = 100; // Number of samples to take
  const duration = soundFile.duration();
  const step = duration / sampleRate;

  for (let i = 0; i < sampleRate; i++) {
    const time = i * step;
    // We'll use amplitude data when playing, this is just for initialization
    samples.push(0);
  }
}

function playSound() {
  if (fileLoaded && !isPlaying) {
    soundFile.play();
    isPlaying = true;
  }
}

function pauseSound() {
  if (fileLoaded && isPlaying) {
    soundFile.pause();
    isPlaying = false;
  }
}

function toggleLoop() {
  if (fileLoaded) {
    isLooping = !isLooping;
    soundFile.setLoop(isLooping);
    loopButton.innerText = isLooping ? "Loop: ON" : "Loop: OFF";
  }
}

function draw() {
  background(240);

  // Draw baseline
  stroke(150);
  line(0, height / 2, width, height / 2);

  // Draw waveform
  if (fileLoaded) {
    // If playing, get current amplitude
    let level = 0;
    if (isPlaying) {
      level = amplitude.getLevel();

      // Shift samples array and add new value
      samples.shift();
      samples.push(level);
    }

    noFill();
    stroke(66, 133, 244);
    strokeWeight(2);
    beginShape();

    // Draw the waveform using the samples
    for (let i = 0; i < samples.length; i++) {
      const x = map(i, 0, samples.length - 1, 0, width);
      const y = map(samples[i], 0, 1, height * 0.8, height * 0.2);
      vertex(x, y);
    }
    endShape();

    // Draw the current amplitude as a circle indicator
    if (isPlaying) {
      fill(244, 67, 54);
      noStroke();
      const indicatorSize = map(level, 0, 1, 5, 50);
      ellipse(width - 50, 50, indicatorSize, indicatorSize);
    }

    // Show playback status
    fill(50);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(14);
    text("Status: " + (isPlaying ? "Playing" : "Paused"), 20, 20);

    // Show loop status
    text("Loop: " + (isLooping ? "ON" : "OFF"), 20, 40);
  } else {
    // Display instruction if no file is loaded
    fill(100);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text(
      "Please select an audio file to visualize the waveform",
      width / 2,
      height / 2
    );
  }
}
