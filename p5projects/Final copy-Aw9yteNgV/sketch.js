// https://editor.p5js.org/jht9629-nyu/sketches/Aw9yteNgV
// use random to periodically clear canvas
// https://editor.p5js.org/ezeta/sketches/lYT8MqOAN
// music video by Emilia Ezeta
//I got help from John Henry Thompson and GPT-5 :)
// ♫꒰･‿･๑꒱
let song;
let imgs = []; // objects
let index = 0;
let amp;
let isScrubbing = false;

function preload() {
  song = loadSound("rio.mp3");

  let loadedImgs = [
    loadImage("manniquis/img1.jpg"),
    loadImage("manniquis/img2.jpg"),
    loadImage("manniquis/img3.jpg"),
    loadImage("manniquis/img4.jpg"),
    loadImage("manniquis/img5.jpg"),
    loadImage("manniquis/img6.jpg"),
    loadImage("manniquis/img7.jpg"),
    loadImage("manniquis/img8.jpg"),
    loadImage("manniquis/img9.jpg"),
    loadImage("manniquis/img10.jpg"),
    loadImage("manniquis/img11.png"),
  ];

  // images as objects with coordinates
  for (let i = 0; i < loadedImgs.length; i++) {
    imgs.push({
      img: loadedImgs[i],
      x: random(windowWidth),
      y: random(windowHeight),
    });
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetScene();

  amp = new p5.Amplitude();
  song.loop();
}

function resetScene() {
  background(0, 230, 250);

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].x = random(width);
    imgs[i].y = random(height);
  }
}

// toggle play
function doubleClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
    resetScene();
  }
}

// slow down / lower pitch on drag
function mouseDragged() {
  isScrubbing = true;

  let rate = map(mouseX, 0, width, 0.2, 1);
  rate = constrain(rate, 0.2, 1);

  song.rate(rate);
}

function mouseReleased() {
  isScrubbing = false;
  song.rate(1);
}

function draw() {
  let vol = amp.getLevel();
  if (random() < 0.01) {
    // windowResized();
    background(0, 230, 250);
  }
  index = floor(map(vol, 0, 0.3, 0, imgs.length));
  index = constrain(index, 0, imgs.length - 1);

  let opacity = map(vol, 0, 0.3, 0, 255);
  tint(255, opacity);

  image(
    imgs[index].img,
    imgs[index].x,
    imgs[index].y,
    random(10, 400),
    random(10, 400)
  );

  // movement
  imgs[index].x += random(-10, 50);
  imgs[index].y += random(-10, 50);

  if (imgs[index].x > width) imgs[index].x = 0;
  if (imgs[index].y > height) imgs[index].y = 0;

  // invert color when dragging
  noTint();
  if (isScrubbing) {
    filter(INVERT);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
