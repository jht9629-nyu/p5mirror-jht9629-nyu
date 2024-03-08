function setup() {
  // createCanvas(400, 400);
  // createCanvas(390, 600);
  createCanvas(600, 390);
  createDiv('move mouse up and down to change brightness')
}

function draw() {
  let w = width / 100;
  let h = height / 100;

  noStroke();
  strokeWeight(0);
  colorMode(HSB, 100);

  for (let i = 0; i < 100; i++) {
    // fill(i, 50, 100);
    // fill(i, 50, 50);
    let m = map(mouseY, 0, height, 0, 100)
    fill(i, 50, m)
    rect(i * w, 0, w, height);
  }
}
