// https://editor.p5js.org/jht9629-nyu/sketches/abt5loI_z
// Final Project -sunny 5 clamp

let i = 0;
let a = 0;

let canvas;
const config = {
  len: 2,
  angle: 1,
  innerRadius: 10,
  rollX: 100,
  rollY: 100,
  x: 0,
  y: 0,
  RedMultipler: 100,
  GreenMultipler: 15,
  BlueMultipler: 10,
  OverlayBlend: false,
};
const config2 = {
  len: 2,
  angle: 1,
  innerRadius: 5,
  rollX: 10,
  rollY: 10,
  x: 0,
  y: 0,
  RedMultipler: 15,
  GreenMultipler: 100,
  BlueMultipler: 10,
  OverlayBlend: false,
};
const config3 = {
  len: 2,
  angle: 1,
  innerRadius: 5,
  rollX: 10,
  rollY: 10,
  x: 0,
  y: 0,
  RedMultipler: 10,
  GreenMultipler: 10,
  BlueMultipler: 100,
  OverlayBlend: false,
};

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(15, 1, 1);
  config.x = width / 2;
  config.y = height / 2;
  config2.x = width / 5;
  config2.y = height / 5;
  config3.x = width - width / 5;
  config3.y = height - height / 5;

  // only reset drawing on canvas click
  canvas.elt.addEventListener("click", (e) => {
    config.x = e.offsetX;
    config.y = e.offsetY;
    i = 0;
    a = 0;
    background(1000, 100, 100);
  });
}

let s = 5;
let s2 = 5;

function draw() {
  i++;
  a += 0.01;
  compute(config, i);
  compute(config2, i);
  compute(config3, i);
  
  config2.x = config2.x + s;
  if (config2.x < 0 || config2.x > width) {
    s = -1 * s;
  }
  config3.y = config3.y + s2;
  if (config3.y < 0 || config3.y > height) {
    s2 = -1 * s2;
  }
}

function Collatz(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return (n * 3 + 1) / 2;
  }
}

function compute(cg, i) {
  let n = i;
  push();
  cg.OverlayBlend && blendMode(OVERLAY);
  resetMatrix();
  translate(cg.x, cg.y);
  do {
    n = Collatz(n);
    // visualize
    if (n % 2 == 0) {
      rotate(cg.angle);
    } else {
      rotate(-cg.angle * a);
    }
    strokeWeight(5);
    // 500, 15, 50,
    stroke(
      int(a * cg.RedMultipler) % 255,
      int(a * cg.GreenMultipler) % 255,
      int(a * cg.BlueMultipler) % 255,
      constrain(a * 5, 0, 255)
    );
    line(
      a * cg.rollX,
      a * cg.rollY,
      a * cg.innerRadius,
      -config.len
    );
    translate(0, -config.len);
  } while (n !== 1);
  pop();
}

/**
 * CollatzSunrise
 * Inspired by Daniel Shiffman's
 * Coding in the Cabana 2: Collatz Conjecture
 * @author <https://github.com/anuraghazra>
 * @demo <https://anuraghazra.github.io/canvasFun/collatzSunrise>
 */


// https://editor.p5js.org/jht9629-nyu/sketches/XkfKqZ4-Q
// Final Project -sunny 2

// https://editor.p5js.org/jht9629-nyu/sketches/Y1032G_1t
// Final Project -sunny 4 bounce
