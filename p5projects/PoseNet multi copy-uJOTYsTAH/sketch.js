// https://editor.p5js.org/jht1493/sketches/xjAXcxLSW
// PoseNet multi

let video;
let poseNet;
let poses;
// let skeleton;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function gotPoses(aposes) {
  //console.log(poses);
  if (aposes.length > 0) {
    // pose = poses[0].pose;
    // skeleton = poses[0].skeleton;
    poses = aposes;
  }
}

function modelLoaded() {
  console.log("poseNet ready");
}

function draw() {
  image(video, 0, 0);

  if (poses) {
    for (let pose of poses) {
      draw_pose(pose.pose, pose.skeleton);
    }
  }
}

function draw_pose(pose, skeleton) {
  let eyeR = pose.rightEye;
  let eyeL = pose.leftEye;
  let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
  fill(255, 0, 0);
  ellipse(pose.nose.x, pose.nose.y, d);
  fill(0, 0, 255);
  ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
  ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);

  for (let i = 0; i < pose.keypoints.length; i++) {
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    fill(0, 255, 0);
    ellipse(x, y, 16, 16);
  }

  for (let i = 0; i < skeleton.length; i++) {
    let a = skeleton[i][0];
    let b = skeleton[i][1];
    strokeWeight(2);
    stroke(255);
    line(a.position.x, a.position.y, b.position.x, b.position.y);
  }
}

// https://editor.p5js.org/jht1493/sketches/TKHz6fbAa
// PoseNet 1

/// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg
// https://editor.p5js.org/codingtrain/sketches/ULA97pJXR
