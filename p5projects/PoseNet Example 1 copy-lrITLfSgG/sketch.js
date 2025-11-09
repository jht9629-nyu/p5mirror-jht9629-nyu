// https://editor.p5js.org/jht1493/sketches/xKSDq-w4H
// PoseNet Example 1

let video;
let poseNet;
let pose;
let skeleton;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  init_ui();
}

function gotPoses(poses) {
  //console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  print('poseNet ready');
}

function draw() {
  image(video, 0, 0);
  if (!pose) return;
  show_fps();
  
  let eyeR = pose.rightEye;
  let eyeL = pose.leftEye;
  let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

  fill(255, 0, 0); // Red nose
  ellipse(pose.nose.x, pose.nose.y, d);

  fill(0, 0, 255); // Blue wrists
  ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
  ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);

  for (let i = 0; i < pose.keypoints.length; i++) {
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;

    fill(0, 255, 0); // Green
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

// https://learn.ml5js.org/#/reference/posenet

// 2020-11-04 jht: Rebuilt - original fails to duplicate. 
//   Added ui.js
// https://editor.p5js.org/codingtrain/sketches/ULA97pJXR
// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg
