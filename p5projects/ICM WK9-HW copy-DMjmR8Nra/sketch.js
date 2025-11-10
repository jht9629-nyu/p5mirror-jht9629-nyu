// https://editor.p5js.org/jht9629-nyu/sketches/DMjmR8Nra
// https://editor.p5js.org/jackienam/sketches/bVyFdz9VO

// https://docs.ml5js.org/#/reference/handpose?id=quick-start
// https://editor.p5js.org/ml5/sketches/QGH3dwJ1A

//Create and/or manipulate an image or video at the pixel level. Consider using DOM input elements or ml5js to control some parameter in your sketch. Create a blog post documenting your work.

let video;
let particles = [];
let slider;
let videoImage;

let handPose;
let hands = [];

// global variable for step magnitude controlled by pinch
let stepScale = 1;

function preload() {
  // Initialize HandPose model with flipped video input
  handPose = ml5.handPose({ flipped: true });
}

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // create particles
  for (let i = 0; i < 300; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  // transparency slider (same as original)

  let sliderLabel = createDiv("Opacity");
  sliderLabel.position(10, height+10); // adjust to where you want it
  slider = createSlider(0, 255, 127);
  slider.position(10, height + 30);

  // DOM readout to show pinch distance
  pinchReadout = createDiv("Use your left index and thumb to adjust the speed of the particles. Pinch distance: -");
  pinchReadout.position(10, height + 50);
  pinchReadout.style("color", "#aaa");

  background(0);

  // Start detecting hands
  handPose.detectStart(video, gotHands);
}

function gotHands(results) {
  hands = results;
}

function draw() {
  background(0);
  videoImage = video.get();
  video.loadPixels();

  // ---- Update particle motion based on left-hand pinch distance ----
  let leftHand = null;
  if (hands.length > 0) {
    for (let hand of hands) {
      if (hand.handedness === "Left") {
        const index = hand.index_finger_tip;
        const thumb = hand.thumb_tip;
        leftHand = { index: index, thumb:thumb };
      }
    }
  }

  if (leftHand) {
    const { index, thumb } = leftHand;
    const d = dist(index.x, index.y, thumb.x, thumb.y);
    // Map pinch distance (20–160 px) to step size (1–15)
    stepScale = constrain(map(d, 20, 160, 1, 20), 1, 15);
    pinchReadout.html(
      `Pinch distance: ${nf(d, 1, 1)} px → step: ${nf(stepScale, 1, 1)}`
    );

    // Visualize pinch
    const cx = (index.x + thumb.x) * 0.5;
    const cy = (index.y + thumb.y) * 0.5;
    noStroke();
    fill(255, 0, 255, 150);
    circle(cx, cy, d * 0.5);
  } else {
    // no left hand detected
    pinchReadout.html("Use the distance between your left index and thumb to adjust the speed of the particles.");
  }

  // ---- Draw particles ----
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

// ==== Particle class (same structure as your original) ====
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(4, 20);
  }
  update() {
    // random walk scaled by stepScale (controlled by pinch)
    this.x += random(-stepScale, stepScale);
    this.y += random(-stepScale, stepScale);
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
  show() {
    noStroke();
    const px = floor(this.x);
    const py = floor(this.y);
    const col = videoImage.get(px, py);
    // const col = video.get(px, py);
    
    fill(col[0], col[1], col[2], slider.value());
    ellipse(this.x, this.y, this.r, this.r);
  }
}
