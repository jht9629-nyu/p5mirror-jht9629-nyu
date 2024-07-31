//Edge detection stuff
let buffer, result;
let blurSize = 5; //5 is default
let lowThreshold = 35; //60 is default
let highThreshold = 50; //75 is default
let capture;
let w = 640,
  h = 480;
//setup for capture, face tracking, and pixel density
function edgeDetectSetup() {
  capture = createCapture(
    {
      audio: false,
      video: {
        width: w,
        height: h,
      },
    },
    function () {
      console.log("capture ready.");
    }
  );
  capture.size(w, h);
  capture.hide();
  buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t); //for edge detection
  pixelDensity(1); //just use pixelDensity 1
}
function jsfeatToP5(src, dst) {
  if (!dst || dst.width != src.cols || dst.height != src.rows) {
    dst = createImage(src.cols, src.rows);
  }
  let n = src.data.length;
  dst.loadPixels();
  let srcData = src.data;
  let dstData = dst.pixels;
  for (let i = 0, j = 0; i < n; i++) {
    let cur = srcData[i];
    dstData[j++] = cur;
    dstData[j++] = cur;
    dstData[j++] = cur;
    dstData[j++] = 255;
  }
  dst.updatePixels();
  return dst;
}

function drawEdgeImg() {
  //image(capture, 0, 0, width/2, height);
  capture.loadPixels();
  if (capture.pixels.length > 0) {
    // don't forget this!
    jsfeat.imgproc.grayscale(capture.pixels, w, h, buffer);
    jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
    jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
    result = jsfeatToP5(buffer, result);
    result.loadPixels();

    // Transfer the edges to the new p5.Image with a transparent background
    for (let i = 0; i < w * h; i++) {
      const value = buffer.data[i];
      const alpha = value > 0 ? 255 : 0; // Set alpha to 255 for edges, 0 for non-edges
      const index = i * 4;
      result.pixels[index] = value;
      result.pixels[index + 1] = value;
      result.pixels[index + 2] = value;
      result.pixels[index + 3] = alpha; // Set alpha value
    }
    result.updatePixels();
    image(result, 0, 0, width / 2, height);
  }
}
