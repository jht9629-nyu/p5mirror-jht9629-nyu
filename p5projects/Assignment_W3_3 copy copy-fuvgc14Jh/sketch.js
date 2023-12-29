var startTime = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  var currentTime = millis();
  


  if (currentTime - startTime >= 1000) {
    strokeWeight(5);
    fill(255,200,0);
    rectMode(CENTER);
    rect(200,200,200,200);
    // startTime = currentTime;
  } // else // if (currentTime - startTime < 500) {
  if (currentTime - startTime >= 2000)
  {
    background(200);
  }
}
