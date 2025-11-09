let bubbles = [];

function setup() {
  createCanvas(400, 400);
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    if (bubbles.length > 50) {
      bubbles.splice(0, 1);
    }
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 24;
  }

  display() {
    stroke(255);
    fill(255, 0, 150, 50);
    circle(this.x, this.y, this.size);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
