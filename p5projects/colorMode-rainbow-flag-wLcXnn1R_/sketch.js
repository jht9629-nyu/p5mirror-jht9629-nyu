function setup() {
  createCanvas(400, 400);
  // createCanvas(390, 600);
  // createCanvas(600, 390);
}

function draw() {
  
  let w = width / 100;
  let h = height / 100;

  noStroke();
  strokeWeight(0);
  colorMode(HSB, 100);

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      fill(i, j, 100);
      rect(i*w, j*h, w, h);
    }
  }
}
