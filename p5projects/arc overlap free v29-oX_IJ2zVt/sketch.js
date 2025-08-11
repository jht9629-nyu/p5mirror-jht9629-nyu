// https://editor.p5js.org/jht9629-nyu/sketches/oX_IJ2zVt
// arc overlap free v29

let my = {};
function setup() {
  my.ninner = 4;
  my.nwidth = 9;
  my.pmargin = 0.02;
  my.pauseSeconds = 30;
  createCanvas(windowWidth, windowHeight);
  init_page();
  // frameRate(2);
  my.npause = getTargetFrameRate() * my.pauseSeconds;
  setup_fullScreenButton();
}
function draw() {
  if (my.ipause > 0) {
    my.ipause = my.ipause - 1;
    if (my.ipause <= 0) {
      init_page();
    }
    return;
  }
  if (my.i >= my.arr.length) {
    my.innerCount += 1;
    if (my.innerCount >= my.ninner) {
      my.ipause = my.npause;
      return;
    }
    my.i = 0;
  }
  let [x, y, fgs, index] = my.arr[my.i];
  x += my.margin + my.w / 2;
  y += my.margin + my.h / 2;
  fg = fgs[my.innerCount % fgs.length];
  draw_bullseye(x, y, my.w, my.h, fg, index);
  my.i += 1;
}
function init_vars() {
  my.startAngles = [
    //
    HALF_PI * 0,
    HALF_PI * 2,
    HALF_PI * 1,
    HALF_PI * 3,
  ];
  // let gold = [187, 165, 61];
  my.fg_colors = ["red", "green", "gold", "yellow"];
  my.bg_colors = ["black"];
  // my.bg_colors = ["white", "black"];
  my.innerCount = 0;
  my.ipause = 0;
  let p = my.nwidth;
  if (p < 1) p = 1;
  my.margin = width * my.pmargin;
  my.mwidth = max(width - my.margin * 2, 2);
  my.mheight = max(height - my.margin * 2, 2);
  my.w = my.mwidth / p;
  // my.w = Math.floor(my.mwidth / p);
  my.h = my.w;
  my.i = 0;
  my.arr = [];
  let h = my.h ;
  let w = my.w ;
  // let h = my.h - (my.h / my.ninner) * 0.5;
  // let w = my.w - (my.w / my.ninner) * 0.5;
  let index = 0;
  for (let y = 0; y < my.mheight; y += h) {
    for (let x = 0; x < my.mwidth; x += w) {
      let fgs = shuffle(my.fg_colors);
      my.arr.push([x, y, fgs, index]);
      index += 1;
    }
  }
  shuffle(my.arr, true);
}
function draw_bullseye(x, y, w, h, fg, index) {
  let n = my.ninner;
  let i = my.innerCount;
  let s = (n - i) / n;
  noFill();
  stroke(fg);
  strokeWeight(w * (1 / n) * 0.5);
  let start = my.startAngles[index % my.startAngles.length];
  // let start = random(my.startAngles);
  let end = start + PI + HALF_PI;
  arc(x, y, w * s, h * s, start, end);
  // ellipse(x, y, w * s, h * s, start, end);
}
function draw_bullseye1(x, y, w, h, fg) {
  let n = my.ninner;
  let i = my.innerCount;
  // for (let i = 0; i < n; i++) {
  fill(fg);
  let s = (n - i) / n;
  ellipse(x, y, w * s, h * s);
  // }
}

// arc(x, y, w, h, start, stop, [mode], [detail])

function fg_color() {
  return random(my.fg_colors);
  // return [random(255), random(255), random(255)];
}

function bg_color() {
  return random(my.bg_colors);
  // return [random(255), random(255), random(255)];
}

function init_page() {
  init_vars();
  background(bg_color());
}
function mousePressed() {
  init_page();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init_page();
}

// --
function setup_fullScreenButton() {
  my.fullScreenButton = createButton("?=v27 Full");
  my.fullScreenButton.mousePressed(fullScreen_action);
  my.fullScreenButton.style("font-size:42px");
  my.plusButton = createButton("[+]");
  my.plusButton.mousePressed(plusButton_action);
  my.plusButton.style("font-size:42px");
  my.minusButton = createButton("[-]");
  my.minusButton.mousePressed(minusButton_action);
  my.minusButton.style("font-size:42px");
}
function plusButton_action() {
  my.nwidth += 1;
  init_page();
}
function minusButton_action() {
  my.nwidth -= 1;
  init_page();
}

function fullScreen_action() {
  my.fullScreenButton.remove();
  my.plusButton.remove();
  my.minusButton.remove();
  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  init_vars();
  // init_dim();
}

// Respond to window resizing event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// https://editor.p5js.org/jht9629-nyu/sketches/KpCniSa1w
// shapes random frameRate v15

// https://editor.p5js.org/jht9629-nyu/sketches/GzlO70dCj
// shapes random array v17

// https://editor.p5js.org/jht9629-nyu/sketches/pW2RT5UHy
// shapes random array circle v20

// https://editor.p5js.org/jht9629-nyu/sketches/Iru8nBTSf
// shapes random pause v21

// https://editor.p5js.org/jht9629-nyu/sketches/n0LYuXRmX
// shapes random pause v22

// https://editor.p5js.org/jht9629-nyu/sketches/_waqMsgSP
// shapes random pause v23

// https://editor.p5js.org/jht9629-nyu/sketches/npE4WZS_0
// shapes random ninner v24

// https://editor.p5js.org/jht9629-nyu/sketches/6vzZeu7LG
// shapes random innerCount v25

// https://editor.p5js.org/jht9629-nyu/sketches/L4ClpFHhJ
// random innerCount overlap v26

// https://editor.p5js.org/jht9629-nyu/sketches/9GoF-em-1
// random innerCount overlap v27

// https://editor.p5js.org/jht9629-nyu/sketches/Vz7S8m4vY
// innerCount overlap free v28
