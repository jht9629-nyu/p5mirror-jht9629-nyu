let upScale = 2;
let drawers = [draw_random, draw_bright, draw_paint];
let drawerIndex = 0;
let timeStart;
let timeDelay;
let timeDelays = [ 1, 1, 5, 5];
let timeIndex = 0;

function setup() {
  createCanvas(320 * upScale, 240 * upScale);
  pixelDensity(1);
  setup_bright();
  setup_paint();
  timeStart = millis() / 1000;
  timeDelay = 2;
}

function draw() {
  draw_random()
  draw_bright();
  // draw_paint();
  // let func = drawers[drawerIndex]
  // func();
  // let now = millis() / 1000;
  // if (now > timeStart + timeDelay) {
  //   drawerIndex = (drawerIndex+1) % drawers.length;
  //   timeStart = now;
  //   timeIndex = (timeIndex + 1) % timeDelays.length;
  //   timeDelay = timeDelays[timeIndex];
  // }
  // if (frameCount % 60 == 0) {
  //   drawerIndex = (drawerIndex+1) % drawers.length;
  // }
}


