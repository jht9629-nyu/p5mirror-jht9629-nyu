// https://editor.p5js.org/jht9629-nyu/sketches/Q0EU9wHN1
// less black in fade
// https://editor.p5js.org/emily_ye03/sketches/tUbiLFnxk

//ICM WK3-5

let x = 300;
let xSpeed = 5;

let colorSpeed = 0.009 * 3;

let r = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let s = sin(frameCount * colorSpeed); // -1 ... 1
  colorChange = map(s, -1.0, 1.0, 180, 255); // -1 ... 1 --> 180 ... 255
  
  // let s = sin(frameCount * colorSpeed) + 1; // 0 ... 2.0
  // colorChange = s * 0.5 * 127 + 127; // 127 ... 255

  // colorChange = s * 0.5 * 127 + 127; // 127 ... 255
  // colorChange = (sin(frameCount*colorSpeed + 1)  / 0.5 * 255);
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
