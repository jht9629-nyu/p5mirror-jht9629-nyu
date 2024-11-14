// https://editor.p5js.org/jht9629-nyu/sketches/6iUAYA0km
// Pixelated mirror get

// Declare a variable to hold my webcam image
let cam;

function setup() {
  createCanvas(400, 400);
  // Create a video DOM element that grabs the video stream from my webcam
  cam = createCapture(VIDEO);
  // Hide the DOM element
  cam.hide();
  noStroke();
}

function draw() {
  background(220);
  
  // Get all the video pixels as an image
  let img = cam.get();
  
  // Loop through every 50th pixel
  for(let x = 0; x < width; x+=50) {
    for(let y = 0; y < height; y+=50) {
      // Get the color at this x,y location
      let col = img.get(x,y);
      // Use it to fill a 50x50 rectangle
      fill(col);
      rect(x, y, 50, 50);
    }
  }
}

// https://editor.p5js.org/icm4.0/sketches/OGSIfgFgy
// Pixelated mirror
