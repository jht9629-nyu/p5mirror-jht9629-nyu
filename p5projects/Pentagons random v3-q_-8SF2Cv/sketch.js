// https://editor.p5js.org/jht9629-nyu/sketches/VmN0o6MAz
// Pentagons v1

let choices = [20, 30, 40, 50];
let vertices = [3, 4, 5, 6, 7, 8];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  setInterval( draw, 5*1000);
}

function draw() {
  background(random_rgb());

  //declare vars that determine shape size & padding
  let nvert = random(vertices);
  let sRadius = random(choices);
  let sPadding = sRadius / 2 + 2;
  let sGrid = -max(width, height) * 2;
  let sX = sGrid;
  let sY = sGrid;
  let sRow = 0;

  //draw each shape, evenly spaced diagonally
  // noStroke();
  let n = (width * height) / sRadius;
  for (let i = 0; i < n; i++) {
    fill(random_fill());
    polygon(sX, sY, sRadius, nvert);
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

function random_rgb() {
  return [random(255), random(255), random(255)]
}

function random_fill() {
 return [random(255), random(255), random(255)]
  return random(['red', 'green', 'gold']);
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

function mousePressed() {
  draw();
}

// https://editor.p5js.org/elliotmersch/sketches/tFlNNcg8J
// Pentagons by elliotmersch
