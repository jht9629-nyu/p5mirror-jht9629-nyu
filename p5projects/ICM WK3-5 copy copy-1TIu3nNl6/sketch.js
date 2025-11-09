// ICM WK3-5

let x = 300;
let xSpeed = 5;

let colorSpeed=0.009;
// let colorSpeed = 0.09;

let r = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //colorChange = (sin(frameCount*colorSpeed + 1)  / 0.5 * 255);
  colorChange = (sin(frameCount * colorSpeed) + 1) * 0.5 * 255;
  // console.log(colorChange);
  fill(colorChange);
  ellipse(x, 200, 40, 40);
  noStroke();
  x += xSpeed;

  // Do this if EITHER condition is true
  if (x > width - r || x < r) {
    xSpeed = -xSpeed;
  }
}
