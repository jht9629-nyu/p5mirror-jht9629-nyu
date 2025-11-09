function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();

  if (mouseX < windowWidth / 3) {
    fill("red");
    rect(0, 0, windowWidth / 3, windowHeight);
  }
  if (mouseX > windowWidth / 3 && mouseX < (windowWidth * 2) / 3) {
    fill("red");
    rect((windowWidth * 1) / 3, 0, windowWidth / 3, windowHeight);
  }
  if (mouseX > (windowWidth * 2) / 3 && mouseX < windowWidth) {
    fill("red");
    rect((windowWidth * 2) / 3, 0, windowWidth / 3, windowHeight);
  }
}
function mousePressed() {
  console.log("mousePressed");
  background("green");
  noLoop();
}
