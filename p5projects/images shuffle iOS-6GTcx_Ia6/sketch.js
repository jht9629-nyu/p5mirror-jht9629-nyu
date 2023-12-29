// https://editor.p5js.org/jht9629-nyu/sketches/6GTcx_Ia6
// images shuffle iOS
// array used to break an image into bands

let img;
let bands = [];
let n = 10;
let cnv;

function preload() {
  img = loadImage("jht-w128.png");
}
function setup() {
  // iOS appear to require mouseClicked event handler
  // to get touches in full screen mode
  cnv = createCanvas(600, 600);
  cnv.mouseClicked(canvas_mouseClicked);
  createDiv("v5 press mouse or touch to suffle image");

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

function canvas_mouseClicked() {
  console.log("canvas_mouseClicked");
  shuffle(bands, true);
  return false; // prevent drag on mobile
}

// function mousePressed() {
//   console.log('mousePressed')
//   shuffle(bands, true)
//   return false; // prevent drag on mobile
// }

// // try to fix on iOS
// function mouseReleased() {
//   console.log('mousePressed');
//   shuffle(bands, true)
//   return false; // prevent drag on mobile
// }

// https://editor.p5js.org/jht9629-nyu/sketches/Sgh9j2tCz
// images shuffle