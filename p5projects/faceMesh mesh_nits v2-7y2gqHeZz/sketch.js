// https://editor.p5js.org/jht9629-nyu/sketches/7y2gqHeZz
// faceMesh mesh_nits v2
// scale to height

let flipH = true;
let faceMesh;
let video;
let faces = [];
let options = { 
  maxFaces: 1, refineLandmarks: false, flipHorizontal: flipH };

let my = {};

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  // createCanvas(640, 480);
  createCanvas(windowWidth, windowHeight);
  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: flipH });
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);

  my.input = video;
  // my.output = createGraphics(video.width, video.height);
  my.output = createGraphics(width, height);
  my.output.noStroke();
  my.mar_h = 5; // height margin in percent
  my.mar_w = 5;
  // my.align = "center";
  my.alpha = 255;
  my.avg_color = [0, 0, 0];

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
    draw_mouth_shape(face);
    draw_lips_line(face);
    draw_eye_shape(face);
    draw_eye_lines(face);
  }

  image(my.output, 0, 0);
  // image(my.output, 0, 0, width, height);
  // filter(BLUR, 4);
  // image_scaled_pad(my.output);
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function draw_lips_line(face) {
  my.output.strokeWeight(3);
  my.output.stroke(255, 0, 0);
  draw_line(lips_out_top, face);
  my.output.stroke(0, 255, 0);
  draw_line(lips_out_bot, face);
  my.output.stroke(255, 255, 0);
  draw_line(lips_in_top, face);
  my.output.stroke(0, 255, 255);
  draw_line(lips_in_bot, face);
  // my.output.stroke(0, 255, 0);
  my.output.stroke(255, 255, 255);
  draw_points(face.lips.keypoints);
}

function draw_eye_shape(face) {
  my.output.strokeWeight(0);
  my.output.fill(0, 0, 0);
  
  my.output.beginShape();
  draw_vertex(left_eye_top,face);
  draw_vertex(left_eye_bot,face);
  my.output.endShape();
  
  my.output.beginShape();
  draw_vertex(right_eye_top,face);
  draw_vertex(right_eye_bot,face);
  my.output.endShape();
}

function draw_eye_lines(face) {
  my.output.strokeWeight(1);
  my.output.stroke('gold');
  
  draw_line(left_eye_top, face);
  draw_line(left_eye_bot, face);
  draw_line(right_eye_top, face);
  draw_line(right_eye_bot, face);
}

function draw_mouth_shape(face) {
  my.output.fill(0, 0, 0);
  
  my.output.beginShape();
  draw_vertex(lips_in_top,face);
  draw_vertex(lips_in_bot,face);
  my.output.endShape();
}

function draw_vertex(lp, face) {
  let { output: layer, x0, y0, x0k, y0k, r1 } = my;
  for (let i = 0; i < lp.length; i++) {
    let ki = lp[i];
    let { x, y } = face.keypoints[ki];
    x = (x - x0k) * r1 + x0;
    y = (y - y0k) * r1 + y0;
    layer.vertex(x, y);
  }
}

function draw_points(points) {
  let { output: layer, x0, y0, x0k, y0k, r1 } = my;
  for (let point of points) {
    let { x, y } = point;
    x = (x - x0k) * r1 + x0;
    y = (y - y0k) * r1 + y0;
    layer.fill(0, 255, 0);
    layer.circle(x, y, 2);
  }
}

function draw_line(lp, face) {
  let { output: layer, x0, y0, x0k, y0k, r1 } = my;
  let px, py;
  for (let i = 0; i < lp.length; i++) {
    let ki = lp[i];
    let { x, y } = face.keypoints[ki];
    x = (x - x0k) * r1 + x0;
    y = (y - y0k) * r1 + y0;
    if (i != 0) {
      layer.line(px, py, x, y);
    }
    px = x;
    py = y;
  }
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
  // Extract the x coordinate from FACE_MESH_PAIRS
  mesh_nits = FACE_MESH_PAIRS.map((xy) => xy[0]);
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

// https://editor.p5js.org/jht9629-nyu/sketches/PrJvjyxb6
// faceMesh mesh_nits
