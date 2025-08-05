// reconstruction of Sol LeWitt 'Bands of Equal Width in Color, Plate 7'
// match colors to original
let my = {};

function setup() {
  createCanvas(windowWidth, windowWidth);
  // createCanvas(windowWidth / 2, windowWidth / 2);
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
  let ww = w * 1.90;
  let x = my.midx;
  let y = my.midy;
  let nn = my.n - 2;
  strokeWeight(w);
  noFill();
  let r = w * 2;
  let colors = my.colors_circle;
  for (let i = 0; i < nn; i++) {
    let c = colors[i % colors.length];
    stroke(c);
    circle(x, y, r);
    r = r + ww;
  }
}

function vert_lines() {
  // middle to bottom right
  // line(midx, midy, width, height);
  let w = my.w * 0.98;
  let x = my.midx + w;
  let y = 0;
  let x2 = my.midx + w;
  let y2 = my.midy + w;
  let nn = my.n - 2;
  strokeWeight(w);
  let colors = my.colors_vert;
  for (let i = 0; i < nn; i++) {
    let c = colors[i % colors.length];
    stroke(c);
    line(x, y, x2, y2);
    x = x + w;
    y2 = y2 + w;
    x2 = x2 + w;
  }
}

function diag_lines() {
  let w = my.w * 1.35;
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

  let orang = [229, 87, 46]; // orange
  let ltblu = [0, 133, 186]; // lt blue
  // let yello = [255, 180, 80]; // yellow
  let yello = [232, 167, 42]; // yellow
  let Red__ = [187, 12, 46]; // red
  let dkblu = [97, 71, 115]; // dk blue
  let gre3n = [60, 123, 58]; // green

  my.colors_diag = [
    yello,
    gre3n,
    dkblu,
    ltblu,
    orang,
    dkblu,
    Red__,
    gre3n,
    yello,
    dkblu,
    orang,
    Red__,
    ltblu,
    gre3n,
    yello,
    Red__,
    dkblu,
    orang,
    ltblu,
    dkblu,
    gre3n,
    Red__,
    yello,
    dkblu,
    orang,
    gre3n,
    ltblu,
    dkblu,
    Red__,
    yello,
    ltblu,
    orang,
  ];

  my.colors_vert = [
    orang,
    ltblu,
    yello,
    gre3n,
    dkblu,
    ltblu,
    orang,
    Red__,
    yello,
    gre3n,
    orang,
    Red__,
    dkblu,
    ltblu,
    yello,
    Red__,
    orang,
    gre3n,
    yello,
    dkblu,
    ltblu,
    Red__,
  ];

  my.colors_circle = [
    dkblu,
    Red__,
    orang,
    ltblu,
    gre3n,
    dkblu,
    yello,
    Red__,
    orang,
    ltblu,
    dkblu,
    Red__,
    orang,
    yello,
    dkblu,
    ltblu,
    gre3n,
    orang,
    dkblu,
    Red__,
    yello,
    gre3n,
    dkblu,
    orang,
    ltblu,
    yello,
    gre3n,
    dkblu,
    Red__,
    ltblu,
    orang,
    gre3n,
  ];
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
