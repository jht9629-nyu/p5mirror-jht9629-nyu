// https://editor.p5js.org/jht9629-nyu/sketches/BDNT4XMEU
// CCL Day2-pattern-image
let x;
let y;
let im;
function preload() {
  // im = loadImage("flower.png");
  im = loadImage("basketball.png");
}
function setup() {
  createCanvas(400, 400);
  x = 0;
  y = 0;
  // frameRate(15);
}
function draw() {
  // background(220);
  // fill(x, y, 0);
  // rect(x, y, 50, 50);
  image(im, x, y, 50+random(10), 50+random(10));
  x += 50;
  if (x > 400) {
    x = 0;
    y += 50;
    if (y > 400) {
      y = 0;
    }
  }
  console.log('x',x,'y',y);
  // fill(255,0,255,50);
  // circle(mouseX,mouseY,150);
  // image(im,mouseX,mouseY,50,50)
}
