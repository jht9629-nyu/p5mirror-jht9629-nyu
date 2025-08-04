// reconstruction of Sol LeWitt 'Bands of Equal Width in Color, Plate 7'
// using color samples
let my = {};

function setup() {
  createCanvas(windowWidth / 2, windowWidth / 2);
  background(220);

  // Image source
  let img = createImg("Sol-LeWitt-bands-seven.jpg", "Sol-LeWitt-bands-seven.");

  init_vars();
  center_circles();
  diag_lines();
  vert_lines();
  black_lines();
}

function draw() {
  // background(220);
}

function center_circles() {
  let w = my.w;
  let ww = w * 2;
  let x = my.midx;
  let y = my.midy;
  let nn = my.n - 2;
  strokeWeight(w);
  noFill();
  let r = w * 2;
  for (let i = 0; i < nn; i++) {
    let c = my.colors[i % my.colors.length];
    stroke(c);
    circle(x, y, r);
    r = r + ww;
  }
}

function vert_lines() {
  // middle to bottom right
  // line(midx, midy, width, height);
  let w = my.w;
  let x = my.midx + w;
  let y = 0;
  let x2 = my.midx + w;
  let y2 = my.midy + w;
  let nn = my.n - 2;
  strokeWeight(w);
  for (let i = 0; i < nn; i++) {
    let c = my.colors[i % my.colors.length];
    stroke(c);
    line(x, y, x2, y2);
    x = x + w;
    y2 = y2 + w;
    x2 = x2 + w;
  }
}

function diag_lines() {
  let w = my.w * 1.5;
  // let ww = w * 2
  let ww = w * 1.2;
  // draw from mid center to top left
  // middle to bottom left
  // line(midx, midy, 0, height);
  let x = my.midx;
  let y = my.midy - ww;
  let x2 = 0;
  let y2 = height - ww;
  let nn = my.n - 2;
  strokeWeight(w);
  let colors = my.colors_diag;
  for (let i = 0; i < nn; i++) {
    let c = colors[i % colors.length];
    stroke(c);
    line(x, y, x2, y2);
    y = y - w;
    y2 = y2 - w;
  }
}

function init_vars() {
  my.n = 46;
  my.w = width / my.n;
  my.midx = width / 2;
  my.midy = height / 2;

  my.colors = [
    [229, 87, 46], // orange
    [0, 133, 186], // lt blue
    [232, 167, 42], // yellow
    // [232, 232, 0], // yellow
    [187, 12, 46], // red
    [97, 71, 115], // dk blue
    [0, 134, 193], // lt blue - repeat
    [60, 123, 58], // green
    [229, 87, 46], // orange
    [97, 71, 115], // dk blue
    [232, 167, 42], // yellow
    [187, 12, 46], // red
    [60, 123, 58], // green
    [97, 71, 115], // dk blue
    [0, 133, 186], // lt blue
    // [226, 77, 96], // orange
  ];

  my.colors_diag = my.colors;
}

function black_lines() {
  // black outline width
  let w = my.w;
  let midx = my.midx;
  let midy = my.midy;

  stroke(0);
  strokeWeight(w);

  // top edge
  line(0, w / 2, width, w / 2);

  // left edge
  line(w / 2, 0, w / 2, height);

  // right edge
  line(width - w / 2, 0, width - w / 2, height);

  // bottom edge
  line(0, height - w / 2, width - w / 2, height - w / 2);

  // top middle down
  line(midx, 0, midx, midy);

  // middle to bottom left
  line(midx, midy, 0, height);

  // middle to bottom right
  line(midx, midy, width, height);
}

/*
https://collections.discovernewfields.org/art/artwork/85963
Bands of Equal Width in Color, Plate 7
Sol LeWitt (American, 1928–2007)
https://en.wikipedia.org/wiki/Sol_LeWitt
*/
