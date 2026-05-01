// https://editor.p5js.org/jht9629-nyu/sketches/jr1ok4EaN
// matt-parker-nov15

// matt-parker
// https://www.madparker.com/work/art/p5t
// https://x.com/madparker/status/1328187155794055169?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1328187155794055169%7Ctwgr%5E653cfbd5e4ab1ca5094889bbf6ea0a9c7eff133a%7Ctwcon%5Es1_&ref_url=https%3A%2F%2F1420826402-atari-embeds.googleusercontent.com%2Fembeds%2F16cb204cf3a9d4d223a0a3fd8b0eec5d%2Finner-frame-minified.html%3Fjsh%3Dm3B2F_2Fscs2Fabc-static2F_2Fjs2Fk3Dgapi.lb.en.HLcjcliCxoY.O2Fd3D12Frs3DAHpOoo-EKlLcELGvY6Qdg_kTBmN3Ra8MLw2Fm3D__features__
// 11:04 PM · Nov 15, 2020
// no paint on canvas

let m = 0,
  x = 0,
  y = 0,
  o = 0,
  p = 0,
  n = 100;
// n = 480;
function setup() {
  pixelDensity(1);
  createCanvas(480, 480);
  colorMode(HSL);
}
function draw() {
  // console.log('frameCount', frameCount);
  if ((m < 1) | (m >= n * n)) {
    xset(n - 1, n - 1, (o = p));
    xset(9, 9, (p = xcolor(random(n), n, n)));
  }
  for (m = x = 0; x < n; x++) {
    for (y = 0; y < n; y++) {
      m += c(o) + c(p);
      // console.log("x", x, "y", y, "m", m);
    }
  }
  updatePixels();
}
function c(l) {
  if (xget(x, y) == l) {
    xset(int(random(4)) - 2 + x, int(random(4)) - 2 + y, l);
    return 1;
  }
  return 0;
}
// return color as rgb integer
function xcolor(r, g, b) {
  return ((r & 255) << 16) | ((g & 255) << 8) | (b & 255);
}
function xget(x, y) {
  let c = get(x, y);
  // console.log(c);
  return (c[0] << 16) | (c[1] << 8) | c[3];
}
function xset(x, y, c) {
  // console.log(c);
  c = [(c >> 16) & 255, (c >> 8) & 255, c & 255, 255];
  // console.log(c);
  set(x, y, c);
}
