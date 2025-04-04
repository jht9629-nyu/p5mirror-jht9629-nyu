// https://editor.p5js.org/jht9629-nyu/sketches/wT957KlMz
// MazeSpin liberation screens v7

let my = {};

let mazeSpin;

function setup() {
  my.width = windowWidth;
  my.height = windowHeight-55;
  my.ncells = 9;
  my.strokeWeight = 0.5;
  my.delta = 1;
  my.step_period = 2;
  my.pause_period = 2;
  my.do_spiral = 1;
  my.do_cycle = 0;
  my.do_report = 0;

  my.colorIndex = 0;
  my.colorChangeSecs = 10;
  my.startTime = millis() / 1000.0;

  createCanvas(my.width, my.height);

  // console.log("MazeSpin", MazeSpin);
  mazeSpin = new MazeSpin(my);
  
  setup_fullScreenButton();
}

function draw() {
  background(colorPalette[my.colorIndex]);
  mazeSpin.prepareOutput();
  image(mazeSpin.output, 0, 0);
  check_time();
}

function my_setup() {
  my.width = width;
  my.height = height;
  mazeSpin = new MazeSpin(my);
}

function check_time() {
  let now = millis() / 1000;
  if (now - my.startTime > my.colorChangeSecs) {
    my.startTime = now;
    next_color();
  }
}

function next_color() {
  my.colorIndex = (my.colorIndex + 1) % colorPalette.length;
}

let colorGold = [187, 165, 61];
// let colorPalette = ["red", "green", colorGold, "black"];
let colorPalette = ["red", "green", colorGold];

// --
function setup_fullScreenButton() {
  my.fullScreenButton = createButton("?=v7 Full Screen");
  my.fullScreenButton.mousePressed(fullScreen_action);
  my.fullScreenButton.style("font-size:42px");
}

function fullScreen_action() {
  my.fullScreenButton.remove();
  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  my_setup();
}

// Respond to window resizing event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// --
// https://editor.p5js.org/jht9629-gmail/sketches/4pgECdEVG
// MazeSpin liberation screens

// https://editor.p5js.org/jht9629-nyu/sketches/2pxhnehBV
// ims04-jht scroll color rate

// https://editor.p5js.org/jht9629-nyu/sketches/2pxhnehBV
// ims04-jht scroll color rate

// https://editor.p5js.org/jht9629-gmail/sketches/-FuOH_EE4
// MazeSpin
// converted from p5VideoKit effects import style
//   to <script src=""> format used in p5VideoKit
//

// https://github.com/jht1493/p5VideoKit/blob/main/src/effects/maze_spin/MazeSpin.js
