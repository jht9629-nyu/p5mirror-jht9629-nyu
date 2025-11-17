//ICM-Week10-HW
//https://editor.p5js.org/rq2032/sketches/pY3OGxbM8
//https://editor.p5js.org/ambikajo/sketches/Xib0zWz1x

let vid, mic;
let smoothVol = 0;
let petalSlider;
let sizeSlider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  vid = createCapture(VIDEO);
  vid.size(400, 400);
  vid.hide();

  mic = new p5.AudioIn();
  mic.start();

  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);

  //petal number slider
  petalSlider = createSlider(3, 12, 6, 1);
  petalSlider.position(20, 20);
  petalSlider.style("width", "200px");

  //size slider
  sizeSlider = createSlider(0.3, 1.5, 0.8, 0.01);
  sizeSlider.position(20, 50);
  sizeSlider.style("width", "200px");
}

function draw() {
  background(0);
  noStroke();

  // smooth volume
  let vol = mic.getLevel();
  smoothVol = lerp(smoothVol, vol, 0.1);
  //lerp(): Calculates a number between two numbers at a specific increment

  //sliders
  let petals = petalSlider.value();
  let sizeScale = sizeSlider.value();

  //change petal size
  let baseRadius = min(width, height) * 0.15 * sizeScale; //change with size slider
  let radius = baseRadius + smoothVol * min(width, height) * 0.25 * sizeScale; //change with volume

  // change color with volume
  let hue = (frameCount * 2 + smoothVol * 800) % 360;
  let sat = 60;
  let bright = map(smoothVol, 0, 0.2, 60, 100);
  tint(hue, sat, bright, 100);

  // Kaleidoscope Pattern
  let angleStep = 360 / petals;
  let spacing = baseRadius * 2.8;
  let cols = ceil(width / spacing) + 2;
  let rows = ceil(height / spacing) + 2;

  for (let i = -cols / 2; i < cols / 2; i++) {
    for (let j = -rows / 2; j < rows / 2; j++) {
      push();
      translate(i * spacing, j * spacing, 0);
      rotateZ(frameCount * map(smoothVol, 0, 0.2, 0.3, 5)); //rotation react to volume

      // Individual Kaleidoscope from reference
      for (let angle = 0; angle < 360; angle += angleStep) {
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        let x2 = radius * cos(angle + angleStep);
        let y2 = radius * sin(angle + angleStep);

        textureMode(NORMAL);
        texture(vid);
        beginShape(TRIANGLES);
        vertex(0, 0, 0, 0);
        vertex(x, y, 1, 0);
        vertex(x2, y2, 0, 1);
        endShape();
      }
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
