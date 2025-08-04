// https://editor.p5js.org/jht9629-nyu/sketches/VmN0o6MAz
// Pentagons v1
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  //generate bg color
  let c = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    c[i] = random(50, 150);
  }
  background(c);

  //declare vars that determine shape size & padding
  let choices = [20, 30, 40, 50];
  let vertices = [3, 4, 5, 6, 7, 8];
  vertices = random(vertices);
  let sRadius = random(choices);
  let sPadding = sRadius / 2 + 2;
  const sGrid = -600;
  let sX = sGrid;
  let sY = sGrid;
  let sRow = 0;

  //draw each shape, evenly spaced diagonally
  noStroke();
  for (let i = 0; i < (width * height) / sRadius; i++) {
    fill(random(255), random(255), random(255));
    polygon(sX, sY, sRadius, vertices);
    if (sX + sRadius < width) {
      sX += sRadius + sPadding;
      sY += sRadius;
    } else {
      sRow += 2;
      sY = sGrid + sRadius * sRow;
      sX = sGrid;
    }
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// https://editor.p5js.org/elliotmersch/sketches/tFlNNcg8J
// Pentagons by elliotmersch
