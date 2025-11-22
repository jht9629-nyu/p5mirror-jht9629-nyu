//

function apply_oval() {
  if (!my.doOval) return;
  // my.radiateAngle = random(360);
  for (let angle = 0; angle < 180; angle++) {
    for (let ent of my.last_nose_pos) {
      if (ent.length < 1) {
        continue;
      }
      let pt = ent[0];
      let x = pt.x;
      let y = pt.y + pt.w * 0.1;
      // let rx = pt.w * 1.8;
      let rx = pt.w * 0.8;
      let ry = pt.w;

      let a = radians(angle);
      let x1 = x + rx * cos(a);
      let y1 = y + ry * sin(a);

      a = radians((angle + 180) % 360);
      let x2 = x + rx * cos(a);
      let y2 = y + ry * sin(a);

      paint_line({ x: x1, y: y1 }, { x: x2, y: y2 });
      // paint_line({ x: x2, y: y2 }, { x: x1, y: y1 });
    }
  }
  // my.radiateAngle = (my.radiateAngle + 1) % 360;
}

function apply_track() {
  if (!my.doTrack) return;
  for (let ent of my.last_nose_pos) {
    if (ent.length < 2) {
      continue;
    }
    let p0 = ent[0];
    let p1 = ent[1];
    paint_line({ x: p0.x, y: p0.y }, { x: p1.x, y: p1.y });
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

function paint_line(mpt, ppt) {
  let x1 = ppt.x;
  let y1 = ppt.y;
  let x2 = mpt.x;
  let y2 = mpt.y;
  // console.log('paint_line x1', x1, 'y1', y1, 'x2', x2, 'y2', y2);

  let dx = x2 - x1;
  let dy = y2 - y1;
  let step = abs(dy);
  if (abs(dx) >= abs(dy)) {
    step = abs(dx);
  }
  dx = dx / step;
  dy = dy / step;
  if (step < 2) {
    // console.log('step', step, 'dx', dx);
    return;
  }
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
  if (!my.doWind) return;
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
