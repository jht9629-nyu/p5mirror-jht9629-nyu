// https://editor.p5js.org/jht9629-nyu/sketches/QB13gST05
// Fancy Pong Things

let score = 0;
let balls = [];
let maxBalls = 10;
let myColors = ['red', 'green', 'yellow', 0];

// The midi notes of a scale
let notes = [ 60, 62, 64, 65, 67, 69, 71];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let b = new Ball();
  balls.push(b);
  // b.block = true;
  // b.x = width/2
  // b.y = height/10;
  // b.xdir = 0;
  // b.ydir = 0;
  // b.sx = 200;
  setup_note();
}

// Start Paddle
let paddleX;
let paddleY;
let paddleW;
let paddleH;

function draw() {
  //console.log(rotationY);
  background(220);

  // Start Paddle
  paddleX = mouseX;
  //let paddleX = map(rotationY,-90,90,0,width);
  paddleY = height - 50;
  paddleW = 100;
  paddleH = 20;

  draw_balls();

  fill(0);
  rect(paddleX, paddleY, paddleW, paddleH);
  // End Paddle

  check_collisions();

  // Score
  fill("blue");
  textSize(24);
  text("Score:" + score, 10, 25);
}

function draw_balls() {
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    if (
      b.x >= paddleX &&
      b.x <= paddleX + paddleW &&
      b.y >= paddleY &&
      b.y <= paddleY + paddleH
    ) {
      score++;
      b.bounceY();
      b.playNote();
      if (balls.length < maxBalls) {
        balls.push(new Ball());
      }
    }
  }
}

function mousePressed() {
  let b = new Ball();
  balls.push(b);
  b.x = mouseX;
  b.y = mouseY;
}

function check_collisions() {
  //
  for (let i = 0; i < balls.length; i++) {
    let ib = balls[i];
    for (let j = i + 1; j < balls.length; j++) {
      // console.log("i", i, "j", j);
      let jb = balls[j];
      // let d = dist()
      if (ib.intersects(jb) || jb.intersects(ib)) {
        // console.log("hit i", i, "j", j, frameCount);
        // console.log("hit i", i, ib)
        // console.log("j", j, jb);
        ib.bounce();
        jb.bounce();
      }
    }
  }
}

class Ball {
  //
  constructor() {
    this.sx = random(10, 50);
    this.sy = random(10, 50);
    this.color = random(myColors);
    this.x = random(0, 100);
    this.y = 100;
    this.xdir = random(-3, 3);
    this.ydir = 3;
    this.note = random(notes);
    // this.block = random([0, 1]);
  }
  //
  move() {
    this.render();
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
    if (this.y >= height || this.y <= 0) {
      this.bounceY();
    }
    if (this.x >= width || this.x <= 0) {
      this.bounceX();
    }
  }
  render() {
    noStroke();
    fill(this.color);
    if (this.block) {
      rect(this.x, this.y, this.sx, this.sy);
    } else {
      circle(this.x, this.y, this.sx);
    }
  }
  intersects(jb) {
    return (
      this.x >= jb.x && //
      this.x <= jb.x + jb.sx &&
      this.y >= jb.y &&
      this.y <= jb.y + jb.sy
    );
  }
  bounceX() {
    this.xdir = this.xdir * -1;
    // playNote(this.note, 500);
  }
  bounceY() {
    this.ydir = this.ydir * -1;
    // playNote(this.note, 500);
  }
  bounce() {
    this.playNote();
    this.bounceX();
    this.bounceY();
  }
  playNote() {
    playNote(this.note, 500);
  }
}

let osc;

function setup_note() {
  // A triangle oscillator
  osc = new p5.SinOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  // console.log("playNote", note, "duration", duration);
  let f = midiToFreq(note)
  // console.log('f', f);
  osc.freq(f)
  // Fade it in
  osc.fade(0.5, 0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function () {
      osc.fade(0, 0.2);
    }, duration - 50);
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/difxyfpEa
// Fancy Pong collision

// https://p5js.org/examples/hello-p5-song.html

// https://editor.p5js.org/shawn/sketches/eEjPTfJ4N
// Fancy Pong
