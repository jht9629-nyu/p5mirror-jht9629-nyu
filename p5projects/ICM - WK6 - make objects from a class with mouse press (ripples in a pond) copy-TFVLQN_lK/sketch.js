/*
Sketch adapted from Code as a Creative Medium:
https://github.com/CodeAsCreativeMedium/exercises/tree/main/07_time_and_interactivity/03_ripples_in_a_pond/ripples_in_a_pond_js
*/

/*
Step 1: Fill in the blanks so that each mouse press makes a new object

Step 2: Write a new function in the Ring class so that each object fades out over time. What property for each object needs to change? Don't forget to call that new method in draw()!
*/

let rings = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  for (let i = 0; i < rings.length; i++) {
    rings[i].display();
    rings[i].grow();
  }
}


// press to create a new Ring object
function mousePressed() {
  let ring = new Ring(______, ______)
  rings.push(____);
}

class Ring {
  constructor(mx, my) {
    this.x = __;
    this.y = __;
    this.alphaValue = 150;
    this.diameter = 0;
  }

  display() {
    noFill();
    strokeWeight(4);
    stroke(255, this.alpha);
    circle(____._, ____._, this.diameter);
  }

  grow() {
    this.diameter += 1.5;
  }
}
