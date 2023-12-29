let balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    balls.push(createBall());
  }
}

function draw() {
  background(220);
  
  for (let ball of balls) {
    ball.move();
    ball.checkEdges();
    ball.display();
  }
}

function createBall() {
  return {
    x: random(width),
    y: random(height),
    radius: random(10, 30),
    xSpeed: random(-2, 2),
    ySpeed: random(-2, 2),
    color: color(random(255), random(255), random(255)),
    
    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    },
    
    checkEdges() {
      if (this.x < 0 || this.x > width) {
        this.xSpeed *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.ySpeed *= -1;
      }
    },
    
    display() {
      fill(this.color);
      ellipse(this.x, this.y, this.radius * 2);
    }
  };
}

// https://chat.openai.com/
// create a p5js animation using object literals
