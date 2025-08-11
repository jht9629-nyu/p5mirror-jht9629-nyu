// https://editor.p5js.org/jht9629-nyu/sketches/nywPqiEH8
// claude bezier draw quadraticVertex
/*
p5js sketch using bezier curves to draw lines with mouse
no change in color when in colorful mode
Uncaught Error: Uncaught TypeError: colorMode is not a function

*/

let paths = [];
let currentPath = [];
let isDrawing = false;
let strokeWeightSlider, smoothnessSlider;
let isColorful = true; // true for colorful, false for white
let hueOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  // Get slider references
  strokeWeightSlider = document.getElementById("strokeWeight");
  smoothnessSlider = document.getElementById("smoothness");

  // Update display values
  strokeWeightSlider.oninput = function () {
    document.getElementById("strokeValue").innerHTML = this.value;
  };

  smoothnessSlider.oninput = function () {
    document.getElementById("smoothValue").innerHTML = this.value;
  };
}

function draw() {
  // Slight fade effect for trails
  fill(20, 20, 20, 10);
  rect(0, 0, width, height);

  // Draw all completed paths
  for (let path of paths) {
    drawBezierPath(path.points, path.color, path.weight);
  }

  // Draw current path being drawn
  if (currentPath.length > 1) {
    let currentColor;
    if (isColorful) {
      colorMode(HSB, 360, 100, 100);
      currentColor = color((frameCount * 2 + hueOffset) % 360, 80, 90);
    } else {
      colorMode(RGB, 255);
      currentColor = color(255);
    }
    drawBezierPath(currentPath, currentColor, strokeWeightSlider.value);
  }
}

function drawBezierPath(points, strokeColor, weight) {
  if (points.length < 2) return;

  stroke(strokeColor);
  strokeWeight(weight);
  noFill();

  let smoothness = parseFloat(smoothnessSlider.value);

  beginShape();
  // Start with the first point
  vertex(points[0].x, points[0].y);

  // Create smooth curves between points
  for (let i = 1; i < points.length - 1; i++) {
    let prev = points[i - 1];
    let curr = points[i];
    let next = points[i + 1];

    // Calculate control points for smooth curves
    let cp1x = curr.x - (next.x - prev.x) * smoothness * 0.2;
    let cp1y = curr.y - (next.y - prev.y) * smoothness * 0.2;
    let cp2x = curr.x + (next.x - prev.x) * smoothness * 0.2;
    let cp2y = curr.y + (next.y - prev.y) * smoothness * 0.2;

    // Use quadratic vertex for smoother curves
    quadraticVertex(cp1x, cp1y, curr.x, curr.y);
  }

  // End with the last point
  if (points.length > 1) {
    vertex(points[points.length - 1].x, points[points.length - 1].y);
  }

  endShape();
}

function mousePressed() {
  // Only start drawing if not clicking on controls
  if (mouseX > 0 || mouseY > 0) {
    isDrawing = true;
    currentPath = [];
    currentPath.push({ x: mouseX, y: mouseY });
    hueOffset = random(0, 360); // Random starting hue for each stroke
  }
}

function mouseDragged() {
  if (isDrawing && (mouseX > 0 || mouseY > 0)) {
    // Only add point if it's far enough from the last point
    let lastPoint = currentPath[currentPath.length - 1];
    let distance = dist(mouseX, mouseY, lastPoint.x, lastPoint.y);

    if (distance > 5) {
      // Minimum distance between points
      currentPath.push({ x: mouseX, y: mouseY });
    }
  }
}

function mouseReleased() {
  if (isDrawing && currentPath.length > 1) {
    // Save the completed path
    let pathColor;
    if (isColorful) {
      colorMode(HSB, 360, 100, 100);
      pathColor = color((frameCount * 2 + hueOffset) % 360, 80, 90);
    } else {
      colorMode(RGB, 255);
      pathColor = color(255);
    }

    paths.push({
      points: [...currentPath],
      color: pathColor,
      weight: strokeWeightSlider.value,
    });
  }
  isDrawing = false;
  currentPath = [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(20);
}

function clearCanvas() {
  paths = [];
  currentPath = [];
  background(20);
}

function toggleMode() {
  isColorful = !isColorful;
  document.getElementById("modeText").innerHTML = 
    isColorful ? "Colorful" : "White";
}

// HSV to RGB conversion for colorful mode
function hue(h) {
  colorMode(HSB, 360, 100, 100);
  return color(h, 80, 100);
}
