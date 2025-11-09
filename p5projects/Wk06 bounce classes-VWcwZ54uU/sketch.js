// https://editor.p5js.org/jht9629-nyu/sketches/VWcwZ54uU
// Wk06 bounce classes

// { x, y, xs, ys, c }
let faces = [];
let colors = ["red", "green", "gold"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // randomSeed(0);
  for (let i = 0; i < 3; i++) {
    let c = colors[i];
    faces.push(new Face(c));
  }
}
function draw() {
  background(220);
  // circle(xp, yp, 20);
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    face.drawFace(30);
    face.bounce();
  }
}

class Face {
  constructor(c) {
    this.x = width / 2;
    this.y = height / 2;
    this.xs = random(-5, 5);
    this.ys = random(-5, 5);
    this.c = c;
  }
  drawFace(wt) {
    // background(220);
    push();
    noFill();
    stroke(this.c);
    // strokeWeight(8);
    strokeWeight(wt);
    translate(this.x - 200, this.y - 200);
    scale(0.5);
    this.drawHead();
    this.drawEyes();
    this.drawMouth();
    pop();
  }
  bounce() {
    this.x += this.xs;
    this.y += this.ys;
    if (this.x < 0 || this.x > width) {
      this.xs *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ys *= -1;
    }
  }
  drawHead() {
    circle(200, 200, 300);
  }
  drawEyes() {
    ellipse(150, 150, 40, 100);
    ellipse(250, 150, 40, 100);
  }
  drawMouth() {
    arc(200, 225, 200, 160, 0, radians(180), CHORD);
  }
}
