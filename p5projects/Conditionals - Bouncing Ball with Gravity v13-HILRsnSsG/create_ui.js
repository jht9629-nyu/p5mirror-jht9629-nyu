//

function create_ui() {
  //
  my.defaultRadius = 10;
  my.restoreSteps = 100;
  
  let n = int( width / my.defaultRadius) * int(height / my.defaultRadius);
  console.log('n', n);
  my.add_n = n;

  createSpan("click to add a ball - shift to paint - drag to apply wind") //
    .style("font-size:28px");
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
  createButton("restore") //
    .mousePressed(restoreAction)
    .style("font-size:28px");
}

function restoreAction() {
  console.log("Balls restoreAction balls.length", balls.length);
  for (let ball of balls) {
    ball.restore();
  }
}

function addAction() {
  for (let i = 0; i < my.add_n; i++) {
    let x = random(width)
    x -= x % my.defaultRadius;
    let y = random(height)
    y -= y % my.defaultRadius;
    new Ball(x, y)
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
