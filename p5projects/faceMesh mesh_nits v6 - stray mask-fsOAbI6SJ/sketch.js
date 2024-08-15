// https://editor.p5js.org/jht9629-nyu/sketches/fsOAbI6SJ
// faceMesh mesh_nits v6 -- stray mask

let flipH = true;
let faceMesh;
let video;
let faces = [];
let options = {
  maxFaces: 1,
  refineLandmarks: false,
  flipHorizontal: flipH,
};

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
  faceMesh.detectStart(video, function (results) {
    // Callback function for when faceMesh outputs data
    // Save the output to the faces variable
    faces = results;
  });

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
  
  createVideoMask();
}

function createVideoMask() {
  my.videoMask = createGraphics(video.width, video.height);
  my.videoMask.clear();
  // my.videoMask.fill(255,255,255,255);
  // my.videoMask.rect(100,100,200,200);
}

function draw() {
  // Draw the webcam video
  // image(video, 0, 0, width, height);

  // background(255);

  my.output.clear();

  // Draw all the tracked face points
  for (let face of faces) {
    // draw_face_circle(face);
    draw_face_mesh(face);
    draw_mouth_shape(face);
    draw_lips_line(face);
    draw_eye_shape(face);
    draw_eye_lines(face);
    my.face1 = face;
  }

  background(my.avg_color);
  image(my.output, 0, 0);

  if (my.face1) {
    let colr = [255,255,255,255];
    draw_mouth_shape_output(my.face1, my.videoMask, colr);
    video.mask(my.videoMask);
    image(video, 0, 0, width, height);
  }
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
  draw_vertex(left_eye_top, face);
  draw_vertex(left_eye_bot, face);
  my.output.endShape();

  my.output.beginShape();
  draw_vertex(right_eye_top, face);
  draw_vertex(right_eye_bot, face);
  my.output.endShape();
}

function draw_eye_lines(face) {
  my.output.strokeWeight(1);
  my.output.stroke("gold");

  draw_line(left_eye_top, face);
  draw_line(left_eye_bot, face);
  draw_line(right_eye_top, face);
  draw_line(right_eye_bot, face);
}

function draw_mouth_shape(face) {
  my.output.fill(0, 0, 0);

  my.output.beginShape();
  draw_vertex(lips_in_top, face);
  draw_vertex(lips_in_bot, face);
  my.output.endShape();
}

function draw_mouth_shape_output(face, output, colr) {
  output.fill(colr);

  output.beginShape();
  draw_vertex_output(lips_in_top, face, output);
  draw_vertex_output(lips_in_bot, face, output);
  output.endShape();
}


function draw_vertex(lp, face) {
  draw_vertex_output(lp, face, my.output)
}

function draw_vertex_output(lp, face, output) {
  for (let i = 0; i < lp.length; i++) {
    let ki = lp[i];
    // let { x, y } = transPt(face.keypoints[ki]);
    let { x, y } = face.keypoints[ki];
    output.vertex(x, y);
  }
}

function transPt(pt) {
  let { x, y } = pt;
  x = (x - my.x0k) * my.rx + my.x0;
  y = (y - my.y0k) * my.ry + my.y0;
  return { x, y };
}

function draw_points(points) {
  for (let point of points) {
    let { x, y } = transPt(point);
    my.output.fill(0, 255, 0);
    my.output.circle(x, y, 2);
  }
}

function draw_line(lp, face) {
  let px, py;
  for (let i = 0; i < lp.length; i++) {
    let ki = lp[i];
    let { x, y } = transPt(face.keypoints[ki]);
    if (i != 0) {
      my.output.line(px, py, x, y);
    }
    px = x;
    py = y;
  }
}

function draw_face_circle(face) {
  for (let keypoint of face.keypoints) {
    let { x, y } = transPt(keypoint);
    fill(0, 255, 0);
    noStroke();
    circle(x, y, 2);
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

// https://editor.p5js.org/jht9629-nyu/sketches/7y2gqHeZz
// faceMesh mesh_nits v2
// scale to height

// https://editor.p5js.org/jht9629-nyu/sketches/hFnQmY-Jy
// faceMesh mesh_nits v3
// fit to width

// frameRate()
// 36.63003701391713

// https://editor.p5js.org/jht9629-nyu/sketches/p4Uu0B2sk
// faceMesh mesh_nits v4
// fill to width and height

// https://editor.p5js.org/jht9629-nyu/sketches/nDEtGRehq
// faceMesh mesh_nits v5
