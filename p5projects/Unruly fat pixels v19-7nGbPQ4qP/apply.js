//

function apply_radiate() {
  if (!my.doRadiate) return;
  for (let ent of my.last_nose_pos) {
    if (ent.length < 1) {
      continue;
    }
    let pt = ent[0];
    let x = pt.x;
    let y = pt.y - pt.w * 0.3;
    let r = pt.w;

    let a = radians(my.radiateAngle);
    let x1 = x + r * cos(a);
    let y1 = y + r * sin(a);
    a = radians((my.radiateAngle + 180) % 360);
    let x2 = x + r * cos(a);
    let y2 = y + r * sin(a);

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

  my.dHeight = width * my.aspect;
  my.vscale = my.layer.width / width;

  if (my.doRadiate) {
    clearAction();
  } else {
    fillAction();
  }
}

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
