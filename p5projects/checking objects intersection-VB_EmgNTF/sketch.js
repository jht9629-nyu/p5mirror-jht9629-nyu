// https://editor.p5js.org/jht9629-nyu/sketches/VB_EmgNTF
// checking objects intersection

/* 
6.10 p5.js checking objects intersection part 2 (part 1 is in video 6.9)
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 15; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (let j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}

class Bubble {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.col = color(255);
  }

  changeColor() {
    this.col = color(random(255), random(255), random(255));
  }
  
  display() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  intersects(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

// https://editor.p5js.org/icm/sketches/S1BbBT13b
// checking objects intersection
