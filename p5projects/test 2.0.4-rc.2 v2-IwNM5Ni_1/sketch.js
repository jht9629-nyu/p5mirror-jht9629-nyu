let font;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  font = await loadFont('Inconsolata.ttf');
  fill(random(255),random(255),random(255));
}

function draw() {
  let h = height / 4;
  let ss = 5;
  let yy = 0.1;
  
  background(200);
  textAlign(CENTER, CENTER);
  textSize(h);
  
  // Get the point array.  
  let contours = font.textToContours('p5*js', width/2, height/2, { sampleFactor: 0.5 });

  beginShape();
  for (const pts of contours) {
    beginContour();
    for (const pt of pts) {
      vertex(pt.x + ss*sin(pt.y*yy + millis()*0.01), pt.y);
    }
    endContour(CLOSE);
  }
  endShape();

  describe('The text p5*js wobbling over time');
}