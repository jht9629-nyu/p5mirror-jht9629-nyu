let video;
let poseNet;
let pose;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);

  // listen for poses
  // whenever human pose is detected, 
  // call a function to get results
  poseNet.on('pose', gotHumans);
}

function gotHumans(humans) {
  // if there is pose data
  if (humans.length > 0) {
    // store data from first human detected
    pose = humans[0].pose;
    // console.log(pose);
  }
}

function modelLoaded() {
  console.log('poseNet ready');
  select('#status').html('');
}

function draw() {
  // reverse canvas context to mirror everything
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0);

  if (pose) {
    // loop through all keypoints
    for (let i = 0; i < pose.keypoints.length; i++) {
      // get x, y data for each keypoint
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      // draw circles with x, y data
      fill(0, 255, 0);
      ellipse(x, y, 16, 16);
    }
  }
  pop();
}

/*
Keypoints:
0   nose
1	leftEye
2	rightEye
3	leftEar
4	rightEar
5	leftShoulder
6	rightShoulder
7	leftElbow
8	rightElbow
9	leftWrist
10	rightWrist
11	leftHip
12	rightHip
13	leftKnee
14	rightKnee
15	leftAnkle
16	rightAnkle
*/

// 2020-11-04 jht: Added status clear
// https://editor.p5js.org/enickles/sketches/Wqwidx12a
/* 
Modified from ml5.js: Pose Estimation with PoseNet, Example 1
The Coding Train / Daniel Shiffman
https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
https://youtu.be/OIo-DIOkNVg
https://editor.p5js.org/codingtrain/sketches/ULA97pJXR
*/

