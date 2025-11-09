let rectWidth;
let scenes = [];

function setup() {
  createCanvas(800, 400);
  rectWidth = width / 3;

  // Assign one scene per door (left → right)
  scenes = [sceneOne, sceneTwo, sceneThree];
}

function draw() {
  background(200);

  for (let i = 0; i < 3; i++) {
    const x = i * rectWidth;
    const isHover = mouseX >= x && mouseX < x + rectWidth;

    if (isHover) {
      // The door turns black
      noStroke();
      fill(0);
      rect(x, 0, rectWidth, height);

      // Draw this door's scene INSIDE its area
      push();
      translate(x, 0); // scenes draw in local coords: 0..rectWidth, 0..height
      scenes[i](rectWidth, height);
      pop();
    } else {
      // Simple idle door
      drawDoor(x, rectWidth, height);
    }

    // Door outline
    noFill();
    stroke(60);
    rect(x, 0, rectWidth, height);
  }
}

/* ---------------------------
   Simple wooden-looking door
----------------------------*/
function drawDoor(x, w, h) {
  noStroke();
  fill(193, 140, 80); // base wood color
  rect(x, 0, w, h);

  // light vertical lines for "grain" (very simple)
  stroke(150, 100);
  for (let j = 6; j < w; j += 12) {
    line(x + j, 0, x + j, h);
  }

  // small handle
  noStroke();
  fill(40);
  ellipse(x + w - 24, h * 0.5, 12, 12);
}

/* ---------------------------
   SCENE TEMPLATES (EDIT THESE)
   Each scene gets (w, h). Draw within 0..w, 0..h.
   Use basic p5 calls: rect, ellipse, line, text, etc.
----------------------------*/

// LEFT DOOR — Jackie
function sceneOne(w, h) {
  // 0..1 based on mouse X across this (left) door
  let t = constrain(mouseX / w, 0, 1);

  // Background color: blue -> black
  let cBlue = color(20, 120, 220);
  let cBlack = color(0, 0, 0);
  let bg = lerpColor(cBlue, cBlack, t);
  noStroke();
  fill(bg);
  rect(0, 0, w, h);

  // Arc geometry (semi-circle across the top-ish area)
  let cx = w * 0.5; // arc center x
  let cy = h * 0.65; // arc center y
  let r = min(w, h) * 0.6; // arc radius

  // Angle goes from PI (left) to 0 (right): top semicircle
  let ang = map(t, 0, 1, PI, 0);

  // Position of the circle on the arc
  let x = cx + r * cos(ang);
  let y = cy - r * sin(ang); // minus because y grows downward

  // Circle color: yellow -> white
  let cYellow = color(255, 240, 0);
  let cWhite = color(255);
  let sunCol = lerpColor(cYellow, cWhite, t);

  // Draw the circle
  noStroke();
  fill(sunCol);
  ellipse(x, y, 40, 40);

  //cityscape
}
// MIDDLE DOOR — Althea
function sceneTwo(w, h) {
  // background
  noStroke();
  fill(255, 255, 120);
  rect(0, 0, w, h);

  // 3coins
  const phases = [0, 0.8, 1.6];
  const baseY = h * 0.55;
  const xs = [w * 0.3, w * 0.5, w * 0.7];
  const R = 80;

  // for (let i = 0; i < 3; i++) {
  //   let offset = sin(frameCount * 0.1 + phases[i]) * 15;
  //   drawCoin(xs[i], baseY + offset, R);
  // }
  let offset = sin(frameCount * 0.1 + phases[0]) * 15;
  drawCoin(xs[0], baseY + offset, R);
  {
  let offset = sin(frameCount * 0.1 + phases[1]) * 15;
  drawCoin(xs[1], baseY + offset, R);
  }
  {
  let offset = sin(frameCount * 0.1 + phases[2]) * 15;
  drawCoin(xs[2], baseY + offset, R);
  }

}

function drawCoin(cx, cy, r) {
  noStroke();
  fill(255, 215, 0);
  circle(cx, cy, r);
  noFill();
  stroke(218, 165, 32);
  strokeWeight(5);
  circle(cx, cy, r);
  noStroke();
  fill(130, 90, 20);
  textAlign(CENTER, CENTER);
  textSize(r * 0.4);
  text("$", cx, cy + 2);
}

// RIGHT DOOR — Helena
// Pull Face
function sceneThree(w, h) {
  noStroke();
  fill(255, 200, 200);
  rect(0, 0, w, h);

  // --- Face ---
  let cx = w / 2; // Face Center X
  let cy = h / 2; // Face Center Y
  let faceSize = 180;

  // Mouse Direction
  let d = dist(mouseX - 2 * rectWidth, mouseY, cx, cy); // Focus Door
  let isNear = d < faceSize / 1.2;

  // Shake Head and Tongue Long
  let shake = isNear ? sin(frameCount * 0.2) * 10 : 0;
  let tongueLen = isNear ? 70 : 40;

  push();
  translate(cx, cy);
  rotate(radians(shake)); // Shake Head

  // Face
  fill(0);
  ellipse(0, 0, faceSize, faceSize);

  // Left eye
  fill(255, 200, 200);
  ellipse(-40, -30, 30, 40);

  // Right eye
  stroke(255, 200, 200);
  strokeWeight(4);
  line(20, -30, 50, -30);

  // Mouth
  noStroke();
  fill(255, 200, 200);
  arc(0, 20, 100, 80, 0, PI, CHORD);

  // Tongue Long
  fill(255, 1, 1);
  ellipse(0, 40 + tongueLen / 4, 50, tongueLen);

  pop();
}
