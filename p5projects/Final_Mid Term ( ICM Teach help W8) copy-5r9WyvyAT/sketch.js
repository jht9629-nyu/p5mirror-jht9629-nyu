let balls = [];
let cubes = [];
let tri = [];

let shapes = [0, 1, 2];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawshape(shape) {
  // creating random circle sizes
  if (shape == 0) {
    let r = random(10, 60);
    let b = new Balls(mouseX, mouseY, r);
    balls.push(b);
  }

  if (shape == 1) {
    // creating random rectangle sizes
    let w = random(15, 140);
    let h = random(10, 100);
    let c = new Cubes(mouseX, mouseY, w, h);
    cubes.push(c);
  }

  if (shape == 2) {
    // creating random equilateral triangles normal and flipped
    if (random() < 0.5) {
      let x1 = mouseX - 30;
      let y1 = mouseY + 30;
      let x2 = mouseX + 30;
      let y2 = mouseY + 30;
      let x3 = mouseX;
      let y3 = mouseY - 30;
      let t = new Tri(x1, y1, x2, y2, x3, y3);
      tri.push(t);
    } else {
      let x1 = mouseX - 30;
      let y1 = mouseY - 30;
      let x2 = mouseX + 30;
      let y2 = mouseY - 30;
      let x3 = mouseX;
      let y3 = mouseY + 30;
      let t = new Tri(x1, y1, x2, y2, x3, y3);
      tri.push(t);
    }
  }
}

function mousePressed() {
  console.log("in mousePressed");
  // drawshape(random(shapes)); // to create random shapes
  drawshape(0)
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
  }

  for (let i = 0; i < balls.length; i++) {
    let b1 = balls[i];
    for (let j = i+1; j < balls.length; j++) {
      let b2 = balls[j]
      if (b1.intersects(b2)) {
        console.log('interects i', i, 'j', j)
        b2.speedY = 0;
        b1.speedY = 0;
        // noLoop()
        // how to stop this ball from moving since it touches another
      }
    }
  }

//   for (let cube of cubes) {
//     cube.move();
//     cube.show();
//   }

//   for (let k = 0; k < tri.length; k++) {
//     tri[k].move();
//     tri[k].show();
//   }
}

class Balls {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = random(10, 250);
    this.blue = random(10, 160);
    this.green = random(80, 250);
    this.speedY = 1.5;
  }

  move() {
    if (this.y < height) {
      this.y = this.y + this.speedY;
    }
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, 160);
    ellipse(this.x, this.y, this.r * 2);
  }
  
  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    return distance < this.r + other.r - 2;
  }

}

class Cubes {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.red = random(120, 250);
    this.blue = random(30, 200);
    this.green = random(80, 250);
    this.speedY3 = 1.5;
  }

  move() {
    //this.x = this.x + random(-1, 2);
    //this.y = this.y + this.speedX
    if (this.y < height - this.h) {
      this.y = this.y + this.speedY3;
      //this.h = this.h + this.speedY3;
      //this.w = this.w + this.speedY3;
    }
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, 200);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Tri {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.x1 = x1;
    this.y1 = y1;

    this.x2 = x2;
    this.y2 = y2;

    this.x3 = x3;
    this.y3 = y3;

    this.speedY2 = 1.5;

    this.red = random(30, 200);
    this.blue = random(80, 160);
    this.green = random(10, 240);
  }

  move() {
    if (this.y1 < height && this.y2 < height && this.y3 < height) {
      this.y1 = this.y1 + this.speedY2;
      this.y2 = this.y2 + this.speedY2;
      this.y3 = this.y3 + this.speedY2;
    }
  }

  show() {
    noStroke();
    //fill(random(100), 200, 160, 200);
    fill(this.red, this.green, this.blue, 160);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}
