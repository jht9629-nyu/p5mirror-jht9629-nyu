function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noFill();
  for(i=0;i<5;i++){
    strokeWeight(2+i*3);
    circle(200,200,50+i*70);
  }
}