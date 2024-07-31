// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/024-perlinnoiseflowfield.html

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

let nparticles = 1;
var particles = [];

var flowfield;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  flowfield = new Array(cols * rows);

  for (var i = 0; i < nparticles; i++) {
    particles[i] = new Particle();
  }
  background(51);
  updateParticleStroke();
}

function draw() {
  if (frameCount % 600 == 0) {
    updateParticleStroke();
  }
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  // fr.html(floor(frameRate()));
}

let my = {};
function setParticleStroke() {
  stroke(my.sr, my.sb, my.sg, my.sa);
  strokeWeight(my.sw);
}
function updateParticleStroke() {
  my.sr = random(255);
  my.sb = random(255);
  my.sg = random(255);
  my.sw = random([1, 8]);
  my.sa = random([20,255]);
}
