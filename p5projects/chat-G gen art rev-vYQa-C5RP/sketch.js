// https://editor.p5js.org/jht9629-nyu/sketches/vYQa-C5RP
// chat-G gen art rev
// make the art more visually interesting

// https://editor.p5js.org/jht9629-nyu/sketches/q2b4jtO-C
// chat-G gen art

// creatre a p5js generative art image using variables
// https://chat.openai.com/


let numShapes = 100; // Number of shapes
let shapeSizeMin = 20; // Minimum shape size
let shapeSizeMax = 100; // Maximum shape size

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();

  for (let i = 0; i < numShapes; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    let size = random(shapeSizeMin, shapeSizeMax); // Random shape size
    let hue = map(x, 0, width, 0, 360); // Hue based on x-coordinate

    push();
    translate(x, y);
    rotate(radians(random(360))); // Random rotation

    // Generate gradient fill
    let grad = drawingContext.createRadialGradient(0, 0, size / 4, 0, 0, size);
    grad.addColorStop(0, color(255, 100, 100, 200));
    grad.addColorStop(1, color(255, 255, 255, 0));
    drawingContext.fillStyle = grad;

    // Draw ellipse
    ellipse(0, 0, size, size);
    pop();

    // Draw connecting lines
    let nextIndex = (i + 1) % numShapes;
    let nextX = random(width);
    let nextY = random(height);
    stroke(hue, 255, 255, 50);
    line(x, y, nextX, nextY);
  }
}

function draw() {
  // No need for additional drawing in this example
}
