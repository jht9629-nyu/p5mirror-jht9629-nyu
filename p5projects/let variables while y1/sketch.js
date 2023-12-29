// let variables while
// expressions use to draw four rects
function setup() {
  // createCanvas(300, 300);
  createCanvas(400, 400);
  console.log("width", width, "height", height);
  background(220);

  let x1 = 0;
  let y1 = 0;
  let w1 = width / 8;
  let h1 = height / 8;

  while (y1 < height) {
    fill("gray");
    rect(x1, y1, w1, h1);

    x1 += w1;
    if (x1 > width) {
      x1 = 0;
      y1 += h1;
    }
  }
}
