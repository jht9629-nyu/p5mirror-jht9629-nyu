let randomRadius;
let smallCircleRadius = 30;
let smallCircleX; // X-coordinate of the s circle
let smallCircleY; // Y-coordinate of the s circle
let bigCircleX;
let bigCircleY;

function setup() {
  createCanvas(400, 400);
  background(255);
  randomRadius = random(60, 140);
  // random size for the third element
  colorMode(HSB, 360, 100, 100, 110);

  bigCircleX = width / 2;
  bigCircleY = height / 2;
}

function draw() {
  background(255);

  for (let i = 0; i < 10; i++) {
    let r1 = random(0, 400);
    let r2 = random(0, 400);
    let r3 = random(0, 400);
    let r4 = random(0, 400);
    let Shade = random(230, 320);
    let alpha = random(30, 60);
    fill(Shade, 80, 90, alpha);
    noStroke();
    rect(r1, r2, r3, r4); //changes independently of the mouse.

    fill(255, 25, 100);
    circle(bigCircleX, bigCircleY, randomRadius * 2); // different every time.

    fill(200, 170, 29);

    let distance = dist(bigCircleX, bigCircleY, mouseX, mouseY);

    if (distance > randomRadius - smallCircleRadius) {
      let angle = atan2(mouseY - bigCircleY, mouseX - bigCircleX);
      let newX = bigCircleX + (randomRadius - smallCircleRadius) * cos(angle);
      let newY = bigCircleY + (randomRadius - smallCircleRadius) * sin(angle);
      smallCircleX = newX;
      smallCircleY = newY;
    } else {
      smallCircleX = mouseX;
      smallCircleY = mouseY;
    }
    circle(smallCircleX, smallCircleY, smallCircleRadius * 2); //controlled by the mouse.
  }
}


// from chat-G prompt: 