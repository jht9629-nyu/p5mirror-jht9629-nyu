// https://editor.p5js.org/jht9629-nyu/sketches/32_bqUtVh
// real pong copy (day 3) copy -- Boston
// check_collisions

let img;
let imgball;
let mysound;
let speed;
let movement;
let score = 0;
let wins = 0;
let loses = 0;
let mysound2;
let balls = [];
let maxballs = 20;

function preload() {
  soundFormats("mp3", "ogg");
  mysound = loadSound("OTc0MjE5NTUxOTc0MzIw__2fi9t0mf_2fpPE.mp3");
  mysound2 = loadSound("MjEyNTE5NTUxMjEyNTYw_H_2bwPlngYGWc.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imgball = loadImage(
    "https://static.vecteezy.com/system/resources/previews/009/380/161/original/delicious-doughnut-set-clipart-design-illustration-free-png.png"
  );
  img = loadImage(
    "https://yorkdojo.github.io/worksheets/scratch/pong/background.png"
  );
  let b = new Ball();
  balls.push(b);
}

let paddleX;
let paddleY;
let paddleW;
let paddleH;

function draw() {
  background(220);
  image(img, 0, 0, windowWidth, windowHeight);
  // image(imgball, cx, cy, 50, 50);

  paddleX = mouseX;
  paddleY = height - 80;
  paddleW = 100;
  paddleH = 20;

  rect(paddleX, paddleY, paddleW, paddleH);

  check_paddle();

  check_collisions();
}

function check_collisions() {
  //
  for (let i = 0; i < balls.length; i++) {
    let ib = balls[i];
    for (let j = i+1; j < balls.length; j++) {
      // console.log("i", i, "j", j);
      let jb = balls[j];
      // let d = dist()
      if (
        ib.x >= jb.x &&
        ib.x <= jb.x + jb.s &&
        ib.y >= jb.y &&
        ib.y <= jb.y + jb.s
      ) {
        console.log("hit i", i, "j", j )
        // console.log("hit i", i, ib)
        // console.log("j", j, jb);
        ib.xdir = ib.xdir * -1;
        ib.ydir = ib.ydir * -1;
        jb.xdir = jb.xdir * -1;
        jb.ydir = jb.ydir * -1;
      }
    }
  }
}

function check_paddle() {
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
      if (balls.length < maxballs) {
        let b = new Ball();
        balls.push(b);
      }
    }
    //score
    fill("yellow");
    textSize(24);
    text("score:" + score, 0, 20);
    if (balls[i].y >= height) {
      score--;
    }
  }
}

class Ball {
  constructor(
    _s = random(10, 50),
    _c = random(0, 255),
    _x = random(0, 100),
    _y = 100,
    _xdir = random(-3, 3),
    _ydir = 3 // random(-3, 3)
  ) {
    this.s = _s;
    // this.s = 30;
    this.color = _c;
    this.x = _x;
    this.y = _y;
    this.xdir = _xdir;
    this.ydir = _ydir;
  }

  move() {
    noStroke();
    fill(this.color);
    image(imgball, this.x, this.y, this.s, this.s);
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
    if (this.y >= height || this.y <= 0) {
      this.ydir = this.ydir * -1;
    }
    if (this.x >= width || this.x <= 0) {
      this.xdir = this.xdir * -1;
    }
  }
}

// https://editor.p5js.org/blub/sketches
// https://editor.p5js.org/blub/sketches/kmjqIty5l
