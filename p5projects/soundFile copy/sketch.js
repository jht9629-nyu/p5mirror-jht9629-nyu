// https://editor.p5js.org/jht9629-nyu/sketches/z6Sg4ZYU3
// soundFile copy

let mic, recorder, soundFile;

let state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  createCanvas(400, 400);
  background(200);
  // textSize(20)
  fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file 
  // that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

function mousePressed() {
  // use the '.enabled' boolean 
  // to make sure user enabled the mic 
  // (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {
    // Tell recorder to record to a p5.SoundFile 
    // which we will use for playback
    recorder.record(soundFile);
    background(255, 0, 0);
    text('Recording now! Click to stop.', 20, 20);
    state++;
  } else if (state === 1) {
    // stop recorder, and send the result to soundFile
    recorder.stop(); 
    background(0, 255, 0);
    text('Recording stopped. Click to play & save', 20, 20);
    state++;
  } else if (state === 2) {
    soundFile.play(); // play the result!
    soundFile.loop();
    // saveSound(soundFile, 'mySound.wav'); // save file
    soundBlob = soundFile.getBlob();
    state = 3;
    background(255, 255, 0);
    text('Playing', 20, 20);
  }
  else {
    state = 0;
    soundFile.stop();
    soundFile = new p5.SoundFile();
    background(0, 255, 0);
    text('Play Stopped. Click to record', 20, 20);
  }
}

let soundBlob;

// https://editor.p5js.org/jht9629-gmail/sketches/8sM93vD0n
// soundFile

// https://p5js.org/examples/sound-record-save-audio.html
