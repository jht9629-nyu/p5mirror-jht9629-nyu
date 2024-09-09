function setup() {
  createCanvas(400, 200);
  console.log('in setup');
}

function draw() {
  console.log('in draw');
  // background(220);
  // circle(x,y,r)
  circle(mouseX,mouseY,100);
  // noLoop();
}

