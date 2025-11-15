//
// https://docs.ml5js.org/#/reference/bodypose?id=quick-start
// https://editor.p5js.org/ml5/sketches/hMN9GdrO3
// bodyPose-skeleton by ml5

// let video;
// let bodyPose;
// let poses = [];
// let connections;

function preload() {
  // Load the bodyPose model
  my.bodyPose = ml5.bodyPose();
  // my.bodyPose = ml5.bodyPose({ flipped: true });
}

function bodyPose_setup() {
  // Start detecting poses in the webcam video
  my.bodyPose.detectStart(my.video, bodyPose_gotPoses);
  // Get the skeleton connection information
  my.connections = my.bodyPose.getSkeleton();
  my.poses = [];
}

// Callback function for when bodyPose outputs data
function bodyPose_gotPoses(results) {
  // Save the output to the poses variable
  my.poses = results;
}

function bodyPose_draw() {
  // Draw the skeleton connections
  let connections = my.connections;
  let poses = my.poses;
  let layer = my.layer;
  if (my.showPose) {
    for (let i = 0; i < poses.length; i++) {
      let pose = poses[i];
      for (let j = 0; j < connections.length; j++) {
        let pointAIndex = connections[j][0];
        let pointBIndex = connections[j][1];
        let pointA = pose.keypoints[pointAIndex];
        let pointB = pose.keypoints[pointBIndex];
        // Only draw a line if both points are confident enough
        if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
          layer.stroke(255, 0, 0);
          layer.strokeWeight(2);
          layer.line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }
    }
  }
  // Draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    if (my.showPose) {
      for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
        // Only draw a circle if the keypoint's confidence is bigger than 0.1
        if (keypoint.confidence > 0.1) {
          layer.fill(0, 255, 0);
          layer.noStroke();
          layer.circle(keypoint.x, keypoint.y, 10);
        }
      }
    }
    bodyPose_record_nose(layer, pose, i);
  }
  if (my.last_nose_pos.length > poses.length) {
    my.last_nose_pos.splice(0, my.last_nose_pos.length - poses.length);
  }
}

function bodyPose_record_nose(layer, pose, i) {
  // Update my.last_nose_pos
  let x = pose.nose.x;
  let y = pose.nose.y;
  let ent = my.last_nose_pos[i];
  if (!ent) {
    ent = [];
    my.last_nose_pos[i] = ent;
  }
  ent.push({ x, y });
  if (ent.length >= 3) {
    ent.splice(0, 1);
  }
  y -= (y - pose.left_eye.y) * 2;
  layer.fill(0, 255, 0);
  layer.text(i, x, y);
}
