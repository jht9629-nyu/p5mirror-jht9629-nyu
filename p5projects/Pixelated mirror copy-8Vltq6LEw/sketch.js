
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
  
  // Why don't I need this?
  //cam.loadPixels();
  
  // Loop through every 50th pixel
  for(let x = 0; x < width; x+=50) {
    for(let y = 0; y < height; y+=50) {
      // Get the color at this x,y location
      let col = cam.get(x,y);
      // Use it to fill a 50x50 rectangle
      fill(col);
      rect(x, y, 50, 50);
    }
  }
  // Why do I need this?
  //cam.updatePixels();
  
  //image(cam, 0, 0);
}