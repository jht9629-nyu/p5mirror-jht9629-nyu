

// https://editor.p5js.org/sairamved/sketches/9lsvnjgZk

let x;
let y;
let sx;
let sy;
let diameter;
let color = 0;
// let co;
let cd;


function setup() {
  createCanvas(400, 400);
  
  x = width/2;
  y = height/2;
  sx = random(5, 10);
  sy = random(5, 10);
  diameter = width/10;
  // co = 0;
  cd = 1;
}

function draw() {
  background(0);
  
  // fill(255, color, color);
  fill(color);
  
  circle(x, y, diameter);
  x += sx;
  y += sy / 2;
  
  color += cd;
  
  // color = map(x, 0, width, 0, 255);
  
  if(x > width - diameter/2 || x < 0 + diameter/2){
    sx *= -1;
    cd *= -1
    // colorBool = !colorBool;
  } else if(y > height - diameter/2 || y < 0 + diameter/2){
    sy *= -1;
    cd *= -1
  }
}