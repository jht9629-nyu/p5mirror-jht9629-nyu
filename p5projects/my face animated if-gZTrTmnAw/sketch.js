let loc = 220
function setup() {
  // createCanvas([width], [height], [canvas])
  createCanvas(400, 600);
  // frameRate(2)
}
function draw() {
  background(200)
  // background('red'); 
  //stroke(160,66,63)
  strokeWeight(8);
  stroke(0)
  fill(160,66,63);
  // ellipse(x, y, w, [h])
  ellipse(200,300,340,540)
  fill('yellow');
  rect(80,200,100,40);
  rect(240,200,100,40);
  // lip
  fill('red');
  ellipse(loc,400,200,40);
  loc = loc + 1
}