let f = ["👻", "👽", "🎃", "🗣️"];
let i = 0;
let img1;
let img2;
let img3;
let imgs = [];

function preload() {
  img1 = loadImage("apple.png");
  img2 = loadImage("apple2.png");
  img3 = loadImage("trump.png");
  imgs = [img1, img2, img3];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //Makes the emoji used each time different and fill the page
  i = random([1, 2, 3, 4]);
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      //Chooses an emoji for each c and row
      i = (i + 1) % imgs.length;
      //The draw function for the emojis
      drawImages(imgs[i], 50 + random(-20, 20), x, y);
    }
  }
}
function drawImages(img, size, x, y) {
  image(img, x, y, size, size);
}
function drawEmojis(s, size, x, y) {
  textAlign(CENTER, CENTER);
  textSize(size);
  text(s, x, y);
}
