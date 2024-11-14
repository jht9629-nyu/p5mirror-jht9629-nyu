let movingImages = []; // Array to hold the image objects
let img; // Variable to store the image
let imagesVisible = true; // Flag to toggle image visibility

function preload() {
  // Load your image
  // img = loadImage('leaf1.webp'); 
  let i = 1;
  img = loadImage('leaf'+i+'.webp'); 
}

function setup() {
  createCanvas(400, 400);
  
  // Create 20 leaf images objects, randomize position, movement, and transparency (alpha)
  for (let i = 0; i < 20; i++) {
    let newImageObject = new MovingImage(random(width), random(height), random(50, 160), random(50, 255)); 
    movingImages.push(newImageObject); // Add the image object to the array
  }
}

function draw() {
  background(0); 
  if (imagesVisible) {
    for (let i = 0; i < movingImages.length; i++) {
      movingImages[i].move(); 
      movingImages[i].display(); 
    }
  }
}

// Detect key presses
function keyPressed() {
  console.log("Key pressed:", keyCode);
  // Check for Backspace 
  if (keyCode === 8) {
    imagesVisible = false; 
  }
}

// Detect mouse clicks
function mousePressed() {
  // If mouse is clicked, show the images again
  imagesVisible = true; 
}


class MovingImage {
  constructor(x, y, imageSize, imageAlpha) {
    this.x = x; // X position of image
    this.y = y; // Y position of  image
    this.imageSize = imageSize; // Diameter of the image 
    this.imageAlpha = imageAlpha; // Opacity of the image (transparency)
    this.xSpeed = random(-3, 3); // Horizontal speed of the image
    this.ySpeed = random(-3, 3); // Vertical speed of the image
  }

//method for displaying images
  display() {
    tint(255, 255, 255, this.imageAlpha); 
    image(img, this.x, this.y, this.imageSize, this.imageSize); 
  }

 //method for bouncing
  move() {
    this.x += this.xSpeed; 
    this.y += this.ySpeed; 

    if (this.x > width - this.imageSize || this.x < 0) {
      this.xSpeed *= -1; 
    }

    if (this.y > height - this.imageSize || this.y < 0) {
      this.ySpeed *= -1; 
    }
  }
}
