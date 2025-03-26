// https://editor.p5js.org/jht9629-nyu/sketches/2bjn_Nn9x
// video scan radial v8

let my = {};

function setup() {
  my.doSpiral = 1;

  // my.shapeRadius = 10;
  my.shapeRadius = 1;

  // my.secsPerUpdate = 1;
  // my.secsPerUpdate = 5.0;
  my.secsPerUpdate = 0.0;

  setup_my();

  createCanvas(windowWidth, windowHeight);
  my.capture = createCapture(VIDEO, capture_ready_callback);
  // video width not valid until capture.loadedmetadata true
  // console.log('my.capture.width', my.capture.width, my.capture.height);

  // my.capture.size(width, height);
  my.capture.hide();

  setup_fullScreenButton();
  // initGraphics();
}

function setup_my() {
  // my.renderFullFrame = 0;
  my.renderFullFrame = 1;

  my.secsDelta = 0;

  // my.shapeRadius = 1;
  // my.shapeRadius = 20;
  // my.x0;
  // my.y0;
  // my.capture;
  my.ang = 0;
  my.astep = 0.005;
  // my.astep = 0.5;
  // my.astep = 1;
  // my.renderFullFrame = 1;
  // my.img;
  my.oneOver360 = 1 / 360;

  my.xspan_start = my.shapeRadius;
  my.xspan = my.xspan_start;
  my.xstep = my.shapeRadius * 2;
}

function draw() {
  let layer = my.layer;
  if (!layer) {
    return;
  }
  // console.log('draw my.capture.width', my.capture.width, my.capture.height);

  my.img = my.capture.get();
  let more = 1;
  while (more) {
    more = draw_out(layer);
    if (!my.renderFullFrame) more = 0;
  }
  // image(my.layer, 0, 0);
  let w = layer.width;
  let h = layer.height;
  image(layer, 0, 0, width, height, 0, 0, w, h);
}

// image(img, x, y, [width], [height])
// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])

function draw_out(layer) {
  let r = my.xspan * 0.5;
  let rang = radians(my.ang);
  let x1 = r * cos(rang);
  let y1 = r * sin(rang);

  let c1 = my.img.get(my.x0 + x1, my.y0 + y1);
  layer.fill(c1);
  layer.circle(my.x0 + x1, my.y0 + y1, my.shapeRadius);

  if (my.doSpiral) {
    return draw_step_spiral();
  } else {
    return draw_step_ang();
  }
}

function draw_step_spiral() {
  my.xspan += my.xstep * my.oneOver360 * my.astep;
  // my.xspan += my.xstep / ( 360 / my.astep);
  my.ang += my.astep;
  if (my.ang > 360) {
    my.ang = 0;
    // my.xspan += my.xstep;
    if (my.xspan > my.xspan_end) {
      my.xspan = my.xspan_start;
    }
    return 0;
  }
  return 1;
}

function draw_step_ang() {
  my.ang = my.ang + my.astep;
  if (my.ang > 360) {
    my.ang = 0;
    return next_step_secsDelta();
  }
  return 1;
}

function next_step_secsDelta() {
  my.secsDelta += deltaTime / 1000;
  if (my.secsDelta < my.secsPerUpdate) {
    return 1;
  }
  my.secsDelta = 0;
  my.xspan += my.xstep;
  if (my.xspan > my.xspan_end) {
    my.xspan = my.xspan_start;
  }
  return 0;
}

function initGraphics() {
  if (my.layer) {
    my.layer.remove();
  }
  let w = my.capture.width;
  let h = my.capture.height;
  my.layer = createGraphics(w, h);
  my.layer.strokeWeight(0);
  my.x0 = Math.floor(w * 0.5);
  my.y0 = Math.floor(h * 0.5);
  // calc_xspan_end
  my.xspan_end = Math.sqrt(w * w + h * h);
  //
  // 640 x 480 matches default video capture on desktop
}

function capture_ready_callback() {
  console.log("capture_ready_callback");
  console.log("my.capture.width", my.capture.width, my.capture.height);
  initGraphics();
}

// From
// https://editor.p5js.org/jht1493/sketches/5LgILr8RF

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
  // init_dim();
}

// Respond to window resizing event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video

// https://editor.p5js.org/jht1493/sketches/gnx2IQn1N
// video scan

// https://editor.p5js.org/jht1493/sketches/Q9jdcICpW
// video scan mouseY

// https://editor.p5js.org/jht1493/sketches/oHVI5tU4BP
// video scan gap

// https://editor.p5js.org/jht1493/sketches/mEXETIijv
// video scan gap center

// https://editor.p5js.org/jht1900/sketches/-Ypn6ODK_
// video scan radial

// https://editor.p5js.org/jht9629-nyu/sketches/cKzXO8eUG
// video scan radial v2

// https://editor.p5js.org/jht9629-nyu/sketches/WdNVtxQzf
// video scan radial v3

// https://editor.p5js.org/jht9629-nyu/sketches/7vllrM5d5
// video scan radial v4

// https://editor.p5js.org/jht9629-nyu/sketches/OReZ4wOR5
// video scan radial v5

// https://editor.p5js.org/jht9629-nyu/sketches/nkw-sZXwN
// video scan radial v6

// https://editor.p5js.org/jht9629-nyu/sketches/i6akdNRS2
// video scan radial v7

// saveCanvas('video scan radial v7');

// createCanvas(my.vwidth, my.vheight);
// flipped require latest p5js 1.9.1
// does not appear to affect capture.get
// capture.get pixels remain in same orientation
// capture = createCapture(VIDEO, {flipped:1});
