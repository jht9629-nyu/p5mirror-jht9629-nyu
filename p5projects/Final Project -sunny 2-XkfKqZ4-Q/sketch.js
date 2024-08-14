// https://editor.p5js.org/jht9629-nyu/sketches/XkfKqZ4-Q
// Final Project -sunny 2

/**
 * CollatzSunrise
 * Inspired by Daniel Shiffman's
 * Coding in the Cabana 2: Collatz Conjecture
 * @author <https://github.com/anuraghazra>
 * @demo <https://anuraghazra.github.io/canvasFun/collatzSunrise>
 */

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
  innerRadius: 10,
  rollX: 100,
  rollY: 100,
  x: 0,
  y: 0,
  RedMultipler: 15,
  GreenMultipler: 100,
  BlueMultipler: 10,
  OverlayBlend: false,
};

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(15, 1, 1);
  config.x = width / 2;
  config.y = height / 2;
  config2.x = width / 5;
  config2.y = height / 5;

  // only reset drawing on canvas click
  canvas.elt.addEventListener("click", (e) => {
    config.x = e.offsetX;
    config.y = e.offsetY;
    i = 0;
    a = 0;
    background(1000, 100, 100);
  });
}

function draw() {
  i++;
  a += 0.01;
  compute(config, i);
  compute(config2, i);
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
      a * cg.RedMultipler,
      a * cg.GreenMultipler,
      a * cg.BlueMultipler,
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
