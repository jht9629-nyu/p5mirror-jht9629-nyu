let leafX, leafY;
let baX, baY, rc;
let bounceback = 0;
let noticeDiv;
let t = "";
let bstop, kickball;

function setup() {
  createCanvas(400, 400).mousePressed(mouseClicked_canvas);
  
  (leafX = width / 2), (leafY = height / 2);
  baX = random(40, width);
  baY = random(40, height);
  rc = random(0, 250);
  noticeDiv = createDiv();
  noticeDiv.style("font-size", "50px");
  noticeDiv.position(0, 430);
  bstop = createButton("Stop bouncing");
  kickball = createButton("Kick start ball");
  angleMode(DEGREES);
}

function draw() {
  board();
  leaf(leafX, leafY);
  let bcb = bounceball();
  noticeText();
  secondRotation();
}

function noticeText() {
  t = "MouseX:" + mouseX;
  noticeDiv.html(t);
}

/* Draw the background board */

function board() {
  background(250, 250, 250);

  for (x = 40; x < width; x += 40) {
    for (y = 40; y < height; y += 40) {
      noFill();
      ellipse(x, y, 40, 40);
    }
  }

  for (ln = 0; ln < width; ln += 40) {
    line(0, ln + 20, width, ln + 20);
    line(ln + 20, 0, ln + 20, width);
  }
}

/* Draw  leaf - try to create multiparts structure but had problem to position the structure as whole. So circle becomes a leaf */

function leaf(x, y) {
  fill("green");
  circle(x, y, 60);
}

/* Bounceball: random start point of a bounceball with random color when moving upward */

function bounceball() {
  if (baY <= height - 10 && baY > 10) {
    baY = baY + 2;
  } else if (baY < 10) {
    bounceback = 0;
    baY = baY + 2;
  } else {
    bounceback = 1;
  }
  if (bounceback == 1) {
    baY = baY - 3;
    fill(rc);
  }

  if (bounceback == 3) {
    baY = 200;
  }

  circle(100, baY, 20);
  bstop.mousePressed(stopBouncing);
  kickball.mousePressed(startBouncing);
}

/* Click anywhere on the board to move the default location of the centered green circle 
can't make map function work to stop mouseX to be out of the canvas
*/

function mouseClicked_canvas() {
  //leafX = map(mouseX,0,mouseX,0,400);
  leafX = mouseX % width;
  leafY = mouseY % height;
}

/* The big green circle follows mouse drag path */

function mouseDragged() {
  leafX = (mouseX - 80) % width;
  leafY = (mouseY - 80) % height;
}

function startBouncing() {
  baY = 30;
  bounceback = 1;
}

function stopBouncing() {
  bounceback = 3;
}

function secondRotation() {
  /* referred: https://thecodingtrain.com/challenges/74-clock
   https://editor.p5js.org/codingtrain/sketches/2lvHFWPbW*/
  translate(200, 200);
  rotate(-90);
  let s = second();
  let angleS = map(s, 0, 60, 0, 360);
  push();
  rotate(angleS);
  stroke(255, 100, 150);
  strokeWeight(4);
  line(0, 0, 100, 0);
  pop();
}
