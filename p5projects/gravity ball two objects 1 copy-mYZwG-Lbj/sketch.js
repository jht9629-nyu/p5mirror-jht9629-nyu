// Two ball objects
let ball1;
let ball2;

// Global gravity variable
let gravity = 0.1;

function setup() {
  createCanvas(480, 270);

  // Create ball objects
  ball1 = new Ball(150, 0, 16);
  ball2 = new Ball(350, 50, 32);
}

function draw() {
  background(51);

  // Display ball objects
  ball1.display();
  ball2.display();

  // Move ball objects
  ball1.update();
  ball2.update();
}

class Ball {
  
  constructor(x, y, w) {
    this.x = x; // x location of square 
    this.y = y; // y location of square 
    this.w = w; // size 
    this.speed = 0; // speed of square 
  }
  
  display() {
    fill(175);
    ellipse(this.x, this.y, this.w, this.w);
  }
  
  update() {
    // Add gravity to speed
    this.speed = this.speed + gravity;
    
    // Add speed to location
    this.y = this.y + this.speed;
    
    // If square reaches the bottom 
    // Reverse speed 
    if (this.y > height - this.w / 2) {
      this.y = height - this.w / 2;
      this.speed = this.speed * -0.95;
    }
  }
}

// 2020-10-11 jht: Corrected bounce test, comments
// https://editor.p5js.org/icm/sketches/BkyUQp1nb
