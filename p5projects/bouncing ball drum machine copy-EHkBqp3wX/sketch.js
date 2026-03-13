//Here's the original code I edited https://editor.p5js.org/ezeta/sketches/YjIn2hUfr
// I used ChatGPT-5.1 for the collision part

//create variables

let wavs = [
  "perc.wav",
  "kick.wav",
  "hat.wav",
  "snare.wav",
  "gabber.wav",
  "bubble.wav",
  "cam.wav",
  "laser.wav",
];
let index = 0;

//preload my sounds
function preload() {
  wavs = [
    loadSound("sounds/perc.wav"),
    loadSound("sounds/kick.wav"),
    loadSound("sounds/hat.wav"),
    loadSound("sounds/gabber.wav"),
    loadSound("sounds/snare.wav"),
    loadSound("sounds/laser.wav"),
    loadSound("sounds/bubble.wav"),
    loadSound("sounds/cam.wav"),
  ];
}

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  r = random(20, 70);
  let b = new Ball(mouseX, mouseY, r);
  balls.push(b);
}

function draw() {
  background(100, 150, 90);
  for (let ball of balls) {
    ball.move();
    ball.show();
  }

  //gpt helped me with this collision part:

  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      let b1 = balls[i];
      let b2 = balls[j];

      // distance between centers
      let d = dist(b1.x, b1.y, b2.x, b2.y);

      // if overlapping (collision)
      if (d < b1.r / 2 + b2.r / 2) {
        // ---- swap speeds for simple elastic collision ----
        let tempX = b1.xSpeed;
        let tempY = b1.ySpeed;

        b1.xSpeed = b2.xSpeed;
        b1.ySpeed = b2.ySpeed;

        b2.xSpeed = tempX;
        b2.ySpeed = tempY;

        // ---- optional: move them apart so they don't stick ----
        let overlap = b1.r / 2 + b2.r / 2 - d;
        let angle = atan2(b2.y - b1.y, b2.x - b1.x);

        b1.x -= (cos(angle) * overlap) / 2;
        b1.y -= (sin(angle) * overlap) / 2;
        b2.x += (cos(angle) * overlap) / 2;
        b2.y += (sin(angle) * overlap) / 2;

        // 🔊 play each ball’s assigned sound on collision
        b1.mySound.play();
        b2.mySound.play();
      }
    }
  }
}

class Ball {
  constructor(x, y, r) {
    this.x = 100;
    this.y = 100;
    this.xSpeed = random(1, 5);
    this.ySpeed = random(1, 4);
    this.r = r;
    this.rr = random(0, 250);
    this.gg = random(0, 250);
    this.bb = random(0, 250);

    // 🔊 assign each ball a random sound
    this.mySound = random(wavs);

    // prevent repeated triggers
    this.hitX = false;
    this.hitY = false;
  }

  move() {
    if (this.y > windowHeight - this.r / 2 || this.y < this.r / 2) {
      if (!this.hitY) {
        this.mySound.play();
        this.hitY = true;
      }
      this.ySpeed = this.ySpeed * -1;
    } else {
      this.hitY = false;
    }

    this.y = this.y + this.ySpeed;

    if (this.x > windowWidth - this.r / 2 || this.x < this.r / 2) {
      if (!this.hitX) {
        this.mySound.play();
        this.hitX = true;
      }
      this.xSpeed = this.xSpeed * -1;
    } else {
      this.hitX = false;
    }

    this.x = this.x + this.xSpeed;
  }

  show() {
    noStroke();
    fill(this.rr, this.gg, this.bb);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
