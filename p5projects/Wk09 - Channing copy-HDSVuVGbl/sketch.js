
// https://editor.p5js.org/jht9629-nyu/sketches/HDSVuVGbl

let bodyPose,
  video,
  poses = [],
  connections;
let modelReady = false,
  videoReady = false,
  started = false;

let P = 0,
  Ps = 0;
const ALPHA = 0.12;

let horse, roller;
let horseNum = 6;
let rollerW, rollerH;
let slitCount = 240;
let slitGap = 1.0;
let phase = 0;
let phaseSpeedMin = 60;
let phaseSpeedMax = 900;
let lastMs = 0;

const BLUE = [0, 140, 255];
const YELLOW = [255, 235, 0];

const PARTICLES_PER_PERSON = 1400;
const PARTICLE_MIN = 2.2;
const PARTICLE_MAX = 4.2;
const MASK_STROKE = 42;
const JOINT_DIAM = 46;
let maskG;

function lcg(seed) {
  let s = seed >>> 0 || 1;
  return function () {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

function preload() {
  horse = loadImage("horse.png");
}

function setup() {
  createCanvas(960, 540);
  pixelDensity(1);
  noStroke();

  const targetH = height * 0.6;
  const s = targetH / horse.height;
  const frameW = horse.width * s;
  const frameH = targetH;

  rollerW = Math.floor(frameW * horseNum);
  rollerH = Math.floor(frameH);
  roller = createGraphics(rollerW, rollerH);
  roller.pixelDensity(1);
  roller.clear();
  for (let i = 0; i < horseNum; i++) {
    roller.image(
      horse,
      Math.floor(i * frameW),
      0,
      Math.floor(frameW),
      Math.floor(frameH)
    );
  }

  maskG = createGraphics(width, height);
  maskG.pixelDensity(1);
  maskG.clear();

  lastMs = millis();
  startCamera();

  bodyPose = ml5.bodyPose(
    "MoveNet",
    { modelType: "MULTIPOSE_LIGHTNING" },
    bodyPoseReady
  );
}

function bodyPoseReady() {
  modelReady = true;
  tryStart();
  // connections = bodyPose.getSkeleton?.() || bodyPose.getConnections?.();
  connections = bodyPose.getSkeleton() || bodyPose.getConnections();
}

function startCamera() {
  const constraints = {
    video: {
      width: { ideal: 640 },
      height: { ideal: 480 },
      facingMode: "user",
    },
    audio: false,
  };
  video = createCapture(constraints);
  video.size(640, 480);
  video.hide();
  if (video.elt) {
    video.elt.muted = true;
    video.elt.playsInline = true;
    const onReady = () => {
      videoReady = true;
      tryStart();
    };
    video.elt.addEventListener("loadedmetadata", onReady, { once: true });
    video.elt.addEventListener("canplay", onReady, { once: true });
    video.elt.addEventListener("playing", onReady);
  }
}

function tryStart() {
  if (!started && modelReady && videoReady) {
    bodyPose.detectStart(video, (res) => {
      poses = res || [];
    });
    started = true;
  }
}

function mousePressed() {
  if (video?.elt?.paused) video.elt.play().catch(() => {});
}

function computeP() {
  if (!poses || poses.length === 0) return 0;
  let sum = 0;
  for (const p of poses) {
    if (!p.box) continue;
    sum += Math.max(0, p.box.width || 0) * Math.max(0, p.box.height || 0);
  }
  const vArea = (video?.width || 1) * (video?.height || 1);
  return constrain(sum / Math.max(1, vArea), 0, 1);
}

function draw() {
  background(0);

  P = computeP();
  Ps = lerp(Ps, P, ALPHA);

  const now = millis();
  const dt = Math.max(0, now - lastMs) / 1000.0;
  lastMs = now;

  const pixPerSec = lerp(phaseSpeedMin, phaseSpeedMax, Ps);
  phase = (phase + pixPerSec * dt) % rollerW;

  drawRasterHorse();
  drawParticleSilhouette();
}

function drawRasterHorse() {
  const targetH = rollerH;
  const targetW = rollerW / horseNum;
  const dispW = min(width * 0.8, targetW);
  const dispH = targetH;
  const startX = (width - dispW) / 2;
  const startY = (height - dispH) / 2;
  const stripeW = dispW / slitCount;
  const srcStripeW = (targetW / slitCount) * slitGap;

  for (let i = 0; i < slitCount; i++) {
    const dx = startX + i * stripeW;
    const sxInFrame = i * (targetW / slitCount);
    const sx = (sxInFrame + phase) % rollerW;
    image(roller, dx, startY, stripeW, dispH, sx, 0, srcStripeW, rollerH);
  }
}

function drawParticleSilhouette() {
  if (!poses || poses.length === 0 || !connections) return;
  maskG.clear();
  maskG.noFill();

  const sx = width / (video?.width || 1);
  const sy = height / (video?.height || 1);

  maskG.strokeWeight(MASK_STROKE);
  maskG.strokeCap(ROUND);

  for (const pose of poses) {
    for (const [a, b] of connections) {
      const ka = pose.keypoints[a],
        kb = pose.keypoints[b];
      if (ka?.confidence > 0.1 && kb?.confidence > 0.1) {
        const ax = ka.x * sx,
          ay = ka.y * sy;
        const bx = kb.x * sx,
          by = kb.y * sy;
        maskG.stroke(255);
        maskG.line(ax, ay, bx, by);
      }
    }
  }

  maskG.noStroke();
  for (const pose of poses) {
    for (const k of pose.keypoints) {
      if (k.confidence > 0.1) {
        const x = k.x * sx,
          y = k.y * sy;
        maskG.fill(255);
        maskG.circle(x, y, JOINT_DIAM);
      }
    }
  }

  maskG.loadPixels();
  const mpix = maskG.pixels;
  const W = maskG.width,
    H = maskG.height;

  for (const pose of poses) {
    const pid = pose.id != null ? pose.id : 1;
    const rand = lcg(
      0x9e3779b1 ^ (pid * 2654435761) ^ (frameCount * 1315423911)
    );
    for (let n = 0; n < PARTICLES_PER_PERSON; n++) {
      let tries = 0,
        ok = false,
        rx = 0,
        ry = 0;
      while (tries < 8 && !ok) {
        rx = Math.floor(rand() * W);
        ry = Math.floor(rand() * H);
        const i = (ry * W + rx) * 4 + 3;
        if (mpix[i] > 12) ok = true;
        tries++;
      }
      if (!ok) continue;
      const x = rx,
        y = ry;
      const c = x < width * 0.5 ? BLUE : YELLOW;
      const r = PARTICLE_MIN + (PARTICLE_MAX - PARTICLE_MIN) * rand();
      noStroke();
      fill(c[0], c[1], c[2]);
      circle(x, y, r * 2);
    }
  }
}
