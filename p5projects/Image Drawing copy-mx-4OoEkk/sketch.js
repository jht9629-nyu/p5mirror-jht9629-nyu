let capture;
let c;
let paper;
let mousesX = [];
let mousesY = [];
let imageTaken = false;
let button;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
  strokeWeight(10);
  stroke(0,255,0);
  
  button = createButton('save');
  button.position(0, 0);
  button.mousePressed(saveImage);  
}

function draw() {
  image(capture, 0, 0, width, (width * capture.height) / capture.width);
  if (paper) {
    image(paper, 0, 0, width, height);
    circle(mouseX, mouseY, 20);
    if (mouseIsPressed) {
      mousesX.push(mouseX);
      mousesY.push(mouseY);
    }
    for (let i = 1; i < mousesX.length; i++) {
      //circle(mousesX[i], mousesY[i], 20);
      
      // Jiggle
      let sx = mousesX[i-1] + random(-5,5);
      let sy = mousesY[i-1] + random(-5,5);
      //mousesY[i-1]--;
      line(sx, sy, mousesX[i], mousesY[i]);
    }
  }
}

function mousePressed() {

  if (imageTaken == false) {
    paper = createImage(width, height);
    paper.copy(capture, 0, 0, capture.width, capture.height, 0, 0, width, height);
    imageTaken = true;
  }
  
  return false
}

function saveImage() {
  // Use for saving end picture
  //saveCanvas(c, 'myCanvas', 'jpg');
  saveGif('mySketch', 5);
}