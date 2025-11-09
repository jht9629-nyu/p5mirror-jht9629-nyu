// https://editor.p5js.org/jht1493/sketches/nrrJkCazV
// 2:2 HSB swatches ui

// 12-color HSB color swatch

let a_hue = 0;
let col_s = 100;
let col_b = 100;

function setup() {
  createCanvas(400, 300);
  colorMode(HSB, 360, 100, 100);
  init_ui();
}

function draw() {
  show_num('a_hue', a_hue);
  show_num('col_s', col_s);
  show_num('col_b', col_b);
  // Draw 12 swatches of color
  for (let i = 0; i < 12; i++) {
    // Calculate hue based on angle between colors
    // 360/12 is the angle between colors
    let h = a_hue + i * 360 / 12;
    // Wrap around the circle
    h %= 360;
    // Calculate x-position of swatch
    let x = i * width / 12;
    // Draw rect
    if (i == 0) {
      strokeWeight(4);
      stroke(0)
      let col = color(h, col_s, col_b);
      show_num('r', red(col));
      show_num('g', green(col));
      show_num('b', blue(col));
    }
    else {
      noStroke();
    }
    fill(h, col_s, col_b);
    rect(x, 0, width / 12, height);
  }
}

// https://editor.p5js.org/icm4.0/sketches/V413sE0Rn