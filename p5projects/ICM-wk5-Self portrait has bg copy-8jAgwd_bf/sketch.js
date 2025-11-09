
// https://editor.p5js.org/jht9629-nyu/sketches/8jAgwd_bf
// https://editor.p5js.org/yueyanZ/sketches/J-_xfYSNi

let size = 60;

const palette = [
  [79, 23, 135, 255], // #4F1787
  [251, 119, 60, 255], // #FB773C
  [235, 38, 100, 255], // #EB2664
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER); // rotation around center if needed
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  drawBackground(); // draw the circle/square pattern
  drawPortrait(); // draw the Zoog portrait
}

// ---------------------- Functions ---------------------- //

function drawBackground() {
  for (let x = size / 2; x < width; x += size) {
    for (let y = size / 2; y < height; y += size) {
      const [r, g, b, a] = palette[floor(random(palette.length))];
      fill(r, g, b, a);

      push();
      translate(x, y);

      if (mouseIsPressed) {
        rect(0, 0, size, size); // square on mouse press
      } else {
        ellipse(0, 0, size, size); // circle normally
      }

      pop();
    }
  }
}

function drawPortrait() {
  drawBody();
  drawNeck();
  drawFace();
  drawHair();
  drawMouth();
  drawEye(160, 166, 50, 100); // left eye
  drawEye(230, 166, 40, 100); // right eye
  drawButtons();
}

// ---------------------- Portrait Parts ---------------------- //

function drawBody() {
  fill(79, 23, 135, 255);
  triangle(300, 400, 10, 450, 260, 160);
}

function drawNeck() {
  fill(251, 119, 77, 255);
  triangle(240, 300, 270, 250, 150, 50);
}

function drawFace() {
  fill(251, 150, 60, 255);
  rect(200, 170, 100, 150, 55);
  noStroke();
}

function drawHair() {
  fill(2, 44, 60);
  triangle(250, 200, 310, 200, 330, 280);
  fill(0, 20, 60);
  triangle(290, 270, 250, 50, 150, 50);
  triangle(130, 220, 250, 50, 140, 50);
}

function drawEye(x, y, size, irisHue) {
  fill(160, 62, irisHue);
  circle(x, y, size);
  fill(0, 0, 0);
  circle(x, y, size / 3);
}

function drawButtons() {
  fill(251, 150, 60, 255);
  circle(220, 320, 20);
  circle(220, 350, 20);
}

function drawMouth() {
  if (mouseIsPressed) {
    // Draw a straight line when mouse pressed
    stroke(22, 80, 126);
    strokeWeight(4);
    line(163, 200, 213, 200);
    noStroke();
  } else {
    // Draw a smile when not pressed
    fill(22, 80, 126);
    noStroke();
    arc(188, 200, 50, 50, 0, 180); // use DEGREES mode
  }
}
