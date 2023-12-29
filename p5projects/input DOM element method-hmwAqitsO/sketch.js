// https://editor.p5js.org/jht9629-nyu/sketches/hmwAqitsO
// input DOM element method

// Open your console to see the output
function setup() {
  createCanvas(100, 100);
  background('grey');
  let inp = createInput('');
  inp.position(0, height/2);
  inp.size(100);
  // inp.input(myInputEvent);
  inp.input(function () {
      console.log('you are typing: ', this.value());
  });
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

// https://p5js.org/reference/#/p5/input

// Normal Slider vs AnonymousF Slider v2
// https://editor.p5js.org/novo/sketches/7zTwgtRcH

// ?? diff to changed
// https://p5js.org/reference/#/p5/changed
