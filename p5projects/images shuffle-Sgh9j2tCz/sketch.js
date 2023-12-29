// https://editor.p5js.org/jht9629-nyu/sketches/Sgh9j2tCz
// images shuffle
// array used to break an image into bands

let img;
let bands = [];
let n = 10; // number of bands

function preload() {
  img = loadImage("jht-w128.png");
}
function setup() {
  createCanvas(390, 600);
  createDiv("v3 press mouse or touch to suffle image");

  let w = img.width;
  let h = img.height;
  let sh = int(h / n);
  let dh = int(height / n);
  console.log("w", w, "h", h, "sh", sh, "dh", dh);

  for (let i = 0; i < n; i++) {
    bands[i] = createImage(w, sh);
    bands[i].copy(img, 0, sh * i, w, sh, 0, 0, w, sh);
  }
}

function draw() {
  background(220);

  let rh = height / img.height;
  // image(img, 0, 0, img.width*rh, img.height*rh)

  let dh = int(height / n);
  let dw = img.width * rh;

  for (let i = 0; i < n; i++) {
    image(bands[i], 0, dh * i, dw, dh);
  }
}

function mousePressed() {
  shuffle(bands, true);
  return false; // prevent drag on mobile
}

// copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

// image(img, x, y, [width], [height])
// image(img, dx,dy,dWidth,dHeight, sx,sy,sWidth,sHeight...

// Development:

// https://editor.p5js.org/jht9629-nyu/sketches/Q5q1_WZVS
// preload loadImage 

// https://editor.p5js.org/jht9629-nyu/sketches/ozUZXTjie
// image preload rh 

// https://editor.p5js.org/jht9629-nyu/sketches/rKzf_JMBB
// image preload copy2

// https://editor.p5js.org/jht9629-nyu/sketches/X4B7LH5Xj
// jht preload copy4

// https://editor.p5js.org/jht9629-nyu/sketches/P-AHc4NF9
// jht preload array
