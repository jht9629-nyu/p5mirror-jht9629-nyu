// https://editor.p5js.org/jht9629-nyu/sketches/pUygFBDh8
// chat-G pong

// create p5js pong game
// https://chat.openai.com/

// !!@ Bug: no right paddle visible

let ball;
let leftPaddle;
let rightPaddle;
let leftScore = 0;
let rightScore = 0;

function setup() {
  createCanvas(600, 400);
  
  ball = new Ball();
  leftPaddle = new Paddle(true);
  rightPaddle = new Paddle(false);
}

function draw() {
  background(0);
  
  ball.update();
  ball.display();
  
  leftPaddle.update();
  leftPaddle.display();
  
  rightPaddle.update();
  rightPaddle.display();
  
  checkCollision(leftPaddle);
  checkCollision(rightPaddle);
  
  displayScores();
}

function checkCollision(paddle) {
  if (ball.x - ball.radius < paddle.x + paddle.width / 2 &&
      ball.x + ball.radius > paddle.x - paddle.width / 2 &&
      ball.y > paddle.y - paddle.height / 2 &&
      ball.y < paddle.y + paddle.height / 2) {
    ball.xSpeed *= -1;
  }
}

function displayScores() {
  textSize(32);
  fill(255);
  text(leftScore, width / 4, 40);
  text(rightScore, 3 * width / 4, 40);
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 20;
    this.xSpeed = 5;
    this.ySpeed = 3;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.ySpeed *= -1;
    }
    
    if (this.x - this.radius < 0) {
      rightScore++;
      this.reset();
    } else if (this.x + this.radius > width) {
      leftScore++;
      this.reset();
    }
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed *= random([-1, 1]);
    this.ySpeed *= random([-1, 1]);
  }
}

class Paddle {
  constructor(isLeft) {
    this.width = 10;
    this.height = 80;
    this.y = height / 2;
    this.isLeft = isLeft;
    
    if (this.isLeft) {
      this.x = this.width;
    } else {
      this.x = width - this.width;
    }
  }

  update() {
    if (this.isLeft) {
      this.y = constrain(mouseY, this.height / 2, height - this.height / 2);
    } else {
      this.y = constrain(mouseY, this.height / 2, height - this.height / 2);
    }
  }

  display() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}
