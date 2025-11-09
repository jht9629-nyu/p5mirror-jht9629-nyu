// https://editor.p5js.org/jht9629-nyu/sketches/yXss8NsVdb
// https://editor.p5js.org/ezeta/sketches/rao1m-aDL

//I've been working on this for hours and don't know what to do anymore pls help!! I know my issue is in the construtor and showing it but don't know how to fix this.

let words = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let u = random(["apple","peach","pear"])
    let w = new Words(x, y, u);
    words.push(w);
  }
}

function draw() {
  background(220);
  for (let word of words) {
    word.move();
    word.show();
  }
  for (let i = 0; i < words.length; i++) {
    words[i].move();
    words[i].show();
  }
}

class Words {
  constructor(x, y, word) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(1, 5);
    this.ySpeed = random(1, 4);
    this.word = word;
  }
  move() {
    if (this.y > windowHeight || this.y < 0) {
      this.ySpeed = this.ySpeed * -1;
    }

    this.y = this.y + this.ySpeed;

    if (this.x > windowWidth || this.x < 0) {
      this.xSpeed = this.xSpeed * -1;
    }

    this.x = this.x + this.xSpeed;
  }

  show() {
    text(this.word, this.x, this.y);
  }
}
