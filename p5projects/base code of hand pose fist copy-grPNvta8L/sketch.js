// https://editor.p5js.org/jht9629-nyu/sketches/grPNvta8L
// https://editor.p5js.org/yueyanZ/sketches/LmuGgp7nH

let video;
let handPose;
let hands = [];

let circlePositions = []; // store bubble positions
let circleVelocities = []; // store bubble velocities
let lastFistState = false;

let leftWristCurrent = null;
let lastLeftWrist = null;
// Array to store floating circles
let floatingCircles = [];

function preload() {
  // Initialize HandPose model with flipped video input
  handPose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}

function gotHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  // Start detecting hands
  handPose.detectStart(video, gotHands);
}

function draw() {
  image(video, 0, 0);

  for (let h = 0; h < hands.length; h++) {
    let hand = hands[h];

    // Draw keypoints
    for (let i = 0; i < hand.keypoints.length; i++) {
      let keypoint = hand.keypoints[i];
      fill(255, 0, 255);
      noStroke();
      circle(keypoint.x, keypoint.y, 16);
    }

    // Fist / open detection using average distance from wrist to fingertips
    let wrist = hand.keypoints[0];
    // Track left wrist for swipe
    // Track left wrist for swipe
    // Track left wrist for swipe
    if (hand.handedness === "Left") {
      leftWristCurrent = { x: wrist.x, y: wrist.y };
    }

    // Left-hand swipe: remove nearby floating circles
    if (lastLeftWrist && leftWristCurrent) {
      let swipeSpeed = dist(
        lastLeftWrist.x,
        lastLeftWrist.y,
        leftWristCurrent.x,
        leftWristCurrent.y
      );
      if (swipeSpeed > 30) {
        // fast swipe threshold
        for (let i = floatingCircles.length - 1; i >= 0; i--) {
          let c = floatingCircles[i];
          let d = dist(c.x, c.y, leftWristCurrent.x, leftWristCurrent.y);
          if (d < 150) {
            // swipe influence radius
            floatingCircles.splice(i, 1);
          }
        }
      }
    }

    lastLeftWrist = leftWristCurrent;

    let fingerTips = [
      hand.keypoints[4],
      hand.keypoints[8],
      hand.keypoints[12],
      hand.keypoints[16],
      hand.keypoints[20],
    ];

    let avgDist = 0;
    for (let j = 0; j < fingerTips.length; j++) {
      let tip = fingerTips[j];
      avgDist += dist(wrist.x, wrist.y, tip.x, tip.y);
    }
    avgDist /= fingerTips.length;

    let isFist = avgDist < 100;

    // Fist: turn keypoints black
    if (isFist) {
      for (let i = 0; i < hand.keypoints.length; i++) {
        let keypoint = hand.keypoints[i];
        fill(0);
        circle(keypoint.x, keypoint.y, 16);
      }
    }

    // Detect fist → open transition to add floating circle
    if (lastFistState && !isFist) {
      let centerX = wrist.x;
      let centerY = wrist.y;
      for (let j = 0; j < fingerTips.length; j++) {
        centerX += fingerTips[j].x;
        centerY += fingerTips[j].y;
      }
      centerX /= 6;
      centerY /= 6;

      // Add a new floating circle with random color and velocity
      floatingCircles.push({
        x: centerX,
        y: centerY,
        vx: random(-2, 2),
        vy: random(-2, 2),
        color: [random(255), random(255), random(255), 150],
      });
    }

    lastFistState = isFist;
  }

  // Draw and update all floating circles
  for (let i = 0; i < floatingCircles.length; i++) {
    let c = floatingCircles[i];
    fill(c.color[0], c.color[1], c.color[2], c.color[3]);
    noStroke();
    ellipse(c.x, c.y, 100, 100);

    // Update position
    c.x += c.vx;
    c.y += c.vy;

    // Bounce off edges
    if (c.x < 50 || c.x > width - 50) c.vx *= -1;
    if (c.y < 50 || c.y > height - 50) c.vy *= -1;
  }
}
