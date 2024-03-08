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

  while (x1 < width) {
    fill("gray");
    rect(x1, y1, w1, h1);

    x1 += w1;
  }
}
