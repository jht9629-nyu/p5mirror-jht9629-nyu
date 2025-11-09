// https://editor.p5js.org/jht9629-nyu/sketches/_2w0NVWwa
// echo echo taoyan! copy
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

  setup_palette();
  
  for (let x = 0; x < nrow * ncol; x++) {
    let random_size = floor(random(10, 30));
    append(yuan_size, random_size);
    // let random_color = random(color_pairs); 
    let random_color = color_pairs[x % color_pairs.length]
    append(color_random_pairs, random_color);
  }
  console.log('color_random_pairs',color_random_pairs);
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
