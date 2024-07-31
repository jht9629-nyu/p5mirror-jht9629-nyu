// https://editor.p5js.org/jht9629-nyu/sketches/MZfI2vmoC
// createAudio BUG

let beat;

function setup() {
  // noCanvas();
  createCanvas(200, 200);
  background(0);

  // Load the audio.
  let beat = createAudio("funky.mp3");

  // Show the default audio controls.
  beat.showControls();
  // beat.play();
  console.log('setup', beat);
}

function draw2() {
  // console.log("draw beat", beat);
  if (!beat) {
    try {
      beat = createAudio("afterglow.mp3");
    } catch (error) {
      console.error(error);
    }
    console.log("draw beat2", beat);
  }
}
