/*  
Outline to build our object class 

x
y
size
xspeed
yspeed
fill 
stroke
strokeWeight

display
move
bounce
*/

// let ball0;
// let ball1;

let balls = [];

function setup() {
  createCanvas(400, 400);
  // ball0 = new Ball();
  // ball1 = new Ball();
  // console.log(ball0)
  
  for (let i = 0; i < 10; i++) {
    let ball = new Ball(random(width), random(height));
    balls.push(ball)
  }
  console.log(balls)
}

function draw() {
  background(220);
//   ball0.displayBall();
//   ball0.moveBall();
//   ball0.bounceBall();
  
//   ball1.displayBall();
//   ball1.moveBall();
//   ball1.bounceBall();
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].displayBall()
    balls[i].moveBall()
    balls[i].bounceBall()
  }
}

class Ball {
  // properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.xspeed = random(1, 4);
    this.yspeed = random(1, 4);
  }

  displayBall() {
    circle(this.x, this.y, this.size);
  }

  moveBall() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounceBall() {
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }

    if (this.y> height || this.y < 0) {
      this.yspeed *= -1;
    }
  }
}
