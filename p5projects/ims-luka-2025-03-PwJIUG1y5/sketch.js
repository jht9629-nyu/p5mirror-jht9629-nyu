// https://editor.p5js.org/Lukaluo/sketches/CHmjZmOmM
// ims-luka-2025-03
// https://editor.p5js.org/jht9629-nyu/sketches/PwJIUG1y5

let handPose;
let video;
let hands = [];
let ripples = [];
let particles = [];
let floatingParticles = [];
let bgColor;
let rippleColors;
let handControllers = [];
let fullscreenButton;
let planet;

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();

  handPose.detectStart(video, gotHands);

  bgColor = color(23, 26, 48);
  rippleColors = [
    color(120, 180, 255, 120),
    color(80, 220, 255, 110),
    color(220, 160, 255, 90),
    color(100, 255, 230, 80),
  ];
  background(bgColor);

  // 初始化飘动粒子
  for (let i = 0; i < 100; i++) {
    floatingParticles.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      alpha: random(50, 150),
      speed: random(0.2, 1.2)
    });
  }

  // 初始化中心星球
  planet = new Planet(width / 2, height / 2, 140);

  // 全屏按钮
  fullscreenButton = createButton("🔲 Fullscreen");
  fullscreenButton.position(20, 20);
  fullscreenButton.style('font-size', '16px');
  fullscreenButton.style('padding', '6px 12px');
  fullscreenButton.style('background', '#ffffff20');
  fullscreenButton.style('color', '#ffffff');
  fullscreenButton.style('border', 'none');
  fullscreenButton.style('border-radius', '8px');
  fullscreenButton.mousePressed(() => {
    let fs = fullscreen();
    fullscreen(!fs);
  });
}

function draw() {
  tint(255, 100);
  image(video, 0, 0, width, height);
  noStroke();
  fill(10, 15, 40, 80);
  rect(0, 0, width, height);

  // 飘动粒子背景层
  for (let p of floatingParticles) {
    fill(255, p.alpha);
    noStroke();
    ellipse(p.x, p.y, p.size);
    p.y += p.speed;
    if (p.y > height) p.y = 0;
  }

  handControllers = [];

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let controller = hand._controller || {
      draggingRipple: null,
      dragOffset: { x: 0, y: 0 },
      wasPinching: false
    };

    let indexTip = hand.keypoints.find(p => p.name === 'index_finger_tip');
    let thumbTip = hand.keypoints.find(p => p.name === 'thumb_tip');

    if (indexTip && thumbTip) {
      let x = indexTip.x;
      let y = indexTip.y;

      fill(0, 255, 0);
      circle(x, y, 14);
      fill(255, 255, 0);
      circle(thumbTip.x, thumbTip.y, 14);

      let pinchDist = dist(indexTip.x, indexTip.y, thumbTip.x, thumbTip.y);
      let isPinching = pinchDist < 40;

      if (isPinching && !controller.wasPinching) {
        createRipple(x, y);
        createParticles(x, y);
      }

      if (isPinching) {
        if (!controller.draggingRipple) {
          for (let ripple of ripples) {
            let d = dist(x, y, ripple.x, ripple.y);
            if (d < 30 && !ripple._dragged) {
              controller.draggingRipple = ripple;
              ripple._dragged = true;
              ripple._highlight = true;
              controller.dragOffset.x = x - ripple.x;
              controller.dragOffset.y = y - ripple.y;
              break;
            }
          }
        } else {
          controller.draggingRipple.x = x - controller.dragOffset.x;
          controller.draggingRipple.y = y - controller.dragOffset.y;
        }
      } else {
        if (controller.draggingRipple) {
          controller.draggingRipple._dragged = false;
          controller.draggingRipple._highlight = false;
          controller.draggingRipple = null;
        }
      }

      controller.wasPinching = isPinching;
    }

    hand._controller = controller;
    handControllers.push(controller);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].life <= 0) {
      particles.splice(i, 1);
    }
  }

  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].display();
    if (ripples[i].alpha <= 0) {
      ripples.splice(i, 1);
    }
  }

  for (let ripple of ripples) {
    planet.interact(ripple);
  }
  planet.display();
}

function createRipple(x, y) {
  let numWaves = int(random(2, 5));
  for (let j = 0; j < numWaves; j++) {
    let colorIndex = int(random(rippleColors.length));
    ripples.push(new Ripple(x, y, j * 10, rippleColors[colorIndex]));
  }
}

function createParticles(x, y) {
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(x, y));
  }
}

class Ripple {
  constructor(x, y, delay, col) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.growth = random(4, 10);
    this.alpha = 180;
    this.delay = delay;
    this.life = 0;
    this.col = col;
    this._dragged = false;
    this._highlight = false;
  }
  update() {
    this.life++;
    if (this.life > this.delay) {
      this.radius += this.growth;
      this.alpha -= 2 + this.radius * 0.04;
      this.alpha = max(0, this.alpha);
    }
  }
  display() {
    if (this.life > this.delay) {
      noFill();
      let glow = this._highlight ? 1.5 : 1.0;
      strokeWeight(2 + sin(frameCount * 0.04 + this.radius) * glow);
      stroke(red(this.col), green(this.col), blue(this.col), this.alpha);
      ellipse(this.x, this.y, this.radius * 2);

      for (let a = 0; a < TWO_PI; a += PI / 30) {
        let r2 = this.radius + sin(a * 8 + frameCount * 0.08) * 4;
        let px = this.x + cos(a) * r2;
        let py = this.y + sin(a) * r2;
        stroke(red(this.col), green(this.col), blue(this.col), this.alpha * 0.4);
        point(px, py);
      }

      if (this.radius < 20 && this.life < 12) {
        noStroke();
        fill(255, 220, 170, this.alpha * 1.2);
        ellipse(this.x, this.y, 8 + this.radius * 0.5);
      }
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.alpha = 255;
    this.size = random(2, 5);
    this.life = 60;
    this.col = color(random(180, 255), random(180, 255), 255);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 4;
    this.life--;
  }
  display() {
    noStroke();
    fill(this.col.levels[0], this.col.levels[1], this.col.levels[2], this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}

class Planet {
  constructor(x, y, baseRadius) {
    this.x = x;
    this.y = y;
    this.baseRadius = baseRadius;
    this.rotation = 0;
  }
  interact(ripple) {
    let d = dist(this.x, this.y, ripple.x, ripple.y);
    if (d < this.baseRadius + ripple.radius * 0.6) {
      this.rotation += 0.01;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    let breath = sin(frameCount * 0.05) * 8;
    let radius = this.baseRadius + breath;
    let hueShift = sin(frameCount * 0.01) * 50 + 200;
    let planetColor = color((hueShift + 360) % 360, 180, 255);

    rotate(this.rotation);
    colorMode(HSB, 360, 255, 255, 255);
    noStroke();
    fill(planetColor);
    ellipse(0, 0, radius * 2);

    stroke((hueShift + 30) % 360, 200, 255, 80);
    noFill();
    strokeWeight(1.5);
    ellipse(0, 0, radius * 2.4, radius * 1.3);

    colorMode(RGB, 255);
    pop();
  }
}

function gotHands(results) {
  hands = results;
}
