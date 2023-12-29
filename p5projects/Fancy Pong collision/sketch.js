// https://editor.p5js.org/jht9629-nyu/sketches/difxyfpEa
// Fancy Pong collision

let score = 0;
let balls = [];
let maxBalls = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let b = new Ball();
  balls.push(b);
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
    balls[i].move();
    if (
      balls[i].x >= paddleX &&
      balls[i].x <= paddleX + paddleW &&
      balls[i].y >= paddleY &&
      balls[i].y <= paddleY + paddleH
    ) {
      score++;
      balls[i].bounceY();
      if (balls.length < maxBalls) {
        let b = new Ball();
        balls.push(b);
      }
    }
  }
}

function check_collisions() {
  //
  for (let i = 0; i < balls.length; i++) {
    let ib = balls[i];
    for (let j = i + 1; j < balls.length; j++) {
      // console.log("i", i, "j", j);
      let jb = balls[j];
      // let d = dist()
      if (ib.intersects(jb)) {
        console.log("hit i", i, "j", j);
        // console.log("hit i", i, ib)
        // console.log("j", j, jb);
        ib.bounceX();
        ib.bounceY();
        jb.bounceX();
        jb.bounceY();
      }
    }
  }
}

class Ball {
  //
  constructor() {
    this.s = random(10, 50);
    this.color = random(0, 255);
    this.x = random(0, 100);
    this.y = 100;
    this.xdir = random(-3, 3);
    this.ydir = 3;
    this.note = random([110, 220, 300, 400]);
  }
  //
  move() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.s);
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
    if (this.y >= height || this.y <= 0) {
      this.bounceY();
    }
    if (this.x >= width || this.x <= 0) {
      this.bounceX();
    }
  }
  intersects(jb) {
    return (
      this.x >= jb.x && //
      this.x <= jb.x + jb.s &&
      this.y >= jb.y &&
      this.y <= jb.y + jb.s
    );
  }
  bounceX() {
    this.xdir = this.xdir * -1;
    playNote(this.note, 1000);
  }
  bounceY() {
    playNote(this.note, 1000);
    this.ydir = this.ydir * -1;
  }
}

let osc;

function setup_note() {
  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  // Make phone vibrate
  navigator.vibrate(note);
  // console.log("playNote", note, "duration", duration);
  // osc.freq(midiToFreq(note));
  // osc.freq(220);
  osc.freq(note);
  // Fade it in
  osc.fade(0.5, 0.2);

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function () {
      osc.fade(0, 0.2);
    }, duration - 50);
  }
}

// https://p5js.org/examples/hello-p5-song.html

// https://editor.p5js.org/shawn/sketches/eEjPTfJ4N
// Fancy Pong
