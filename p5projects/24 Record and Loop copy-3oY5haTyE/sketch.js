let mic, recorder;
let state = 0;
// An array to store recorded loops
let sounds = [];

function setup() {
  createCanvas(250, 30);
  background(220);
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);
  
  // Center text
  textAlign(CENTER, CENTER);
  
  // Instructions
  text('Press any key to record.', width/2, height/2);
}

function keyPressed() {
  
  // make sure user enabled the mic
  if (state === 0 && mic.enabled) {
    // Add a new recording
    let sound = new p5.SoundFile();
    sounds.push(sound);

    // record to our p5.SoundFile
    recorder.record(sound);

    background(255,0,0);
    text('Recording! (Press to end recording.)', width/2, height/2);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Press any key to record.', width/2, height/2);
    state++;
  }

  if (state === 2) {
    // Loop latest recording
    sounds[sounds.length-1].loop();
    
    // uncomment to save each sound!
    // save(sounds[sounds.length-1], "sample.wav"); 
    state = 0;
  }
}