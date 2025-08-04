function setup() {
  // createCanvas([width], [height], [canvas])
  createCanvas(400, 600);
}

function draw() {
  background(0)
  // background('red');
  //background('red');
  // background(0,200,0); // green
  //background(255,0,0); // red
  // Red, Green & Blue values.
  // background(255, 204, 200);
  fill('blue');
  // rect(x, y, w, [h])
  // x and y is top left corner
  rect(0,0,100,100);
  fill('red');
  
  // circle(x, y, d)
  // x and y are center of the circle
  circle(100,0,100);
  
  fill('green');
  // ellipse(x, y, w, [h])
  ellipse(200,0,100,200)
}