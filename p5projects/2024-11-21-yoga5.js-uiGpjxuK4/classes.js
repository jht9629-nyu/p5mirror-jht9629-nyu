class RightShin {
  constructor(pose) {
    if (pose.right_ankle && pose.right_knee) {
      this.rightAnkle = createVector(pose.right_ankle.x, pose.right_ankle.y);
      this.rightKnee = createVector(pose.right_knee.x, pose.right_knee.y);
      this.rightShin = p5.Vector.sub(this.rightAnkle, this.rightKnee);
      this.angle = this.rightShin.heading();
      this.confidence = (pose.right_knee.confidence + pose.right_ankle.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class LeftShin {
  constructor(pose) {
    if (pose.left_ankle && pose.left_knee) {
      this.leftAnkle = createVector(pose.left_ankle.x, pose.left_ankle.y);
      this.leftKnee = createVector(pose.left_knee.x, pose.left_knee.y);
      this.leftShin = p5.Vector.sub(this.leftAnkle, this.leftKnee);
      this.angle = this.leftShin.heading();
      this.confidence = (pose.left_knee.confidence + pose.left_ankle.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class RightThigh {
  constructor(pose) {
    if (pose.right_knee && pose.right_hip) {
      this.rightKnee = createVector(pose.right_knee.x, pose.right_knee.y);
      this.rightHip = createVector(pose.right_hip.x, pose.right_hip.y);
      this.rightThigh = p5.Vector.sub(this.rightKnee, this.rightHip);
      this.angle = this.rightThigh.heading();
      this.confidence = (pose.right_knee.confidence + pose.right_hip.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class LeftThigh {
  constructor(pose) {
    if (pose.left_knee && pose.left_hip) {
      this.leftKnee = createVector(pose.left_knee.x, pose.left_knee.y);
      this.leftHip = createVector(pose.left_hip.x, pose.left_hip.y);
      this.leftThigh = p5.Vector.sub(this.leftKnee, this.leftHip);
      this.angle = this.leftThigh.heading();
      this.confidence = (pose.left_knee.confidence + pose.left_hip.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class RightChest {
  constructor(pose) {
    if (pose.right_hip && pose.right_shoulder) {
      this.rightHip = createVector(pose.right_hip.x, pose.right_hip.y);
      this.rightShoulder = createVector(pose.right_shoulder.x, pose.right_shoulder.y);
      this.rightChest = p5.Vector.sub(this.rightHip, this.rightShoulder);
      this.angle = this.rightChest.heading();
      this.confidence = (pose.right_shoulder.confidence + pose.right_hip.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class LeftChest {
  constructor(pose) {
    if (pose.left_hip && pose.left_shoulder) {
      this.leftHip = createVector(pose.left_hip.x, pose.left_hip.y);
      this.leftShoulder = createVector(pose.left_shoulder.x, pose.left_shoulder.y);
      this.leftChest = p5.Vector.sub(this.leftHip, this.leftShoulder);
      this.angle = this.leftChest.heading();
      this.confidence = (pose.left_shoulder.confidence + pose.left_hip.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class RightArm {
  constructor(pose) {
    if (pose.right_shoulder && pose.right_wrist) {
      this.rightShoulder = createVector(pose.right_shoulder.x, pose.right_shoulder.y);
      this.rightWrist = createVector(pose.right_wrist.x, pose.right_wrist.y);
      this.rightArm = p5.Vector.sub(this.rightShoulder, this.rightWrist);
      this.angle = this.rightArm.heading();
      this.confidence = (pose.right_shoulder.confidence + pose.right_wrist.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}

class LeftArm {
  constructor(pose) {
    if (pose.left_shoulder && pose.left_wrist) {
      this.leftShoulder = createVector(pose.left_shoulder.x, pose.left_shoulder.y);
      this.leftWrist = createVector(pose.left_wrist.x, pose.left_wrist.y);
      this.leftArm = p5.Vector.sub(this.leftShoulder, this.leftWrist);
      this.angle = this.leftArm.heading();
      this.confidence = (pose.left_shoulder.confidence + pose.left_wrist.confidence) / 2;
    } else {
      this.angle = NaN;
      this.confidence = 0;
    }
  }
}