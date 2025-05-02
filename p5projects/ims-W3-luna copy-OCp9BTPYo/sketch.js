//Orginal code from Professor Carrie Wang:
https://editor.p5js.org/re7l/sketches/e-LPIpri2V

//Bit similar to one of my other code:
https://editor.p5js.org/Zichen_Feng/sketches/NYC7H3R9j

//Demo for changing url:
https://lunafeng922.github.io/ims-2025-Luna/ims-W3-luna/index.html?bgColor=250,250,200,5&leftColor=255,255,100,50&rightColor=200,255,100,50&scale=1

//Things I add: distance between fingers - volume; ypos of circles - pitch;xpos of circles - panning; scales choice - 1-7; circles&bg -color choice;

let handPose;
let video;

let leftX = 0,
  leftY = 0,
  rightX = 0,
  rightY = 0;
let leftD = 0,
  rightD = 0;

let leftOsc, rightOsc;

let fullscreenButton;

let videoW, videoH, videoX, videoY;

let pentatonic = [];
let scaleIndex = 1;
let scaleNames = {
  1: "Major",
  2: "Minor",
  3: "Blues",
  4: "Egypt",
  5: "Hirajoshi",
  6: "Yo",
  7: "Balinese",
};

const scalePresets = {
  1: [0, 2, 4, 7, 9], // Major
  2: [0, 3, 5, 7, 10], // Minor
  3: [0, 3, 5, 6, 7, 10], // Blues
  4: [0, 2, 5, 7, 10], // Egypt
  5: [0, 2, 3, 7, 8], // Hirajoshi
  6: [0, 2, 5, 7, 9], // Yo
  7: [0, 1, 3, 7, 8], // Balinese
};

let leftColor = [80, 255, 100, 50];
let rightColor = [255, 0, 100, 50];

let bgColor = [255, 5];

let handDetectedLeft = false;
let handDetectedRight = false;

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose.detectStart(video, gotHands);
  userStartAudio();

  leftOsc = new p5.Oscillator("triangle");
  rightOsc = new p5.Oscillator("square");
  leftOsc.start();
  rightOsc.start();
  leftOsc.amp(0);
  rightOsc.amp(0);

  fullscreenButton = createButton("Fullscreen");
  fullscreenButton.mousePressed(toggleFullscreen);
  positionUI();
  updateVideoDisplay();

  let urlParams = get_url_params();

  // url - circle colors
  if (urlParams.leftColor) {
    leftColor = urlParams.leftColor.split(",").map(Number);
  }
  if (urlParams.rightColor) {
    rightColor = urlParams.rightColor.split(",").map(Number);
  }

  // url - bg
  if (urlParams.bgColor) {
    bgColor = urlParams.bgColor.split(",").map(Number);
  }

  // url - pentatonic choice
  if (urlParams.scale && scalePresets[urlParams.scale]) {
    scaleIndex = urlParams.scale;
  }

  let rootNote = 220;
  pentatonic = getPentatonicFromRoot(rootNote, scalePresets[scaleIndex]);

  console.log("Scale:", scaleIndex, pentatonic);
}

function draw() {
  background(...bgColor);

  updateVideoDisplay();

  noStroke();

  if (handDetectedLeft && leftD > 0) {
    fill(...leftColor);
    circle(leftX, leftY, leftD);
  }

  if (handDetectedRight && rightD > 0) {
    fill(...rightColor);
    circle(rightX, rightY, rightD);
  }

  if (!handDetectedLeft) leftOsc.amp(0, 0.1);
  if (!handDetectedRight) rightOsc.amp(0, 0.1);

  // Current Scale name and instruction text
  push();
  fill(0);
  textSize(24);
  textAlign(LEFT, TOP);
  textFont("Doto");
  text("Scale:" + scaleNames[scaleIndex], 20, 20);
  text(
    "*** Pinch your thumbs and index fingers together to draw and compose ***",
    20,
    height - 70
  );
  pop();
}

function gotHands(results) {
  handDetectedLeft = false;
  handDetectedRight = false;

  let vw = video.width;
  let vh = video.height;

  // results.forEach((hand) => {
  results.forEach(hand_detected);
}

function hand_detected (hand) {
    let landmarks = hand;

    if (landmarks.thumb_tip && landmarks.index_finger_tip) {
      let x1 = map(landmarks.thumb_tip.x, 0, vw, videoX + videoW, videoX);
      let y1 = map(landmarks.thumb_tip.y, 0, vh, videoY, videoY + videoH);
      let x2 = map(
        landmarks.index_finger_tip.x,
        0,
        vw,
        videoX + videoW,
        videoX
      );
      let y2 = map(
        landmarks.index_finger_tip.y,
        0,
        vh,
        videoY,
        videoY + videoH
      );

      let centerX = (x1 + x2) / 2;
      let centerY = (y1 + y2) / 2;
      let distBetween = dist(x1, y1, x2, y2);
      let volume = map(distBetween, 20, 200, 0, 0.5);
      volume = constrain(volume, 0, 0.5);

      let noteIndexY = Math.floor(
        map(centerY, height, 0, 0, pentatonic.length)
      );
      noteIndexY = constrain(noteIndexY, 0, pentatonic.length - 1);

      let panXR = map(centerX, 0, width / 2, -1, 1);
      panXR = constrain(panXR, -1, 1);
      let panXL = map(centerX, width / 2, width, -1, 1);
      panXL = constrain(panXL, -1, 1);

      if (landmarks.handedness === "Left") {
        leftX = centerX;
        leftY = centerY;
        leftD = distBetween;

        leftOsc.freq(pentatonic[noteIndexY]);
        leftOsc.amp(volume, 0.05);
        leftOsc.pan(panXL);
        handDetectedLeft = true;
      }

      if (landmarks.handedness === "Right") {
        rightX = centerX;
        rightY = centerY;
        rightD = distBetween;

        rightOsc.freq(pentatonic[noteIndexY]);
        rightOsc.amp(volume * 0.5, 0.05);
        rightOsc.pan(panXR);
        handDetectedRight = true;
      }
    }
  }
function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  setTimeout(() => {
    resizeCanvas(windowWidth, windowHeight);
    updateVideoDisplay();
    positionUI();
  }, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateVideoDisplay();
  positionUI();
}

function positionUI() {
  fullscreenButton.position(20, height - 30);
}

function updateVideoDisplay() {
  let aspect = 4 / 3;
  if (windowWidth / windowHeight > aspect) {
    videoH = windowHeight;
    videoW = videoH * aspect;
  } else {
    videoW = windowWidth;
    videoH = videoW / aspect;
  }
  videoX = (width - videoW) / 2;
  videoY = (height - videoH) / 2;
}

function getPentatonicFromRoot(rootFreq, semitoneOffsets) {
  return semitoneOffsets.map((offset) => rootFreq * Math.pow(2, offset / 12));
}

// url parameters
function get_url_params() {
  let query = window.location.search;
  if (query.length < 1) return {};
  return Object.fromEntries(new URLSearchParams(query));
}
