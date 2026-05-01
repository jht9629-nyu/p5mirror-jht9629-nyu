// https://editor.p5js.org/kr3531/sketches/6u-8RD3L_

//* Particle Morphing System
//* coded with Gemini

/**
 * Interactive Particle Art with Sound
 * - Mouse X: Controls Pitch (Low to High)
 * - Mouse Y: Controls Sound Filter (Muffled to Clear)
 * - Movement: Controls Volume
 */

let img;
let particles = [];
let resolution = 8;
let isImageLoaded = false;
const FILENAME = "butterfly.jpeg"; 

// Sound Variables
let osc;
let lowPass;

function preload() {
  img = loadImage(FILENAME,
    () => { isImageLoaded = true; },
    () => { console.error("Image load failed"); }
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Audio Setup
  lowPass = new p5.LowPass();
  // gabriel suggestions here:
  osc = new p5.Oscillator('square');
  osc.disconnect();
  osc.connect(lowPass);
  osc.start();
  osc.amp(0); // Start silent

  if (isImageLoaded) initParticles();
}

function initParticles() {
  img.resize(width * 0.7, 0);
  if (img.height > height * 0.7) img.resize(0, height * 0.7);
  img.loadPixels();

  for (let y = 0; y < img.height; y += resolution) {
    for (let x = 0; x < img.width; x += resolution) {
      let index = (x + y * img.width) * 4;
      let bright = (img.pixels[index] + img.pixels[index + 1] + img.pixels[index + 2]) / 3;

      if (bright > 100) {
        let targetX = x + (width - img.width) / 2;
        let targetY = y + (height - img.height) / 2;
        particles.push(new Particle(targetX, targetY));
      }
    }
  }
}

function draw() {
  background(0, 60);

  if (!isImageLoaded) return;

  // Sound Control Logic
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    // X controls Frequency (100Hz to 800Hz)
    let freq = map(mouseX, 0, width, 100, 800);
    osc.freq(freq, 0.1);

    // Y controls Filter Cutoff (200Hz to 5000Hz)
    let filterFreq = map(mouseY, 0, height, 200, 5000);
    lowPass.freq(filterFreq);

    // Volume follows mouse movement speed
    let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
    let volume = map(mouseSpeed, 0, 50, 0, 0.2);
    osc.amp(volume, 0.1);
  } else {
    osc.amp(0, 0.5);
  }

  // Update and Display Particles
  for (let p of particles) {
    p.update();
    p.display();
  }
}

class Particle {
  constructor(x, y) {
    this.target = createVector(x, y);
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
    this.maxSpeed = 8;
    this.maxForce = 0.4;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let d = p5.Vector.dist(this.pos, mouse);
    let desired;

    if (d < 100) {
      // Repel from mouse
      desired = p5.Vector.sub(this.pos, mouse);
      desired.setMag(this.maxSpeed * 2);
    } else {
      // Return to original target
      desired = p5.Vector.sub(this.target, this.pos);
      let distToTarget = desired.mag();
      let speed = distToTarget < 100 ? map(distToTarget, 0, 100, 0, this.maxSpeed) : this.maxSpeed;
      desired.setMag(speed);
    }

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    this.acc.add(steer);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(0.94); // Friction
  }

  display() {
    stroke(255);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

// Browser requires a user click to start audio
function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}