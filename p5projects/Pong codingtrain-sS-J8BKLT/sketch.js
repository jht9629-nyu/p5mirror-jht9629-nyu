// https://editor.p5js.org/jht9629-nyu/sketches/sS-J8BKLT
// Pong codingtrain
// https://thecodingtrain.com/challenges/67-pong

let leftscore = 0;
let rightscore = 0;
let ding;
let left;
let right;

function setup() {
  createCanvas(600, 400);
  ding = loadSound("ding.mp3");
  puck = new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
  createP('mouse/touch on canvas to focus keyboard')
  createP("a-z to move left paddle. j-m to move right paddle");
}

function draw() {
  background(0);

  puck.checkPaddleRight(right);
  puck.checkPaddleLeft(left);

  left.show();
  right.show();
  left.update();
  right.update();

  puck.update();
  puck.edges();
  puck.show();

  fill(255);
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width - 64, 40);
}

function keyReleased() {
  left.move(0);
  right.move(0);
}

function keyPressed() {
  console.log(key);
  if (key == "a") {
    left.move(-10);
  } else if (key == "z") {
    left.move(10);
  }

  if (key == "j") {
    right.move(-10);
  } else if (key == "m") {
    right.move(10);
  }
}

class Paddle {
  constructor(isLeft) {
    this.y = height / 2;
    this.w = 20;
    this.h = 100;
    this.ychange = 0;

    if (isLeft) {
      this.x = this.w;
    } else {
      this.x = width - this.w;
    }
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.y += this.ychange;
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  move(steps) {
    this.ychange = steps;
  }

}

class Puck {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 12;

    this.reset();
  }
  
  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  checkPaddleLeft(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2
    ) {
      if (this.x > p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let rad = radians(45);
        let angle = map(diff, 0, p.h, -rad, rad);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        this.x = p.x + p.w / 2 + this.r;
      }
    }
  }
  
  checkPaddleRight(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      if (this.x < p.x) {
        let diff = this.y - (p.y - p.h / 2);
        let angle = map(diff, 0, p.h, radians(225), radians(135));
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        this.x = p.x - p.w / 2 - this.r;
      }
    }
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    let angle = random(-PI / 4, PI / 4);
    this.xspeed = 5 * Math.cos(angle);
    this.yspeed = 5 * Math.sin(angle);

    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }

  edges() {
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
    if (this.x - this.r > width) {
      ding.play();
      leftscore++;
      this.reset();
    }
    if (this.x + this.r < 0) {
      ding.play();
      rightscore++;
      this.reset();
    }
  }
}

// https://editor.p5js.org/codingtrain/sketches/CKCwTIm3S
// port of Daniel Shiffman's Pong coding challenge
// by madacoo


