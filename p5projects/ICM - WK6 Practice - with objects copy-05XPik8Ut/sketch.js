let bubbles = [];

function setup() {
  createCanvas(400, 400);
}

function mouseDragged() {
  bubbles.____(___ Bubble(______, ______));
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    if (_______.______ > 20) {
      bubbles.______(_, _);
    }
  }
}

class Bubble {
  constructor(_, _) {
    this.x = _;
    this.y = _;
    this.size = 24;
  }

  display() {
    stroke(255);
    fill(255, 0, 150, 50);
    circle(____._, ____._, ____.____);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
