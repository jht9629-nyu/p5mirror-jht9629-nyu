// https://editor.p5js.org/jht9629-nyu/sketches/QS31TLmOi
// random 1 or 13

let a_students = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let istudent;

function setup() {
  createCanvas(400, 400);
  istudent = random(a_students);
  console.log('student number', istudent)
}

function draw() {
  background(220);
  textSize(60)
  text(istudent, width/2, height/2);
}

// text(str, x, y, [maxWidth], [maxHeight])

