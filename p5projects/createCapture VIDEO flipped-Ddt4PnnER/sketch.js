// https://editor.p5js.org/jht9629-nyu/sketches/Ddt4PnnER
// createCapture VIDEO flipped
// https://p5js.org/reference/p5/createCapture/

let capture;

function setup() {
  createCanvas(100, 100);

  // Create the video capture with mirrored output.
  capture = createCapture(VIDEO, { flipped: true });
  // capture.size(100,100);

  describe("A video stream from the webcam with flipped or mirrored output.");
}
