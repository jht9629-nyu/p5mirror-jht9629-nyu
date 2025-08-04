let myFunky;
let myScales;
let myAfterGlow;

function preload() {
  myFunky = loadSound("funky.mp3");
  myScales = loadSound("scales.mp3");
  myAfterGlow = loadSound("afterglow.mp3");
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


