// https://editor.p5js.org/AltheaXiu/sketches/sREaI9DlU
// Althea-genie copy
// MoMo Genie — p5 instance mode (avoids VERSION conflict with MediaPipe)
// Show your hand → MoMo appears
// Hide your hand → MoMo disappears

window.handLandmarks = null;

//MediaPipe setup (runs once, outside p5) ───────────────────────────
(function setupMediaPipe() {
  const videoEl = document.createElement("video");
  videoEl.style.display = "none";
  document.body.appendChild(videoEl);

  const hands = new Hands({
    locateFile: (f) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`,
  });

  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.6,
  });

  hands.onResults((results) => {
    window.handLandmarks =
      results.multiHandLandmarks && results.multiHandLandmarks.length > 0
        ? results.multiHandLandmarks[0]
        : null;
  });

  navigator.mediaDevices
    .getUserMedia({ video: { width: 320, height: 240 } })
    .then((stream) => {
      videoEl.srcObject = stream;
      videoEl.play();
      const cam = new Camera(videoEl, {
        onFrame: async () => { await hands.send({ image: videoEl }); },
        width: 320,
        height: 240,
      });
      cam.start();
    })
    .catch(() => console.warn("Camera access denied"));
})();

// ── p5 instance mode ──────────────────────────────────────────────────
new p5(function (p) {

  let isFormed = false;
  let lastHandTime = 0;
  const DISAPPEAR_DELAY = 2000;

  let momoImage;
  let particles = [];
  const MAX_PARTICLES = 14000;
  let heartScale = 1.0;
  let centerOfHeart;
  let imgOffsetX, imgOffsetY, imageScale;
  let auraParticles = [];
  let smoothPresence = 0;

  // ── Particle ─────────────────────────────────────────────────────────
  class Particle {
    constructor(x, y, srcColor) {
      this.initialPos = p.createVector(x, y);
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.vel = p.createVector(0, 0);
      this.isHeart = srcColor[0] > 180 && srcColor[1] < 80 && srcColor[2] < 80;

      if (this.isHeart) {
        this.color = [220 + p.random(35), 60 + p.random(40), 80 + p.random(40)];
      } else {
        let b = 200 + p.random(55);
        let w = p.random(10);
        this.color = [b, b - w, b - w * 1.5];
      }

      this.size = p.random(0.5, 1.1);
      this.phase = p.random(p.TWO_PI);
      this.dispersedTarget = p.createVector(p.random(p.width), p.random(p.height));
    }

    update() {
      if (isFormed) {
        let target = this.initialPos.copy();
        if (this.isHeart) {
          let off = p5.Vector.sub(this.initialPos, centerOfHeart);
          off.mult(heartScale);
          target = p5.Vector.add(centerOfHeart, off);
        }
        this.vel.add(p5.Vector.sub(target, this.pos).mult(0.02));
        this.vel.mult(0.95);
        this.pos.add(this.vel);
      } else {
        this.vel.add(p5.Vector.random2D().mult(0.1));
        if (p.dist(this.pos.x, this.pos.y, this.dispersedTarget.x, this.dispersedTarget.y) < 5)
          this.dispersedTarget = p.createVector(p.random(p.width), p.random(p.height));
        this.vel.add(p5.Vector.sub(this.dispersedTarget, this.pos).mult(0.008));
        this.vel.mult(0.95);
        this.pos.add(this.vel);
        if (this.pos.x < 0) this.pos.x = p.width;
        if (this.pos.x > p.width) this.pos.x = 0;
        if (this.pos.y < 0) this.pos.y = p.height;
        if (this.pos.y > p.height) this.pos.y = 0;
      }
    }

    display() {
      let alpha = p.map(p.sin(p.frameCount * 0.02 + this.phase), -1, 1, 80, 255);
      p.fill(this.color[0], this.color[1], this.color[2], alpha);
      p.ellipse(this.pos.x, this.pos.y, this.size);
    }
  }

  // ── Aura ──────────────────────────────────────────────────────────────
  function setupAura() {
    auraParticles = [];
    for (let i = 0; i < 2000; i++) {
      let r = p.random(100, 450);
      auraParticles.push({ theta: p.random(p.TWO_PI), baseR: r, r });
    }
  }

  function drawAura() {
    for (let a of auraParticles) {
      let str = p.map(smoothPresence, 0, 1, 6, 45, true);
      let w = p.map(p.sin(a.theta + p.frameCount * 0.05), -1, 1, 0, 1);
      a.r = a.baseR + p.sin(p.frameCount * 0.03 + a.theta) * w * str;
      p.fill(240, 220, 200, 55);
      p.ellipse(
        p.width / 2 + p.cos(a.theta) * a.r,
        p.height * 0.75 + p.sin(a.theta) * a.r * 0.4,
        p.random(1, 2)
      );
    }
  }

  // ── Wing filter ───────────────────────────────────────────────────────
  function isWingPixel(x, y, iw, ih) {
    let nx = x / iw, ny = y / ih;
    return (nx < 0.30 && ny > 0.25 && ny < 0.62) ||
           (nx > 0.70 && ny > 0.25 && ny < 0.62);
  }

  // ── Build particles ───────────────────────────────────────────────────
  function generateParticlesFromImage() {
    let pad = 100;
    imageScale = p.min(
      (p.width - pad * 2) / momoImage.width,
      (p.height - pad * 2) / momoImage.height
    );
    imgOffsetX = (p.width - momoImage.width * imageScale) / 2;
    imgOffsetY = (p.height - momoImage.height * imageScale) / 2;

    momoImage.loadPixels();

    let rxMin = Infinity, rxMax = -Infinity;
    let ryMin = Infinity, ryMax = -Infinity;
    let positions = [];

    for (let y = 0; y < momoImage.height; y++) {
      for (let x = 0; x < momoImage.width; x++) {
        let i = (x + y * momoImage.width) * 4;
        let r = momoImage.pixels[i],
            g = momoImage.pixels[i + 1],
            b = momoImage.pixels[i + 2],
            a = momoImage.pixels[i + 3];

        if (a < 50 || r + g + b < 20) continue;
        let isHeart = r > 180 && g < 80 && b < 80;
        if (!isHeart && isWingPixel(x, y, momoImage.width, momoImage.height)) continue;
        if (!isHeart && p.random(1) > 0.05) continue;

        let px = x * imageScale + imgOffsetX;
        let py = y * imageScale + imgOffsetY;
        positions.push({ x: px, y: py, color: [r, g, b] });

        if (isHeart) {
          rxMin = p.min(rxMin, px); rxMax = p.max(rxMax, px);
          ryMin = p.min(ryMin, py); ryMax = p.max(ryMax, py);
        }
      }
    }

    for (let i = positions.length - 1; i > 0; i--) {
      let j = p.floor(p.random(i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }

    for (let i = 0; i < p.min(MAX_PARTICLES, positions.length); i++)
      particles.push(new Particle(positions[i].x, positions[i].y, positions[i].color));

    centerOfHeart = p.createVector((rxMin + rxMax) / 2, (ryMin + ryMax) / 2);
  }

  function resetParticles() {
    particles = [];
    auraParticles = [];
    isFormed = false;
    heartScale = 1.0;
    setupAura();
    generateParticlesFromImage();
  }

  // ── Hand overlay ──────────────────────────────────────────────────────
  function drawHandOverlay() {
    if (!window.handLandmarks) return;
    p.noStroke();
    for (let idx of [4, 8, 12, 16, 20]) {
      let lm = window.handLandmarks[idx];
      p.fill(255, 220, 180, 140);
      p.ellipse((1 - lm.x) * p.width, lm.y * p.height, 10, 10);
    }
  }

  // ── p5 lifecycle ──────────────────────────────────────────────────────
  p.preload = function () {
    momoImage = p.loadImage("genie-momo.png");
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
    p.frameRate(60);
    setupAura();
    generateParticlesFromImage();
  };

  p.draw = function () {
    p.background(0, 10);

    let handDetected = window.handLandmarks !== null;
    smoothPresence = p.lerp(smoothPresence, handDetected ? 1 : 0, 0.08);

    if (handDetected) lastHandTime = p.millis();
    let handActive = p.millis() - lastHandTime < DISAPPEAR_DELAY;

    if (handActive && !isFormed) {
      isFormed = true;
      for (let pt of particles) pt.vel = p5.Vector.random2D().mult(p.random(1, 3));
    } else if (!handActive && isFormed) {
      isFormed = false;
      for (let pt of particles) pt.vel = p5.Vector.random2D().mult(p.random(2, 5));
    }

    heartScale = isFormed
      ? p.map(smoothPresence, 0, 1, 1.0, 1.2, true)
      : p.lerp(heartScale, 1.0, 0.08);

    drawAura();

    p.blendMode(p.ADD);
    for (let pt of particles) { pt.update(); pt.display(); }
    p.blendMode(p.BLEND);

    drawHandOverlay();

    // UI
    p.fill(220, 210, 200);
    p.noStroke();
    p.textStyle(p.BOLD);
    p.textAlign(p.LEFT);
    p.textFont("monospace");
    p.textSize(16);
    p.text(
      handDetected ? "✦ momo appeared" : "· show your hand to summon momo",
      20, 36
    );
  };

  p.mousePressed = function () { p.fullscreen(!p.fullscreen()); };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    resetParticles();
  };
});