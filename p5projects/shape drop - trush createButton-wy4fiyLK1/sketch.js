// https://editor.p5js.org/jht9629-nyu/sketches/wy4fiyLK1
// shape drop - trush createButton

let items = [];

let shapes = [0, 1, 2];
// let shapes = [0];
// let shapes = [1];
// let shapes = [2];

let my = {
  demo: 1, // run() enables demo mode
  maxCount: 50,
};

function setup() {
  my.canvas = createCanvas(windowWidth, windowHeight - 24);
  my.canvas.mousePressed(my_mousePressed);

  createButton("run").mousePressed(function () {
    my.demo = !my.demo;
  });
  
  createButton("clear").mousePressed(function () {
    items = [];
  });
}

function draw() {
  background(0);

  for (let item of items) {
    item.render();
  }

  check_intersects();
  
  if (my.demo && frameCount % 60 == 0) {
    let x = random(0, width);
    // let y = 0;
    let y = random(0, height / 2);
    addShape(random(shapes), x, y);
  }

  if (items.length > my.maxCount) {
    items.splice(0, 1);
  }
}

function check_intersects() {
  for (let i = 0; i < items.length; i++) {
    let b1 = items[i];
    for (let j = i + 1; j < items.length; j++) {
      let b2 = items[j];
      if (b1.intersects(b2)) {
        // console.log('interects i', i, 'j', j)
        // stop this ball from moving since it touches another
        b2.speedY = 0;
        b1.speedY = 0;
      }
    }
  }
}

function run() {
  my.demo = 1;
}

function my_mousePressed() {
  console.log("in mousePressed");
  // to create random shapes
  addShape(random(shapes), mouseX, mouseY);
}

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = random(10, 250);
    this.blue = random(10, 160);
    this.green = random(80, 250);
    this.speedY = 1.5;
  }

  render() {
    this.move();
    this.show();
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
    // return distance < this.r + other.r - 10;
    return distance < min(this.r, other.r) - 10;
  }
}

class Rect extends Ball {
  constructor(x, y, w, h) {
    super(x, y, min(w, h));
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.red = random(120, 250);
    this.blue = random(30, 200);
    this.green = random(80, 250);
    this.speedY = 1.5;
  }

  move() {
    if (this.y < height - this.h) {
      this.y = this.y + this.speedY;
    }
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, 200);
    let x = this.x - this.w / 2;
    let y = this.y - this.h / 2;
    rect(x, y, this.w, this.h);
  }
}

class Tri extends Ball {
  constructor(x1, y1, x2, y2, x3, y3) {
    super(x1, y1, abs(x2 - x1));

    this.x2 = x2;
    this.y2 = y2;

    this.x3 = x3;
    this.y3 = y3;

    this.speedY = 1.5;

    this.red = random(30, 200);
    this.blue = random(80, 160);
    this.green = random(10, 240);
  }

  move() {
    if (this.y < height && this.y2 < height && this.y3 < height) {
      this.y = this.y + this.speedY;
      this.y2 = this.y2 + this.speedY;
      this.y3 = this.y3 + this.speedY;
    }
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, 160);
    triangle(this.x, this.y, this.x2, this.y2, this.x3, this.y3);
  }
}

function addShape(shape, mx, my) {
  // creating random circle sizes
  if (shape == 0) {
    let r = random(10, 60);
    let b = new Ball(mx, my, r);
    items.push(b);
  }

  if (shape == 1) {
    // creating random rectangle sizes
    let w = random(15, 140);
    let h = random(10, 100);
    let c = new Rect(mx, my, w, h);
    items.push(c);
  }

  if (shape == 2) {
    // creating random equilateral triangles normal and flipped
    if (random() < 0.5) {
      let x1 = mx - 30;
      let y1 = my + 30;
      let x2 = mx + 30;
      let y2 = my + 30;
      let x3 = mx;
      let y3 = my - 30;
      let t = new Tri(x1, y1, x2, y2, x3, y3);
      items.push(t);
    } else {
      let x1 = mx - 30;
      let y1 = my - 30;
      let x2 = mx + 30;
      let y2 = my - 30;
      let x3 = mx;
      let y3 = my + 30;
      let t = new Tri(x1, y1, x2, y2, x3, y3);
      items.push(t);
    }
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes

// https://editor.p5js.org/trush_24/sketches/VK_djxFVy
// Final_Mid Term ( ICM Teach help W8)

// https://editor.p5js.org/jht9629-nyu/sketches/Dj-gZ4WBi
// shape drop - trush remix
