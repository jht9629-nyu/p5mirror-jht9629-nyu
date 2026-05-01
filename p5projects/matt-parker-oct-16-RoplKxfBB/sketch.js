// https://editor.p5js.org/jht9629-nyu/sketches/RoplKxfBB
// matt-parker-oct-16
// Matt Parker 6:24 PM · Oct 16, 2020
// https://x.com/madparker/status/1317229846511144961

let x = 0,
  y = 0,
  s = 0,
  o = 0,
  p = 0,
  f = 0;
let c = 480;
function setup() {
  pixelDensity(1);
  createCanvas(480, 480);
}
function draw() {
  f++;
  s++;
  for (x = 0; x < c; x++) {
    for (y = 0; y < c; y++) {
      let nc = round(noise((x + f) * 0.01, y / 99));
      set(x, y, color(nc * 255));
    }
  }
  o += key == "a" ? -2 : key == "d" ? 2 : 0;
  p += key == "w" ? -2 : key == "s" ? 2 : 0;
  let nc = get((o = (o + c) % c), (p = (p + c) % c))[0];
  // let nc = red(get((o = (o + c) % c), (p = (p + c) % c)))
  // console.log('nc',nc);
  if (nc > 0) s = 0;
  fill(255, 0, 0);
  text(s, o, p);
  updatePixels();
}
