// https://editor.p5js.org/jht9629-nyu/sketches/ayJgJmo1h
// text points perlin noise

let my = {};
// my.font;
// my.pts;
my.pt_size = 1;
my.text = 'ICM 2024';

function preload() {
  my.font = loadFont("LeagueGothic-Regular.otf");
}

function setup() {
  createCanvas(600, 400);
  // let tz = 100;
  let tz = 220;
  let sf = 0.9;
  // let sf = 0.09;
  my.pts = my.font.textToPoints(my.text, 0, 0, tz, {
    sampleFactor: sf,
    simplifyThreshold: 0
  });
  console.log('my.pts.length', my.pts.length)
}

my.xz = 0;
my.yz = 1000;

function draw() {
  background(0);
  noStroke();
  fill(0, 255, 0);
  push();
  translate(0, 275);
  for (let i = 0; i < my.pts.length; i++) {
    let xoff = ns(my.pts[i].x, my.pts[i].y, my.xz);
    let yoff = ns(my.pts[i].y, my.pts[i].x, my.yz);
    xoff += my.pts[i].x;
    yoff +=  my.pts[i].y;
    ellipse(xoff, yoff, my.pt_size, my.pt_size);
  }
  pop();
  my.xz += 2;
  my.yz += 2;
}

my.scale = 0.005;
my.min = -50;
my.max = 50;

function ns(x, y, z) {
  let n = noise(x * my.scale, y * my.scale, z * my.scale);
  return map(n, 0, 1, my.min, my.max);
}

// https://p5js.org/reference/#/p5.Font/textToPoints

// remixed from
// https://editor.p5js.org/allison.parrish/sketches/HJqO6tdQG

// https://editor.p5js.org/jht1493/sketches/FoN8-xraX
// text points perlin noise
