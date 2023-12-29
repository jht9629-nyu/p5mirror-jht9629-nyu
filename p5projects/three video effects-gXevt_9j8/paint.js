
let particles = [];
let slider;

function setup_paint() {
  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  slider = createSlider(0, 255, 127);
  background(0);
}

function draw_paint() {
  video.loadPixels();
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.w1 = floor(width/3)*2;
    this.w2 = width
    this.x = constrain(x, this.w1, this.w2);
    this.y = constrain(y, 0, height);
    this.r = random(4, 32);
  }

  update() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, this.w1, this.w2);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    noStroke();
    let px = floor(this.x / vScale);
    let py = floor(this.y / vScale);
    let col = video.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[2], slider.value());
    ellipse(this.x, this.y, this.r, this.r);
  }
}