// https://editor.p5js.org/jht9629-nyu/sketches/PrJvjyxb6
// faceMesh mesh_nits

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

let my = {};

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped:false });
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);

  my.input = video;
  my.output = createGraphics(video.width, video.height);
  my.output.noStroke();
  my.mar_h = 5;
  my.align = 'center';
  my.alpha = 255;
  my.avg_color = [0,0,0];
  
  faceMeshPairsToNits();
}

function draw() {
  
  // Draw the webcam video
  // image(video, 0, 0, width, height);
  
  // background(255);
  
  background(my.avg_color);
  my.output.clear();

  // Draw all the tracked face points
  for (let face of faces) {
    // draw_face_circle(face);
    draw_face_mesh(face);
  }
  
  image(my.output, 0, 0);
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function draw_face_circle(face) {
  for (let keypoint of face.keypoints) {
    fill(0, 255, 0);
    noStroke();
    circle(keypoint.x, keypoint.y, 2);
  }
}

function draw_face_mesh(face) {
  drawFaceMesh(my, face.keypoints);
}

function faceMeshPairsToNits() {
  mesh_nits = [];
  for (let xy of FACE_MESH_PAIRS ) {
    mesh_nits.push( xy[0] );
  }
}


// https://editor.p5js.org/ml5/sketches/lCurUW1TT
// faceMesh-keypoints --ml5
/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates face tracking on live video through ml5.faceMesh.
 */

// https://editor.p5js.org/jht9629-nyu/sketches/9fOM25TRl
// faceMesh-keypoints --ml5 copy

