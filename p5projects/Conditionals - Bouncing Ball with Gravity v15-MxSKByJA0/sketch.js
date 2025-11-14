// https://editor.p5js.org/jht9629-nyu/sketches/MxSKByJA0
// Conditionals - Bouncing Ball with Gravity v15
// Ball class - video - grid

let balls = [];
let useMousePressed = false;
let my = {};

function setup() {
  //
  my.gridSize = 20;
  my.restoreSteps = 20;
  my.doColor = true;
  my.pixAlpha = 200;

  let canvas = createCanvas(windowWidth, windowHeight - 80);
  canvas.mousePressed(canvas_mousePressed);
  canvas.mouseReleased(canvas_mouseReleased);
  canvas.touchEnded(canvas_mouseReleased);

  create_ui();

  create_video();

  addAction();
  // new Ball(width / 2, height / 2);

  // let ball2 = new Ball(width / 2, height / 2);
  // ball2.drop();
}

function draw() {
  background(0);
  // background(200);
  my.videoImage = my.video.get();
  // image(my.videoImage, 0, 0, width, height);
  noStroke();
  for (let ball of balls) {
    ball.draw();
  }
}

function create_video() {
  my.video = createCapture(VIDEO);
  my.video.size(width, height);
  console.log("my.video.width", my.video.width, "height", my.video.height);
  // my.video.hide();
  my.videoImage = my.video.get();
}

function mouseDragged() {
  // console.log('mouseDragged');

  // prevent canvas_mouseReleased actions
  useMousePressed = false;

  // apply velocity based on mouse drag direction and speed
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;

  // wind algorithm
  // from https://editor.p5js.org/yh6371/sketches/cl9-Q8POR
  let windScale = 0.06;
  // only balls within this range are affected
  let range = width * 0.2;
  // for (const d of dots) {
  //   const dd = dist(mouseX, mouseY, d.x, d.y);
  //   if (dd < radius) {
  //     const falloff = (radius - dd) / radius;
  //     d.applyForce(dx * windScale * falloff, dy * windScale * falloff);
  //   }
  // }
  for (let ball of balls) {
    let dd = dist(mouseX, mouseY, ball.x, ball.y);
    if (dd < range) {
      let falloff = (range - dd) / range;
      let ndx = dx * windScale * falloff;
      let ndy = dy * windScale * falloff;
      ball.add_velocity(ndx, ndy);
    }
  }

  if (keyIsDown(SHIFT)) {
    new Ball(mouseX, mouseY);
  }

  let inX = mouseX >= 0 && mouseX < width;
  let inY = mouseY >= 0 && mouseY < height;
  let onCanvas = inX && inY;
  // required to prevent touch drag moving canvas on mobile
  return !onCanvas;
}

function canvas_mousePressed() {
  // console.log('mousePressed');
  useMousePressed = true;
}

function canvas_mouseReleased() {
  // console.log('mouseReleased');
  console.log("canvas_mouseReleased balls.length", balls.length);
  if (!useMousePressed) return;
  new Ball(mouseX, mouseY);
}

// https://p5js.org/reference/p5/mouseReleased/
// https://p5js.org/reference/p5/mouseDragged/
// https://p5js.org/reference/p5/pmouseX/
// https://p5js.org/reference/p5/keyCode/
// https://p5js.org/reference/p5/keyIsDown/

// https://editor.p5js.org/jht9629-nyu/sketches/dVHK9-Ns7
// Conditionals - Bouncing Ball with Gravity v2
// added friction

// https://editor.p5js.org/codingtrain/sketches/JTIN5dIVB
// Bouncing ball with gravity
// The Coding Train / Daniel Shiffman

// https://editor.p5js.org/jht9629-nyu/sketches/BtdFgAST_
// Conditionals - Bouncing Ball with Gravity v3
// Use object literals

// https://editor.p5js.org/jht9629-nyu/sketches/-GzgH4Gnf
// Conditionals - Bouncing Ball with Gravity v4
// added velX bounceX

// https://editor.p5js.org/jht9629-nyu/sketches/250TAeMiE
// Conditionals - Bouncing Ball with Gravity v5
// use drag and bounce from
// https://editor.p5js.org/yh6371/sketches/cl9-Q8POR

// https://editor.p5js.org/jht9629-nyu/sketches/whU0iYX5y
// Conditionals - Bouncing Ball with Gravity v6
// use mouseDragged

// https://editor.p5js.org/jht9629-nyu/sketches/suNS9CAwt
// Conditionals - Bouncing Ball with Gravity v7
// ball funcs

// https://editor.p5js.org/jht9629-nyu/sketches/aipAPmiUT
// Conditionals - Bouncing Ball with Gravity v8
// array of balls with random colors

// https://editor.p5js.org/jht9629-nyu/sketches/pbEo73JbQ
// Conditionals - Bouncing Ball with Gravity v9
// use wind algorithm from yh6371
/*
  if (tool === "wind") {
    // Push nearby dots along the mouse delta, with distance falloff
    const dx = mouseX - pmouseX;
    const dy = mouseY - pmouseY;
    const windScale = 0.06,
      radius = 120;
    for (const d of dots) {
      const dd = dist(mouseX, mouseY, d.x, d.y);
      if (dd < radius) {
        const falloff = (radius - dd) / radius;
        d.applyForce(dx * windScale * falloff, dy * windScale * falloff);
      }
    }
  } else if (tool === "erase") {
*/

// https://editor.p5js.org/jht9629-nyu/sketches/0nSrecmFq
// Conditionals - Bouncing Ball with Gravity v10
// Ball class - wind algorithm

// https://editor.p5js.org/jht9629-nyu/sketches/_um4LG0SL
// Conditionals - Bouncing Ball with Gravity v11
// Ball class - wind algorithm - gravity drop

// https://editor.p5js.org/jht9629-nyu/sketches/Iob8cJo2b
// Conditionals - Bouncing Ball with Gravity v12
// Ball class - wind algorithm - gravity drop - add

// https://editor.p5js.org/jht9629-nyu/sketches/HILRsnSsG
// Conditionals - Bouncing Ball with Gravity v13
// Ball class - video

// https://editor.p5js.org/jht9629-nyu/sketches/5sLlOgTDg
// Conditionals - Bouncing Ball with Gravity v14
// Ball class - video - drag + restore
