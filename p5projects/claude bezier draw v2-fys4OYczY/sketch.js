// https://editor.p5js.org/jht9629-nyu/sketches/fys4OYczY
// claude bezier draw v2
/*
p5js sketch using bezier curves to draw lines with mouse
no change in color when in colorful mode
Uncaught Error: Uncaught TypeError: colorMode is not a function
convert code to use p5 bezier function

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
  background(20, 20, 20, 10);
  // rect(0, 0, width, height);

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

  // For paths with only 2 points, draw a simple line
  if (points.length == 2) {
    line(points[0].x, points[0].y, points[1].x, points[1].y);
    return;
  }

  // Draw bezier curves between consecutive points
  for (let i = 0; i < points.length - 1; i++) {
    let p0, p1, p2, p3;

    // Get the four points needed for cubic bezier
    if (i == 0) {
      // First segment: use first point twice
      p0 = points[0];
      p1 = points[0];
      p2 = points[1];
      p3 = points.length > 2 ? points[2] : points[1];
    } else if (i == points.length - 2) {
      // Last segment: use last point twice
      p0 = points[i - 1];
      p1 = points[i];
      p2 = points[i + 1];
      p3 = points[i + 1];
    } else {
      // Middle segments: use surrounding points
      p0 = points[i - 1];
      p1 = points[i];
      p2 = points[i + 1];
      p3 = points[i + 2];
    }

    // Calculate control points for smooth cubic bezier
    let cp1x = p1.x + (p2.x - p0.x) * smoothness * 0.16;
    let cp1y = p1.y + (p2.y - p0.y) * smoothness * 0.16;
    let cp2x = p2.x - (p3.x - p1.x) * smoothness * 0.16;
    let cp2y = p2.y - (p3.y - p1.y) * smoothness * 0.16;

    // Draw the cubic bezier curve
    bezier(p1.x, p1.y, cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }
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
      let h = (frameCount * 2 + hueOffset) % 360
      pathColor = color(h, 80, 90);
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
    isColorful  ? "Colorful" : "White";
}

// HSV to RGB conversion for colorful mode
function hue(h) {
  colorMode(HSB, 360, 100, 100);
  return color(h, 80, 100);
}

// https://editor.p5js.org/jht9629-nyu/sketches/nywPqiEH8
// claude bezier draw quadraticVertex
