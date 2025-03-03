// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    //this.position = createVector((width/2)-40, 0);
    this.position = createVector(158, 168);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.lifespan = 255.0;
  }

  run() {
    let gravity = createVector(0, 0);
    this.applyForce(gravity);
    this.update();
    this.show();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    
    let timeVelocity = this.velocity.copy();
    let t = map(mouseX,0,width,0,1);
    timeVelocity.mult(t*10);
    
    this.position.add(timeVelocity);
    
    //console.log(mouseX);
    if (mouseX >15){
      this.lifespan -= 1;
    }
    if (mouseX <15){
      this.lifespan -= 0.35;
    }
    
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    //stroke(0, this.lifespan);
    //strokeWeight(2);
    noStroke();
    fill(10, this.lifespan);
    square(this.position.x, (this.position.y), 5);
    //ellipse((this.position.x)+50, (this.position.y)-15, 1, 6);
    //ellipse((this.position.x)-50, (this.position.y)-25, 1, 6);
    //ellipse((this.position.x)+100, (this.position.y)-20, 1, 6);
    //ellipse((this.position.x)-100, (this.position.y)-30, 1, 6);
    //ellipse((this.position.x)+150, (this.position.y)-30, 1, 6);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
