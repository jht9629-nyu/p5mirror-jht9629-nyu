// https://editor.p5js.org/jht9629-nyu/sketches/sDA_AH3Gm
// https://editor.p5js.org/yc4351/sketches/jawb8K6LA
// face doodle v3 yifan

let faceMesh, bodyPose, handPose;
let video;
let faces = [];
let bodies = [];
let hands = [];

let currentStyle = "kid";
let mirrorMode = true;
let enableFingerDrawing = true;

let paperDots = [];
let doodleDecorations = [];
let drawingPaths = [];
let activeFingerPoints = {};

let loaded = false;
let personMemories = [];

const MAX_FACES = 6;
const EXAGGERATION = 1.45;

// Kid-doodle hair palette: [fillR, fillG, fillB]
const HAIR_PALETTE = [
  [40, 35, 30],     // black
  [110, 70, 35],    // brown
  [165, 105, 50],   // chestnut
  [220, 180, 70],   // gold/yellow
  [230, 130, 50],   // orange
  [200, 60, 50],    // red
  [230, 110, 170],  // pink
  [140, 90, 180],   // purple
  [70, 130, 200],   // blue
  [80, 170, 100],   // green
  [180, 180, 180]   // silver/grey
];

// Kid-doodle clothing palette: bright, saturated, primary-school colors
const BODY_PALETTE = [
  [220, 80, 70],    // red
  [70, 130, 200],   // blue
  [240, 200, 70],   // yellow
  [80, 170, 100],   // green
  [160, 100, 200],  // purple
  [240, 130, 50],   // orange
  [240, 130, 170],  // pink
  [80, 180, 200],   // teal
  [110, 180, 90],   // lime green
  [230, 90, 130]    // raspberry
];

function preload() {
  faceMesh = ml5.faceMesh({ maxFaces: MAX_FACES, refineLandmarks: false });
  bodyPose = ml5.bodyPose("MoveNet");
  handPose = ml5.handPose({ maxHands: 4 });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
  bodyPose.detectStart(video, gotBodies);
  handPose.detectStart(video, gotHands);

  makePaperTexture();
  makeDoodleDecorations();
  setupUI();
}

function setupUI() {
  document.getElementById("styleSelect").addEventListener("change", (e) => {
    currentStyle = e.target.value;
  });

  document.getElementById("mirrorToggle").addEventListener("change", (e) => {
    mirrorMode = e.target.checked;
  });

  document.getElementById("drawToggle").addEventListener("change", (e) => {
    enableFingerDrawing = e.target.checked;
  });

  document.getElementById("hairBtn").addEventListener("click", () => {
    for (const m of personMemories) {
      m.hairColor = pickRandomHairColor();
      m.bodyColor = pickRandomBodyColor();
    }
  });

  document.getElementById("sceneBtn").addEventListener("click", () => {
    makeDoodleDecorations();
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    drawingPaths = [];
    activeFingerPoints = {};
  });

  document.getElementById("saveBtn").addEventListener("click", () => {
    saveCanvas("doodle-face-sketch", "png");
  });

  document.getElementById("fullBtn").addEventListener("click", () => {
    fullscreen(!fullscreen());
  });
}

function gotFaces(results) {
  faces = results || [];
  loaded = true;
}

function gotBodies(results) {
  bodies = results || [];
}

function gotHands(results) {
  hands = results || [];
}

function draw() {
  drawPaperBackground();
  drawDoodleDecorations();
  drawSavedFingerDrawing();
  updateAndDrawFingerDrawing();

  if (!loaded || faces.length === 0) {
    drawWaitingFace();
    return;
  }

  const detectedPeople = faces
    .filter((face) => face.keypoints && face.keypoints.length > 200)
    .map((face) => {
      const mapped = face.keypoints.map(mapPoint);
      const box = getFaceBox(mapped);
      return { face, mapped, box };
    })
    .sort((a, b) => a.box.w - b.box.w);

  updatePersonMemories(detectedPeople);

  for (let i = 0; i < detectedPeople.length; i++) {
    drawDoodlePerson(detectedPeople[i], i);
  }
}

function pickRandomHairColor() {
  const base = random(HAIR_PALETTE);
  // small per-instance jitter so two same-base hairs aren't identical
  return [
    constrain(base[0] + random(-12, 12), 0, 255),
    constrain(base[1] + random(-12, 12), 0, 255),
    constrain(base[2] + random(-12, 12), 0, 255)
  ];
}

function pickRandomBodyColor() {
  const base = random(BODY_PALETTE);
  return [
    constrain(base[0] + random(-15, 15), 0, 255),
    constrain(base[1] + random(-15, 15), 0, 255),
    constrain(base[2] + random(-15, 15), 0, 255)
  ];
}

function makePaperTexture() {
  paperDots = [];
  for (let i = 0; i < 2200; i++) {
    paperDots.push({
      x: random(width),
      y: random(height),
      s: random(0.35, 1.6),
      a: random(8, 42)
    });
  }
}

// =============== KID DOODLE BACKGROUND ===============
function makeDoodleDecorations() {
  doodleDecorations = [];

  // 1 big sun in a top corner
  const sunOnLeft = random() < 0.5;
  doodleDecorations.push({
    type: "sun",
    x: sunOnLeft ? random(80, 180) : width - random(80, 180),
    y: random(70, 160),
    size: random(70, 110),
    color: [random(240, 255), random(180, 220), random(40, 90)],
    rays: floor(random(10, 16))
  });

  // clouds
  const cloudCount = floor(random(2, 5));
  for (let i = 0; i < cloudCount; i++) {
    doodleDecorations.push({
      type: "cloud",
      x: random(width * 0.05, width * 0.95),
      y: random(40, height * 0.28),
      size: random(60, 130)
    });
  }

  // grass tufts along the bottom
  const grassCount = floor(random(width / 60, width / 35));
  for (let i = 0; i < grassCount; i++) {
    doodleDecorations.push({
      type: "grass",
      x: random(width),
      y: height - random(10, 90),
      size: random(18, 45),
      color: [random(50, 110), random(140, 200), random(50, 100)],
      blades: floor(random(3, 6))
    });
  }

  // flowers
  const flowerCount = floor(random(8, 16));
  const flowerColors = [
    [230, 80, 130],
    [240, 130, 60],
    [240, 200, 50],
    [180, 120, 200],
    [120, 180, 230],
    [240, 100, 90],
    [255, 160, 200]
  ];
  for (let i = 0; i < flowerCount; i++) {
    doodleDecorations.push({
      type: "flower",
      x: random(40, width - 40),
      y: height - random(15, 140),
      size: random(18, 36),
      color: random(flowerColors),
      petals: floor(random(5, 8)),
      stemLen: random(20, 55)
    });
  }

  // butterflies (a few)
  const butterflyCount = floor(random(0, 4));
  for (let i = 0; i < butterflyCount; i++) {
    doodleDecorations.push({
      type: "butterfly",
      x: random(width * 0.1, width * 0.9),
      y: random(height * 0.2, height * 0.65),
      size: random(20, 36),
      color: [random(150, 250), random(80, 180), random(150, 250)]
    });
  }

  // a couple of stray little hearts/stars
  const starCount = floor(random(2, 6));
  for (let i = 0; i < starCount; i++) {
    doodleDecorations.push({
      type: random() < 0.5 ? "star" : "heart",
      x: random(40, width - 40),
      y: random(80, height * 0.55),
      size: random(14, 26),
      color: random(flowerColors)
    });
  }

  // sort so background-y stuff (clouds, sun) draws first, foreground (grass) last
  const order = { sun: 0, cloud: 1, butterfly: 2, star: 3, heart: 3, flower: 4, grass: 5 };
  doodleDecorations.sort((a, b) => (order[a.type] ?? 9) - (order[b.type] ?? 9));
}

function drawDoodleDecorations() {
  push();
  strokeCap(ROUND);
  strokeJoin(ROUND);
  for (const d of doodleDecorations) {
    if (d.type === "sun") drawSun(d);
    else if (d.type === "cloud") drawCloud(d);
    else if (d.type === "grass") drawGrass(d);
    else if (d.type === "flower") drawFlower(d);
    else if (d.type === "butterfly") drawButterfly(d);
    else if (d.type === "star") drawStar(d);
    else if (d.type === "heart") drawHeart(d);
  }
  pop();
}

function drawSun(d) {
  push();
  // body
  noStroke();
  fill(d.color[0], d.color[1], d.color[2], 200);
  imperfectEllipse(d.x, d.y, d.size, d.size, 1.4);

  // outline
  noFill();
  stroke(d.color[0] * 0.6, d.color[1] * 0.45, 20, 220);
  strokeWeight(2.2);
  imperfectEllipse(d.x, d.y, d.size, d.size, 1.4);

  // rays
  strokeWeight(2.6);
  for (let i = 0; i < d.rays; i++) {
    const a = (TWO_PI / d.rays) * i;
    const r1 = d.size / 2 + 6;
    const r2 = d.size / 2 + 18 + random(-3, 6);
    line(
      d.x + cos(a) * r1,
      d.y + sin(a) * r1,
      d.x + cos(a) * r2 + random(-1.5, 1.5),
      d.y + sin(a) * r2 + random(-1.5, 1.5)
    );
  }

  // smiley face
  stroke(150, 80, 25, 220);
  strokeWeight(2.2);
  point(d.x - d.size * 0.13, d.y - d.size * 0.07);
  point(d.x + d.size * 0.13, d.y - d.size * 0.07);
  fill(150, 80, 25, 220);
  circle(d.x - d.size * 0.13, d.y - d.size * 0.07, 4);
  circle(d.x + d.size * 0.13, d.y - d.size * 0.07, 4);
  noFill();
  imperfectArc(d.x, d.y + d.size * 0.05, d.size * 0.36, d.size * 0.22, 0, PI, 0.8);
  pop();
}

function drawCloud(d) {
  push();
  noStroke();
  fill(255, 255, 255, 220);
  const r = d.size / 2;
  imperfectEllipse(d.x - r * 0.6, d.y, r * 1.0, r * 0.8, 1.5);
  imperfectEllipse(d.x, d.y - r * 0.25, r * 1.2, r * 0.95, 1.5);
  imperfectEllipse(d.x + r * 0.6, d.y, r * 1.0, r * 0.8, 1.5);
  imperfectEllipse(d.x + r * 0.2, d.y + r * 0.2, r * 0.9, r * 0.7, 1.5);

  noFill();
  stroke(60, 80, 110, 180);
  strokeWeight(2.0);
  beginShape();
  for (let a = 0; a < TWO_PI + 0.1; a += 0.18) {
    const wob = sin(a * 3) * 6;
    const rx = r * 1.2 + wob + random(-1, 1);
    const ry = r * 0.7 + wob * 0.5 + random(-1, 1);
    vertex(d.x + cos(a) * rx, d.y + sin(a) * ry);
  }
  endShape(CLOSE);
  pop();
}

function drawGrass(d) {
  push();
  stroke(d.color[0] * 0.6, d.color[1] * 0.7, d.color[2] * 0.6, 235);
  strokeWeight(2.1);
  noFill();
  const blades = d.blades;
  const spread = d.size;
  for (let i = 0; i < blades; i++) {
    const t = i / max(1, blades - 1);
    const bx = d.x + lerp(-spread / 2, spread / 2, t);
    const tipX = bx + random(-6, 6);
    const tipY = d.y - d.size * random(0.7, 1.2);
    beginShape();
    vertex(bx, d.y);
    quadraticVertex(
      bx + (tipX - bx) * 0.5 + random(-3, 3),
      (d.y + tipY) / 2,
      tipX,
      tipY
    );
    endShape();
  }
  // little base shadow
  stroke(d.color[0] * 0.5, d.color[1] * 0.55, d.color[2] * 0.5, 180);
  strokeWeight(2.4);
  line(d.x - spread / 2, d.y, d.x + spread / 2, d.y);
  pop();
}

function drawFlower(d) {
  push();
  // stem
  stroke(60, 130, 70, 220);
  strokeWeight(2.1);
  noFill();
  const stemTop = d.y - d.stemLen;
  beginShape();
  vertex(d.x, d.y);
  quadraticVertex(d.x + random(-8, 8), d.y - d.stemLen * 0.5, d.x + random(-3, 3), stemTop);
  endShape();

  // leaf
  fill(80, 160, 90, 220);
  stroke(50, 110, 60, 220);
  strokeWeight(1.6);
  push();
  translate(d.x, d.y - d.stemLen * 0.55);
  rotate(random(-0.6, 0.6));
  imperfectEllipse(7, 0, 18, 8, 0.9);
  pop();

  // petals
  noStroke();
  for (let i = 0; i < d.petals; i++) {
    const a = (TWO_PI / d.petals) * i;
    fill(d.color[0], d.color[1], d.color[2], 230);
    imperfectEllipse(
      d.x + cos(a) * d.size * 0.55,
      stemTop + sin(a) * d.size * 0.55,
      d.size * 0.7,
      d.size * 0.5,
      1.0
    );
  }
  // petal outlines
  stroke(d.color[0] * 0.6, d.color[1] * 0.5, d.color[2] * 0.6, 220);
  strokeWeight(1.6);
  noFill();
  for (let i = 0; i < d.petals; i++) {
    const a = (TWO_PI / d.petals) * i;
    imperfectEllipse(
      d.x + cos(a) * d.size * 0.55,
      stemTop + sin(a) * d.size * 0.55,
      d.size * 0.7,
      d.size * 0.5,
      1.0
    );
  }

  // center
  fill(245, 200, 60, 240);
  stroke(150, 90, 30, 220);
  strokeWeight(1.6);
  imperfectEllipse(d.x, stemTop, d.size * 0.55, d.size * 0.55, 0.7);
  pop();
}

function drawButterfly(d) {
  push();
  translate(d.x, d.y);
  noStroke();
  fill(d.color[0], d.color[1], d.color[2], 220);
  // wings
  imperfectEllipse(-d.size * 0.45, -d.size * 0.15, d.size * 0.9, d.size * 1.05, 1.0);
  imperfectEllipse(d.size * 0.45, -d.size * 0.15, d.size * 0.9, d.size * 1.05, 1.0);
  imperfectEllipse(-d.size * 0.40, d.size * 0.30, d.size * 0.7, d.size * 0.75, 1.0);
  imperfectEllipse(d.size * 0.40, d.size * 0.30, d.size * 0.7, d.size * 0.75, 1.0);

  // outlines
  noFill();
  stroke(d.color[0] * 0.5, d.color[1] * 0.4, d.color[2] * 0.5, 230);
  strokeWeight(1.6);
  imperfectEllipse(-d.size * 0.45, -d.size * 0.15, d.size * 0.9, d.size * 1.05, 1.0);
  imperfectEllipse(d.size * 0.45, -d.size * 0.15, d.size * 0.9, d.size * 1.05, 1.0);
  imperfectEllipse(-d.size * 0.40, d.size * 0.30, d.size * 0.7, d.size * 0.75, 1.0);
  imperfectEllipse(d.size * 0.40, d.size * 0.30, d.size * 0.7, d.size * 0.75, 1.0);

  // body
  stroke(40, 30, 25, 230);
  strokeWeight(2.2);
  line(0, -d.size * 0.5, 0, d.size * 0.6);
  // antennae
  strokeWeight(1.4);
  noFill();
  beginShape();
  vertex(0, -d.size * 0.5);
  quadraticVertex(-d.size * 0.2, -d.size * 0.85, -d.size * 0.35, -d.size * 0.95);
  endShape();
  beginShape();
  vertex(0, -d.size * 0.5);
  quadraticVertex(d.size * 0.2, -d.size * 0.85, d.size * 0.35, -d.size * 0.95);
  endShape();
  pop();
}

function drawStar(d) {
  push();
  translate(d.x, d.y);
  fill(d.color[0], d.color[1], d.color[2], 220);
  stroke(d.color[0] * 0.55, d.color[1] * 0.5, d.color[2] * 0.55, 230);
  strokeWeight(1.6);
  beginShape();
  const pts = 5;
  for (let i = 0; i < pts * 2; i++) {
    const r = i % 2 === 0 ? d.size : d.size * 0.45;
    const a = (PI / pts) * i - HALF_PI;
    vertex(cos(a) * r + random(-1, 1), sin(a) * r + random(-1, 1));
  }
  endShape(CLOSE);
  pop();
}

function drawHeart(d) {
  push();
  translate(d.x, d.y);
  fill(d.color[0], d.color[1], d.color[2], 220);
  stroke(d.color[0] * 0.55, d.color[1] * 0.5, d.color[2] * 0.55, 230);
  strokeWeight(1.6);
  const s = d.size;
  beginShape();
  for (let a = 0; a < TWO_PI + 0.1; a += 0.18) {
    const r = s * 0.06 * (16 * pow(sin(a), 3));
    const px = r * 1;
    const py = -(s * 0.06 * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a)));
    vertex(px + random(-1, 1), py + random(-1, 1));
  }
  endShape(CLOSE);
  pop();
}
// =============== END KID DOODLE BACKGROUND ===============

function drawPaperBackground() {
  background(248, 243, 232);

  noStroke();
  for (const d of paperDots) {
    fill(88, 75, 56, d.a);
    circle(d.x, d.y, d.s);
  }

  // grid lines — clearly visible like notebook/graph paper
  stroke(110, 145, 175, 95);
  strokeWeight(1.1);
  const cell = 32;
  for (let y = 0; y < height; y += cell) line(0, y, width, y);
  for (let x = 0; x < width; x += cell) line(x, 0, x, height);

  // every 5th line darker, like real graph paper
  stroke(80, 120, 160, 130);
  strokeWeight(1.4);
  for (let y = 0; y < height; y += cell * 5) line(0, y, width, y);
  for (let x = 0; x < width; x += cell * 5) line(x, 0, x, height);
}

function drawWaitingFace() {
  push();
  translate(width / 2, height / 2);
  stroke(35, 32, 28, 180);
  strokeWeight(3);
  noFill();
  imperfectEllipse(0, 0, 185, 210, 2);
  imperfectEllipse(-35, -25, 24, 26, 1.5);
  imperfectEllipse(35, -25, 24, 26, 1.5);
  drawMouthShape(0, 28, 72, 10, 8, false, 1.4);
  drawExaggeratedHair(0, -92, 172, 84, 2, 0, {
    headShape: "round",
    hairScale: 1.18,
    hairHeightMul: 1.1,
    hairType: 0,
    hairColor: [110, 70, 35]
  });
  noStroke();
  fill(35, 32, 28, 150);
  textAlign(CENTER);
  textSize(16);
  text("Looking for a face...", 0, 150);
  pop();
}

function mapPoint(p) {
  const sx = width / video.width;
  const sy = height / video.height;
  const rawX = p.x * sx;
  return {
    x: mirrorMode ? width - rawX : rawX,
    y: p.y * sy,
    score: p.score || p.confidence || 1,
    name: p.name
  };
}

function drawDoodlePerson(personData, personIndex) {
  const mapped = personData.mapped;
  const box = personData.box;

  const memory = personMemories[personIndex];
  const features = memory ? memory.features : analyzeFace(mapped);
  const hairColor = memory ? memory.hairColor : [110, 70, 35];
  const bodyColor = memory ? memory.bodyColor : [70, 130, 200];
  const chara = buildCharacterParams(features, personIndex);
  chara.hairColor = hairColor;
  chara.bodyColor = bodyColor;

  const cx = box.cx;
  const cy = box.cy;
  const w = box.w;
  const h = box.h;

  const jitter = currentStyle === "kid" ? 3.2 : currentStyle === "pencil" ? 1.25 : 1.8;
  const baseWeight = currentStyle === "comic" ? 3.0 : currentStyle === "pencil" ? 1.2 : 2.2;

  push();
  translate(cx, cy);

  const body = findNearestBody(cx, cy, w, h);
  if (body) drawDetectedBody(body, cx, cy, w, h, jitter, personIndex, chara);
  else drawFallbackBody(0, h * 0.58, w, h, jitter, personIndex, chara);

  if (currentStyle === "comic") drawComicBubble(w, h);

  stroke(34, 31, 27, currentStyle === "pencil" ? 125 : 230);
  strokeWeight(baseWeight);
  noFill();
  strokeCap(ROUND);
  strokeJoin(ROUND);

  const headW = w * 1.03 * chara.headWidthMul;
  const headH = h * 1.15 * chara.headHeightMul;

  repeatLine(() => drawStyledHead(0, 0, headW, headH, jitter, chara), currentStyle === "pencil" ? 3 : 1);

  drawEars(headW, headH, w, h, jitter, chara);

  const leftEye = localAvg(mapped, [33, 133, 159, 145], cx, cy);
  const rightEye = localAvg(mapped, [362, 263, 386, 374], cx, cy);
  drawStyledEye(leftEye.x, leftEye.y, w, h, jitter, chara);
  drawStyledEye(rightEye.x, rightEye.y, w, h, jitter, chara);

  drawBrow(leftEye.x, leftEye.y - h * 0.10, w * 0.17 * chara.eyeSizeMul, jitter, -1);
  drawBrow(rightEye.x, rightEye.y - h * 0.10, w * 0.17 * chara.eyeSizeMul, jitter, 1);

  const nose = localAvg(mapped, [1, 4, 5, 195], cx, cy);
  drawStyledNose(nose.x, nose.y, w, h, jitter, chara);

  const mouth = localAvg(mapped, [13, 14, 61, 291], cx, cy);
  drawStyledMouth(mouth.x, mouth.y, w, h, jitter, chara);

  drawExaggeratedHair(0, -headH * 0.42, headW, headH * 0.42, jitter, personIndex, chara);

  if (currentStyle === "kid") {
    drawCheeks(leftEye.x, mouth.y - h * 0.02, rightEye.x, mouth.y - h * 0.02, w, jitter, chara);
  }

  pop();
}

function analyzeFace(mapped) {
  const faceBox = getFaceBox(mapped);

  const faceWidth = distPts(mapped[234], mapped[454]) || faceBox.w;
  const faceHeight = distPts(mapped[10], mapped[152]) || faceBox.h;
  const faceRatio = faceWidth / max(1, faceHeight);

  const leftEyeWidth = distPts(mapped[33], mapped[133]);
  const leftEyeHeight = distPts(mapped[159], mapped[145]);
  const rightEyeWidth = distPts(mapped[362], mapped[263]);
  const rightEyeHeight = distPts(mapped[386], mapped[374]);

  const eyeWidth = (leftEyeWidth + rightEyeWidth) / 2;
  const eyeHeight = (leftEyeHeight + rightEyeHeight) / 2;
  const eyeOpenRatio = eyeHeight / max(1, eyeWidth);
  const eyeScale = eyeWidth / max(1, faceWidth);

  const mouthWidth = distPts(mapped[61], mapped[291]);
  const mouthOpen = distPts(mapped[13], mapped[14]);

  const upperLip = distPts(mapped[0], mapped[13]);
  const lowerLip = distPts(mapped[14], mapped[17]);
  const mouthThickness = upperLip + lowerLip;
  const mouthScale = mouthWidth / max(1, faceWidth);
  const mouthOpenScale = mouthOpen / max(1, faceHeight);
  const lipScale = mouthThickness / max(1, faceHeight);

  const noseLength = distPts(mapped[168], mapped[2]) || distPts(mapped[168], mapped[1]);
  const noseWidth = distPts(mapped[98], mapped[327]);
  const noseScale = noseLength / max(1, faceHeight);
  const noseWidthScale = noseWidth / max(1, faceWidth);

  const jawWidth = distPts(mapped[172], mapped[397]);
  const cheekWidth = distPts(mapped[234], mapped[454]);
  const roundness = cheekWidth / max(1, jawWidth || cheekWidth);

  return {
    faceBox,
    faceWidth,
    faceHeight,
    faceRatio,
    eyeWidth,
    eyeHeight,
    eyeOpenRatio,
    eyeScale,
    mouthWidth,
    mouthOpen,
    mouthThickness,
    mouthScale,
    mouthOpenScale,
    lipScale,
    noseLength,
    noseWidth,
    noseScale,
    noseWidthScale,
    roundness
  };
}

function buildCharacterParams(f, personIndex) {
  const avgFaceRatio = 0.78;
  const faceRatioEx = exaggerate(f.faceRatio, avgFaceRatio, EXAGGERATION);

  let headShape = "oval";
  let headWidthMul = 1.0;
  let headHeightMul = 1.0;

  if (faceRatioEx >= 0.86) {
    headShape = "round";
    headWidthMul = 1.12;
    headHeightMul = 0.94;
  } else if (faceRatioEx <= 0.70) {
    headShape = "long";
    headWidthMul = 0.90;
    headHeightMul = 1.18;
  } else if (f.roundness > 1.14) {
    headShape = "soft";
    headWidthMul = 1.05;
    headHeightMul = 1.00;
  }

  // ===== MORE SENSITIVE EYES =====
  // Stronger exaggeration so small openness changes register visually.
  const eyeScaleEx = exaggerate(f.eyeScale, 0.095, 1.7);
  const eyeOpenEx = exaggerate(f.eyeOpenRatio, 0.20, 2.4);

  let eyeStyle = "normal";
  let eyeSizeMul = 1.0;
  let pupilMul = 1.0;

  if (eyeOpenEx < 0.09) {
    // truly closed -> single line
    eyeStyle = "line";
    eyeSizeMul = 0.72;
    pupilMul = 0;
  } else {
    // smooth mapping from squint (0.10) to wide (0.40)
    eyeSizeMul = mapClamped(eyeOpenEx, 0.10, 0.40, 0.55, 1.95);
    pupilMul = mapClamped(eyeOpenEx, 0.10, 0.40, 0.40, 1.85);

    // very small still gets a soft squint look (slit) but not full line
    if (eyeOpenEx < 0.135) {
      eyeStyle = "squint";
    } else if (eyeOpenEx > 0.30) {
      eyeStyle = "big";
    } else {
      eyeStyle = "normal";
    }
  }

  // a little extra width modulation from horizontal eye scale
  eyeSizeMul *= mapClamped(eyeScaleEx, 0.07, 0.13, 0.85, 1.18);
  // ===== END EYES =====

  const mouthWidthMul = mapClamped(exaggerate(f.mouthScale, 0.34, 1.55), 0.22, 0.46, 0.62, 1.55);
  const mouthThicknessMul = mapClamped(exaggerate(f.lipScale, 0.055, 1.75), 0.025, 0.115, 0.55, 1.95);
  const mouthOpenMul = mapClamped(exaggerate(f.mouthOpenScale, 0.035, 2.0), 0.005, 0.13, 0.20, 2.25);

  const noseLengthMul = mapClamped(exaggerate(f.noseScale, 0.15, 1.65), 0.08, 0.24, 0.70, 1.60);
  const noseWidthMul = mapClamped(exaggerate(f.noseWidthScale, 0.18, 1.4), 0.09, 0.31, 0.72, 1.45);

  const hairScale = headShape === "round" ? 1.18 : headShape === "long" ? 1.02 : 1.10;
  const hairHeightMul = headShape === "long" ? 1.28 : 1.10;

  return {
    headShape,
    headWidthMul,
    headHeightMul,
    eyeStyle,
    eyeSizeMul,
    pupilMul,
    mouthWidthMul,
    mouthThicknessMul,
    mouthOpenMul,
    noseLengthMul,
    noseWidthMul,
    hairScale,
    hairHeightMul,
    hairType: personIndex % 4
  };
}

function updatePersonMemories(detectedPeople) {
  const nextMemories = [];
  const used = new Set();

  for (let i = 0; i < detectedPeople.length; i++) {
    const p = detectedPeople[i];
    const rawFeatures = analyzeFace(p.mapped);

    let bestIndex = -1;
    let bestDist = Infinity;

    for (let j = 0; j < personMemories.length; j++) {
      if (used.has(j)) continue;
      const old = personMemories[j];
      const d = dist(p.box.cx, p.box.cy, old.cx, old.cy);
      if (d < bestDist) {
        bestDist = d;
        bestIndex = j;
      }
    }

    if (bestIndex !== -1 && bestDist < max(130, p.box.w * 1.0)) {
      const old = personMemories[bestIndex];
      used.add(bestIndex);
      nextMemories[i] = {
        cx: lerp(old.cx, p.box.cx, 0.25),
        cy: lerp(old.cy, p.box.cy, 0.25),
        // less smoothing on eye openness so it reacts faster
        features: smoothFeatures(old.features, rawFeatures, 0.18),
        hairColor: old.hairColor || pickRandomHairColor(),
        bodyColor: old.bodyColor || pickRandomBodyColor()
      };
    } else {
      nextMemories[i] = {
        cx: p.box.cx,
        cy: p.box.cy,
        features: rawFeatures,
        hairColor: pickRandomHairColor(),
        bodyColor: pickRandomBodyColor()
      };
    }
  }

  personMemories = nextMemories;
}

function smoothFeatures(oldF, newF, amt) {
  const out = { ...newF };
  const keys = [
    "faceWidth", "faceHeight", "faceRatio", "eyeWidth", "eyeHeight", "eyeOpenRatio", "eyeScale",
    "mouthWidth", "mouthOpen", "mouthThickness", "mouthScale", "mouthOpenScale", "lipScale",
    "noseLength", "noseWidth", "noseScale", "noseWidthScale", "roundness"
  ];

  // eyeOpenRatio gets less smoothing (more responsive blinking/squinting)
  for (const k of keys) {
    if (oldF[k] !== undefined && newF[k] !== undefined) {
      const a = (k === "eyeOpenRatio" || k === "eyeHeight") ? min(1, amt * 2.4) : amt;
      out[k] = lerp(oldF[k], newF[k], a);
    }
  }

  out.faceBox = newF.faceBox;
  return out;
}

function drawStyledHead(x, y, w, h, jitter, chara) {
  if (chara.headShape === "round") {
    imperfectEllipse(x, y, w * 1.06, h * 0.95, jitter);
  } else if (chara.headShape === "long") {
    imperfectEllipse(x, y, w * 0.94, h * 1.13, jitter);
  } else if (chara.headShape === "soft") {
    drawSoftSquareFace(x, y, w, h, jitter);
  } else {
    imperfectEllipse(x, y, w, h, jitter);
  }
}

function drawSoftSquareFace(x, y, w, h, jitter) {
  beginShape();
  for (let a = 0; a < TWO_PI + 0.1; a += 0.13) {
    const c = cos(a);
    const s = sin(a);
    const px = x + Math.sign(c) * pow(abs(c), 0.72) * (w / 2 + random(-jitter, jitter));
    const py = y + Math.sign(s) * pow(abs(s), 0.72) * (h / 2 + random(-jitter, jitter));
    vertex(px, py);
  }
  endShape(CLOSE);
}

function drawEars(headW, headH, w, h, jitter, chara) {
  const earH = h * (chara.headShape === "long" ? 0.23 : 0.18);
  imperfectEllipse(-headW * 0.53, -h * 0.02, w * 0.12, earH, jitter);
  imperfectEllipse(headW * 0.53, -h * 0.02, w * 0.12, earH, jitter);
}

function drawStyledEye(x, y, w, h, jitter, chara) {
  const ew = w * 0.105 * chara.eyeSizeMul;
  const eh = h * 0.064 * chara.eyeSizeMul;

  if (chara.eyeStyle === "line") {
    wavyLine(x - ew * 0.85, y, x + ew * 0.85, y + random(-1, 1), 7, jitter * 0.55);
    return;
  }

  if (chara.eyeStyle === "squint") {
    // shallow arc for a squint, slightly more expressive than a flat line
    imperfectArc(x, y - eh * 0.2, ew * 1.6, eh * 1.3, 0, PI, jitter * 0.6);
    // small but visible pupil dot
    fill(34, 31, 27, 215);
    noStroke();
    circle(x, y - eh * 0.05, max(3, w * 0.022 * chara.pupilMul));
    noFill();
    stroke(34, 31, 27, currentStyle === "pencil" ? 125 : 230);
    return;
  }

  if (chara.eyeStyle === "big") {
    imperfectEllipse(x, y, ew * 1.05, eh * 1.15, jitter);
    fill(34, 31, 27, 215);
    noStroke();
    circle(x, y, max(7, w * 0.044 * chara.pupilMul));
    fill(248, 243, 232, 200);
    circle(x - w * 0.012, y - h * 0.012, max(3, w * 0.013));
    noFill();
    stroke(34, 31, 27, currentStyle === "pencil" ? 125 : 230);
    return;
  }

  // normal
  imperfectEllipse(x, y, ew, eh, jitter);
  fill(34, 31, 27, 210);
  noStroke();
  circle(x, y, max(5, w * 0.034 * chara.pupilMul));
  // small highlight even in normal mode for a kid-doodle "alive" feel
  fill(248, 243, 232, 180);
  circle(x - w * 0.009, y - h * 0.009, max(2, w * 0.010));
  noFill();
  stroke(34, 31, 27, currentStyle === "pencil" ? 125 : 230);
}

function drawBrow(x, y, len, jitter, dir) {
  const oldWeight = drawingContext.lineWidth;
  if (currentStyle === "pencil") strokeWeight(1);
  wavyLine(x - len / 2, y + random(-2, 2), x + len / 2, y - dir * random(1, 5), 8, jitter);
  strokeWeight(oldWeight);
}

function drawStyledNose(x, y, w, h, jitter, chara) {
  const noseH = h * 0.115 * chara.noseLengthMul;
  const noseW = w * 0.045 * chara.noseWidthMul;

  beginShape();
  vertex(x + random(-jitter, jitter), y - noseH * 0.65);
  vertex(x - noseW + random(-jitter, jitter), y + noseH * 0.50);
  vertex(x + noseW + random(-jitter, jitter), y + noseH * 0.55);
  endShape();

  if (chara.noseWidthMul > 1.1) {
    point(x - noseW * 0.65, y + noseH * 0.46);
    point(x + noseW * 0.65, y + noseH * 0.46);
  }
}

function drawStyledMouth(x, y, w, h, jitter, chara) {
  const mouthW = w * 0.23 * chara.mouthWidthMul;
  const lipH = h * 0.040 * chara.mouthThicknessMul;
  const openH = h * 0.055 * chara.mouthOpenMul;
  const isOpen = chara.mouthOpenMul > 1.08;
  const isSmall = chara.mouthWidthMul < 0.82;
  const isThick = chara.mouthThicknessMul > 1.18;

  if (isSmall && !isOpen) {
    drawMouthShape(x, y, mouthW * 0.78, lipH, 0, false, jitter);
    return;
  }

  if (isOpen) {
    drawMouthShape(x, y, mouthW, lipH, openH, true, jitter);
    return;
  }

  if (isThick) {
    imperfectArc(x, y - lipH * 0.18, mouthW, lipH * 2.1, PI, TWO_PI, jitter * 0.65);
    imperfectArc(x, y + lipH * 0.28, mouthW, lipH * 2.5, 0, PI, jitter * 0.65);
    wavyLine(x - mouthW * 0.45, y + lipH * 0.10, x + mouthW * 0.45, y + lipH * 0.10, 9, jitter * 0.45);
    return;
  }

  imperfectArc(x, y, mouthW, lipH * 2.0, 0, PI, jitter);
}

function drawMouthShape(x, y, mouthW, lipH, openH, isOpen, jitter) {
  if (!isOpen) {
    if (lipH < 5) {
      wavyLine(x - mouthW * 0.5, y, x + mouthW * 0.5, y, 8, jitter * 0.55);
    } else {
      imperfectArc(x, y, mouthW, lipH * 1.8, 0, PI, jitter);
    }
    return;
  }

  imperfectArc(x, y - openH * 0.12, mouthW, lipH * 2.2, PI, TWO_PI, jitter * 0.65);
  imperfectArc(x, y + openH * 0.34, mouthW, lipH * 2.6, 0, PI, jitter * 0.65);

  push();
  fill(34, 31, 27, 40);
  stroke(34, 31, 27, currentStyle === "pencil" ? 95 : 160);
  strokeWeight(currentStyle === "pencil" ? 1 : 1.7);
  imperfectEllipse(x, y + openH * 0.13, mouthW * 0.80, openH, jitter * 0.5);
  pop();
}

function drawCheeks(lx, ly, rx, ry, w, jitter, chara) {
  push();
  stroke(220, 110, 110, 110);
  strokeWeight(1.4);
  const cheekLen = w * (chara.headShape === "round" ? 0.08 : 0.065);
  for (let i = 0; i < 3; i++) {
    wavyLine(lx - w * 0.15, ly + i * 5, lx - w * 0.15 + cheekLen, ly + i * 5, 3, jitter);
    wavyLine(rx + w * 0.15 - cheekLen, ry + i * 5, rx + w * 0.15, ry + i * 5, 3, jitter);
  }
  pop();
}

function drawExaggeratedHair(x, y, headW, hairH, jitter, personIndex, chara) {
  const hc = chara.hairColor || [40, 35, 30];
  const outR = constrain(hc[0] * 0.55, 0, 255);
  const outG = constrain(hc[1] * 0.55, 0, 255);
  const outB = constrain(hc[2] * 0.55, 0, 255);
  const strokeAlpha = currentStyle === "pencil" ? 0.58 : 0.92;

  const type = chara.hairType ?? personIndex % 4;
  const hw = headW * chara.hairScale;
  const hh = hairH * chara.hairHeightMul;

  // Build vertex list ONCE so fill / clip / stroke all share the exact
  // same jittered shape (otherwise random() makes them drift apart).
  const verts = buildHairVertices(type, x, y, hw, hh, jitter);

  const ctx = drawingContext;

  // 1. light wash so areas missed by the hatching aren't pure transparent
  applyHairPathToCtx(ctx, verts);
  ctx.fillStyle = `rgba(${floor(hc[0])}, ${floor(hc[1])}, ${floor(hc[2])}, 0.18)`;
  ctx.fill();

  // 2. crayon hatching, clipped to the hair shape
  ctx.save();
  applyHairPathToCtx(ctx, verts);
  ctx.clip();
  drawCrayonHatch(x, y, hw, hh, hc, currentStyle);
  ctx.restore();

  // 3. outline on top, in a darker version of the hair color
  applyHairPathToCtx(ctx, verts);
  ctx.strokeStyle = `rgba(${floor(outR)}, ${floor(outG)}, ${floor(outB)}, ${strokeAlpha})`;
  ctx.lineWidth = currentStyle === "pencil" ? 1.15 : 2.4;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  // 4. loose strands flying out (drawn on top, NOT clipped)
  push();
  noFill();
  stroke(outR * 0.85, outG * 0.85, outB * 0.85, (currentStyle === "pencil" ? 130 : 220));
  strokeWeight(currentStyle === "pencil" ? 1.15 : 2.0);
  const strandCount = currentStyle === "pencil" ? 8 : 5;
  for (let i = 0; i < strandCount; i++) {
    const sx = x - hw * 0.35 + i * hw * 0.12;
    wavyLine(sx, y + hh * 0.10, sx + random(-12, 12), y + hh * random(0.40, 0.72), 5, jitter * 0.75);
  }
  pop();
}

// Pre-compute the hair outline as a list of canvas path commands.
// Doing this in one place lets fill, clip and stroke all reuse the
// identical jittered geometry — otherwise random() drift causes the
// crayon fill and the outline to disagree on where the edge is.
function buildHairVertices(type, x, y, hw, hh, jitter) {
  const v = [];

  if (type === 0) {
    v.push({ k: "M", x: x - hw * 0.58, y: y + hh * 0.28 });
    v.push({ k: "C", cx1: x - hw * 0.50, cy1: y - hh * 0.55, cx2: x + hw * 0.48, cy2: y - hh * 0.55, x: x + hw * 0.58, y: y + hh * 0.26 });
    v.push({ k: "L", x: x + hw * 0.40, y: y + hh * 0.76 });
    v.push({ k: "L", x: x + hw * 0.17, y: y + hh * 0.40 });
    v.push({ k: "L", x: x,             y: y + hh * 0.80 });
    v.push({ k: "L", x: x - hw * 0.18, y: y + hh * 0.40 });
    v.push({ k: "L", x: x - hw * 0.42, y: y + hh * 0.76 });
  } else if (type === 1) {
    v.push({ k: "M", x: x - hw * 0.64, y: y + hh * 0.16 });
    v.push({ k: "C", cx1: x - hw * 0.56, cy1: y - hh * 0.50, cx2: x + hw * 0.54, cy2: y - hh * 0.50, x: x + hw * 0.64, y: y + hh * 0.16 });
    v.push({ k: "L", x: x + hw * 0.60, y: y + hh * 1.02 });
    v.push({ k: "L", x: x + hw * 0.25, y: y + hh * 0.70 });
    v.push({ k: "L", x: x,             y: y + hh * 0.95 });
    v.push({ k: "L", x: x - hw * 0.25, y: y + hh * 0.70 });
    v.push({ k: "L", x: x - hw * 0.60, y: y + hh * 1.02 });
  } else if (type === 2) {
    let first = true;
    for (let i = -7; i <= 7; i++) {
      const px = x + i * hw * 0.075 + random(-jitter, jitter);
      const py1 = y + random(-hh * 0.04, hh * 0.22);
      if (first) { v.push({ k: "M", x: px, y: py1 }); first = false; }
      else       { v.push({ k: "L", x: px, y: py1 }); }
      const py2 = y - random(hh * 0.22, hh * 0.66);
      v.push({ k: "L", x: px + random(-jitter, jitter), y: py2 });
    }
    v.push({ k: "L", x: x + hw * 0.56, y: y + hh * 0.58 });
    v.push({ k: "L", x: x - hw * 0.56, y: y + hh * 0.58 });
  } else {
    v.push({ k: "M", x: x - hw * 0.56, y: y + hh * 0.42 });
    v.push({ k: "C", cx1: x - hw * 0.24, cy1: y - hh * 0.60, cx2: x + hw * 0.46, cy2: y - hh * 0.44, x: x + hw * 0.58, y: y + hh * 0.22 });
    v.push({ k: "L", x: x + hw * 0.38, y: y + hh * 0.76 });
    v.push({ k: "L", x: x + hw * 0.08, y: y + hh * 0.43 });
    v.push({ k: "L", x: x - hw * 0.24, y: y + hh * 0.70 });
    v.push({ k: "L", x: x - hw * 0.46, y: y + hh * 0.64 });
  }

  return v;
}

function applyHairPathToCtx(ctx, verts) {
  ctx.beginPath();
  for (const cmd of verts) {
    if (cmd.k === "M") ctx.moveTo(cmd.x, cmd.y);
    else if (cmd.k === "L") ctx.lineTo(cmd.x, cmd.y);
    else if (cmd.k === "C") ctx.bezierCurveTo(cmd.cx1, cmd.cy1, cmd.cx2, cmd.cy2, cmd.x, cmd.y);
  }
  ctx.closePath();
}

// Crayon-style fill: a band of half-transparent diagonal strokes plus
// some shorter scribble strokes. Drawn straight to canvas context so
// per-line strokeStyle / lineWidth changes are cheap.
function drawCrayonHatch(cx, cy, hw, hh, hc, style) {
  const ctx = drawingContext;
  ctx.lineCap = "round";

  const angle = -Math.PI / 4;     // 45-degree downward-left to upper-right
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const spacing = style === "pencil" ? 4 : 5;
  const range = max(hw, hh) * 1.4;
  const lineCount = ceil((range * 2) / spacing);
  const colorStr = `${floor(hc[0])}, ${floor(hc[1])}, ${floor(hc[2])}`;

  // main long diagonal hatching
  for (let i = -lineCount; i <= lineCount; i++) {
    const offset = i * spacing + random(-0.8, 0.8);
    const mx = cx - sinA * offset;
    const my = cy + cosA * offset;

    const t = range;
    const x1 = mx - cosA * t + random(-2, 2);
    const y1 = my - sinA * t + random(-2, 2);
    const x2 = mx + cosA * t + random(-2, 2);
    const y2 = my + sinA * t + random(-2, 2);

    const a = random(0.32, 0.68);
    ctx.strokeStyle = `rgba(${colorStr}, ${a.toFixed(3)})`;
    ctx.lineWidth = random(1.0, 2.2);

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // shorter "wrist scribble" strokes for extra crayon texture
  const shortCount = style === "pencil" ? 22 : 32;
  for (let j = 0; j < shortCount; j++) {
    const a = angle + random(-0.35, 0.35);
    const sx = cx + random(-hw * 0.55, hw * 0.55);
    const sy = cy + random(-hh * 0.55, hh * 0.55);
    const len = random(8, 20);

    const alpha = random(0.20, 0.55);
    ctx.strokeStyle = `rgba(${colorStr}, ${alpha.toFixed(3)})`;
    ctx.lineWidth = random(1.0, 2.0);

    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx + Math.cos(a) * len, sy + Math.sin(a) * len);
    ctx.stroke();
  }
}

function findNearestBody(faceCX, faceCY, faceW, faceH) {
  if (!bodies || bodies.length === 0) return null;

  let best = null;
  let bestD = Infinity;

  for (const b of bodies) {
    const nose = getBodyPoint(b, "nose");
    if (!nose) continue;
    const p = mapPoint(nose);
    const d = dist(faceCX, faceCY, p.x, p.y);
    if (d < bestD && d < faceH * 1.4) {
      bestD = d;
      best = b;
    }
  }

  return best;
}

function getBodyPoint(body, name) {
  if (!body || !body.keypoints) return null;
  return body.keypoints.find((k) => k.name === name || k.part === name);
}

function drawDetectedBody(body, faceCX, faceCY, faceW, faceH, jitter, personIndex, chara) {
  const names = [
    "left_shoulder", "right_shoulder", "left_elbow", "right_elbow", "left_wrist", "right_wrist",
    "left_hip", "right_hip"
  ];

  let pts = {};
  for (const n of names) {
    const p = getBodyPoint(body, n);
    if (p && (p.score === undefined || p.score > 0.2)) {
      const m = mapPoint(p);
      pts[n] = { x: m.x - faceCX, y: m.y - faceCY };
    }
  }

  push();
  strokeCap(ROUND);
  strokeJoin(ROUND);

  if (pts.left_shoulder && pts.right_shoulder) {
    const leftHip = pts.left_hip || { x: pts.left_shoulder.x + faceW * 0.08, y: pts.left_shoulder.y + faceH * 1.05 };
    const rightHip = pts.right_hip || { x: pts.right_shoulder.x - faceW * 0.08, y: pts.right_shoulder.y + faceH * 1.05 };

    // ---- shirt fill (kid-doodle color) ----
    const bc = chara.bodyColor || [200, 200, 200];
    push();
    noStroke();
    fill(bc[0], bc[1], bc[2], 215);
    beginShape();
    vertex(pts.left_shoulder.x + random(-jitter, jitter), pts.left_shoulder.y + random(-jitter, jitter));
    vertex(pts.right_shoulder.x + random(-jitter, jitter), pts.right_shoulder.y + random(-jitter, jitter));
    vertex(rightHip.x + random(-jitter, jitter), rightHip.y + random(-jitter, jitter));
    vertex(leftHip.x + random(-jitter, jitter), leftHip.y + random(-jitter, jitter));
    endShape(CLOSE);

    // sleeve color blobs around the upper arms
    if (pts.left_elbow) {
      imperfectEllipse(
        (pts.left_shoulder.x + pts.left_elbow.x) / 2,
        (pts.left_shoulder.y + pts.left_elbow.y) / 2,
        faceW * 0.20, faceH * 0.18, jitter
      );
    }
    if (pts.right_elbow) {
      imperfectEllipse(
        (pts.right_shoulder.x + pts.right_elbow.x) / 2,
        (pts.right_shoulder.y + pts.right_elbow.y) / 2,
        faceW * 0.20, faceH * 0.18, jitter
      );
    }
    pop();
    // ---- end shirt fill ----

    stroke(34, 31, 27, currentStyle === "pencil" ? 105 : 205);
    strokeWeight(currentStyle === "pencil" ? 1.2 : 2.1);
    noFill();

    wavyLine(pts.left_shoulder.x, pts.left_shoulder.y, pts.right_shoulder.x, pts.right_shoulder.y, 10, jitter);

    wavyLine(pts.left_shoulder.x, pts.left_shoulder.y, leftHip.x, leftHip.y, 10, jitter);
    wavyLine(pts.right_shoulder.x, pts.right_shoulder.y, rightHip.x, rightHip.y, 10, jitter);
    wavyLine(leftHip.x, leftHip.y, rightHip.x, rightHip.y, 10, jitter);

    drawBodyLimb(pts.left_shoulder, pts.left_elbow, pts.left_wrist, jitter);
    drawBodyLimb(pts.right_shoulder, pts.right_elbow, pts.right_wrist, jitter);

    const midX = (pts.left_shoulder.x + pts.right_shoulder.x) / 2;
    const midY = (pts.left_shoulder.y + pts.right_shoulder.y) / 2;
    drawShirtDetails(midX, midY, faceW, faceH, jitter, personIndex, chara);
  } else {
    drawFallbackBody(0, faceH * 0.58, faceW, faceH, jitter, personIndex, chara);
  }
  pop();
}

function drawBodyLimb(a, b, c, jitter) {
  if (a && b) wavyLine(a.x, a.y, b.x, b.y, 8, jitter);
  if (b && c) wavyLine(b.x, b.y, c.x, c.y, 8, jitter);
  if (c) imperfectEllipse(c.x, c.y, 16, 12, jitter * 0.7);
}

function drawFallbackBody(x, y, headW, headH, jitter, personIndex, chara) {
  push();

  const neckW = headW * 0.22;
  const shoulderY = y + 42;
  const shoulderWidth = headW * (chara.headShape === "round" ? 0.72 : 0.64);
  const bodyH = min(180, headH * 0.76);

  // ---- shirt fill ----
  const bc = chara.bodyColor || [200, 200, 200];
  noStroke();
  fill(bc[0], bc[1], bc[2], 215);
  beginShape();
  vertex(x - shoulderWidth + random(-jitter, jitter), shoulderY + 30);
  vertex(x - neckW / 2 + random(-jitter, jitter), shoulderY + random(-jitter, jitter));
  vertex(x + neckW / 2 + random(-jitter, jitter), shoulderY + random(-jitter, jitter));
  vertex(x + shoulderWidth + random(-jitter, jitter), shoulderY + 30);
  vertex(x + shoulderWidth * 1.18 + random(-jitter, jitter), shoulderY + bodyH * 0.78);
  vertex(x + headW * 0.36 + random(-jitter, jitter), shoulderY + bodyH);
  vertex(x - headW * 0.36 + random(-jitter, jitter), shoulderY + bodyH);
  vertex(x - shoulderWidth * 1.18 + random(-jitter, jitter), shoulderY + bodyH * 0.78);
  endShape(CLOSE);
  // ---- end shirt fill ----

  stroke(34, 31, 27, currentStyle === "pencil" ? 105 : 205);
  strokeWeight(currentStyle === "pencil" ? 1.2 : 2.1);
  noFill();

  line(x - neckW / 2, y - 8, x - neckW / 2, y + 32);
  line(x + neckW / 2, y - 8, x + neckW / 2, y + 32);

  wavyLine(x - shoulderWidth, shoulderY + 30, x - neckW / 2, shoulderY, 10, jitter);
  wavyLine(x + neckW / 2, shoulderY, x + shoulderWidth, shoulderY + 30, 10, jitter);

  wavyLine(x - headW * 0.50, shoulderY + 32, x - headW * 0.36, shoulderY + bodyH, 8, jitter);
  wavyLine(x + headW * 0.50, shoulderY + 32, x + headW * 0.36, shoulderY + bodyH, 8, jitter);
  wavyLine(x - headW * 0.36, shoulderY + bodyH, x + headW * 0.36, shoulderY + bodyH, 8, jitter);

  wavyLine(x - shoulderWidth, shoulderY + 32, x - shoulderWidth * 1.18, shoulderY + bodyH * 0.78, 8, jitter);
  wavyLine(x + shoulderWidth, shoulderY + 32, x + shoulderWidth * 1.18, shoulderY + bodyH * 0.78, 8, jitter);

  drawShirtDetails(x, shoulderY, headW, headH, jitter, personIndex, chara);
  pop();
}

function drawShirtDetails(x, y, w, h, jitter, personIndex, chara) {
  if (personIndex % 3 === 0) {
    imperfectArc(x, y + 28, w * 0.28, 35, 0, PI, jitter);
  } else if (personIndex % 3 === 1) {
    wavyLine(x - 23, y + 30, x + 23, y + 30, 6, jitter);
    wavyLine(x - 18, y + 48, x + 18, y + 48, 6, jitter);
  } else {
    imperfectEllipse(x, y + 48, w * 0.10, h * 0.05, jitter);
  }
}

function updateAndDrawFingerDrawing() {
  if (!enableFingerDrawing || !hands || hands.length === 0) {
    activeFingerPoints = {};
    return;
  }

  push();
  stroke(36, 33, 29, 170);
  strokeWeight(currentStyle === "pencil" ? 1.3 : 2.2);
  noFill();
  strokeCap(ROUND);

  hands.forEach((hand, i) => {
    const tip = getIndexTip(hand);
    if (!tip) return;

    const p = mapPoint(tip);
    const id = hand.handedness || hand.label || String(i);
    const last = activeFingerPoints[id];

    if (last && dist(last.x, last.y, p.x, p.y) < 120) {
      drawingPaths.push({
        x1: last.x,
        y1: last.y,
        x2: p.x,
        y2: p.y
      });
      wavyLine(last.x, last.y, p.x, p.y, 4, 1.5);
    }

    activeFingerPoints[id] = p;

    push();
    fill(34, 31, 27, 95);
    noStroke();
    circle(p.x, p.y, 12);
    pop();
  });

  pop();
}

function drawSavedFingerDrawing() {
  push();
  stroke(36, 33, 29, 140);
  strokeWeight(currentStyle === "pencil" ? 1.2 : 2.0);
  noFill();
  strokeCap(ROUND);
  for (const seg of drawingPaths) {
    line(seg.x1, seg.y1, seg.x2, seg.y2);
  }
  pop();
}

function getIndexTip(hand) {
  if (!hand) return null;
  if (hand.index_finger_tip) return hand.index_finger_tip;

  if (hand.keypoints) {
    const named = hand.keypoints.find((k) => k.name === "index_finger_tip" || k.part === "index_finger_tip");
    if (named) return named;
    return hand.keypoints[8];
  }

  if (hand.landmarks) return hand.landmarks[8];
  return null;
}

function drawComicBubble(w, h) {
  push();
  noStroke();
  fill(255, 252, 246, 150);
  ellipse(0, 0, w * 1.48, h * 1.58);
  pop();
}

function getFaceBox(points) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const p of points) {
    minX = min(minX, p.x);
    minY = min(minY, p.y);
    maxX = max(maxX, p.x);
    maxY = max(maxY, p.y);
  }

  return {
    x: minX,
    y: minY,
    w: maxX - minX,
    h: maxY - minY,
    cx: (minX + maxX) / 2,
    cy: (minY + maxY) / 2
  };
}

function localAvg(points, ids, cx, cy) {
  let x = 0;
  let y = 0;
  let count = 0;

  for (const id of ids) {
    if (points[id]) {
      x += points[id].x - cx;
      y += points[id].y - cy;
      count++;
    }
  }

  return {
    x: x / max(1, count),
    y: y / max(1, count)
  };
}

function distPts(a, b) {
  if (!a || !b) return 0;
  return dist(a.x, a.y, b.x, b.y);
}

function repeatLine(fn, times) {
  for (let i = 0; i < times; i++) fn();
}

function imperfectEllipse(x, y, w, h, jitter) {
  beginShape();
  for (let a = 0; a < TWO_PI + 0.1; a += 0.13) {
    const rx = (w / 2) + random(-jitter, jitter);
    const ry = (h / 2) + random(-jitter, jitter);
    vertex(x + cos(a) * rx, y + sin(a) * ry);
  }
  endShape(CLOSE);
}

function imperfectArc(x, y, w, h, start, stop, jitter) {
  beginShape();
  for (let a = start; a <= stop; a += 0.12) {
    const rx = (w / 2) + random(-jitter, jitter);
    const ry = (h / 2) + random(-jitter, jitter);
    vertex(x + cos(a) * rx, y + sin(a) * ry);
  }
  endShape();
}

function wavyLine(x1, y1, x2, y2, steps, jitter) {
  beginShape();
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = lerp(x1, x2, t) + random(-jitter, jitter);
    const y = lerp(y1, y2, t) + random(-jitter, jitter);
    vertex(x, y);
  }
  endShape();
}

function mapClamped(value, inMin, inMax, outMin, outMax) {
  const t = constrain((value - inMin) / (inMax - inMin), 0, 1);
  return lerp(outMin, outMax, t);
}

function exaggerate(value, center, amount) {
  return center + (value - center) * amount;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  makePaperTexture();
  makeDoodleDecorations();
}