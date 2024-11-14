// https://editor.p5js.org/jht9629-nyu/sketches/R_V1zXMRt
// BodyPose - Nose v2

let video;

let bodyPose;
let connections;
let flipped = false;
let poses = [];

// function preload() {
//   bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
// }

function mousePressed() {
  console.log(poses);
}

function gotPoses(results) {
  poses = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped });
  // video = createCapture(VIDEO );
  video.hide();
  bodyPose = ml5.bodyPose("MoveNet", { flipped }, modelLoaded);
  // bodyPose = ml5.bodyPose("MoveNet", gotBodyPose);

  // bodyPose.detectStart(video, gotPoses);
}

function modelLoaded() {
  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  image(video, 0, 0);

  if (poses.length > 0) {
    let pose = poses[0];
    fill(236, 1, 90);
    noStroke();
    circle(pose.nose.x, pose.nose.y, 20);
  }
}

// https://editor.p5js.org/jht9629-nyu/sketches/ZTHbl3gj6
// https://editor.p5js.org/codingtrain/sketches/AWrwZ_rSv
// BodyPose - Nose

// let flipped = true;
// Does not work, using modelLoaded
