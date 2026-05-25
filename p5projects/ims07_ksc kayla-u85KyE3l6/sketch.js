// https://editor.p5js.org/jht9629-nyu/sketches/u85KyE3l6
// https://editor.p5js.org/roxwav/sketches/8elzWKVr1
// ims07_ksc kayla

let fullscreenButton;
// let bgImg;

let song;
let fft;

let amp = 0;
let lightning = 0;
let speed = 1;

let lowEnergy = 0;
let midEnergy = 0;
let highEnergy = 0;

// nonlinear sensitivity controls
let sensitivity = 2.8;
let energyFloor = 10;
let energyBoost = 1.15;

// linear spectrogram history is commented out
// let specHistory = [];
// let specCols = 150;
// let specBands = 72;

let particles = [];
let num = 700;

let bga = 15;
let sw = 1.4;

let lightX = 0;
let lightY = 0;
let lightTargetX = 0;
let lightTargetY = 0;

let initLightA = true;
let initLightB = true;
let initLightC = true;
let initLightD = true;

let dir = 1;
let lineMode = false;
let portrait = false;
let mobile = false;

const noiseScaleLandscape = 0.01;
const noiseScalePortrait = 0.014;
let noiseScale = noiseScaleLandscape;

function preload() {
  song = loadSound("castle mover.mp3");
  // bgImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fullscreenButton = createButton("fullscreen");
  fullscreenButton.position(windowWidth - 120, windowHeight - 45);
  fullscreenButton.style("font-family", "monospace");
  fullscreenButton.style("font-size", "12px");
  fullscreenButton.style("text-transform", "lowercase");
  fullscreenButton.style("color", "rgb(255, 205, 230)");
  fullscreenButton.style("background", "rgba(8, 4, 12, 0.55)");
  fullscreenButton.style("border", "1px solid rgba(255, 205, 230, 0.6)");
  fullscreenButton.style("border-radius", "999px");
  fullscreenButton.style("padding", "8px 14px");
  fullscreenButton.style("cursor", "pointer");
  fullscreenButton.mousePressed(toggleFullscreen);

  pixelDensity(1);
  drawBackgroundImage();

  parseURLParams();
  updateScreenMode();

  for (let i = 0; i < num; i++) {
    particles.push(new FlowParticle(random(width), random(height)));
  }

  fft = new p5.FFT(0.75, 1024);

  lightX = width * 0.8;
  lightY = height * 0.2;
  lightTargetX = lightX;
  lightTargetY = lightY;
}

function drawBackgroundImage() {
  // tint(255, bga);
  // image(bgImg, 0, 0, width, height);
  // noTint();

  background(8, 4, 12, 18);
}

function draw() {
  drawBackgroundImage();

  if (song.isLoaded() && song.isPlaying()) {
    fft.analyze();

    lowEnergy = fft.getEnergy(20, 250);
    midEnergy = fft.getEnergy(250, 2000);
    highEnergy = fft.getEnergy(2000, 10000);

    // linear spectrogram history is turned off
    // updateSpectrogramHistory();

    amp = lowEnergy;

    let lowNorm = shapeEnergy(lowEnergy);

    lightning = map(lowNorm, 0, 1, 0.5, 2.6, true);
    speed = map(lowNorm, 0, 1, 0.22, 3.0, true);
  } else {
    amp = 0;
    lightning = 0.5;
    speed = 0.65;

    lowEnergy = 0;
    midEnergy = 0;
    highEnergy = 0;
  }

  let t = song.isLoaded() ? song.currentTime() : 0;

  updateVisualStateBySection(t);
  updateTrailAndStroke(t);
  updateLight(t);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update(t);
    particles[i].display(t);
    particles[i].wrap();
  }

  drawStartHint();
}

function shapeEnergy(value) {
  let norm = map(value, energyFloor, 255, 0, 1, true);
  norm = pow(norm, energyBoost);
  norm *= sensitivity;
  return constrain(norm, 0, 1);
}

// linear spectrogram functions are commented out
// function updateSpectrogramHistory() {
//   let spectrum = fft.analyze();
//   let frameBands = [];
//
//   for (let i = 0; i < specBands; i++) {
//     let index = floor(map(i, 0, specBands - 1, 0, spectrum.length - 1));
//     let boosted = shapeEnergy(spectrum[index]) * 255;
//     frameBands.push(boosted);
//   }
//
//   specHistory.push(frameBands);
//
//   if (specHistory.length > specCols) {
//     specHistory.shift();
//   }
// }
//
// function getSpectralEnergyAt(x, y) {
//   if (specHistory.length === 0) {
//     return 0;
//   }
//
//   let timeIndex = floor(map(x, 0, width, 0, specHistory.length - 1));
//   let bandIndex = floor(map(y, height, 0, 0, specBands - 1));
//
//   timeIndex = constrain(timeIndex, 0, specHistory.length - 1);
//   bandIndex = constrain(bandIndex, 0, specBands - 1);
//
//   return specHistory[timeIndex][bandIndex];
// }

class FlowParticle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prev = this.pos.copy();
    this.offset = random(1000);
    this.speedMul = random(0.7, 1.2);

    this.kind = random(["dot", "dot", "dot", "heart", "star"]);
    this.size = random(3, 8);
    this.rot = random(TAU);
    this.rotSpeed = random(-0.025, 0.025);
  }

  update(t) {
    this.prev = this.pos.copy();

    let n = noise(this.pos.x * noiseScale, this.pos.y * noiseScale);
    let a = TAU * n;

    let floatyDrift = sin(frameCount * 0.01 + this.offset) * 0.35;
    let localSpeed = speed * this.speedMul;

    this.pos.x += cos(a + floatyDrift) * localSpeed;
    this.pos.y += sin(a + floatyDrift) * localSpeed;

    this.rot += this.rotSpeed;
  }

  display(t) {
    let xNorm = this.pos.x / width;
    let yNorm = this.pos.y / height;

    let bassGlow = shapeEnergy(lowEnergy);
    let midGlow = shapeEnergy(midEnergy);
    let highGlow = shapeEnergy(highEnergy);

    let hueBase = map(xNorm, 0, 1, 285, 25);
    let verticalShift = map(yNorm, 0, 1, -80, 105);

    let audioShift =
      bassGlow * 40 +
      midGlow * 100 +
      highGlow * 155;

    let motionShift = sin(frameCount * 0.022 + this.offset) * 55;

    let h = hueBase + verticalShift + audioShift + motionShift;
    h = (h + 360) % 360;

    let s = map(midGlow + highGlow, 0, 2, 22, 100, true);
    let br = map(bassGlow + highGlow, 0, 2, 45, 100, true);

    let alpha = map(
      dist(lightX, lightY, this.pos.x, this.pos.y),
      0,
      min(width, height) * 0.48,
      0.95,
      0.16,
      true
    );

    let energyMix = constrain((bassGlow + midGlow + highGlow) / 3, 0, 1);
    alpha *= map(energyMix, 0, 1, 0.45, 1.0, true);

    if (t > 10.67 && t < 14.21) {
      alpha = max(alpha, 0.55);
    }

    let highSparkle = map(highGlow, 0, 1, 0.85, 2.2, true);
    let sparkle = map(
      sin(frameCount * 0.08 + this.offset),
      -1,
      1,
      0.65,
      highSparkle
    );

    let energySize = map(energyMix, 0, 1, 0.6, 2.8, true);
    let displaySize = this.size * sparkle * energySize;

    colorMode(HSB, 360, 100, 100, 1);

    if (lineMode) {
      stroke(h, s, br, alpha);
      strokeWeight(sw + energyMix * 1.8);
      line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
    } else {
      drawParticleShape(
        this.kind,
        this.pos.x,
        this.pos.y,
        displaySize,
        this.rot,
        h,
        s,
        br,
        alpha
      );
    }

    colorMode(RGB, 255, 255, 255, 255);
  }

  wrap() {
    if (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    ) {
      this.pos.x = random(width);
      this.pos.y = random(height);
      this.prev = this.pos.copy();
    }
  }
}

function updateVisualStateBySection(t) {
  if (t < 3.55) {
    initLight0();
    initLightA = false;
    noiseSeed(1);
  } else if (t < 7.13) {
    initLight1();
    initLightB = false;
    noiseSeed(2);
  } else if (t < 10.67) {
    initLight2();
    initLightC = false;
    noiseSeed(50);
  } else if (t < 14.21) {
    noiseSeed(4);
  } else {
    if (t < 29) {
      initLight3();
      initLightD = false;
    } else {
      initLightA = true;
      initLightB = true;
      initLightC = true;
      initLightD = true;
    }

    noiseSeed(10);
  }
}

function updateTrailAndStroke(t) {
  if (t > 2.3 && t < 3.55) {
    bga += 1.1;
    sw -= 0.08;
  } else if (t > 5.85 && t < 7.14) {
    bga += 1.1;
    sw -= 0.08;
  } else if (t > 9.47 && t < 10.67) {
    bga += 1.1;
    sw -= 0.08;
  } else if (t > 11.58 && t < 14.22) {
    if (t > 13.5) {
      bga += 6;
      sw -= 0.06;
    } else {
      bga += 0.15;
      sw -= 0.005;
    }
  } else if (t > 29) {
    bga += 1.1;
    sw -= 0.08;
  } else if (t > 14.22) {
    if (lightning > 1.5) {
      bga = 12;
      sw = 1.5;
    } else {
      bga += 0.55;
      sw -= 0.06;
    }
  } else {
    bga = 12;
    sw = 1.5;
  }

  bga = constrain(bga, 5, 55);
  sw = constrain(sw, 0.3, 3);
}

function updateLight(t) {
  if (t < 3.55) {
    lightTargetX -= 3.1;
    lightTargetY += 0.18;
  } else if (t < 7.13) {
    lightTargetX -= 2.8;
    lightTargetY -= 1.1;
  } else if (t < 10.67) {
    lightTargetX -= 3.1;
    lightTargetY += 0.35;
  } else if (t < 14.21) {
    lightTargetX = mouseX;
    lightTargetY = mouseY;
  } else {
    if (lightTargetX > width || lightTargetX < 0) {
      dir *= -1;
    }

    if (lightning > 1.5) {
      lightTargetX = random(width);
      lightTargetY = random(height);
    } else {
      lightTargetX += 2.1 * dir;
    }
  }

  lightX = lerp(lightX, lightTargetX, 0.16);
  lightY = lerp(lightY, lightTargetY, 0.16);
}

function drawParticleShape(kind, x, y, s, rot, h, sat, br, a) {
  push();
  translate(x, y);
  rotate(rot);

  colorMode(HSB, 360, 100, 100, 1);
  noStroke();
  fill(h, sat, br, a);

  if (kind === "dot") {
    ellipse(0, 0, s, s);
  } else if (kind === "heart") {
    drawHeart(0, 0, s);
  } else if (kind === "star") {
    drawStar(0, 0, s * 0.45, s, 5);
  }

  colorMode(RGB, 255, 255, 255, 255);
  pop();
}

function drawHeart(x, y, s) {
  beginShape();
  vertex(x, y + s * 0.25);
  bezierVertex(
    x - s * 0.85,
    y - s * 0.35,
    x - s * 0.9,
    y + s * 0.75,
    x,
    y + s * 1.15
  );
  bezierVertex(
    x + s * 0.9,
    y + s * 0.75,
    x + s * 0.85,
    y - s * 0.35,
    x,
    y + s * 0.25
  );
  endShape(CLOSE);
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TAU / npoints;
  let halfAngle = angle / 2.0;

  beginShape();

  for (let a = -PI / 2; a < TAU - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);

    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }

  endShape(CLOSE);
}

function initLight0() {
  if (initLightA) {
    lightTargetX = width * 0.9;
    lightTargetY = height * 0.05;
    lightX = lightTargetX;
    lightY = lightTargetY;
  }
}

function initLight1() {
  if (initLightB) {
    lightTargetX = width * 0.85;
    lightTargetY = height * 0.7;
    lightX = lightTargetX;
    lightY = lightTargetY;
  }
}

function initLight2() {
  if (initLightC) {
    lightTargetX = width * 0.9;
    lightTargetY = height * 0.05;
    lightX = lightTargetX;
    lightY = lightTargetY;
  }
}

function initLight3() {
  if (initLightD) {
    lightTargetX = width * 0.02;
    lightTargetY = height * 0.92;
    lightX = lightTargetX;
    lightY = lightTargetY;
  }
}

function mousePressed() {
  userStartAudio();

  if (song.isLoaded() && !song.isPlaying()) {
    song.loop();
    song.setVolume(0.4);
  }
}

function keyPressed() {
  if (key === "l" || key === "L") {
    lineMode = !lineMode;
  }

  if (key === " ") {
    userStartAudio();

    if (song.isPlaying()) {
      song.pause();
    } else {
      song.loop();
    }
  }

  if (key === "r" || key === "R") {
    if (song.isLoaded()) {
      song.stop();
      song.loop();
    }
  }
}

function parseURLParams() {
  let params = new URLSearchParams(window.location.search);

  if (params.get("mode") === "lines") {
    lineMode = true;
  }

  let density = int(params.get("density"));

  if (!isNaN(density) && density > 100 && density < 5000) {
    num = density;
  }
}

function updateScreenMode() {
  portrait = windowHeight > windowWidth;
  mobile = /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent);
  noiseScale = portrait ? noiseScalePortrait : noiseScaleLandscape;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateScreenMode();
  background(0);

  if (fullscreenButton) {
    fullscreenButton.position(windowWidth - 120, windowHeight - 45);
  }
}

function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);

  if (fullscreenButton) {
    if (fs) {
      fullscreenButton.html("fullscreen");
    } else {
      fullscreenButton.html("exit");
    }
  }
}

function drawStartHint() {
  if (!song.isPlaying()) {
    noStroke();
    fill(255, 205, 230, 150);
    textAlign(CENTER, CENTER);
    textSize(min(width, height) * 0.03);
    text("click to start audio", width * 0.5, height * 0.92);
  }
}