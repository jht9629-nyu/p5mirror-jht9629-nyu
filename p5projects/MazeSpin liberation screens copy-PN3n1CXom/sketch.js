// https://editor.p5js.org/jht9629-gmail/sketches/4pgECdEVG
// MazeSpin liberation screens

let my = {};

let mazeSpin;

function setup() {
  my.width = 300;
  my.height = 300;
  my.ncells = 9;
  my.strokeWeight = 0.5;
  my.delta = 1;
  my.step_period = 2;
  my.pause_period = 2;
  my.do_spiral = 1;
  my.do_cycle = 2;
  my.do_report = 0;
  my.alpha = 255;
  my.do_truchet = 1;
  
  my.width = 400;
  my.height = 400;
  my.colorIndex = 0;
  my.colorChangeSecs = 10;
  my.startTime = millis() / 1000.0;

  createCanvas(my.width, my.height);

  // console.log("MazeSpin", MazeSpin);
  mazeSpin = new MazeSpin(my);

  fullScreenBtn = createButton('Full Screen').mousePressed(full_screen_action);
  fullScreenBtn.style('font-size:42px');
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
let colorPalette = ['red', 'green', colorGold];

function full_screen_action() {
  fullScreenBtn.remove();
  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  my_setup();
}

// --
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
