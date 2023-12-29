// https://editor.p5js.org/jht9629-nyu/sketches/3ZwzK2buW
// video pixel scan random

let my = { width: 640, height: 480, ncell: 32, vscale: 2 };

function setup() {
  createCanvas(my.width, my.height);
  background(255);
  noStroke();

  let vwidth = my.width / my.vscale;
  let vheight = my.height / my.vscale;
  
  my.video = createCapture(VIDEO);
  my.video.size(vwidth, vheight);
  // my.video.hide();
  
  my.x = 0;
  my.y = 0;
  my.cell = vwidth / my.ncell
}

function draw() {
  let vcolor = my.video.get(my.x, my.y );
  fill(vcolor)
  let x = my.x * my.vscale;
  let y = my.y * my.vscale;
  let cell = my.cell * my.vscale * random([0.5,1.0]);
  if (random([0,1])) {
    circle(x, y, cell)    
  }
  else {
    rect(x, y, cell, cell)    
  }
  my.x += my.cell;
  if (my.x > my.video.width) {
    my.x = 0;
    my.y += my.cell;
    if (my.y > my.video.height) {
      my.y = 0;
    }
  }
}

// https://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints
// wooh! deep in the specs

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
