// https://editor.p5js.org/jht9629-nyu/sketches/uiGpjxuK4
// 2024-11-21-yoga5.js

let bodyPose;
let poses = [];
let rightShin,
  leftShin,
  rightThigh,
  leftThigh,
  rightChest,
  leftChest,
  rightArm,
  leftArm;

let inPose = false;
let corrections = [];

function preload() {
  bodyPose = ml5.bodyPose("BlazePose", { flipped: true });
}

function gotPoses(results) {
  poses = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  bodyPose.detectStart(video, gotPoses);
  angleMode(DEGREES);
}

function draw() {
  image(video, 0, 0);
  createClasses();
}

function mouseClicked() {
  print(poses[0]);
}

function createClasses() {
  //creates class according to first body detected

  if (poses.length > 0) {
    const pose = poses[0];
    rightShin = new RightShin(pose);
    leftShin = new LeftShin(pose);
    rightThigh = new RightThigh(pose);
    leftThigh = new LeftThigh(pose);
    rightChest = new RightChest(pose);
    leftChest = new LeftChest(pose);
    rightArm = new RightArm(pose);
    leftArm = new LeftArm(pose);
    // print("classes created")

    // Pose detection conditional
    if (
      rightThigh.confidence >= 0.9 &&
      rightThigh.angle <= 30 &&
      rightThigh.angle >= -20
    ) {
      inPose = true;
      print("pose detected");
    } else {
      inPose = false;
    }
    if (inPose) {
      if (
        rightShin.confidence > 0.9 &&
        rightShin.angle >= 110 &&
        rightShin.confidence > 0.9 &&
        rightShin.angle <= 70
      ) {
        print("move knee above ankle");
        fill("red");
        circle(rightThigh.rightKnee.x, rightThigh.rightKnee.y, 30);
      }
      if (
        (rightArm.confidence > 0.9 && rightArm.angle * -1 <= 165) ||
        (rightArm.confidence > 0.9 && rightArm.angle >= 15)
      ) {
        fill("red");
        circle(rightArm.rightWrist.x, rightArm.rightWrist.y, 30);
        print("straighten your right arm");
      }
      if (
        (leftArm.confidence > 0.9 && leftArm.angle >= 15) ||
        (leftArm.confidence > 0.9 && leftArm.angle * -1 >= 15)
      ) {
        fill("red");
        circle(leftArm.leftWrist.x, leftArm.leftWrist.y, 30);
        print("straighten your left arm" + leftArm.angle);
      }
      if (
        (leftThigh.confidence > 0.9 &&
          leftThigh.angle >= leftShin.angle + 15) ||
        (leftThigh.confidence > 0.9 && leftThigh.angle <= leftShin.angle - 15)
      ) {
        print("straighten left leg");
        fill("red");
        circle(leftThigh.leftKnee.x, leftThigh.leftKnee.y, 30);
      }
    }
  }
}

// https://troubled-feverfew-aa9.notion.site/yoga5-js-13657a4143dd801d93f7e4645d2a97b2
// by Dean Issacharoff <dai7591@nyu.edu>
// https://editor.p5js.org/iss.dean/sketches/bh7KzYj6z
// yoga5.js by dean
