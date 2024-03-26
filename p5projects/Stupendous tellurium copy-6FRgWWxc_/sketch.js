let s1 = 0;
let s2 = 0;
let s3 = 0;
let m = false;
let mySound;
let mySound1;
let img;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("white.mp3");
  mySound1 = loadSound("kaching.mp3");
  img = loadImage("gold.jpg");
}
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 2;

  textSize(100);
  text(s1, 10, h);
  text(s2, w, h);
  text(s3, w * 2, h);

  line(w, 0, w, height);
  line(w + w, 0, w + w, height);
  if (m) {
    console.log("Match!");
    textSize(100);
    fill("gray");
    text("Match!", 10, 100);
    image(img, 0, 0, width, height);
  }
}

function mouseClicked() {
  if (m) {
    m = false;
  }
  let w = width / 3;
  mySound1.play();

  if (mouseX < w) {
    s1 = (s1 + 1) % 3;
  } else if (mouseX < w + w) {
    s2 = (s2 + 1) % 3;
  } else {
    s3 = (s3 + 1) % 3;
  }
  if (s1 == s2 && s2 == s3) {
    m = true;
    console.log("MATCH!");
    textSize(100);
    mySound.play();
  }
}
