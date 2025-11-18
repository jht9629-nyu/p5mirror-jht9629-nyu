// https://editor.p5js.org/jht9629-nyu/sketches/7nGbPQ4qP
// Unruly fat pixels v19
// circle cross
// opposite points on circle inconsistent

let my = {};

function setup() {
  //
  // pixelDensity(1);
  my.useMousePressed = false;
  my.items = [];
  my.doPaint = false;
  my.gridCount = 128;
  // if (windowWidth < 600) my.gridCount = 32;
  my.restoreSteps = 16;
  my.doRestore = true;
  my.doColor = true;
  my.showPose = false;
  my.pixAlpha = 200;
  my.last_nose_pos = [];
  my.periodTime = 0;
  my.restorePauseSecs = 3;
  my.moveThreshold = 5;
  my.rangeFactor = 0.1;
  my.doRadiate = false;
  my.radiateAngle = 0;

  // let canvas = createCanvas(windowWidth, windowHeight);
  let canvas = createCanvas(windowWidth, windowHeight - 100);
  canvas.mousePressed(canvas_mousePressed);
  canvas.mouseReleased(canvas_mouseReleased);
  canvas.touchEnded(canvas_mouseReleased);

  create_ui();

  create_video();

  bodyPose_setup();
}

function draw() {
  if (!my.layer) {
    // console.log("draw waiting for my.layer", frameCount);
    return;
  }
  my.layer.background(0);
  // background(200);
  // console.log("my.video.width", my.video.width, "height", my.video.height);
  my.videoImage = my.video.get();
  // image(my.videoImage, 0, 0, width, height);
  noStroke();
  for (let item of my.items) {
    item.draw();
  }
  apply_radiate();
  bodyPose_draw();
  image_layer(my.layer, my.dHeight);
  apply_nose_wind();

  my.periodTime += deltaTime / 1000;
  if (my.periodTime > my.restorePauseSecs) {
    // console.log("my.periodTime expired");
    my.doRestore = true;
    my.periodTime = 0;
    stopAction();
  }
}

function apply_radiate() {
  if (!my.doRadiate) return;
  for (let ent of my.last_nose_pos) {
    if (ent.length < 1) {
      continue;
    }
    let pt = ent[0];
    let x = pt.x;
    let y = pt.y;
    let r = pt.w;
    let a = radians(my.radiateAngle);
    let x1 = x + r * cos(a);
    let y1 = y + r * sin(a);
    a = radians((my.radiateAngle + 180) % 360);
    let x2 = x + r * cos(a);
    let y2 = y + r * cos(a);

    // my.layer.stroke('green');
    // my.layer.line(x1, y1, x2, y2);
    paint_line({ x: x1, y: y1 }, { x: x2, y: y2 });
    // paint_line({ x: x2, y: y2 }, { x: x1, y: y1 });
  }
  my.radiateAngle = (my.radiateAngle + 1) % 360;
}

function image_layer(layer, dH) {
  push();
  // Flip on the x horizontal axis
  translate(width, 0);
  scale(-1, 1);
  image(layer, 0, 0, width, dH, 0, 0, layer.width, layer.height);
  pop();
}

// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])

function create_video() {
  // Create a constraints object.
  let constraints = {
    video: true,
    audio: false,
  };
  my.video = createCapture(constraints, create_video_ready);
  // my.video.size(width, height);
  console.log("my.video.width", my.video.width, "height", my.video.height);
  my.video.hide();
  my.videoImage = my.video.get();
}

function create_video_ready() {
  console.log(
    "create_video_ready my.video.width",
    my.video.width,
    "height",
    my.video.height
  );
  my.layer = createGraphics(my.video.width, my.video.height);
  let layer = my.layer;
  layer.noStroke();

  my.aspect = layer.height / layer.width;
  let d = max(layer.width, layer.height);
  my.gridSize = int(d / my.gridCount);
  console.log("create_video_ready my.gridSize", my.gridSize);

  if (my.doRadiate) {
    clearAction();
  } else {
    fillAction();
  }

  init_screen_dim();
}

function init_screen_dim() {
  my.dHeight = width * my.aspect;
  my.vscale = my.layer.width / width;
}

function mouseDragged() {
  // console.log('mouseDragged');

  // prevent canvas_mouseReleased actions
  my.useMousePressed = false;

  // apply velocity based on mouse drag direction and speed
  let mpt = canvas_to_video_point(mouseX, mouseY);
  let ppt = canvas_to_video_point(pmouseX, pmouseY);

  if (my.doPaint) {
    paint_line(mpt, ppt);
  } else {
    apply_wind(mpt, ppt);
  }

  let inX = mouseX >= 0 && mouseX < width;
  let inY = mouseY >= 0 && mouseY < height;
  let onCanvas = inX && inY;
  // required to prevent touch drag moving canvas on mobile
  return !onCanvas;
}

function paint_line(mpt, ppt) {
  let x1 = ppt.x;
  let y1 = ppt.y;
  let x2 = mpt.x;
  let y2 = mpt.y;
  // console.log('x1', x1, 'y1', y1, 'x2', x2, 'y2', y2);

  let dx = x2 - x1;
  let dy = y2 - y1;
  let step = abs(dy);
  if (abs(dx) >= abs(dy)) {
    step = abs(dx);
  }
  dx = dx / step;
  dy = dy / step;
  let x = x1;
  let y = y1;
  let g = my.gridSize;
  dx = dx * g;
  dy = dy * g;
  for (let i = 0; i <= step; i += g) {
    new FatPixel(x, y, { replace: 1 });
    x = x + dx;
    y = y + dy;
  }
}

// https://en.wikipedia.org/wiki/Digital_differential_analyzer_(graphics_algorithm)
// https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm

function apply_nose_wind() {
  let sumd = 0;
  let n = 0;
  for (let ent of my.last_nose_pos) {
    if (ent.length < 2) {
      continue;
    }
    let mpt = ent[1];
    let ppt = ent[0];
    sumd += apply_wind(mpt, ppt);
    n += 1;
  }
  if (n > 0) sumd = sumd / n;
  // console.log('sumd', sumd);
  let moving = sumd > my.moveThreshold;
  if (moving) {
    // console.log("moving");
    my.doRestore = false;
    my.periodTime = 0;
  }
}

function apply_wind(mpt, ppt) {
  let dx = mpt.x - ppt.x;
  let dy = mpt.y - ppt.y;
  // wind algorithm
  // from https://editor.p5js.org/yh6371/sketches/cl9-Q8POR
  let windScale = 0.06;
  // only items within this range are affected
  let range = width * my.rangeFactor;
  for (let item of my.items) {
    let dd = dist(mpt.x, mpt.y, item.x, item.y);
    if (dd < range) {
      let falloff = (range - dd) / range;
      let ndx = dx * windScale * falloff;
      let ndy = dy * windScale * falloff;
      item.add_velocity(ndx, ndy);
    }
  }
  return (abs(dx) + abs(dy)) / 2;
}

// Convert canvas point to video
function canvas_to_video_point(x, y) {
  x = width - x;
  x *= my.vscale;
  y *= my.vscale;
  return { x, y };
}

function canvas_mousePressed() {
  // console.log('mousePressed');
  my.useMousePressed = true;
}

function canvas_mouseReleased() {
  // console.log('mouseReleased');
  console.log("canvas_mouseReleased items.length", my.items.length);
  if (!my.useMousePressed) return;
  let mpt = canvas_to_video_point(mouseX, mouseY);
  new FatPixel(mpt.x, mpt.y);
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
// Bouncing item with gravity
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
// item funcs

// https://editor.p5js.org/jht9629-nyu/sketches/aipAPmiUT
// Conditionals - Bouncing Ball with Gravity v8
// array of items with random colors

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

// https://editor.p5js.org/jht9629-nyu/sketches/MxSKByJA0
// Conditionals - Bouncing Ball with Gravity v15
// Ball class - video - grid

// https://editor.p5js.org/jht9629-nyu/sketches/RM_xP4Epj
// Conditionals - Bouncing Ball with Gravity v16
// video - aspect ratio

// https://editor.p5js.org/jht9629-nyu/sketches/Lx4gj-rT2
// Unruly fat pixels v17

// https://editor.p5js.org/jht9629-nyu/sketches/m483LSIQy
// Unruly fat pixels v18
// grid size for mobile small screen
// full screen action
