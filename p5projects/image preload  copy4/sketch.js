// https://editor.p5js.org/jht9629-nyu/sketches/X4B7LH5Xj
// image preload copy4

let img;
let img1;
let img2;
let img3;
let img4;

function preload() {
  img = loadImage("jht-w128.png");
}
function setup() {
  createCanvas(400, 400);

  // image sized to be multiple of 4
  let w = img.width;
  let h = img.height;
  console.log("w", w, "h", h);

  let hh = h / 4;

  img1 = createImage(w, hh);
  img2 = createImage(w, hh);
  img3 = createImage(w, hh);
  img4 = createImage(w, hh);

  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  img1.copy(img, 0, 0, w, hh, 0, 0, w, hh);
  img2.copy(img, 0, hh, w, hh, 0, 0, w, hh);
  img3.copy(img, 0, hh * 2, w, hh, 0, 0, w, hh);
  img4.copy(img, 0, hh * 3, w, hh, 0, 0, w, hh);
}

function draw() {
  background(220);

  image(img, 0, 0);

  let w = img.width;
  let h = img.height;
  let hs = img1.height * 2;

  image(img1, w, 0);
  image(img2, w, hs);
  image(img3, w, hs * 2);
  image(img4, w, hs * 3);
}
