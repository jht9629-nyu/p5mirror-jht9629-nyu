// https://editor.p5js.org/jht9629-nyu/sketches/p0ato8vra
// video pixel meter

let my = { width: 640, height: 480, vscale: 4, crossBar: 2 };

function setup() {
  createCanvas(my.width, my.height);
  background(200);

  let vwidth = my.width / my.vscale;
  let vheight = my.height / my.vscale;
  console.log("vwidth", vwidth, "vheight", vheight);

  my.video = createCapture(VIDEO);
  my.video.size(vwidth, vheight);
  my.video.hide();

  background(255);
  noStroke();
}

function draw() {
  // Get pixel from center of video
  let cx = my.video.width / 2;
  let cy = my.video.height / 2;
  let color = my.video.get(cx, cy);

  // fill the canvas with the center video pixel
  fill(color);
  rect(0, 0, width, height);

  // place video in lower right corner
  let vx = width - my.video.width;
  let vy = height - my.video.height;
  image(my.video, vx, vy);

  // draw cross hairs
  let len = my.crossBar;
  rect(vx + cx, vy, len, my.video.height);
  rect(vx, vy + cy, my.video.width, len);
}

// https://editor.p5js.org/jht9629-nyu/sketches/sJM2AMf5T
// video pixel
// extreme pixel distortion at vscale: 32 and beyond

// https://editor.p5js.org/jht9629-nyu/sketches/HRjZBETUA
// video pixel scan

// https://editor.p5js.org/jht1493/sketches/MtdR3vBcj
// https://github.com/CodingTrain/website/blob/master
//   /Tutorials/P5JS/p5.js_video/11.1_p5.js_createCapture

// https://p5js.org/reference/#/p5/image
// -- draw entire image, optionally scaled to new size
// image(img, x, y, [width], [height])
// -- draw into subsection of an image,
//      optional subsection of source image
// image(img, dx, dy, dWidth, dHeight,
//    sx, sy, [sWidth], [sHeight])
