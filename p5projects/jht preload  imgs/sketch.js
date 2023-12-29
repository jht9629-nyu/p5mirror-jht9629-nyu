let img;
let imgs = [];
let n = 4;

function preload() {
  img = loadImage("jht-w128.png");
}
function setup() {
  createCanvas(400, 400);

  // image sized to be multiple of 4
  let w = img.width;
  let h = img.height;
  console.log("w", w, "h", h);

  let s = int(h / n);

  for (let i = 0; i < n; i++) {
    imgs[i] = createImage(w, s);
    imgs[i].copy(img, 0, s*i, w, s, 0, 0, w, s);
  }
}

function draw() {
  background(220);

  image(img, 0, 0);

  let w = img.width;
  let h = img.height;
  
  let s = int(h / n) * 2;

  for (let i = 0; i < n; i++) {
    image(imgs[i], w, s*i);
  }
}
