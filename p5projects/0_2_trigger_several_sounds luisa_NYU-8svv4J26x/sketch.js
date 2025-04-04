// https://editor.p5js.org/jht9629-nyu/sketches/8svv4J26x
// 0_2_trigger_several_sounds luisa_NYU

// Why sound on other keys?

// Load sounds
const blip = new SimplePlayer("sounds/blip.wav").toDestination();
const pink = new SimplePlayer("sounds/pink.wav").toDestination();
const tears = new SimplePlayer("sounds/tears.wav").toDestination();
const takerimba = new SimplePlayer("sounds/takerimba.wav").toDestination();

let loaded = false;

function setup() {
  createCanvas(600, 400);
  background(100, 233, 100);
}

function draw() {
  if (loaded) {
    background(220);
  } else {
    background(220);
    text("loading...", 20, 20);
  }
}

function keyTyped() {
  console.log("keyTyped key", key);
  if (loaded) {
    if (key == "a") {
      blip.start();
    } else if (key == "s") {
      pink.start();
    } else if (key == "d") {
      tears.start();
      // Oops!
      // } else if ((key = "f")) {
    } else if (key == "f") {
      takerimba.start();
    }
  }
}

Tone.loaded().then(function () {
  loaded = true;
});

// https://editor.p5js.org/luisa_NYU/sketches/cjndUn09D
//
// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/
