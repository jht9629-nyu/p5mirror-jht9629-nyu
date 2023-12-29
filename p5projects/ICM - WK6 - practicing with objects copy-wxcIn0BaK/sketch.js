let bubbles = [];

function setup() {
  createCanvas(400, 400);
  // bubbles.push(new Bubble(width/2, height/2));
  for (let i = 0; i < 20; i++) {
      bubbles.push(new Bubble(random(10,width), random(10,height)));
  }
}

function mousePressed() {
  for (let i = 0; i < 20; i++) {
      bubbles.push(new Bubble(random(10,width), random(10,height)));
  }
}

function mouseDragged() {
  // bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    if (bubbles.length > 20) {
      bubbles.splice(0, 1);
    }
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 24;
    this.deltaX = 10;
    this.deltaY = 0;
    if (random() < 0.5) {
      this.shape = "rect"
    }
    else {
      this.shape = "circle"
    }
  }

  display() {
    stroke(255);
    fill(255, 0, 150, 50);
    if (this.shape == "rect") {
      rect(this.x, this.y, this.size);
    }
    else {
      circle(this.x, this.y, this.size)
    }
  }

  move() {
    this.x = this.x + this.deltaX;
    this.y = this.y + this.deltaY;
    if (this.x > width || this.x < 0) {
      this.deltaX = this.deltaX * -1.0;
    }
  }
}
