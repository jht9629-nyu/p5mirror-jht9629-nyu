
function setup() {
  createCanvas(400, 400);
  
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  pixelDensity(1);

  setup_bright();
  setup_random();
  setup_paint();
}

function draw() {
  // background(220);
  draw_bright()
  // draw_random();
  draw_paint();
}


