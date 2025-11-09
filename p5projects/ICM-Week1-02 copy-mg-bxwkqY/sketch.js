//ICM-Week1-02
//https://editor.p5js.org/yh6371/full/2l7jMcgWw

function setup() {

// Create a canvas that is 400 pixels wide by 400 pixels tall 
createCanvas(400, 400);
}

function draw() {

// Draw a gray background
background(220);

// Start position of a shape that will move
let x = 50;

// Change the horizontal position of the shape over time
x++;

// Draw the shape
rect(x, 200, 50, 50);

// Describes mouse interaction
if(mouseX > x && mouseX < x + 50) {
  x = mouseX;
}
}