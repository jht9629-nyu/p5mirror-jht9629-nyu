// https://editor.p5js.org/jht9629-nyu/sketches/AGhIneLnf
//IMC-Week9-HW
//https://editor.p5js.org/yh6371/sketches/dB9IuRUf1

// Shape Quilt — Pinch Controls Tile Size (Thumb tip #4 ↔ Index tip #8)
// Webcam only, mirrored cover-fit.
// Interaction: smaller pinch distance => larger tile size; larger distance => finer tiles.
// Shapes: motion > threshold → triangle; brightness > threshold → square; else → circle.

let video;
let pgCurr, pgPrev;
let hasPrev = false;

// ml5 HandPose
let handPose;
let hands = [];

// Tile size dynamics (driven by pinch distance)
let tileSize = 28; // current (smoothed)
let targetTile = 28; // set from pinch
const TILE_MIN = 8; // smallest tiles when fingers spread
const TILE_MAX = 100; // largest tiles when pinch is tight
const EASE = 0.25; // smoothing factor (0-1)

// Expected pinch range in canvas pixels (tune for your camera distance)
const PINCH_MIN = 20; //tight pinch
const PINCH_MAX = 300; // widely open

// Rendering thresholds / styling
const MOTION_TH = 0.24; // triangle rule (higher = less sensitive to motion)
const BRIGHT_TH = 0.58; // square rule   (higher = requires brighter pixel)
const ROT_NOISE_SCALE = 0.03;
const ROT_NOISE_SPEED = 0.01;

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  frameRate(30);

  // Webcam
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Start continuous detection; results arrive in gotHands()
  handPose.detectStart(video, gotHands);

  // Offscreen buffers match the canvas
  pgCurr = createGraphics(width, height);
  pgPrev = createGraphics(width, height);
}

function gotHands(results) {
  // ml5 v1.x returns an array; each hand typically has .keypoints
  hands = results || [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pgCurr = createGraphics(width, height);
  pgPrev = createGraphics(width, height);
  hasPrev = false; // re-init previous frame on next draw
}

function draw() {
  background(10);

  // Draw webcam into pgCurr with cover-fit + horizontal mirror (selfie view)
  drawCover(video, pgCurr, true);

  // Initialize previous-frame buffer after setup/resize
  if (!hasPrev) {
    pgPrev.push();
    pgPrev.clear();
    pgPrev.image(pgCurr, 0, 0);
    pgPrev.pop();
    hasPrev = true;
  }

  // Update target tile size from pinch distance
  const pinch = getPinchDistanceCanvas(hands, true); // null if unavailable
  if (pinch !== null) {
    // Map pinch to tile target: tight -> big tiles, open -> small tiles
    const t = constrain((pinch - PINCH_MIN) / (PINCH_MAX - PINCH_MIN), 0, 1);
    targetTile = lerp(TILE_MAX, TILE_MIN, t);
  } else {
    // Fallback when no hand or fingertips are found
    targetTile = 28;
  }

  // Smooth tile size to prevent flicker/jitter
  tileSize = lerp(tileSize, targetTile, EASE);
  const tile = constrain(Math.floor(tileSize), TILE_MIN, TILE_MAX);

  // Render the quilt with current tile size
  renderShapeQuilt(pgCurr, pgPrev, tile);

  // Update previous frame for motion detection
  pgPrev.push();
  pgPrev.clear();
  pgPrev.image(pgCurr, 0, 0);
  pgPrev.pop();
}

// Draw src into graphics g, scaled to cover the canvas, optional horizontal mirror
function drawCover(src, g, mirror = true) {
  g.push();
  g.clear();
  g.imageMode(CENTER);
  const s = Math.max(width / src.width, height / src.height);
  const dw = src.width * s,
    dh = src.height * s;
  g.translate(width / 2, height / 2);
  if (mirror) g.scale(-1, 1);
  g.image(src, 0, 0, dw, dh);
  g.pop();
}

// Map VIDEO space coordinates → CANVAS space
function videoToCanvas(xv, yv, mirror = true) {
  const vw = video.width,
    vh = video.height;
  const s = Math.max(width / vw, height / vh);
  const xMir = mirror ? vw - xv : xv;
  const cx = width / 2 + (xMir - vw / 2) * s;
  const cy = height / 2 + (yv - vh / 2) * s;
  return [cx, cy];
}

// Return pinch distance (thumb tip #4 <-> index tip #8) in canvas pixels; null if not found
function getPinchDistanceCanvas(preds, mirror) {
  for (const hand of preds) {
    const p4 = getKeypoint(hand, 4, "thumb_tip");
    const p8 = getKeypoint(hand, 8, "index_finger_tip");
    if (!p4 || !p8) continue;
    const [x4, y4] = videoToCanvas(p4[0], p4[1], mirror);
    const [x8, y8] = videoToCanvas(p8[0], p8[1], mirror);
    return dist(x4, y4, x8, y8);
  }
  return null;
}

function getKeypoint(hand, indexFallback, nameStr) {
  if (hand.keypoints && hand.keypoints.length) {
    const byName = hand.keypoints.find((k) => k.name === nameStr);
    if (byName) return [byName.x, byName.y];
    const kp = hand.keypoints[indexFallback];
    if (kp) return [kp.x, kp.y];
  } else if (hand.landmarks && hand.landmarks.length) {
    const p = hand.landmarks[indexFallback];
    if (p) return [p[0], p[1]];
  }
  return null;
}

// Main renderer: decide shape per tile from motion & brightness
function renderShapeQuilt(curr, prev, tile) {
  noStroke();

  for (let y = 0; y < height; y += tile) {
    for (let x = 0; x < width; x += tile) {
      const cx = x + tile * 0.5;
      const cy = y + tile * 0.5;

      // Sample current & previous frame at tile center
      const ca = curr.get(cx, cy);
      const cb = prev.get(cx, cy);

      // Signals
      const b = luma(ca); // brightness
      const m = motion(ca, cb); // motion

      // Shape rule
      let shapeType; // 'tri' | 'sq' | 'circ'
      if (m > MOTION_TH) shapeType = "tri";
      else if (b > BRIGHT_TH) shapeType = "sq";
      else shapeType = "circ";

      // Size & rotation
      const pad = tile * 0.12;
      const maxSize = tile - pad * 2;
      const size = constrain(
        map(b, 0, 1, maxSize * 0.55, maxSize),
        maxSize * 0.45,
        maxSize
      );
      const ang = map(
        noise(
          x * ROT_NOISE_SCALE,
          y * ROT_NOISE_SCALE,
          frameCount * ROT_NOISE_SPEED
        ),
        0,
        1,
        -PI / 6,
        PI / 6
      );

      // Draw with sampled color
      fill(ca[0], ca[1], ca[2], 220);
      push();
      translate(cx, cy);
      rotate(ang);

      if (shapeType === "sq") {
        rectMode(CENTER);
        rect(0, 0, size, size, 3);
      } else if (shapeType === "circ") {
        ellipse(0, 0, size, size);
      } else {
        const h = (size * sqrt(3)) / 2;
        drawEquilateralTriangle(0, 0, size, h);
      }
      pop();
    }
  }
}

// Equilateral triangle centered on (cx, cy), pointing up before rotation
function drawEquilateralTriangle(cx, cy, w, h) {
  beginShape();
  vertex(cx, cy - (2 / 3) * h); // top
  vertex(cx - w / 2, cy + h / 3); // bottom-left
  vertex(cx + w / 2, cy + h / 3); // bottom-right
  endShape(CLOSE);
}

// Perceived luminance for sRGB
function luma(c) {
  return (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
}

// Approximate motion magnitude via L1 distance of RGB between frames
function motion(ca, cb) {
  const dr = abs(ca[0] - cb[0]);
  const dg = abs(ca[1] - cb[1]);
  const db = abs(ca[2] - cb[2]);
  return (dr + dg + db) / (255 * 3); // 0..1
}
