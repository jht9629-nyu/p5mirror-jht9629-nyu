// global variables
// these variables can be used anywhere in your program
// JHT convention: our functions and variables use _
//
let x_position = 200;
let y_position = 200;
let a_size;

function setup() {
  createCanvas(400, 400);

  // function variable
  // if declared here, 
  // y_position can only be used in setup()
  // let y_position = 150
  
  // return a num between 10 and 300
  a_size = random(10, 50)
  
  // return a num between 0 and 50
  // a_size = random(50);
  
  // return a num between 0 1
  // a_size = random();
}

function draw() {
  background(220);
  
  circle(x_position, y_position, a_size);
  
  // x_position = x_position - 1;
  // x_position--;
  x_position += 1;
  y_position = y_position - 1;
  
  console.log(y_position);
  // text('y_position = '+y_position, 0,15);
  // text('a_size = '+a_size, 0,30);
  report_msg('y_position = '+y_position);
}

// Display msg in html paragraph element id_line
function report_msg(a_msg) {
  let id_line = select('#id_line');
  if (!id_line) id_line = createP().id('id_line');
  id_line.elt.innerHTML = '[' + frameCount + '] ' + a_msg;
}

// https://editor.p5js.org/enickles/sketches/6u7lNqTfa
