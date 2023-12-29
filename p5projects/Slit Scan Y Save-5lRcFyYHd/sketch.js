// https://editor.p5js.org/jht9629-nyu/sketches/5lRcFyYHd
// Slit Scan Y Save

let my = {
  version: 2, // update to verify change on mobile
  width: 393, // canvas width
  height: 600,  // canvas height
  vwidth: 240, // Aspect ratio of video capture
  vheight: 320,
  y: 0,
};

function setup() {
  createCanvas(my.width, my.height);
  pixelDensity(1);
  
  my.saveBtn = createButton('Save');
  my.saveBtn.mousePressed(saveAction);

  my.video = createCapture(VIDEO);
  my.video.size(my.vwidth, my.vheight);
  my.video.hide();
  
}

function saveAction() {
  saveCanvas('slit-scan-y');
}

function draw() {
  let w = my.video.width;
  let h = my.video.height;

  let sx = 0;
  let sy = h/2;
  let sw = w;
  let sh = 1;
  let dx = 0; 
  let dy = my.y;
  let dw = width;
  let dh = 1;
  copy(my.video, sx, sy, sw, sh, dx, dy, dw, dh);
  // copy(video, w/2, 0, 1, h, x, 0, 1, h);

  my.y = my.y + 1;
  if (my.y > height) {
    my.y = 0;
  }
}

// copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

// image(img, dx, dy, dWidth, dHeight, sx, sy, 
//    [sWidth], [sHeight], [fit], [xAlign], [yAlign])

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
