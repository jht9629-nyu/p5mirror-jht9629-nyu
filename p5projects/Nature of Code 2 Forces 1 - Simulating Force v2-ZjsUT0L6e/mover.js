// https://editor.p5js.org/jht9629-nyu/sketches/ZjsUT0L6e
// Nature of Code 2: Forces 1 - Simulating Force v2

// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= friction;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= friction;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= friction;
    }
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
