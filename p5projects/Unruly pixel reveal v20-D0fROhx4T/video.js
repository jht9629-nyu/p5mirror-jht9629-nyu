//

function image_layer(layer, dH) {
  push();
  // Flip on the x horizontal axis
  translate(width, 0);
  scale(-1, 1);
  image(layer, 0, 0, width, dH, 0, 0, layer.width, layer.height);
  pop();
}

// image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])

function create_video() {
  // Create a constraints object.
  let constraints = {
    video: true,
    audio: false,
  };
  my.video = createCapture(constraints, create_video_ready);
  // my.video.size(width, height);
  console.log("my.video.width", my.video.width, "height", my.video.height);
  my.video.hide();
  my.videoImage = my.video.get();
}

function create_video_ready() {
  console.log(
    "create_video_ready my.video.width",
    my.video.width,
    "height",
    my.video.height
  );
  if (!my.overLayer) {
    my.overLayer = createGraphics(my.video.width, my.video.height);
  }
  my.layer = createGraphics(my.video.width, my.video.height);
  let layer = my.layer;
  layer.background(0);
  layer.noStroke();

  my.aspect = layer.height / layer.width;
  let d = max(layer.width, layer.height);
  my.gridSize = int(d / my.gridCount);
  console.log("create_video_ready my.gridSize", my.gridSize);

  my.dHeight = width * my.aspect;
  my.vscale = layer.width / width;

  if (my.doTrack) {
    clearAction();
  } else {
    fillAction();
  }
}

// Convert canvas point to video
function canvas_to_video_point(x, y) {
  x = width - x;
  x *= my.vscale;
  y *= my.vscale;
  return { x, y };
}

