
// https://editor.p5js.org/jht9629-nyu/sketches/3n2FV2isn
// Array of Objects - limit to nmax

// Array of Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.3-array-of-objects.html
// https://youtu.be/fBqaA7zRO58
// https://editor.p5js.org/codingtrain/sketches/1y_xfueO

let bubbles = [];
let nmax = 10;

function setup() {
  createCanvas(600, 400);
  fill(255,100)
}

function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
  if (bubbles.length > nmax) {
    bubbles.splice(0,1)
  }
}

function draw() {
  background(0);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    // stroke(255);
    // strokeWeight(4);
    // noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
