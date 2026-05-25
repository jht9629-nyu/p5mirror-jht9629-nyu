// https://editor.p5js.org/jht9629-nyu/sketches/EE84Ci6hM
// https://editor.p5js.org/jht9629-nyu/sketches/jr1ok4EaN
// matt-parker-nov15

// matt-parker
// https://www.madparker.com/work/art/p5t
// https://x.com/madparker/status/1328187155794055169?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1328187155794055169%7Ctwgr%5E653cfbd5e4ab1ca5094889bbf6ea0a9c7eff133a%7Ctwcon%5Es1_&ref_url=https%3A%2F%2F1420826402-atari-embeds.googleusercontent.com%2Fembeds%2F16cb204cf3a9d4d223a0a3fd8b0eec5d%2Finner-frame-minified.html%3Fjsh%3Dm3B2F_2Fscs2Fabc-static2F_2Fjs2Fk3Dgapi.lb.en.HLcjcliCxoY.O2Fd3D12Frs3DAHpOoo-EKlLcELGvY6Qdg_kTBmN3Ra8MLw2Fm3D__features__
// 11:04 PM · Nov 15, 2020
// no paint on canvas

// fixed with claude:
// https://x.com/madparker/status/1328187155794055169
// p5.js port of Matt Parker's sketch_11_15

const n = 480;
let m = 0;
let oR = 0, oG = 0, oB = 0;
let pR = 0, pG = 0, pB = 0;

function setup() {
  pixelDensity(1);
  createCanvas(n, n);
  colorMode(HSB, n);
  background(0);
}

function draw() {
  loadPixels();

  if (m < 1 || m >= n * n) {
    oR = pR; oG = pG; oB = pB;
    setPixel(n - 1, n - 1, oR, oG, oB);
    const col = color(random(n), n, n);
    pR = Math.round(red(col));
    pG = Math.round(green(col));
    pB = Math.round(blue(col));
    setPixel(9, 9, pR, pG, pB);
  }

  m = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      m += c(x, y, oR, oG, oB) + c(x, y, pR, pG, pB);
    }
  }

  updatePixels();
}

function setPixel(x, y, r, g, b) {
  if (x < 0 || x >= n || y < 0 || y >= n) return;
  const i = (y * n + x) * 4;
  pixels[i]     = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
  pixels[i + 3] = 255;
}

function c(x, y, r, g, b) {
  const i = (y * n + x) * 4;
  if (pixels[i] === r && pixels[i + 1] === g && pixels[i + 2] === b) {
    const nx = x + (Math.floor(random(4)) - 2);
    const ny = y + (Math.floor(random(4)) - 2);
    setPixel(nx, ny, r, g, b);
    return 1;
  }
  return 0;
}
