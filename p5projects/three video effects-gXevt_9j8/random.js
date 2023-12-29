function draw_random() {
  background(51);
  loadPixels();
  let w1 = 0;
  let w2 = width/ 3;
  for (let y = 0; y < height; y++) {
    for (let x = w1; x < w2; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = x;
      pixels[index + 1] = random(255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
