let score = 0;
let balls = [];

function setup() {
  createCanvas(390, 600);
  new_ball()
}

function new_ball() {
  let b = new Ball();
  balls.push(b);
}

function draw() {
  //console.log(rotationY);

  background(220);

  // Start Paddle
  let paddleX = mouseX;
  //let paddleX = map(rotationY,-90,90,0,width);
  let paddleY = height - 50;
  let paddleW = 100;
  let paddleH = 20;

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();

    if (
      balls[i].x >= paddleX &&
      balls[i].x <= paddleX + paddleW &&
      balls[i].y >= paddleY &&
      balls[i].y <= paddleY + paddleH
    ) {
      score++;
      balls[i].ydir *= -1;
      new_ball()
    }

    // End Paddle
  }

  fill(0)
  rect(paddleX, paddleY, paddleW, paddleH);

  // Score
  fill("blue");
  textSize(24);
  text("Score:" + score, 10, 25);
}

class Ball {
  constructor() {
    this.s = random(10, 50);
    this.color = random(['red','green', 'yellow']);
    this.x = random(0, 100);
    this.y = 0;
    this.xdir = random([-2,2]);
    this.ydir = random([-2,2]);
  }

  move() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.s);
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
    if (this.y + this.ydir >= height || this.y + this.ydir <= 0) {
      this.ydir = this.ydir * -1;
    }
    if (this.x + this.xdir >= width || this.x + this.xdir<= 0) {
      this.xdir = this.xdir * -1;
      // let b = new Ball();
      // bs.push(b);
    }
  }
}
