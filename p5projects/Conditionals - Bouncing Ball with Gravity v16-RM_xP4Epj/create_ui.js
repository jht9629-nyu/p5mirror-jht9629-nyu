//

function create_ui() {
  //
  createSpan("click to add a rect - shift to paint - drag to apply wind") //
    .style("font-size:28px");
  createCheckbox("showPose", my.showPose) //
    .style("font-size:28px;display:inline")
    .changed(function () {
      my.showPose = this.checked();
    });
  createCheckbox("restore", my.doRestore) //
    .style("font-size:28px;display:inline")
    .changed(function () {
      my.doRestore = this.checked();
    });
  createCheckbox("pulse", my.pulseRestore) //
    .style("font-size:28px;display:inline")
    .changed(function () {
      my.pulseRestore = this.checked();
    });
  // my.pulseRestore
  createButton("clear") //
    .mousePressed(clearAction)
    .style("font-size:28px");
  createButton("drop") //
    .mousePressed(dropAction)
    .style("font-size:28px");
  createButton("stop") //
    .mousePressed(stopAction)
    .style("font-size:28px");
  createButton("random") //
    .mousePressed(randomAction)
    .style("font-size:28px");
  createButton("add") //
    .mousePressed(addAction)
    .style("font-size:28px");
  // createButton("restore") //
  //   .mousePressed(restoreAction)
  //   .style("font-size:28px");
}

// function restoreAction() {
//   console.log("Balls restoreAction balls.length", balls.length);
//   for (let ball of balls) {
//     ball.restore();
//   }
// }

function addAction() {
  let w = my.gridSize;
  let { width, height } = my.video;
  for (let y = 0; y < height; y += w) {
    for (let x = 0; x < width; x += w) {
      new Ball(x, y);
    }
  }
}

function randomAction() {
  console.log("Balls randomAction balls.length", balls.length);
  for (let ball of balls) {
    ball.random();
  }
}

function stopAction() {
  for (let ball of balls) {
    ball.stop();
  }
}

function dropAction() {
  for (let ball of balls) {
    ball.drop();
  }
}

function clearAction() {
  balls = [];
}
