function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB, 100);
  draw_rainbow();
  translate(200,0);
  draw_rainbow();
  translate(-200,200);
  draw_rainbow();
  translate(200,0);
  draw_rainbow();
}

function draw_rainbow() {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      stroke(i, j, 100);
      point(i, j);
    }
  }
}
