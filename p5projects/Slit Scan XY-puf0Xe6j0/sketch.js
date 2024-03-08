// https://editor.p5js.org/jht9629-nyu/sketches/puf0Xe6j0
// Slit Scan XY

let my = {
  version: 2, // update to verify change on mobile
  width: 393, // canvas width
  height: 600, // canvas height
  vwidth: 240, // Aspect ratio of video capture
  vheight: 320,
  alpha: 100,
  angle: 0,
  scanX: true,
  x: 0,
  y: 0,
};

function setup() {
  createCanvas(my.width, my.height);
  pixelDensity(1);
  angleMode(DEGREES); 
  
  my.video = createCapture(VIDEO);
  my.video.size(my.vwidth, my.vheight);
  my.video.hide();

  my.saveBtn = createButton("Save");
  my.saveBtn.mousePressed(saveAction);

  my.flipBtn = createButton("Flip");
  my.flipBtn.mousePressed(flipAction);
  
}

function draw() {
  
  rotate(my.angle)
  tint(255,my.alpha)

  if (my.scanX) {
    scan_x();
  }  
  else {
    scan_y();
  }
}

function scan_x() {
  let sx = my.video.width / 2;
  let sy = 0;
  let sw = 1;
  let sh = my.video.height;
  let dx = my.x;
  let dy = 0;
  let dw = 1;
  let dh = height;
  image(my.video, dx, dy, dw, dh, sx, sy, sw, sh);
  my.x = my.x + 1;
  if (my.x > width) {
    my.x = 0;
    flipAction()
  }
}

function scan_y() {
  let sx = 0;
  let sy = my.video.height / 2;
  let sw = my.video.width;
  let sh = 1;
  let dx = 0;
  let dy = my.y;
  let dw = width;
  let dh = 1;
  image(my.video, dx, dy, dw, dh, sx, sy, sw, sh);
  my.y = my.y + 1;
  if (my.y > height) {
    my.y = 0;
    flipAction()
  }
}

function flipAction() {
  my.scanX = !my.scanX;
  // my.x = 0;
  // my.y = 0;
}

function saveAction() {
  saveCanvas("slit-scan-xy");
}

// copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

// image(img, dx, dy, dWidth, dHeight, sx, sy,
//    [sWidth], [sHeight], [fit], [xAlign], [yAlign])

// https://editor.p5js.org/jht9629-nyu/sketches/5lRcFyYHd
// Slit Scan Y Save

// https://editor.p5js.org/jht9629-nyu/sketches/2bzqKDQjg
// Slit Scan X Save

// https://editor.p5js.org/jht9629-nyu/sketches/n0LuBwifE
// Slit Scan X

// https://editor.p5js.org/jht9629-nyu/sketches/hw8qkUuAw
// Slit Scan

// https://editor.p5js.org/codingtrain/sketches/B1L5j8uk4
// Slit Scan
// Daniel Shiffman
// https://thecodingtrain.com
// https://youtu.be/WCJM9WIoudI
// https://youtu.be/YqVbuMPIRwY
