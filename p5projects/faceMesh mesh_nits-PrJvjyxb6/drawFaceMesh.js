
// my.output
// my.mar_w
// my.mar_h 
// my.align
// my.alpha
// my.avg_color[]

// function drawFaceMesh(my, input, predictions) {
function drawFaceMesh(my, keypoints) {
  
  let input = my.input.get();
  if (!input) return;
  
  let layer = my.output;
  let out_w = layer.width;
  let out_h = layer.height;
  // let mar_w = out_w * (my.mar_w / 100); // width margin -- not used yet
  let mar_h = out_h * (my.mar_h / 100);
  let rr = out_h / input.height;
  let align_none = my.align === 'none';
  let align_center = my.align === 'center';
  let align_right = my.align === 'right';

  let col_sum = [0, 0, 0];
  let ncol = 0;

  let y1k = keypoints[10].y;
  let y2k = keypoints[152].y;
  let x1k = keypoints[234].x;
  let x2k = keypoints[454].x;

  let x1k0 = x1k;
  let y1k0 = y1k;
  let xlen = x2k - x1k;
  let ylen = y2k - y1k;
  let r1 = (out_h - mar_h * 2) / ylen;
  let x0 = 0; // flush left
  let y0 = mar_h;
  
  if (align_right) {
    x0 = out_w - xlen * r1;
  } else if (align_center) {
    x0 = (out_w - xlen * r1) / 2;
  } else if (align_none) {
    r1 = rr;
    x1k0 = 0;
    y1k0 = 0;
  }
  
  let n = mesh_nits.length;
  for (let j = 0; j < n; j += 3) {
    let {x: x1, y: y1} = keypoints[mesh_nits[j]];
    let {x: x2, y: y2} = keypoints[mesh_nits[j + 1]];
    let {x: x3, y: y3} = keypoints[mesh_nits[j + 2]];
    let col = input.get(x1, y1);
    col[3] = my.alpha;
    col_sum[0] += col[0];
    col_sum[1] += col[1];
    col_sum[2] += col[2];
    ncol++;
    x1 = (x1 - x1k0) * r1 + x0;
    y1 = (y1 - y1k0) * r1 + y0;
    x2 = (x2 - x1k0) * r1 + x0;
    y2 = (y2 - y1k0) * r1 + y0;
    x3 = (x3 - x1k0) * r1 + x0;
    y3 = (y3 - y1k0) * r1 + y0;
    layer.fill(col);
    layer.triangle(x1, y1, x2, y2, x3, y3);
  }
  if (ncol > 0) {
    my.avg_color[0] = int(col_sum[0] / ncol);
    my.avg_color[1] = int(col_sum[1] / ncol);
    my.avg_color[2] = int(col_sum[2] / ncol);
  }
}

