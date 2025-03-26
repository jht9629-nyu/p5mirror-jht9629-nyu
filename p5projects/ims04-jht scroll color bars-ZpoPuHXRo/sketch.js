// https://editor.p5js.org/jht9629-nyu/sketches/ZpoPuHXRo
// ims04-jht scroll color bars - no pop 

let colorGold = [187, 165, 61];

// double red
// let colorPalette = ["red", "green", colorGold];
// let colorPalette = ["red", "green", colorGold, "green"];
let colorPalette = ["red", "green", colorGold, "black"];

let my = {};

function setup() {
  my.xstep = 2;
  my.debug = 1;
  my.width = 400;
  my.height = 400;
  my.n = 3;

  if (!my.debug) {
    my.width = windowWidth;
    my.height = windowHeight;
  }
  createCanvas(my.width, my.height);
  noStroke();

  setup_fullScreenButton();

  my_setup();
}

function my_setup() {
  my.xlen = width / my.n;
  my.ylen = height;
  my.items = [];
  let n = my.n + 1;
  my.wide = my.xlen * n;
  for (let i = 0; i < n; i++) {
    let xpos = my.xlen * i;
    let color = colorPalette[i % colorPalette.length];
    my.items[i] = { xpos, color };
  }
  for (let item of my.items) { console.log('item', item); }
}

function draw() {
  for (let item of my.items) {
  // for (let i = 0; i < my.items.length; i++) {
  //   let item = my.items[i];
    let { xpos, color } = item;
    item.xpos = (xpos + my.xstep) % my.wide;
    fill(color);
    let x = xpos - my.xlen;
    let y = 0;
    rect(x, y, my.xlen, my.ylen);
  }
}

// --
// https://editor.p5js.org/jht9629-nyu/sketches/3VKJ-q8ar
// ims03-jht scrolling color bars
// color pops on at wrap around

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
// https://editor.p5js.org/jht9629-nyu/sketches/3VKJ-q8ar
// ims03-jht scrolling color bars
