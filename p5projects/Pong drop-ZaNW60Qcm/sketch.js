// https://editor.p5js.org/jht9629-nyu/sketches/ZaNW60Qcm
// Pong drop

let my = {
  version: 7, // update to verify change on mobile
  width: 393, // canvas width
  height: 600, // canvas height
  score: 0,
};

function setup() {
  createCanvas(my.width, my.height);
  my.ding = loadSound("ding.mp3");
  my.puck = new Puck();
  my.paddle = new Paddle();

  createSpan(my.version);
  
  let resetBtn = createButton("Reset");
  resetBtn.mousePressed(resetAction);

  let leftBtn = createButton("Left");
  leftBtn.mousePressed(leftAction);

  let stopBtn = createButton("Stop");
  stopBtn.mousePressed(paddleStopAction);

  let rightBtn = createButton("Right");
  rightBtn.mousePressed(rightAction);
}

function draw() {
  background(0);
  window.scrollBy(0, 1);

  my.puck.checkPaddle(my.paddle);

  my.paddle.show();
  my.paddle.update();

  my.puck.update();
  my.puck.edges();
  my.puck.show();

  fill(255);
  textSize(32);
  text(my.score, width / 2, 40);
}

function leftAction() {
  // console.log('leftAction', millis())
  my.paddle.move(-5);
}

function rightAction() {
  // console.log('rightAction', millis())
  my.paddle.move(5);
}

// mouseReleased appear to be trigger immediately on mobile
function paddleStopAction() {
  // console.log('paddleStopAction', millis())
  my.paddle.move(0);
}

function resetAction() {
  // console.log('resetAction')
  my.score = 0;
  my.puck.reset();
}

class Paddle {
  constructor() {
    this.y = height - 20;
    this.w = 100;
    this.h = 20;
    this.xchange = 0;
    this.x = (width - this.w) / 2;
  }
  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.x += this.xchange;
    // this.x = constrain(this.x, this.w, width - this.w);
    this.x = constrain(this.x, 0, width);
  }
  move(steps) {
    this.xchange = steps;
  }
}

class Puck {
  constructor() {
    this.x = width / 2;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 12;
    this.reset();
  }
  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
  checkPaddle(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      // let diff = this.y - (p.y - p.h / 2);
      // let rad = radians(45);
      // let angle = map(diff, 0, p.h, -rad, rad);
      // this.xspeed = 5 * cos(angle);
      // this.yspeed = 5 * sin(angle);
      this.yspeed *= -1;
      this.xspeed *= -1;
      my.score++;
      my.ding.play();
    }
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  reset() {
    this.x = width / 2;
    this.y = 0;
    // let angle = random(radians(45), radians(90+45));
    let angle = random([radians(45), radians(65), radians(110), radians(135)])
    this.xspeed = 5 * Math.cos(angle);
    // this.xspeed = 0;
    this.yspeed = 5 * Math.sin(angle);
    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }
  edges() {
    if (this.x < 0 || this.x > width) {
      this.xspeed *= -1;
    }
    if (this.y < 0) {
      this.yspeed *= -1;
    }
    if (this.y - this.r > height) {
      my.score--;
      this.reset();
    }
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/sS-J8BKLT
// Pong codingtrain
// https://thecodingtrain.com/challenges/67-pong

// https://editor.p5js.org/codingtrain/sketches/CKCwTIm3S
// port of Daniel Shiffman's Pong coding challenge
// by madacoo
