// https://editor.p5js.org/jht9629-nyu/sketches/rKzf_JMBB
// image preload copy2

let img;
let img1;
let img2;

function preload() {
  img = loadImage("jht-w128.png");
}
function setup() {
  createCanvas(400, 400);
  
  let w = img.width;
  let h = img.height;
  console.log('w', w, 'h', h)
  
  img1 = createImage(w, h/2);
  img2 = createImage(w, h/2);
  
  // copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
  img1.copy(img, 0, 0, w, h/2, 0, 0, w, h/2)
  img2.copy(img, 0, h/2, w, h/2, 0, 0, w, h/2)
}

function draw() {
  background(220);
  image(img, 0, 0)
  
  let w = img.width;
  let h = img.height;

  image(img1, w, 0)
  image(img2, w, h)
}

// copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

// image(img, x, y, [width], [height])
// image(img, dx,dy,dWidth,dHeight, sx,sy,sWidth,sHeight...

