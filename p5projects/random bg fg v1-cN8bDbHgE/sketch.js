// https://editor.p5js.org/jht9629-nyu/sketches/cN8bDbHgE
// random bg fg v1

let my = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  init_page();
  // frameRate(2);
  my.npause = getTargetFrameRate() * 5;
  setup_fullScreenButton();
}

function draw() {
  // background(220);
  if (my.ipause > 0) {
    my.ipause = my.ipause - 1;
    if (my.ipause <= 0) {
      next_page();
    }
    return;
  }
  my.ipause = my.npause;
  // init_page();
}

function init_vars() {
  my.ipause = 0;
  change_bg();
  change_fg();
}

function change_fg() {
  my.fgColor = [random(255), random(255), random(255)];
}

function change_bg() {
  my.bgColor = [random(255), random(255), random(255)];
}

function next_page() {
  if (random([0, 1])) {
    change_fg();
  } else {
    change_bg();
  }
  draw_page();
}

function init_page() {
  init_vars();
  draw_page();
}

function draw_page() {
  background(my.bgColor);
  fill(my.fgColor);
  let x = width / 2;
  let y = height / 2;
  let w = width;
  let h = w;
  ellipse(x, y, w, h);
}

// --
function setup_fullScreenButton() {
  my.fullScreenButton = createButton("?=v23 Full");
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
  init_vars();
}

// Respond to window resizing event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
