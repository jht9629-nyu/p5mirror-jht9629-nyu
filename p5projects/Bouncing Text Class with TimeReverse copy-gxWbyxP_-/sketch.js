let letters = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    letters.push(
      new BouncingText(
        "",
        random(0, width), //x
        random(0, height), //y
        random(-5, 5), //xv
        random(-5, 5) //yv
      )
    );
  }
}

function draw() {
  background(0, 0, 0, 90);
  noStroke();
  fill("beige");
  textAlign(CENTER, CENTER);
  textSize(width / 10);

  for (let apple of letters) {
    apple.bounce();
    apple.drawText();
    apple.reverseTime();
  }
}

class BouncingText {
  constructor(letter, x, y, xv, yv) {
    this.letter = letter;
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
  }

  drawText() {
    text(this.letter, this.x, this.y);
  }

  bounce() {
    this.x += this.xv;
    this.y += this.yv;
    if (this.x < 0 || this.x > width) {
      this.xv *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.yv *= -1;
    }
  }

  reverseTime() {
    if (frameCount % int(frameRate()) == 0) {
      this.xv *= -1;
      this.yv *= -1;
    }
  }
}
