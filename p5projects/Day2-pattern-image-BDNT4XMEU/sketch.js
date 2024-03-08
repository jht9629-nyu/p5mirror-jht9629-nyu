let x;
let y;
let myimage;

function preload() {
  myimage = loadImage("flower.png")
}

function setup() {
  createCanvas(400, 400);
  x = 0;
  y = 0;
  // frameRate(15);
}

function draw() {
  // background(220);
  // fill(x, y, 0);
  // rect(x, y, 50, 50);
  image(myimage,x,y,50,50)
  x += 50;
  if (x > 400) {
    x = 0;
    y += 50;
    if (y > 400) {
      y = 0;
    }
  }
  
  // fill(255,0,255,50);
  // circle(mouseX,mouseY,150);
  image(myimage,mouseX,mouseY,50,50)

}
