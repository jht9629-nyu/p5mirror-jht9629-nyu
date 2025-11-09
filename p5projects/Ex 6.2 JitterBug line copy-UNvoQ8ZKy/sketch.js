let a_bug = [];
let a_limit = 100;

function setup() {
  createCanvas(480, 120);
  createSpan('Drag mouse on canvas to create JitterBugs')
  background(204);
}

function draw() {
  background(204);
  let prior_bug;
  for (let bug of a_bug) {
    if (prior_bug) {
      prior_bug.line_to(bug);
    }
    bug.move();
    bug.display();
    prior_bug = bug;
  }
  if (a_bug.length >= a_limit) {
    a_bug.splice(0,1);
  }
}

function mouseDragged() {
  add_bug(mouseX, mouseY);
}

function add_bug(x, y) {
  let r = 5;
  // let c = random(['red', 'green', 'yellow'])
  let c = 'black';
  let bug = new JitterBug(x, y, r, c);
  a_bug.push(bug);
}

class JitterBug {
  constructor(tempX, tempY, tempDiameter, tempC) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2;
    this.color = tempC;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    if (this.x < 0) this.x = 0;
    if (this.x > width) this.x = width;
    this.y += random(-this.speed, this.speed);
    if (this.y < 0) this.y = 0;
    if (this.y > height) this.y = height;
  }
  display() {
    stroke(this.color);
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  line_to(other) {
    strokeWeight(this.diameter);
    line(this.x, this.y, other.x, other.y);
  }
}

// https://editor.p5js.org/jht1493/sketches/wYka9ilXw
// Ex 6.2 JitterBug line

// https://editor.p5js.org/jht1493/sketches/fcsUMY4C6
// Ex 6.2 JitterBug limit

// https://editor.p5js.org/jht1493/sketches/AKpx2vF1U
// Ex 6.2 JitterBug drag

// https://editor.p5js.org/jht1493/sketches/OLgbWg-a0
// Ex 6.2 JitterBug clamped

// https://editor.p5js.org/jht1493/sketches/UfXdsZAHU
// Ex 6.1 JitterBug

// https://editor.p5js.org/jht1493/sketches/HSp7qS5n4
// Ex_11_09 Managing Many Objects-remix

// https://editor.p5js.org/jht1493/sketches/XDfmnW1JD
// Ex_11_09 Managing Many Objects

// https://github.com/lmccart/gswp5.js-code/blob/master/11_Arrays/Ex_11_09.js
