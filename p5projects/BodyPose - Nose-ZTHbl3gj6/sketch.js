// https://editor.p5js.org/jht9629-nyu/sketches/ZTHbl3gj6
// https://editor.p5js.org/codingtrain/sketches/AWrwZ_rSv
// BodyPose - Nose

let video;

let bodyPose;
let connections;

let poses = [];

function preload() {
  bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
}

function mousePressed() {
  console.log(poses);
}

function gotPoses(results) {
  poses = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
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
