let myFunky;
function preload() {
  myFunky = loadSound("funky.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight-30);
}
function draw() {
  background(255);
  text("mouse press to start stop a sound", 20, height/2);
}
function mousePressed() {
  console.log("mousePressed");
  if (myFunky.isPlaying()) {
    console.log("myFunky stop");
    myFunky.stop();
  }
  else {
    console.log("myFunky play");
    myFunky.play();
  }
}

// https://p5js.org/reference/p5.sound/p5.SoundFile/

// https://editor.p5js.org/jht9629-nyu/sketches/vlqTuRfoC
// CCL day 9 loadSound 1