/* 
https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies
*/

// C Major Scale, MIDI note numbers
let notes = [60, 62, 64, 65, 67, 69, 70, 71, 72]

let synth;
let slider;
let playing = false;

function setup() {
  createCanvas(400, 400);
  let button = createButton("Toggle Playback")
  button.mousePressed(togglePlayback);
  synth = new p5.MonoSynth();
  slider = createSlider(10, 100, 30);
  // masterVolume(0.2);
}

function draw() {
  background(220);

  let beat = slider.value();
  
  if (mouseIsPressed) {
    let freqToPlay = midiToFreq(notes[1]);
    // console.log(freqToPlay)
      synth.play(freqToPlay, 1);
  }

  if (playing) {
    if (frameCount % beat == 1) {
      let freqToPlay = midiToFreq(notes[0]);
      synth.play(freqToPlay, 1);
    }
    if (frameCount % (beat / 2) == 1) {
      let freqToPlay = midiToFreq(notes[4]);
      synth.play(freqToPlay, 1);
    }
    if (frameCount % 50 == 1) {
      let freqToPlay = midiToFreq(notes[5]);
      synth.play(freqToPlay, 1);
    }
  }
}

function togglePlayback() {
  if (!playing) {
    playing = true;
  } else {
    playing = false;
  }
}