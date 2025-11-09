function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let fc = frameCount % 100
  if (fc >= 0 && fc <= 5) {
    fill(255, 120, 60);
    rect(random(width), random(height), 60, 40);
  }
}
