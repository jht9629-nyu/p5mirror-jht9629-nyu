// https://editor.p5js.org/jht9629-nyu/sketches/qYGpv4-I2
// captureVideo img = get()

// Declare a variable to hold the video feed
let cam;

// Declare and initialize the cell size of the pixelation
let cellSz = 10;

function setup() {
  createCanvas(640, 480);
  
  // Start the video feed
  // Creates a p5.MediaElement object
  cam = createCapture(VIDEO);
  
  // Hide the DOM element on the page
  cam.hide();
}

function draw() {
  background(220);
  
  // Load the pixels from the current frame of the video feed
  // cam.loadPixels();
  let img = cam.get();
  
  // Loop through the image in 2-dimensions
  for(let x = 0; x < width; x+=cellSz) {
    for(let y = 0; y < height; y+=cellSz) {
      
      let c = img.get(x,y);
      
      // Calculate the index number of the r-value of the pixel at x,y
      // let i = (y*width + x)*4;
      // let r = cam.pixels[i];
      // let g = cam.pixels[i+1];
      // let b = cam.pixels[i+2];
      
      // Fill with the rgb values of the pixel at x,y
      // fill(r,g,b);
      fill(c);
      
      // Draw a big rect to represent this pixel 
      rect(x, y, cellSz, cellSz);
    }
  }

  // Draw the cam image to the canvas
  //image(cam, 0, 0);
}

// https://editor.p5js.org/jht9629-nyu/sketches/haS49TEw4
// https://editor.p5js.org/icm4.0/sketches/ZsjXSIVi0
// W8: createCapture() + Pixelation
