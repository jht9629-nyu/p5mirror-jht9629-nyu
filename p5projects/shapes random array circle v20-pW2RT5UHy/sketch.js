// https://editor.p5js.org/jht9629-nyu/sketches/pW2RT5UHy
// shapes random array circle v20
let n, i, arr;
function setup() {
  createCanvas(windowWidth, windowHeight);
  init_page();
  // frameRate(1);
}
function init_vars() {
  let p = 13;
  w = Math.round(width / p);
  // h = Math.round(height / p);
  h = w;
  mwidth = width - w;
  mheight = height - h;
  // nx = Math.round(mwidth / w);
  // ny = Math.round(mheight / h);
  // n = (nx + 1) * (ny + 1);
  i = 0;
  arr = [];
  for (let y = 0; y < mheight; y += h) {
    for (let x = 0; x < mwidth; x += w) {
      arr.push([x, y]);
    }
  }
  shuffle(arr, true);
}
function draw() {
  // let x = Math.round(random(mwidth / w)) * w;
  // let y = Math.round(random(mheight / h)) * h;
  // check here to see last entry
  if (i >= arr.length) {
    //i = 0;
    init_page();
    return;
  }
  let [x, y] = arr[i];
  draw_bullseye(w + x, h + y, w, h);
  i = i + 1;
  // if (i >= arr.length) {
  //   i = 0;
  //   init_page();
  // }
}
function draw_bullseye(x, y, w, h) {
  fill(random(255), random(255), random(255));
  ellipse(x, y, w, h);
  fill(random(255), random(255), random(255));
  ellipse(x, y, w * 0.75, h * 0.75);
  fill(random(255), random(255), random(255));
  ellipse(x, y, w * 0.5, h * 0.5);
  fill(random(255), random(255), random(255));
  ellipse(x, y, w * 0.25, h * 0.25);
}
function init_page() {
  init_vars()
  background(random(255), random(255), random(255));
}
function mousePressed() {
  init_page();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init_page();
}

// https://editor.p5js.org/jht9629-nyu/sketches/KpCniSa1w
// shapes random frameRate v15

// https://editor.p5js.org/jht9629-nyu/sketches/GzlO70dCj
// shapes random array v17
