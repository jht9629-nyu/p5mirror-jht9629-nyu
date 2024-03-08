// https://editor.p5js.org/jht9629-nyu/sketches/n0LuBwifE
// Slit Scan X

let my = {
  version: 2, // update to verify change on mobile
  width: 393, // canvas width
  height: 600,  // canvas height
  vwidth: 240, // Aspect ratio of video capture
  vheight: 320,
  x: 0,
};

function setup() {
  createCanvas(my.width, my.height);
  pixelDensity(1);
  my.video = createCapture(VIDEO);
  my.video.size(my.vwidth, my.vheight);
  background(51);
}

function draw() {
  let w = my.video.width;
  let h = my.video.height;

  let sx = w / 2;
  let sy = 0;
  let sw = 1;
  let sh = h;
  let dx = my.x;
  let dy = 0;
  let dw = 1;
  let dh = height;
  copy(my.video, sx, sy, sw, sh, dx, dy, dw, dh);
  // copy(video, w/2, 0, 1, h, x, 0, 1, h);

  my.x = my.x + 1;
  if (my.x > width) {
    my.x = 0;
  }
}

// copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

// image(img, dx, dy, dWidth, dHeight, sx, sy, 
//    [sWidth], [sHeight], [fit], [xAlign], [yAlign])

// https://editor.p5js.org/jht9629-nyu/sketches/hw8qkUuAw
// Slit Scan

// https://editor.p5js.org/codingtrain/sketches/B1L5j8uk4
// Slit Scan
// Daniel Shiffman
// https://thecodingtrain.com
// https://youtu.be/WCJM9WIoudI
// https://youtu.be/YqVbuMPIRwY
