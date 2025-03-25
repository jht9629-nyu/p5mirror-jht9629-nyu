// Source: https://editor.p5js.org/enickles/sketches/va5ljjMst by Ellen Nickles

let vid;
let arrayXpos = []; // empty array to store random X positions
let total = 19; // the number of columns we will have
let colWidth;

function setup() {
  // same resolution as video
  createCanvas(640, 360);

  colWidth = width / total; 

  // create video p5.Element object
  vid = createVideo("assets/sky.m4v");
  vid.speed(2);
  vid.loop(); // loop the video
  vid.hide(); // hiding the original video from the display as columns of the video will be drawn on the canvas at random

  // select a random x point and store it in an array
  for (let i = 0; i < total; i++) {
    // ceil rounds the number up
    arrayXpos[i] = ceil(random(width - colWidth)); // a random x-position is generated and stored in the array
  }
  // console.log(arrayXpos);
}

function draw() {
  background (0)
  
  // at every other column, a random portion of the video is being drawn
  for (let col = 0; col < total; col += 2) {
    

    let vidX = arrayXpos[col] // random x-position for current column
    
    copy(vid, vidX, 0, ceil(colWidth), height, ceil(col * colWidth), 0, ceil(colWidth), height); // copy(source, source x, source y, source w, source h, destination x, destination y, destination w, destination h)
  }

 for (let col = 0; col < total; col += 1) {
    

    let vidX = arrayXpos[col] // random x-position for current column
    
    copy(vid, vidX, 0, ceil(colWidth), height, ceil(col * colWidth), 0, ceil(colWidth)*5, height); // copy(source, source x, source y, source w, source h, destination x, destination y, destination w, destination h)
  }
}