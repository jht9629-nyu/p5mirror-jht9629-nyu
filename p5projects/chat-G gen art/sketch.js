// https://editor.p5js.org/jht9629-nyu/sketches/q2b4jtO-C
// chat-G gen art

// creatre a p5js generative art image using variables
// https://chat.openai.com/


let numShapes = 100; // Number of shapes
let shapeSizeMin = 10; // Minimum shape size
let shapeSizeMax = 50; // Maximum shape size

function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
  
  for (let i = 0; i < numShapes; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    let size = random(shapeSizeMin, shapeSizeMax); // Random shape size
    let r = random(255); // Random red value
    let g = random(255); // Random green value
    let b = random(255); // Random blue value
    
    // Randomly choose between ellipse and rectangle
    if (random() > 0.5) {
      fill(r, g, b);
      ellipse(x, y, size, size);
    } else {
      fill(r, g, b);
      rectMode(CENTER);
      rect(x, y, size, size);
    }
  }
}

function draw() {
  // No need for additional drawing in this example
}
