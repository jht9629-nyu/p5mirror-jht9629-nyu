// https://editor.p5js.org/jht9629-nyu/sketches/8QbXlVlww
// Pong earth-xyz v2
// Pong game using device tilt detection - accelerometer / gyroscope.

let my = {};

function setup() {
  my.version = "?v=2"; // update to verify change on mobile
  my.score = 0;
  my.motionEnabled = false;
  createCanvas(windowWidth, windowHeight - 100);
  // createCanvas(my.width, my.height);

  my.angles = [radians(45), radians(65), radians(110), radians(135)];
  my.ding = loadSound("ding.mp3");
  my.puck = new Puck();
  my.paddle = new Paddle();

  let leftBtn = createButton("Left");
  leftBtn.mousePressed(leftAction);

  let stopBtn = createButton("Stop");
  stopBtn.mousePressed(paddleStopAction);

  let rightBtn = createButton("Right");
  rightBtn.mousePressed(rightAction);

  createElement("br");

  my.motionBtn = createCheckbox(my.version + " Motion", my.motionEnabled);
  my.motionBtn.changed(function () {
    my.motionEnabled = this.checked();
    if (my.motionEnabled) {
      permissionAction();
    }
  });
  my.motionBtn.style("display:inline");

  let resetBtn = createButton("Zero");
  resetBtn.mousePressed(resetAction);
}

function draw() {
  background(0);
  window.scrollBy(0, 1);

  if (my.motionEnabled && rotationY !== null) {
    if (rotationY < -10) {
      leftAction();
      // my.paddle.move(-5);
    } else if (rotationY > 10) {
      rightAction();
      // my.paddle.move(5);
    } else if (rotationY != 0) {
      paddleStopAction();
    }
  }

  my.puck.checkPaddle(my.paddle);

  my.paddle.show();
  my.paddle.update();

  my.puck.update();
  my.puck.edges();
  my.puck.show();

  fill(255);
  textSize(32);
  text(my.score, width / 2, 40);
}

function leftAction() {
  // console.log('leftAction', millis())
  my.paddle.move(-5);
}

function rightAction() {
  // console.log('rightAction', millis())
  my.paddle.move(5);
}

// mouseReleased appear to be trigger immediately on mobile
function paddleStopAction() {
  console.log("paddleStopAction", millis());
  my.paddle.move(0);
}

function resetAction() {
  // console.log('resetAction')
  my.score = 0;
  my.puck.reset();
}

class Paddle {
  constructor() {
    this.y = height - 20;
    this.w = 100;
    this.h = 20;
    this.xchange = 0;
    this.x = (width - this.w) / 2;
  }
  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.x += this.xchange;
    // this.x = constrain(this.x, this.w, width - this.w);
    this.x = constrain(this.x, 0, width);
  }
  move(steps) {
    this.xchange = steps;
  }
}

class Puck {
  constructor() {
    this.x = width / 2;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.r = 12;
    this.reset();
  }
  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
  checkPaddle(p) {
    if (
      this.y - this.r < p.y + p.h / 2 &&
      this.y + this.r > p.y - p.h / 2 &&
      this.x - this.r < p.x + p.w / 2 &&
      this.x + this.r > p.x - p.w / 2
    ) {
      // let diff = this.y - (p.y - p.h / 2);
      // let rad = radians(45);
      // let angle = map(diff, 0, p.h, -rad, rad);
      // this.xspeed = 5 * cos(angle);
      // this.yspeed = 5 * sin(angle);
      this.yspeed *= -1;
      this.xspeed *= -1;
      my.score++;
      my.ding.play();
    }
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  reset() {
    this.x = width / 2;
    this.y = 0;
    // let angle = random(radians(45), radians(90+45));
    let angle = random(my.angles);
    this.xspeed = 5 * Math.cos(angle);
    // this.xspeed = 0;
    this.yspeed = 5 * Math.sin(angle);
    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }
  edges() {
    if (this.x < 0 || this.x > width) {
      this.xspeed *= -1;
    }
    if (this.y < 0) {
      this.yspeed *= -1;
    }
    if (this.y - this.r > height) {
      my.score--;
      this.reset();
    }
  }
}

// Need for iOS mobile device to get motion events
function permissionAction() {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    // (optional) Do something before API request prompt.
    DeviceMotionEvent.requestPermission()
      .then((response) => {
        console.log("requestPermission response", response);
        // (optional) Do something after API prompt dismissed.
        if (response == "granted") {
          window.addEventListener("devicemotion", (e) => {
            // console.log('devicemotion e', e)
            // console.log('devicemotion e.beta', e.beta)
          });
        }
      })
      .catch(console.error);
  } else {
    alert("DeviceMotionEvent is not defined");
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/ZaNW60Qcm
// Pong drop

// https://editor.p5js.org/jht9629-nyu/sketches/sS-J8BKLT
// Pong codingtrain
// https://thecodingtrain.com/challenges/67-pong

// https://editor.p5js.org/codingtrain/sketches/CKCwTIm3S
// port of Daniel Shiffman's Pong coding challenge
// by madacoo

// https://editor.p5js.org/jht9629-nyu/sketches/Oin13AMrB
// Pong drop earth-xyz
