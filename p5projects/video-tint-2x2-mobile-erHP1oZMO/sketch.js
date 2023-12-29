// https://editor.p5js.org/jht9629-nyu/sketches/erHP1oZMO
// video-tint-2x2-mobile

let my = {
  version: 2,
  width: 393, // canvas width
  height: 600, // canvas height
  alpha: 10,
  w: 240,
  h: 320
};

function setup() {
  createCanvas(my.width, my.height);
  background(51);
  my.video = createCapture(VIDEO);
  my.video.size(my.w, my.h);
  my.video.hide();
  createDiv(my.version)
}

function draw() {
  // Copy the entire source image
  // image(img, x, y, [width], [height])

  // Red - top left
  tint(255, 0, 0, my.alpha);  
  image(my.video, 0, 0, my.w, my.h);

  // Green - top right
  tint(0, 255, 0, my.alpha);  
  image(my.video, my.w, 0, my.w, my.h);

  // Blue - bottom left
  // tint(125, 125, 125, my.alpha);  
  tint(0, 0, 255, my.alpha);  
  image(my.video, 0, my.h, my.w, my.h);

  // Red+Green=Yellow - bottom right
  tint(255, 255, 0, my.alpha);  
  image(my.video, my.w, my.h, my.w, my.h);

  // No tint - center
  tint(255, 255, 255, 255)  
  image(my.video, my.w-my.w/2, my.h-my.h/2, my.w, my.h);
}

// TRY: Try extreme values for my.alpha
// TRY: try background call in draw func
// TRY: comment out center image and have 4 images
//     show the corresponding portion of the video

// https://editor.p5js.org/jht1493/sketches/QYlq2DxmM
// video tint 2x2 mobile

// https://editor.p5js.org/jht1493/sketches/Zx8JnxZfw
// video tint 2x2

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
