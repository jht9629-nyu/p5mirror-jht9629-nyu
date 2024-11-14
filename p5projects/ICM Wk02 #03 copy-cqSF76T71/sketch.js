// setting up variables (could possibly be done in arrays)

let x1 = 0;
let y1 = 0;

let x2 = 0;
let y2 = 0;

let x3 = 0;
let y3 = 0;

let x4 = 0;
let y4 = 0;

let x5 = 0;
let y5 = 0;

let x6 = 0;
let y6 = 0;

let x7 = 0;
let y7 = 0;

let x8 = 0;
let y8 = 0;

let speedX = 5;
let speedY = 5;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  let radius = width/8;
  
  fill('#fffff1')
  noStroke()
  translate(width/2, height/2)
  

  // first circle moving towards right, and then bouncing back
  circle(x1 += speedX, y1, radius)
  
  // second circle moving towards left, and then bouncing back
  circle(x2 -= speedX, y2, radius)
  
  // third circle moving up, and then bouncing back
  circle(x3, y3 += speedY, radius)
  
  // fourth circle moving down
  circle(x4, y4 -= speedY, radius)
  
  // fifth circle moving diagonally top right
  circle(x5 +=speedX, y5 -= speedY, radius)
  
  // sixth circle moving diagonally bottom left
  circle(x6 -=speedX, y6 += speedY, radius)
  
  // seventh circle moving diagonally top left
  circle(x7 -=speedX, y7 -= speedY, radius)
    
  // eighth circle moving diagonally bottom right, speed * 10 !!
  circle(x8 +=speedX * 10, y8 += speedY * 10, radius)
  
  
  // logic for circles to bounce back once they reach the edge
  if(x1 >= width - 4 * radius || x1 <= -width + 4 * radius){
    speedX *= -1;
  }
  
  if(y3 >= height - 4 * radius || y3 <= -height + 4 * radius){
    speedY *= -1;
  }
  
  
}