let pNumber;
let pumpkins = [];
let pumpkin;

function setup() {
  createCanvas(400, 400);
  pNumber = 5;
}

function draw() {
  background(220);

  push();
  noFill();
  circle(mouseX, mouseY, 30);
  pop();

  for (let i = 0; i < pNumber; i++) {
    punkin = new Pumpkin(random(0, width), random(0, height))
    pumpkins.push(punkin)
    // pumpkin = pumpkins[i];
    pumpkin.display();
    pumpkin.bounce();

    if (i % 2 != 0) {
      pumpkin.flash();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < pNumber; i++) {
    if (mouseX > pumpkins[i].x && mouseX < pumpkins[i].x + pumpkins[i].size) {
      pumpkins.splice(i, 1);
      pNumber--;
    }

    if (pNumber == 0) {
      pNumber = 10;
    }
  }
}

class Pumpkin {
  constructor(x, y) { // new
    this.x = x;
    this.y = y;
    this.size = random(30, 60);
    this.speedX = random(1, 5);
    this.speedY = random(1, 5);
  }

  display() {
    //stroke(255);
    //fill(255, 100, 150);
    textSize(this.size);
    text("🎃", this.x, this.y);
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }

  flash() {
    push();
    fill(252, 209, 42, 100);
    rect(
      this.x - this.size / 2,
      this.y - this.size,
      this.size * 2,
      this.size + 20
    );
    pop();
  }
}
