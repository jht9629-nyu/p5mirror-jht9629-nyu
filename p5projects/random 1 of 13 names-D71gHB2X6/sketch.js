// https://editor.p5js.org/jht9629-nyu/sketches/D71gHB2X6
// random 1 of 13 names

let a_students = [
  '01-Simon',
  '02-Emilia',
  '03-Jerome',
  '04-Channing',
  '05-Jackie',
  '06-Olivia',
  '07-RaFia',
  '08-Kevin',
  '09-Althea',
  '10-Emily Xu',
  '11-Emily Ye',
  '12-Amanda Zhang',
  '13-Helena'];

let i_student;

function setup() {
  createCanvas(windowWidth, windowHeight-30);
  selectStudent();
  let btn = createButton('selectStudent');
  btn.mousePressed(selectStudent);
}

function selectStudent() {
  i_student = random(a_students);
  console.log('student number', i_student)
}

function draw() {
  background(220);
  textSize(60)
  text(i_student, width * 0.10, height * 0.5);
}

// text(str, x, y, [maxWidth], [maxHeight])

// https://editor.p5js.org/jht9629-nyu/sketches/QS31TLmOi
// random 1 or 13
