/*
Can you visualize what will happen when this sketch runs? Can you draw it or describe it out loud?
*/

let x = 200;
let y = 200;
let speed = 1;
let direction = -1
let acc = 0.2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // x, y, size
  circle(x, y, 50)
  
  x = x + speed;
  y = y + speed;
  
  // x = x - speed;
  // y = y - speed;
  
//   x = x + (speed * direction);
//   y = y + (speed * direction);
  
//   speed = speed + acc;
  
  console.log("x " + x, "y " + y, "speed " + speed, "direction " + direction)
}






