let upScale = 2;

function setup() {
  createCanvas(320 * upScale, 240 * upScale);
  pixelDensity(1);
  setup_bright();
  setup_paint();
}

function draw() {
  draw_random()
  draw_bright();
  draw_paint();
}


