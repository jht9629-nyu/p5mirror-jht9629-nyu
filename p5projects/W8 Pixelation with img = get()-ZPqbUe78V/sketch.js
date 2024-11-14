// https://editor.p5js.org/jht9629-nyu/sketches/ZPqbUe78V
// W8: Pixelation with img = get()
// https://editor.p5js.org/icm4.0/sketches/P7INyIg9B
// W8: Pixelation

let cat;
let cellSz = 10;

function preload() {
  // Which function do we use?
  // We want to load an image file
  // And we want to get its pixel data
  cat = loadImage('cat.jpg');
}

function setup() {
  createCanvas(cat.width, cat.height);
  noStroke();
}

function draw() {
  background(220);

  let img = cat.get();
  for(let x = 0; x < cat.width; x+=cellSz) {
    for(let y = 0; y < cat.height; y+=cellSz) {
      
      let c = img.get(x, y);
      
      fill(c);

      rect(x, y, cellSz, cellSz);
    }
  }
  cellSz = floor(map(mouseX, 0, width, 1, 10));
}