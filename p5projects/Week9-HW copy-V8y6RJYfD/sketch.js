// https://editor.p5js.org/jht9629-nyu/sketches/V8y6RJYfD
// https://editor.p5js.org/rq2032/sketches/-nl-LO6HB

// ml5.js 1.0 and FaceMesh
// https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/0-introduction/patt-vira

//https://editor.p5js.org/rq2032/sketches/-nl-LO6HB

let faceMesh;
let faces = [];
let video;
let snapshots = [];
let uploadedImg;
let xOffset, yOffset;

function preload() {
  let options = {
    maxFaces: 1,
  };
  faceMesh = ml5.faceMesh(options);

  uploadedImg = loadImage("w.jpeg");
}

function setup() {
  createCanvas(650, 800);
  background(0);

  if (uploadedImg) {
    uploadedImg.resize(width, 0);
  }

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  pixelDensity(1);

  faceMesh.detectStart(video, gotFaces);
}

function gotFaces(results) {
  faces = results;
}

function draw() {
  background(220);

  image(video, mouseX, mouseY, 130, 100);

  // lip key points
  if (faces.length > 0) {
    let keypoints = faces[0].keypoints;
    let topLip = keypoints[13];
    let bottomLip = keypoints[14];
    let mouthDist = dist(topLip.x, topLip.y, bottomLip.x, bottomLip.y);

    // mouth open
    if (mouthDist >= 6) {
      snapshots.push({ img: video.get(), x: mouseX, y: mouseY });
    }
  }

  // offset
  let t = frameCount * 0.02;
  xOffset = 30 * cos(t);
  yOffset = 30 * sin(t);
  let w= 130;
  let h=100;

  // snap
  for (let snap of snapshots) {
  
    image(snap.img, snap.x, snap.y, w, h);

    if (uploadedImg) {
      copy(
        uploadedImg,
        snap.x,
        snap.y,
        w,
        h,
        int(snap.x + xOffset),
        int(snap.y + yOffset),
        w,
        h
      );
    }
  }
}
