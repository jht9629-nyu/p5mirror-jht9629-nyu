// https://editor.p5js.org/jht9629-nyu/sketches/SZvZUdgLx
// use mousePressed
//https://editor.p5js.org/ezeta/sketches/OLHePhc_I

//Up to here by Emilia> https://editor.p5js.org/ezeta/sketches/OLHePhc_I

//The outfit images are from Jaded London based mostly off of the last worksheet assignments with some help (just to solve certain errors from OpenAI GPT-5 mini (sorry John Henry I was desperate at this point). The how to add text part we got from this Jason Erdreich tutorial: https://www.youtube.com/watch?v=e3YDsFC3sLY

//create variables
let imgs = [];
let filenames = ["img1.png", "img2.png", "img3.png"];
let currentImg = -1;

//preload my images
function preload() {
  imgs = [loadImage("img1.png"), loadImage("img2.png"), loadImage("img3.png")];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = windowWidth / 2;
  rectY = (windowHeight * 1) / 3;
}

function draw() {
  background(230, 80, 174);

  //create my UI:

  //white rect
  fill(230, 150, 180);
  rectMode(CENTER);
  rect(rectX, rectY, 200, 80);

  //text what to wear
  fill(250);
  textSize(60);
  text("what to wear", windowWidth / 4, 200);

  //text what to wear
  fill(0);
  textSize(60);
  text("?", rectX - 15, rectY + 20);

  //my "if statements" to check wether my current image has been chosen

  // if (mouseIsPressed && currentImg === -1) {
  //   currentImg = int(random(0, 2));
  // }

  if (currentImg !== -1) {
    image(
      imgs[currentImg],
      windowWidth / 3.5,
      (windowHeight * 2) / 4,
      300,
      400
    );
  }
}

function mousePressed() {
  // currentImg = int(random(0, 3));
  currentImg = random([0,1,2]);
  console.log('currentImg', currentImg);
}

