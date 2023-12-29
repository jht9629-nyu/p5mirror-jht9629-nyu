function setup() {
  // createCanvas(390, 600);
  createCanvas( 600, 390);
}

function draw() {
  background(220);

  let h = height / 3;

  fill(255, 0, 0);
  rect(0, 0, width, h);

  fill(0, 255, 0);
  rect(0, h, width, h);

  fill(255, 255, 0);
  rect(0, h + h, width, h);
  
  let m = width / 20;
  noFill();
  strokeWeight(m )
  rect(0,0, width, height)
}
