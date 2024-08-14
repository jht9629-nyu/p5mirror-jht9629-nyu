let snake;
let w;
let h;
let r = 20;
let dot;

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  endGame() {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }

  eat(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  w = floor(width / r);
  h = floor(height / r);
  frameRate(5);
  dotLocation();
}

function dotLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  dot = createVector(x, y);
}

function keyPressed() {
  if (keyPressed === LEFT_ARROW) {
    Snake.setDir(-1, 0);
  } else if (keyPressed === RIGHT_ARROW) {
    Snake.setDir(1, 0);
  } else if (keyPressed === UP_ARROW) {
    Snake.setDir(0, 1);
  } else if (KeyPressed === DOWN_ARROW) {
    Snake.setDir(0, -1);
  } else if (key == " ") {
    snake.grow();
  }
}

function draw() {
  scale(r);
  background(220);
  if (snake.eat(dot)) {
    dotLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(dot.x, dot.y, 1, 1);
}
