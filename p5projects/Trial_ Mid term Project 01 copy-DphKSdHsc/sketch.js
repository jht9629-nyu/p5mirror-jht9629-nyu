let balls = [];
//let cubes = [];
//let tri = [];
//let qudri =[];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  console.log("in mousePressed");
  let r = random(10, 50);
  let b = new Balls(mouseX, mouseY, r);
  balls.push(b);
}

function draw() {
  background(0);

  for (let ball of balls) {
    ball.move();
    ball.show();
  }

  for (let i = 0; i < balls.length; i++) {
    ball[i].move();
    ball[i].show();
  }
}

class Balls {
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
    stroke(255);
    strokeWeight(4);
    fill(random(10), random(200), 20);
    ellipse(this.x, this.y, this.r * 2);
  }
}

//class cubes {
// constructor(x, y,) {

//this.x = x;
//this.y = y;
// this.w = w;
// this.h = h;
//}

//move1(){

//}

// }
