// https://editor.p5js.org/jht9629-nyu/sketches/astPSoZKX
// Dab?

// https://editor.p5js.org/emily_ye03/sketches/nXyS4JbvN

let newpaint;
let bg_mark;
let d = 5;
let ctFinal;
let dabs = [];

//DOM
let uiWrap, sizeLabel, sizeSlider, saveBtn;

function setup() {
  createCanvas(700, 700);
  noStroke();

  newpaint = new Painter();
  bg_mark = createGraphics(width, height);
  bg_mark.noStroke();

  // ===== UI / DOM =====
  uiWrap = createDiv().style('position', 'relative')
                      .style('margin', '8px 0 0 0')
                      .style('padding', '8px 12px')
                      .style('display', 'inline-flex')
                      .style('gap', '12px')
                      .style('align-items', 'center')
                      .style('background', '#111')
                      .style('color', '#fff')
                      .style('border-radius', '8px')
                      .style('font-family', 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif')
                      .style('user-select', 'none');

  sizeLabel = createSpan(`Brush: ${d}px`).parent(uiWrap);

  sizeSlider = createSlider(2, 120, d, 1)
    .parent(uiWrap)
    .style('width', '200px')
    .input(() => {
      d = sizeSlider.value();
      sizeLabel.html(`Brush: ${d}px`);
    });

  saveBtn = createButton('Download PNG')
    .parent(uiWrap)
    .mousePressed(() => {
      const name = `painting-${timestamp()}`;
      saveCanvas(name, 'png');
    });
}

function draw() {
  background(0);

  ctFinal = newpaint.colorChanger();
  fill(ctFinal);
  newpaint.paint();


  if (mouseIsPressed) {

    const points = [
      { x: newpaint.x,         y: newpaint.y         },
      { x: width - newpaint.x, y: newpaint.y         },
      { x: newpaint.x,         y: height - newpaint.y },
      { x: width - newpaint.x, y: height - newpaint.y },
    ];

    bg_mark.push();
    bg_mark.noStroke();
    bg_mark.fill(ctFinal);

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      bg_mark.ellipse(p.x, p.y, d, d);


      // dabs.push(new Dab(p.x, p.y, d, color(ctFinal), i, frameCount));
    }
    bg_mark.pop();
  }


  image(bg_mark, 0, 0);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    bg_mark.clear();
    // dabs = [];
  }
}

function timestamp() {
  const pad = (n) => n.toString().padStart(2, '0');
  const t = new Date();
  return `${t.getFullYear()}${pad(t.getMonth()+1)}${pad(t.getDate())}-${pad(t.getHours())}${pad(t.getMinutes())}${pad(t.getSeconds())}`;
}

class Dab {
  constructor(x, y, size, col, mirrorIndex = 0, frame = 0) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;             
    this.mirrorIndex = mirrorIndex; 
    this.frame = frame;         
  }
}

// Painter 
class Painter {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.easing = 0.02;

    this.c1 = color('#185474');
    this.c2 = color('#ee5d84');
    this.c3 = color('#f8ac95');
    this.counter = 0;
  }

  colorChanger() {
    const t = this.counter % 1;
    const cF1 = lerpColor(this.c1, this.c2, t);
    const cF2 = lerpColor(this.c2, this.c3, t);
    const cF3 = lerpColor(this.c3, this.c1, t);

    const seg = floor(this.counter) % 3;
    let cFinal = this.c1;
    if (seg === 0) cFinal = cF1;
    else if (seg === 1) cFinal = cF2;
    else cFinal = cF3;

    this.counter += 0.005;
    return cFinal;
  }

  paint() {
    const targetX = mouseX;
    const targetY = mouseY;
    this.x += (targetX - this.x) * this.easing;
    this.y += (targetY - this.y) * this.easing;

    ellipse(this.x, this.y, d, d);
    ellipse(width - this.x, this.y, d, d);
    ellipse(this.x, height - this.y, d, d);
    ellipse(width - this.x, height - this.y, d, d);
  }
}
