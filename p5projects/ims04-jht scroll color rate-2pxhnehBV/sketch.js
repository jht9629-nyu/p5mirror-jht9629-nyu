// https://editor.p5js.org/jht9629-nyu/sketches/2pxhnehBV
// ims04-jht scroll color rate

// rate adjusted to achieve complete 
// scroll in my.scrollSeconds 
// https://p5js.org/reference/#/p5/deltaTime

let colorGold = [187, 165, 61];

// double red
// let colorPalette = ["red", "green", colorGold];
// let colorPalette = ["red", "green", colorGold, "green"];
let colorPalette = ["red", "green", colorGold, "black"];

let my = {};

function setup() {
  my.scrollSeconds = 30;
  // my.debug = 1;
  my.width = 400;
  my.height = 400;
  my.n = 3;
  // =0 for left to right, else right to left scroll
  my.xtoLeft = 1;

  if (!my.debug) {
    my.width = windowWidth;
    my.height = windowHeight;
  }
  createCanvas(my.width, my.height);
  noStroke();

  fullScreenBtn = createButton("Full Screen").mousePressed(full_screen_action);
  fullScreenBtn.style("font-size:42px");

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
  // for (let item of my.items) { console.log('item', item); }
}

function draw() {
  let deltaSecs = deltaTime / 1000
  my.xstep = width * deltaSecs / my.scrollSeconds;
  // console.log('my.xstep', my.xstep);

  for (let item of my.items) {
    let { xpos, color } = item;
    item.xpos = (xpos + my.xstep) % my.wide;
    fill(color);
    let x = xpos - my.xlen;
    let y = 0;
    if (my.xtoLeft) {
      x = width - x;
    }
    rect(x, y, my.xlen, my.ylen);
  }
}

// --
// https://editor.p5js.org/jht9629-nyu/sketches/ZpoPuHXRo
// ims04-jht scroll color bars - no pop 

// https://editor.p5js.org/jht9629-nyu/sketches/3VKJ-q8ar
// ims03-jht scrolling color bars
// color pops on at wrap around

// From
// https://editor.p5js.org/jht1493/sketches/5LgILr8RF

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

// https://editor.p5js.org/jht9629-nyu/sketches/3VKJ-q8ar
// ims03-jht scrolling color bars
