let w = 400
let h = 400

function setup() {
  // createCanvas(400, 400);
  createCanvas(w, h);
}

function draw() {
  background(220);
  strokeWeight(0)
  fill('red')
  // circle(200,200,400)
  circle(w*0.5,h*0.5,w)
  fill('green');
  // circle(200,200,300);
  circle(w*0.5,h*0.5, w * 0.75);
  fill('yellow');
  // circle(200,200,200);
  circle(w*0.5,h*0.5, w * 0.5);
  fill('black');
  // circle(200,200,100);
  circle(w*0.5,h*0.5,w*0.25);
}