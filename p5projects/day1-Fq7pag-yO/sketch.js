function setup() {
  createCanvas(300,400)
  frameRate(12)
}

function draw() {
  // background(0,0,255);
  //background(0,255,0);
  // circle(x, y, d)
  fill(100)
  circle(mouseX, mouseY,100);
  // rect(x, y, w, [h])
  fill(random(0,255))
  rect(0,0,100,100)
  circle(mouseX+50, mouseY,100);
  rect(0,200,100,100)

}