// https://editor.p5js.org/jht9629-nyu/sketches/sJM2AMf5T
// video pixel
// extreme pixel distortion at vscale: 32 and beyond

let my = { width: 640, height: 480, ncell: 40, vscale: 64 };

function setup() {
  createCanvas(my.width, my.height);
  background(200);
  
  let vwidth = my.width / my.vscale;
  let vheight = my.height / my.vscale;
  console.log('vwidth', vwidth, 'vheight', vheight)
  
  my.video = createCapture(VIDEO);
  my.video.size(vwidth, vheight);
  // my.video.hide();
  
  my.x = 0;
  my.y = 0;
  my.cell = vwidth / my.ncell
  background(255)
  noStroke();
}

function draw() {
  // drawing with video appear to more pixel detail not limited to video size
  // image(my.video,0,0,width,height)
  let img = my.video.get();
  image(img,0,0,width,height)
}


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
