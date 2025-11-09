// https://editor.p5js.org/jht9629-nyu/sketches/FGifOAiKP
// with arrays

// https://editor.p5js.org/rafiiia/sketches/auVsaCKdl
// https://editor.p5js.org/jarivkin/sketches/9-BMW9iiX

let rih1;
let rih2;
let rih3;
let rih4;
let ris;
let index;

//variable to store button
let switcher;

//variable to store current image
let currentImage;

// Load the image.
function preload() {
  rih1 = loadImage("rih1.jpg");
  rih2 = loadImage("rih2.jpg");
  rih3 = loadImage("rih3.jpg");
  rih4 = loadImage("rih4.jpg");
  ris = [rih1, rih2, rih3, rih4];

  //you have to store an image in currentImage so p5 knows its
  //an image object;
  currentImage = loadImage("rih1.jpg");
  index = 0;
}

function setup() {
  createCanvas(500, 600);
  background(255, 0, 200);
  textAlign(CENTER);

  //store button in a variable
  switcher = createButton("Which outfit?");
  //activate button when mouse pressed on the button
  switcher.mousePressed(changeImg);
}

function draw() {
  image(currentImage, 0, 0, width, height);
}

//function to change images
function changeImg() {
  //if currentImage is equal to cilantro, then change to parsley
  //if it doesnt, then switch to cilantro

  // if (currentImage == rih1) {
  //   currentImage = rih2;
  // } else {
  //   currentImage = rih1;
  // }
  console.log('index', index);
  currentImage = ris[index]
  index = (index + 1) % ris.length;
  //draw the current image
  // image(image,x,y,width,height);
  image(currentImage, 0, 0, width, height);
}
