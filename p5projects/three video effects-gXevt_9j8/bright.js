var video;
var vScale = 16;

function setup_bright() {
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw_bright() {
  // background(51);
  if (!video.loadedmetadata) return;
  video.loadPixels();
  let w1 = floor(video.width/3);
  let w2 = floor(w1 * 2);
  for (var y = 0; y < video.height; y++) {
    for (var x = w1; x < w2; x++) {
      var index = (video.width - x + 1 + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w, w);
    }
  }
}