let squareSize;
let lineWidth ;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
   lineWidth=random(0,30)
squareSize=random(100,300);
  
  
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(255, 150, 200,40);
  fill(255, 200, 200,40);
  square(200,200,squareSize);
}
