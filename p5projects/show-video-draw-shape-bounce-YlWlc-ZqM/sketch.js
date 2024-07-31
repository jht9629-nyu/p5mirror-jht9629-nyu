// https://editor.p5js.org/jht9629-nyu/sketches/YlWlc-ZqM
// show-video-draw-shape-bounce

let my = {};

function setup() {
  my.brushWidth = 30;
  my.brushHeight = my.brushWidth * 2;
  my.shape = 'ellipse';
  // my.shape = 'rect';
  
  my.doBounce = false;
  my.bspeed = 5;
  my.bxdir = my.bspeed;
  my.bydir = my.bspeed;

  my.version = 8; // update to verify change on mobile
  my.vwidth = 390; // Aspect ratio of video capture
  my.vheight = 600;
  my.width = my.vwidth; // match canvas to video dimensions
  my.height = my.vheight;
  my.face = true; // camera face front or back

  my.bx = my.width/2;
  my.by = my.height/2;

  // bounce_init();
  
  my.layer = createGraphics(my.width, my.height);
  my.layer.strokeWeight(0);

  createCanvas(my.width, my.height);

  create_myVideo();

  create_ui();
}

function draw() {
  if (!video_ready()) return;
  window.scrollBy(0, 1);

  bounce_draw();
  
  image(my.video, 0, 0);

  image(my.layer, 0, 0);
}

function bounce_draw() {
  if (! my.doBounce) return;
  // console.log('bounce_draw')
  my.bx += my.bxdir;
  my.by += my.bydir;
  if (my.bx > width || my.bx < 0) {
    my.bxdir = - my.bxdir;
  }
  if (my.by > height || my.by < 0) {
    my.bydir = - my.bydir;
  }
  let col = my.video.get(my.bx, my.by);
  drawShape(my.bx, my.by, col);
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
function create_ui() {  my.version = 8; // update to verify change on mobile
  my.vwidth = 390; // Aspect ratio of video capture
  my.vheight = 600;
  my.width = my.vwidth; // match canvas to video dimensions
  my.height = my.vheight;
  my.face = true; // camera face front or back
  createSpan("v" + my.version);

  my.resetBtn = createButton("Reset");
  my.resetBtn.mousePressed(reset_action);

  my.faceChk = createCheckbox("Face", my.face);
  my.faceChk.style("display:inline");
  my.faceChk.changed(faceChk_action);

  my.saveBtn = createButton("Save");
  my.saveBtn.mousePressed(saveAction);
  
  my.bounceBtn = createCheckbox("Bounce", my.doBounce);
  my.bounceBtn.style("display:inline");
  my.bounceBtn.changed(bounceAction);
}

function bounceAction() {
  my.doBounce = this.checked();
}

function saveAction() {
  saveCanvas("show-video-draw-shape-bounce");
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

// https://editor.p5js.org/jht9629-nyu/sketches/jMHNj7slF
// show-video-draw

// https://editor.p5js.org/jht9629-nyu/sketches/MsutfNZq-
// show-video-face-ui

// https://editor.p5js.org/jht9629-nyu/sketches/twgS6eWRZ
// pixel-grid

// https://editor.p5js.org/jht9629-nyu/sketches/VtRGiz_JI
// show-video-draw-bounce 

