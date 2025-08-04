// https://editor.p5js.org/jht9629-nyu/sketches/Bc4OomWfv
// show-video-draw-shape

let my = {}; 

function setup() {
  my.brushWidth = 20;
  my.brushHeight = my.brushWidth ;
  // my.brushHeight = my.brushWidth * 4;
  // my.shape = 'ellipse';
  my.shape = 'rect';

  my.version = 4; // update to verify change on mobile
  my.vwidth = 390; // Aspect ratio of video capture
  my.vheight = 600;
  my.face = true; // camera face front or back
  
  // match canvas to video dimensions
  my.width = my.vwidth;
  my.height = my.vheight;

  my.layer = createGraphics(my.width, my.height);
  my.layer.strokeWeight(0);

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
  let col = my.video.get(mouseX, mouseY);
  drawShape(mouseX, mouseY, col);
}

function drawShape(x, y, col) {
  let w = my.brushWidth;
  let h = my.brushHeight;
  if (my.shape == 'rect') {
    my.layer.fill(col);
    my.layer.rect(x, y, w, h);
  }
  if (my.shape == 'ellipse') {
    my.layer.fill(col);
    my.layer.ellipse(x, y, w, h);
  }
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
  saveCanvas("show-video-draw-shape");
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

// https://editor.p5js.org/jht9629-nyu/sketches/jMHNj7slF
// show-video-draw

// https://editor.p5js.org/jht9629-nyu/sketches/yBPrHBNeR
// show-video-draw rect
