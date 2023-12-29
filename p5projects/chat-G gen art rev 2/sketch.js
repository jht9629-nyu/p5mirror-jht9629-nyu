// https://editor.p5js.org/jht9629-nyu/sketches/DHz0bVV1z
// chat-G gen art rev 2
// the circles are all shades of red. make them different color

// https://editor.p5js.org/jht9629-nyu/sketches/vYQa-C5RP
// chat-G gen art rev

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
    let hue = random(360); // Random hue
    let saturation = random(50, 100); // Random saturation

    push();
    translate(x, y);
    rotate(radians(random(360))); // Random rotation

    // Generate gradient fill
    let grad = drawingContext.createRadialGradient(0, 0, size / 4, 0, 0, size);
    grad.addColorStop(0, color(255, 255, 255, 200));
    grad.addColorStop(1, colorHSL(hue, saturation, 50, 0.5)); // Custom HSL color function
    drawingContext.fillStyle = grad;

    // Draw ellipse
    ellipse(0, 0, size, size);
    pop();

    // Draw connecting lines
    let nextIndex = (i + 1) % numShapes;
    let nextX = random(width);
    let nextY = random(height);
    stroke(hue, saturation, 50, 50);
    line(x, y, nextX, nextY);
  }
}

function draw() {
  // No need for additional drawing in this example
}

// Custom HSL to RGB color conversion function
function colorHSL(h, s, l, a) {
  h = constrain(h, 0, 360);
  s = constrain(s, 0, 100);
  l = constrain(l, 0, 100);
  a = constrain(a, 0, 1);

  let c = (1 - abs(2 * l - 1)) * s;
  let hPrime = h / 60;
  let x = c * (1 - abs(hPrime % 2 - 1));
  let m = l - c / 2;

  let r, g, b;
  if (hPrime >= 0 && hPrime < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (hPrime >= 1 && hPrime < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (hPrime >= 2 && hPrime < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (hPrime >= 3 && hPrime < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (hPrime >= 4 && hPrime < 5) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  r = (r + m) * 255;
  g = (g + m) * 255;
  b = (b + m) * 255;

  return color(r, g, b, a);
}

