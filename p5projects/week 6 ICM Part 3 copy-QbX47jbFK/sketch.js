//Week 6 ICM Q2 part 3

let square_group = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let s_size = 40;
    let xspeed = random(-2, 1);
    let yspeed = random(-2, 2);
    square_group.push(new Square(x, y, s_size, xspeed, yspeed));
  }
}

function mousePressed() {
  for (let i = 0; i < square_group.length; i++) {
    square_group[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(220);
  for (let s of square_group) {
    s.display();
    s.move();
    s.bounce();
  }
}

class Square {
  constructor(x, y, s_size, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.s_size = s_size;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.isClicked = false;
    this.redColor = color(255, 0, 0);
  }

  clicked(x, y) {
    let x_hit = x > this.x && x < this.x + this.s_size;
    let y_hit = y > this.y && y < this.y + this.s_size;

    if (x_hit && y_hit) {
      this.isClicked = true;
    }
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }
  
  display() {
    stroke(255);
    strokeWeight(4);
    
    if (this.isClicked) {
      fill(this.redColor); 
      console.log('isClicked redColor');
    } else {
      fill(200);
    }
    square(this.x, this.y, this.s_size);
  }
}
