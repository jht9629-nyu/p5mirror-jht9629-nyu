// https://editor.p5js.org/jht9629-nyu/sketches/L7ob7qccY
// Hello, p5.js 2.0! Example VF Sketch v0

let font;

async function setup() {
  createCanvas(500, 500, WEBGL);
  
  background(255, 255, 200);
  
  // Notice the "async" before "function" above, and "await" 
  // before "loadFont" below.
  font = await loadFont("https://fonts.googleapis.com/css2?family=Epilogue:wght@100..900&display=swap");
}

function draw() {
  background(255, 200, 200);
  orbitControl();
  
  fill(255, 255, 200);  
  textFont(font);
  
  let pacing = sin(frameCount / 100);
  textWeight(map(pacing, -1, 1, 100, 900))
  
  textAlign(CENTER);
  textSize(50);
  
  
  text("Hello, p5.js 2.0!", 0,-70);
  
  // Use ⬇️ textToContours to draw the text as a shape or curve
  shapeText("Hello, p5.js 2.0!", 0, 0);
  
  // Use ⬇️ textToModel to extrude the text
  shapeText3D("Hello, p5.js 2.0!", 0, 70);
  
  // 💡 Using a Google Fonts link? Be sure to include in index.html ⬇️
  // <script src="https://cdn.jsdelivr.net/npm/p5.woff2@0.0.3/lib/p5.woff2.js"></script>
  // This is needed for textToContours, textToPoints, and textToModel
}


function shapeText(word, x, y) {
  
  // Try this ⬇️ change the sampleFactor from 0.03 to 0.01 and to 0.05
  let contours = font.textToContours(word, x, y, { sampleFactor: 0.05 })
  // Learn more: https://beta.p5js.org/reference/p5.font/texttocontours/
  
  beginShape();
  for (const points of contours) {
    beginContour();
    for (let p of points) {
      
      // Try this ⬇️ instead of "vertex", use "splineVertex"
      vertex(p.x, p.y);
      // Learn more: https://beta.p5js.org/reference/p5/splinevertex/
    }
    endContour(CLOSE);
  }
  endShape();
}

function shapeText3D(word, x, y) {
  
  let  pacing = sin(frameCount / 100);
  
  let geom = font.textToModel(word, x, y, { sampleFactor: 0.1, extrude: map(pacing, -1, 1, 100, 10) });
  // Learn more: https://beta.p5js.org/reference/p5.font/texttomodel/
  
  model(geom);
}

// https://editor.p5js.org/ksen0/sketches/cevvPvWar
/**
 * This sketch uses loadFont, textToContours, and textToModel!
 * Dive deeper into Animation, Interaction, and Typography
 * in 2D and 3D with p5.js 2.0:
 * https://beta.p5js.org/tutorials/typography-20/
 */
