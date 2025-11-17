//

function create_ui() {
  //
  createSpan("v17.2 click to add a fat pixel - drag to apply wind") //
  createSpan('[')
  createCheckbox("doPaint", my.doPaint) //
    .style("display:inline")
    .changed(function () {
      my.doPaint = this.checked();
    });
  createSpan('][')
  createCheckbox("showPose", my.showPose) //
    .style("display:inline")
    .changed(function () {
      my.showPose = this.checked();
    });
  createSpan(']')
  createButton("fill") //
    .mousePressed(fillAction)
  createButton("clear") //
    .mousePressed(clearAction)
  createButton("drop") //
    .mousePressed(dropAction)
  createButton("stop") //
    .mousePressed(stopAction)
  createButton("random") //
    .mousePressed(randomAction)
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
  console.log("Balls randomAction my.items.length", my.items.length);
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
