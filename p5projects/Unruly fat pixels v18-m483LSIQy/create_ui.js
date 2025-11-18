//

function create_ui() {
  //
  createSpan("v18.1 click to add a fat pixel - drag to apply wind") //
    .id("id_first");
  createSpan("[");
  createCheckbox("doPaint", my.doPaint) //
    .style("display:inline")
    .changed(function () {
      my.doPaint = this.checked();
    });
  createSpan("][");
  createCheckbox("showPose", my.showPose) //
    .style("display:inline")
    .changed(function () {
      my.showPose = this.checked();
    });
  createSpan("]");
  createButton("full screen") //
    .mousePressed(fullScreenAction);
  createButton("fill") //
    .mousePressed(fillAction);
  createButton("clear") //
    .mousePressed(clearAction);
  createButton("drop") //
    .mousePressed(dropAction);
  createButton("stop") //
    .mousePressed(stopAction);
  createButton("random") //
    .mousePressed(randomAction);
}

function fillAction() {
  let { width, height } = my.video;
  let w = my.gridSize;
  for (let y = 0; y < height; y += w) {
    for (let x = 0; x < width; x += w) {
      new FatPixel(x + w / 2, y + w / 2);
    }
  }
}

function randomAction() {
  console.log("randomAction my.items.length", my.items.length);
  for (let item of my.items) {
    item.random();
  }
}

function stopAction() {
  for (let item of my.items) {
    item.stop();
  }
}

function dropAction() {
  for (let item of my.items) {
    item.drop();
  }
}

function clearAction() {
  my.items = [];
}

// https://editor.p5js.org/jht9629-nyu/sketches/Mpgun-Kti
// ims-01 bounce fullscreen

function fullScreenAction() {
  //
  my.layer.remove();
  my.layer = null;

  my.video.remove();
  my.video = null;

  removeElements();

  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  create_video();
  bodyPose_setup();
}

// Respond to window resizing event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
