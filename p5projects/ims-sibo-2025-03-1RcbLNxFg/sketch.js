// https://editor.p5js.org/siboyang0719/sketches/4eCQdAsa0
// ims-sibo-2025-03
// https://editor.p5js.org/jht9629-nyu/sketches/1RcbLNxFg

let alarmTime = "09:35";
let catIsHere = false;
let meowSound;
let testBtn, snoozeBtn;
let objects = [];
let chaosLevel = 0;

// Face tracking
let faceapi, video;
let detections = [];
let eyeOffsetX = 0;
let eyeOffsetY = 0;
let faceDetected = false;

function preload() {
  meowSound = loadSound("meow.mp3");
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(32);

  // Buttons
  testBtn = createButton("☀️ Wake the Cat");
  testBtn.position(20, 20);
  testBtn.mousePressed(triggerChaos);

  snoozeBtn = createButton("😴 Snooze?");
  snoozeBtn.position(150, 20);
  snoozeBtn.mousePressed(increaseChaos);

  // Webcam
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  const faceOptions = {
    withLandmarks: true,
    withDescriptors: false,
  };

  faceapi = ml5.faceApi(video, faceOptions, () => {
    console.log("FaceAPI ready!");
    faceapi.detect(gotResults);
  });
}

function draw() {
  if (chaosLevel > 0) {
    background(random(255), random(255), random(255));
  } else {
    background(255);
  }

  let now = nf(hour(), 2) + ":" + nf(minute(), 2);
  fill(0);
  text("Time: " + now, width / 2, 50);

  if (now === alarmTime && !catIsHere) {
    triggerChaos();
  }

  if (catIsHere) {
    drawCat();
    updateFallingObjects();
  }
}

function triggerChaos() {
  catIsHere = true;
  if (!meowSound.isPlaying()) {
    meowSound.loop();
    meowSound.setVolume(0.2); // Start quiet
  }
  chaosLevel = 1;
  spawnFallingObjects();
}

function increaseChaos() {
  chaosLevel += 1;
  spawnFallingObjects();

  // Make the sound louder with each snooze
  let newVolume = min(1, 0.2 * chaosLevel);
  meowSound.setVolume(newVolume);
}

function drawCat() {
  push();
  translate(width / 2, height / 2 + sin(frameCount * chaosLevel * 0.1) * 10);

  // Body & Head
  fill(200, 170, 140);
  ellipse(0, 50, 100, 130);
  ellipse(0, -40, 100, 100);

  // Ears
  triangle(-35, -70, -20, -110 + sin(frameCount * 0.1) * 2, -5, -70);
  triangle(35, -70, 20, -110 + cos(frameCount * 0.1) * 2, 5, -70);

  // Eyes
  fill(255);
  ellipse(-20, -45, 20, 25);
  ellipse(20, -45, 20, 25);
  fill(0);
  ellipse(-20 + eyeOffsetX, -45 + eyeOffsetY, 8, 12);
  ellipse(20 + eyeOffsetX, -45 + eyeOffsetY, 8, 12);

  // Nose & Mouth
  fill(255, 150, 150);
  triangle(-5, -30, 5, -30, 0, -20);
  noFill();
  stroke(0);
  arc(-5, -10, 10, 10, 0, PI);
  arc(5, -10, 10, 10, 0, PI);

  // Whiskers
  stroke(100);
  line(-30, -20, -60, -25);
  line(-30, -15, -60, -15);
  line(-30, -10, -60, -5);
  line(30, -20, 60, -25);
  line(30, -15, 60, -15);
  line(30, -10, 60, -5);

  // Tail wiggle
  noStroke();
  fill(200, 170, 140);
  beginShape();
  curveVertex(40, 80);
  curveVertex(40, 80);
  curveVertex(70, 90 + sin(frameCount * 0.1) * 5);
  curveVertex(60, 120);
  curveVertex(50, 110);
  curveVertex(40, 80);
  endShape(CLOSE);

  // Reaction Text
  fill(0);
  textSize(20);
  text("MEOW x" + chaosLevel + "!!", 0, 110);
  textSize(16);
  if (faceDetected) {
    text("👀 I see you!", 0, 140);
  } else {
    text("❓Where are you?", 0, 140);
  }

  pop();
}

function spawnFallingObjects() {
  for (let i = 0; i < 10 * chaosLevel; i++) {
    objects.push({
      x: random(width),
      y: random(-300, 0),
      speed: random(2, 5 + chaosLevel * 2),
      size: random(10, 25)
    });
  }
}

function updateFallingObjects() {
  fill(50);
  for (let i = objects.length - 1; i >= 0; i--) {
    let obj = objects[i];
    obj.y += obj.speed;
    ellipse(obj.x + random(-chaosLevel, chaosLevel), obj.y, obj.size);

    if (obj.y > height + 50) {
      objects.splice(i, 1);
    }
  }
}

function gotResults(err, result) {
  if (err) {
    console.error(err);
    return;
  }

  detections = result;

  if (detections && detections.length > 0) {
    faceDetected = true;
    let leftEye = detections[0].parts.leftEye[0];
    eyeOffsetX = map(leftEye._x, 0, width, -5, 5);
    eyeOffsetY = map(leftEye._y, 0, height, -5, 5);
  } else {
    faceDetected = false;
    eyeOffsetX = sin(frameCount * 0.1) * 3;
    eyeOffsetY = cos(frameCount * 0.1) * 3;
  }

  faceapi.detect(gotResults);
}