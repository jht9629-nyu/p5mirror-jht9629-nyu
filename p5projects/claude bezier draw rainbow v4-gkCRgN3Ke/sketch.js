// https://editor.p5js.org/jht9629-nyu/sketches/gkCRgN3Ke
// claude bezier draw rainbow v4

let paths = [];
let currentPath = [];
let isDrawing = false;
let strokeWeightSlider, smoothnessSlider;
let strokeWeightSpan, smoothnessSpan;
let clearButton, toggleButton;
let controlsDiv;
let isColorful = true;
let hueOffset = 0;
let isAutoMode = true;
let currentColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  background(20);

  // Create all UI elements using p5.js DOM functions
  setupUI();
}

function draw() {
  // Slight fade effect for trails
  background(20, 20, 20, 10);
  // rect(0, 0, width, height);

  if (isAutoMode && frameCount % 10 == 0) {
    if (!isDrawing) {
      start_draw(random(width), random(height));
    } else {
      if (frameCount % 100 == 0) {
        stop_draw();
      } else {
        draw_to(random(width), random(height));
      }
    }
  }

  // Draw all completed paths
  for (let path of paths) {
    drawBezierPath(path.points);
  }

  // Draw current path being drawn
  if (currentPath.length > 1) {
    drawBezierPath(currentPath);
    // drawBezierPath(currentPath, currentColor, strokeWeightSlider.value());
  }
}

function drawBezierPath(points) {
  if (points.length < 2) return;

  noFill();

  let smoothness = smoothnessSlider.value() / 10; // Convert to 0.1-1.0 range

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
      p0 = points[0];
      p1 = points[0];
      p2 = points[1];
      p3 = points.length > 2 ? points[2] : points[1];
    } else if (i == points.length - 2) {
      p0 = points[i - 1];
      p1 = points[i];
      p2 = points[i + 1];
      p3 = points[i + 1];
    } else {
      p0 = points[i - 1];
      p1 = points[i];
      p2 = points[i + 1];
      p3 = points[i + 2];
    }

    stroke(p3.strokeColor);
    strokeWeight(p3.weight);

    // Calculate control points for smooth cubic bezier
    let cp1x = p1.x + (p2.x - p0.x) * smoothness * 0.16;
    let cp1y = p1.y + (p2.y - p0.y) * smoothness * 0.16;
    let cp2x = p2.x - (p3.x - p1.x) * smoothness * 0.16;
    let cp2y = p2.y - (p3.y - p1.y) * smoothness * 0.16;

    // Draw the cubic bezier curve using p5.js bezier function
    bezier(p1.x, p1.y, cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }
}

function mousePressed() {
  // Only start drawing if not clicking on controls (rough area check)
  if (mouseX > 280 || mouseY > 160) {
    start_draw(mouseX, mouseY);
  }
}

function start_draw(x, y) {
  isDrawing = true;
  currentPath = [];
  add_point(x, y);
}

function add_point(x, y) {
  hueOffset += 1;
  if (isColorful) {
    colorMode(HSB, 360, 100, 100);
    currentColor = color(hueOffset % 360, 80, 90);
    // currentColor = color((frameCount * 2 + hueOffset) % 360, 80, 90);
  } else {
    colorMode(RGB, 255);
    currentColor = color(255);
  }
  // currentColor = color(hueOffset % 360, 80, 90);
  let strokeColor = currentColor;
  let weight = strokeWeightSlider.value();
  currentPath.push({ x, y, strokeColor, weight });
  // hueOffset = random(0, 360);
}

function mouseDragged() {
  if (isDrawing && (mouseX > 280 || mouseY > 160)) {
    draw_to(mouseX, mouseY);
  }
}

function draw_to(x, y) {
  if (currentPath.length < 1) {
    add_point(x, y);
    return;
  }
  let lastPoint = currentPath[currentPath.length - 1];
  let distance = dist(x, y, lastPoint.x, lastPoint.y);
  if (distance > 5) {
    add_point(x, y);
  }
}

function mouseReleased() {
  stop_draw();
}

function stop_draw() {
  if (isDrawing && currentPath.length > 1) {
    paths.push({
      points: [...currentPath],
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

function toggleAutoMode() {
  isAutoMode = !isAutoMode;
  autoButton.html("Auto: " + (isAutoMode ? "On" : "Off"));
}

function toggleColorMode() {
  isColorful = !isColorful;
  toggleButton.html("Mode: " + (isColorful ? "Colorful" : "White"));
}

function setupUI() {
  // Main controls container
  controlsDiv = createDiv("");
  controlsDiv.position(10, 10);
  controlsDiv.style("background", "rgba(0,0,0,0.8)");
  controlsDiv.style("color", "white");
  controlsDiv.style("padding", "15px");
  controlsDiv.style("border-radius", "8px");
  controlsDiv.style("font-family", "Arial, sans-serif");

  // Title
  let title = createDiv("Drag mouse to draw smooth Bézier curves");
  title.parent(controlsDiv);
  title.style("margin-bottom", "10px");

  // Stroke weight controls
  let strokeDiv = createDiv("");
  strokeDiv.parent(controlsDiv);
  strokeDiv.style("margin", "8px 0");

  let strokeLabel = createSpan("Stroke Weight: ");
  strokeLabel.parent(strokeDiv);

  strokeWeightSlider = createSlider(1, 40, 10);
  strokeWeightSlider.parent(strokeDiv);
  strokeWeightSlider.style("margin", "0 10px");

  strokeWeightSpan = createSpan("10");
  strokeWeightSpan.parent(strokeDiv);

  // Update stroke weight display when slider changes
  strokeWeightSlider.input(() => {
    strokeWeightSpan.html(strokeWeightSlider.value());
  });

  // Smoothness controls
  let smoothDiv = createDiv("");
  smoothDiv.parent(controlsDiv);
  smoothDiv.style("margin", "8px 0");

  let smoothLabel = createSpan("Smoothness: ");
  smoothLabel.parent(smoothDiv);

  smoothnessSlider = createSlider(1, 10, 5);
  smoothnessSlider.parent(smoothDiv);
  smoothnessSlider.style("margin", "0 10px");

  smoothnessSpan = createSpan("0.5");
  smoothnessSpan.parent(smoothDiv);

  // Update smoothness display when slider changes
  smoothnessSlider.input(() => {
    let value = smoothnessSlider.value() / 10; // Convert to 0.1-1.0 range
    smoothnessSpan.html(value.toFixed(1));
  });

  // Button container
  let buttonDiv = createDiv("");
  buttonDiv.parent(controlsDiv);
  buttonDiv.style("margin-top", "10px");

  // Clear button
  clearButton = createButton("Clear Canvas");
  clearButton.parent(buttonDiv);
  clearButton.style("background", "#4CAF50");
  clearButton.style("color", "white");
  clearButton.style("border", "none");
  clearButton.style("padding", "8px 16px");
  clearButton.style("margin", "5px");
  clearButton.style("border-radius", "4px");
  clearButton.style("cursor", "pointer");
  clearButton.mousePressed(clearCanvas);

  // Mode toggle button
  toggleButton = createButton("Mode: Colorful");
  toggleButton.parent(buttonDiv);
  toggleButton.style("background", "#4CAF50");
  toggleButton.style("color", "white");
  toggleButton.style("border", "none");
  toggleButton.style("padding", "8px 16px");
  toggleButton.style("margin", "5px");
  toggleButton.style("border-radius", "4px");
  toggleButton.style("cursor", "pointer");
  toggleButton.mousePressed(toggleColorMode);

  // Auto toggle button
  autoButton = createButton("Auto: --");
  autoButton.parent(buttonDiv);
  autoButton.style("background", "#4CAF50");
  autoButton.style("color", "white");
  autoButton.style("border", "none");
  autoButton.style("padding", "8px 16px");
  autoButton.style("margin", "5px");
  autoButton.style("border-radius", "4px");
  autoButton.style("cursor", "pointer");
  autoButton.mousePressed(toggleAutoMode);
}

// https://editor.p5js.org/jht9629-nyu/sketches/nywPqiEH8
// claude bezier draw quadraticVertex

// https://editor.p5js.org/jht9629-nyu/sketches/fys4OYczY
// claude bezier draw v2

// https://editor.p5js.org/jht9629-nyu/sketches/HLRNocFdW
// claude bezier draw dom v3
/*
p5js sketch using bezier curves to draw lines with mouse
no change in color when in colorful mode
Uncaught Error: Uncaught TypeError: colorMode is not a function
convert code to use p5 bezier function
convert to use p5 dom functions
*/
