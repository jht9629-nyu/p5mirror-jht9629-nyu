// ml5.js 1.0 and FaceMesh
// https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/0-introduction/patt-vira
// https://youtu.be/2h8VArJ3gnQ

// Subscribe to Patt Vira's channel!
// https://youtube.com/@PattVira

let video;
let faceMesh;
let faces = [];

function preload() {
  faceMesh = ml5.faceMesh({ maxFaces: 1, flipped: true });
}

function gotFaces(results) {
  // console.log(results);
  faces = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  faceMesh.detectStart(video, gotFaces);

  console.log(ml5.version);
}

function mousePressed() {
  console.log(faces);
}

function draw() {
  background(0);
  image(video, 0, 0);

  if (faces.length > 0) {
    let lips = faces[0].lips;
    strokeWeight(4);
    noFill();
    stroke(255, 100, 255);
    rect(lips.x, lips.y, lips.width, lips.height);
    
    for (let lipPoint of lips.keypoints) {
      strokeWeight(2);
      stroke(0, 255, 0);
      point(lipPoint.x, lipPoint.y);
    }
    
    
  }
}
