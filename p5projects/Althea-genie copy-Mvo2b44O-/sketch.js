// https://editor.p5js.org/AltheaXiu/sketches/sREaI9DlU
// Camera Presence-Based Genie
// Genie stays formed when a person is present/still
// Genie disappears when the person leaves

let isFormed = false;

// camera
let video;
let backgroundFrame;
let presenceLevel = 0;
let smoothPresence = 0;

// presence logic
let presenceThreshold = 18;
let lastPresenceTime = 0;
let disappearDelaby = 2000; // genie disappears after 2s of no presence

// genie particles
let genieImage;
let particles = [];
let maxParticles = 14000;
let heartScale = 1.0;
let centerOfHeart;
let imgOffsetX, imgOffsetY;
let imageScale;
let auraParticles = [];

function preload() {
  genieImage = loadImage("genie-momo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(60);

  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  backgroundFrame = createImage(320, 240);

  setupAura();
  generateParticlesFromImage();

  // wait a bit, then capture background
  setTimeout(captureBackground, 1500);
}

function captureBackground() {
  video.loadPixels();
  backgroundFrame.copy(
    video,
    0,
    0,
    video.width,
    video.height,
    0,
    0,
    video.width,
    video.height
  );
}

function resetParticles() {
  particles = [];
  auraParticles = [];
  isFormed = false;
  heartScale = 1.0;
  setupAura();
  generateParticlesFromImage();
}

// PRESENCE DETECTION

function getPresenceLevel() {
  video.loadPixels();
  backgroundFrame.loadPixels();

  if (video.pixels.length === 0 || backgroundFrame.pixels.length === 0) {
    return 0;
  }

  let diff = 0;
  let count = 0;

  for (let i = 0; i < video.pixels.length; i += 4) {
    let r1 = video.pixels[i];
    let g1 = video.pixels[i + 1];
    let b1 = video.pixels[i + 2];

    let r2 = backgroundFrame.pixels[i] || 0;
    let g2 = backgroundFrame.pixels[i + 1] || 0;
    let b2 = backgroundFrame.pixels[i + 2] || 0;

    let d = abs(r1 - r2) + abs(g1 - g2) + abs(b1 - b2);
    diff += d / 3;
    count++;
  }

  return diff / count;
}

//  PARTICLE CLASS

class Particle {
  constructor(x, y, originalColor) {
    this.initialPos = createVector(x, y);
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.isHeart = originalColor[0] > 200 && originalColor[1] < 100;
    this.color = originalColor;
    this.size = random(0.6, 0.8);
    this.phase = random(TWO_PI);
    this.dispersedTarget = createVector(random(width), random(height));
  }

  update() {
    let target;

    if (isFormed) {
      target = this.initialPos.copy();

      if (this.isHeart) {
        let offset = p5.Vector.sub(this.initialPos, centerOfHeart);
        offset.mult(heartScale);
        target = p5.Vector.add(centerOfHeart, offset);
      }

      let force = p5.Vector.sub(target, this.pos).mult(0.02);
      this.vel.add(force);
      this.vel.mult(0.95);
      this.pos.add(this.vel);
    } else {
      target = this.dispersedTarget;
      let drift = p5.Vector.random2D().mult(0.1);
      this.vel.add(drift);

      if (dist(this.pos.x, this.pos.y, target.x, target.y) < 5) {
        this.dispersedTarget = createVector(random(width), random(height));
      }

      let force = p5.Vector.sub(target, this.pos).mult(0.008);
      this.vel.add(force);
      this.vel.mult(0.95);
      this.pos.add(this.vel);

      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.y < 0) this.pos.y = height;
      if (this.pos.y > height) this.pos.y = 0;
    }
  }

  display() {
    let alpha = map(sin(frameCount * 0.02 + this.phase), -1, 1, 80, 255);
    fill(this.color[0], this.color[1], this.color[2], alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

// AURA

function setupAura() {
  auraParticles = [];
  for (let i = 0; i < 2000; i++) {
    let baseR = random(100, 450);
    auraParticles.push({
      theta: random(TWO_PI),
      baseR: baseR,
      r: baseR,
    });
  }
}

function drawAura() {
  for (let a of auraParticles) {
    let auraStrength = map(smoothPresence, 0, 50, 6, 45, true);
    let weight = map(sin(a.theta + frameCount * 0.05), -1, 1, 0, 1);
    let breathing = sin(frameCount * 0.03 + a.theta) * weight * auraStrength;
    a.r = a.baseR + breathing;

    let px = width / 2 + cos(a.theta) * a.r;
    let py = height * 0.75 + sin(a.theta) * a.r * 0.4;

    fill(255, 60);
    ellipse(px, py, random(1, 2));
  }
}

// GENERATE PARTICLES

function generateParticlesFromImage() {
  let padding = 100;
  let availableWidth = width - padding * 2;
  let availableHeight = height - padding * 2;

  imageScale = min(
    availableWidth / genieImage.width,
    availableHeight / genieImage.height
  );

  let scaledWidth = genieImage.width * imageScale;
  let scaledHeight = genieImage.height * imageScale;

  imgOffsetX = (width - scaledWidth) / 2;
  imgOffsetY = (height - scaledHeight) / 2;

  genieImage.loadPixels();

  let redXMin = Infinity,
    redXMax = -Infinity;
  let redYMin = Infinity,
    redYMax = -Infinity;
  let positions = [];

  for (let y = 0; y < genieImage.height; y++) {
    for (let x = 0; x < genieImage.width; x++) {
      let idx = (x + y * genieImage.width) * 4;
      let r = genieImage.pixels[idx];
      let g = genieImage.pixels[idx + 1];
      let b = genieImage.pixels[idx + 2];
      let a = genieImage.pixels[idx + 3];

      if (a > 50 && r + g + b > 20) {
        if (!(r > 200 && g < 100 && b < 100) && random(1) < 0.95) continue;

        let px = x * imageScale + imgOffsetX;
        let py = y * imageScale + imgOffsetY;
        positions.push({ x: px, y: py, color: [r, g, b] });

        if (r > 200 && g < 100 && b < 100) {
          redXMin = min(redXMin, px);
          redXMax = max(redXMax, px);
          redYMin = min(redYMin, py);
          redYMax = max(redYMax, py);
        }
      }
    }
  }

  shuffleArray(positions);

  for (let i = 0; i < min(maxParticles, positions.length); i++) {
    let p = positions[i];
    particles.push(new Particle(p.x, p.y, p.color));
  }

  centerOfHeart = createVector(
    (redXMin + redXMax) / 2,
    (redYMin + redYMax) / 2
  );
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = floor(random(i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

//DRAW LOOP

function draw() {
  background(0, 10);

  presenceLevel = getPresenceLevel();
  smoothPresence = lerp(smoothPresence, presenceLevel, 0.1);

  if (smoothPresence > presenceThreshold) {
    lastPresenceTime = millis();
  }

  if (millis() - lastPresenceTime < disappearDelay) {
    if (!isFormed) {
      isFormed = true;
      for (let p of particles) {
        p.vel = p5.Vector.random2D().mult(random(1, 3));
      }
    }
  } else {
    if (isFormed) {
      isFormed = false;
      for (let p of particles) {
        p.vel = p5.Vector.random2D().mult(random(2, 5));
      }
    }
  }

  if (isFormed) {
    heartScale = map(smoothPresence, 0, 50, 1.0, 1.25, true);
  } else {
    heartScale = lerp(heartScale, 1.0, 0.08);
  }

  drawAura();

  blendMode(ADD);
  for (let p of particles) {
    p.update();
    p.display();
  }
  blendMode(BLEND);

  drawUI();

  // optional preview
  // image(video, 20, height - 140, 160, 120);
}

// UI 

function drawUI() {
  fill(255);
  noStroke();
  textStyle(BOLD);
  textAlign(LEFT);
  textFont("monospace");
  textSize(22);
  text(`presence: ${nf(smoothPresence, 1, 2)}`, 20, 40);

  textSize(16);
  text(isFormed ? "genie formed" : "genie disappeared", 20, 68);
  text("press B to reset background", 20, 92);
}

// INTERACTION

function keyPressed() {
  if (key === "b" || key === "B") {
    captureBackground();
  }
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetParticles();
}
