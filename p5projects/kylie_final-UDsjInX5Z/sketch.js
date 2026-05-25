// https://editor.p5js.org/jht9629-nyu/sketches/UDsjInX5Z
// https://editor.p5js.org/kr3531/sketches/Sz72-Atfu
// kylie_final
/**
 * Etheria: Integrated Multimedia Installation
 * Coded with Gemini
 */

let particles = [];
const PARTICLE_COUNT = 1500; 
const CONNECTION_DIST = 45;
const NOISE_SCALE = 0.002;

// Audio Variables
let osc, filter;
let audioStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(ADD);
  
  // Star Cluster
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle(i));
  }

  // Audio Engine UI
  console.log("Click the screen to initialize Audio Engine.");
}

function draw() {
  clear();
  background(0, 5, 12); // Deep aesthetic background

  if (audioStarted) {
    updateAudio();
  } else {
    // Audio Start test
    fill(255, 150);
    textAlign(CENTER);
    textSize(12);
    textFont('monospace');
    text("CLICK TO INITIALIZE AUDIO ENGINE", width / 2, height / 2);
  }

  // Particles
  for (let i = 0; i < particles.length; i++) {
    let pt = particles[i];
    pt.applyForces();
    pt.update();
    pt.display();
    pt.connect(particles, i);
  }

  displayStatus();
}

// When clicking the screen it starts
function mousePressed() {
  if (!audioStarted) {
    userStartAudio(); // p5.sound function
    osc = new p5.Oscillator('sine');
    filter = new p5.LowPass();
    
    osc.disconnect();
    osc.connect(filter);
    
    osc.start();
    osc.amp(0);
    audioStarted = true;
  }
  
  // Explosion Effect
  particles.forEach(p => {
    let force = p5.Vector.random2D().mult(random(2, 10));
    p.vel.add(force);
  });
}

function updateAudio() {
  // Sound mapping based on the pace of mouse
  let freq = map(mouseY, height, 0, 60, 800, true);
  osc.freq(freq, 0.1);

  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  let lpfFreq = map(speed + mouseX / 10, 0, 100, 200, 4000, true);
  filter.freq(lpfFreq, 0.1);

  let vol = map(speed, 0, 50, 0.02, 0.1, true);
  osc.amp(vol, 0.2);
}

class Particle {
  constructor(id) {
    this.id = id;
    let angle = random(TWO_PI);
    let r = pow(random(), 0.6) * min(width, height) * 0.4;
    this.pos = createVector(width / 2 + cos(angle) * r, height / 2 + sin(angle) * r);
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.acc = createVector(0, 0);
    this.size = random(0.5, 1.8);
    // 특정 비율로 색상 포인트 부여
    this.color = (id % 15 === 0) ? color(0, 255, 255, 200) : color(255, 255, 255, 120);
  }

  applyForces() {
    // 마우스 영향력 (Attraction)
    let mouse = createVector(mouseX, mouseY);
    let d = dist(this.pos.x, this.pos.y, mouse.x, mouse.y);
    if (d < 350) {
      let force = p5.Vector.sub(mouse, this.pos);
      force.setMag(map(d, 0, 350, 0.1, 0));
      this.acc.add(force);
    }

    // Organic flow (Noise)
    let n = noise(this.pos.x * NOISE_SCALE, this.pos.y * NOISE_SCALE, frameCount * 0.005);
    let flow = p5.Vector.fromAngle(TWO_PI * n).mult(0.03);
    this.acc.add(flow);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.97); // Friction
    this.pos.add(this.vel);
    this.acc.mult(0);

    // (Wrap-around)
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  display() {
    noStroke();
    fill(this.color);
    let flicker = sin(frameCount * 0.1 + this.id) * 0.2 + 0.8;
    circle(this.pos.x, this.pos.y, this.size * flicker);
  }

  connect(allParticles, index) {
    if (this.id % 5 !== 0) return; 

    for (let i = index + 1; i < allParticles.length; i += 200) {
      let other = allParticles[i];
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (d < CONNECTION_DIST) {
        stroke(255, map(d, 0, CONNECTION_DIST, 80, 0));
        strokeWeight(0.5);
        line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      }
    }
  }
}

function displayStatus() {
  fill(255, 80);
  textAlign(RIGHT);
  textSize(9);
  textFont('monospace');
  text(`// NODE_NETWORK.SYS_ONLINE`, width - 20, 30);
  text(`// AUDIO_ENGINE: ${audioStarted ? 'ACTIVE' : 'STANDBY'}`, width - 20, 45);
  text(`// FPS: ${floor(frameRate())}`, width - 20, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}