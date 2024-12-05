// https://editor.p5js.org/jht1493/sketches/FoN8-xraX
// text points perlin noise

let a_font;
let a_pts;
let pt_size = 1;
let a_text = 'ICM 2022';

function preload() {
  a_font = loadFont("LeagueGothic-Regular.otf");
}

function setup() {
  createCanvas(600, 400);
  // let tz = 100;
  let tz = 220;
  let sf = 0.9;
  // let sf = 0.09;
  a_pts = a_font.textToPoints(a_text, 0, 0, tz, {
    sampleFactor: sf,
    simplifyThreshold: 0
  });
  console.log('a_pts.length', a_pts.length)
}

let xz = 0;
let yz = 1000;

function draw() {
  background(0);
  noStroke();
  fill(0, 255, 0);
  push();
  translate(0, 275);
  for (let i = 0; i < a_pts.length; i++) {
    let xoff = ns(a_pts[i].x, a_pts[i].y, xz);
    let yoff = ns(a_pts[i].y, a_pts[i].x, yz);
    xoff += a_pts[i].x;
    yoff +=  a_pts[i].y;
    ellipse(xoff, yoff, pt_size, pt_size);
  }
  pop();
  xz += 2;
  yz += 2;
}

let a_scale = 0.005;
let a_min = -50;
let a_max = 50;
function ns(x, y, z) {
  let n = noise(x * a_scale, y * a_scale, z * a_scale);
  return map(n, 0, 1, a_min, a_max);
}

// https://editor.p5js.org/jht1493/sketches/FoN8-xraX
// text points perlin noise

// remixed from
// https://editor.p5js.org/allison.parrish/sketches/HJqO6tdQG

// https://p5js.org/reference/#/p5.Font/textToPoints
