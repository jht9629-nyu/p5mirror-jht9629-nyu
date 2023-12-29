// https://editor.p5js.org/jht9629-nyu/sketches/jMHNj7slF
// show-video-draw

let my = {};

function setup() {
  my.version = 4; // update to verify change on mobile
  my.vwidth = 480; // Aspect ratio of video capture
  my.vheight = 640;
  my.face = true; // camera face front or back
  my.brushSize = 10;

  // match canvas to video dimensions
  my.width = my.vwidth;
  my.height = my.vheight;

  my.layer = createGraphics(my.width, my.height);

  createCanvas(my.width, my.height);
  background(255);
  noStroke();

  create_myVideo();

  create_ui();
}

function draw() {
  if (!video_ready()) return;
  window.scrollBy(0, 1);

  image(my.video, 0, 0);

  image(my.layer, 0, 0);
}

function mouseDragged() {
  my.layer.strokeWeight(my.brushSize);
  let col = my.video.get(mouseX, mouseY);
  my.layer.stroke(col);
  my.layer.line(mouseX, mouseY, pmouseX, pmouseY);

  // Prevent canvas drag on mobile devices
  return false;
}

// create the vidoe capture element based on my.facingMode
function create_myVideo() {
  let options = { video: { facingMode: my.facingMode } };
  my.video = createCapture(options);
  my.video.size(my.vwidth, my.vheight);
  my.video.hide();
}

// create the ui elements below the canvas
function create_ui() {
  createSpan("v" + my.version);

  my.resetBtn = createButton("Reset");
  my.resetBtn.mousePressed(reset_action);

  my.faceChk = createCheckbox("Face", my.face);
  my.faceChk.style("display:inline");
  my.faceChk.changed(faceChk_action);

  my.saveBtn = createButton("Save");
  my.saveBtn.mousePressed(saveAction);
}

function saveAction() {
  saveCanvas("show-video-draw");
}

// check box action for front facing or back facing camera selection
function faceChk_action() {
  my.face = this.checked();
  my.facingMode = my.face ? "user" : "environment";
  console.log("my.facingMode", my.facingMode);
  my.video.remove();
  create_myVideo();
}

// reload the page
function reset_action() {
  location.reload();
}

// is the video ready to be displayed
function video_ready() {
  return my.video.loadedmetadata && my.video.width > 0 && my.video.height > 0;
}

// https://editor.p5js.org/jht9629-nyu/sketches/MsutfNZq-
// show-video-face-ui

// https://editor.p5js.org/jht9629-nyu/sketches/twgS6eWRZ
// pixel-grid
