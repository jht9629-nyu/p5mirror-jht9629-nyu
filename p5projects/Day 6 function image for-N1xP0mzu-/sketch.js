let f = ['💐','🏵️','🌹','🌸'];
let i = 0;
// Load the image and create a p5.Image object.
let img1, img2, img3;
let imgs = []
function preload() {
  img1 = loadImage('cat1.png');
  img2 = loadImage('dog1.png');
  img3 = loadImage('pig1.png');
  imgs = [img1, img2, img3]
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  i = random([0,1,2,3])
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      //i = (i + 1) % imgs.length
      i = (x+y)%imgs.length;
      drawImage(imgs[i], 50, x, y);
      drawFlower(f[i], 40, x, y);
      console.log('i', i, 'y', y, 'x', x);
    }
  }
}
function drawImage(img, size, x, y) {
  image(img, x, y, size, size);
}
function drawFlower(s, size, x, y) {
  textAlign(CENTER, CENTER);
  textSize(size);
  text(s, x, y);
}

// 💐 🏵️ 🌹 🌸

// https://editor.p5js.org/jht9629-nyu/sketches/_Ax2BHGcn
// Day 6 function emoji for

// https://p5js.org/reference/p5/for/
