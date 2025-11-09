
// https://editor.p5js.org/jht9629-nyu/sketches/WNMTMLxG-
// https://editor.p5js.org/Emily_Mayling/sketches/G1CLz2Ohi

let color_center;
let color_outer;
let nrow = 6;
let ncol = 4;
let margin = 100;
let yuan_size = [];
let color_pairs = [];
let color_random_pairs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);

  color_center = [
    color(255, 255, 100), // 0 yellow
    color(253, 106, 1), // 1  orange
    color(1, 143, 201), // 2 greenish blue
    color(167, 87, 182), // 3 purple
    color(64, 204, 239), // 4 light blue
    color(120, 179, 61), // 5  green
    color(176, 28, 67), // 6  red
    color(255), // 7 white
  ];

  color_outer = [
    color(20, 1, 244), // 0 deep blue
    color(255, 175, 70), // 1 light orange
    color(227, 27, 37), // 2 red
    color(123, 4, 192), // 3 purple
    color(255), // 4 white
    color(255, 50, 150), // 5 bright pink
    color(255, 255, 100), // 6 yellow
    color(120, 179, 61), // 7  green
  ];

  color_pairs = [
    [color_center[0], color_outer[5]],
    [color_center[1], color_outer[4]],
    [color_center[5], color_outer[3]],
    [color_center[3], color_outer[1]],
    [color_center[1], color_outer[0]],
    [color_center[2], color_outer[2]],
    [color_center[6], color_outer[6]],
    [color_center[7], color_outer[3]],
    [color_center[4], color_outer[7]],
    [color_center[6], color_outer[0]],
    [color_center[2], color_outer[2]],
  ];

  for (let x = 0; x < nrow * ncol; x++) {
    let random_size = floor(random(10, 30));
    append(yuan_size, random_size);
    let random_color = random(color_pairs); 
    append(color_random_pairs, random_color);
  }
}

function draw() {
  background(0);
  let yuan_x, yuan_y, yuan_r, color_c, color_o;
  let yuan_dist_height = (height - 2 * margin) / (nrow - 1);
  let yuan_dist_width = (width - 2 * margin) / (ncol - 1);
  let index, color_index;
  for (let i = 0; i < nrow; i++) {
    for (let j = 0; j < ncol; j++) {
      index = i * ncol + j;
      yuan_r = yuan_size[index];
      yuan_x = margin + j * yuan_dist_width;
      yuan_y = margin + i * yuan_dist_height;
      color_c = color_random_pairs[index][0];
      color_o = color_random_pairs[index][1];

      yuan(yuan_x, yuan_y, yuan_r, color_c, color_o);
    }
  }
}


function yuan(x, y, yuan_radius, color_center, color_outer) {
  for (let r = yuan_radius; r > 0; r = r - 1) {
    //draw circle from outer to center
    let amount = map(r, 0, yuan_radius, 1, 0); // blend effect
    //map(r, 0, yuan_radius, 1, 0)(invert) || map(r, 0, yuan_radius, 0, 1)
    let c = lerpColor(color_center, color_outer, amount);

    fill(c);
    ellipse(x, y, r * 2, r * 2); // r * 2 converts radius to diameter
  }
}

