// https://editor.p5js.org/jht9629-nyu/sketches/DB-crS54Z
// random student 2025

let a_students;
let i_student;

function setup() {
  createCanvas(windowWidth, windowHeight - 60);

  setup_students();
  shuffle(a_students, true);
  createButton("next") //
    .mousePressed(nextStudent);
  createButton("previous") //
    .mousePressed(previousStudent);
  createButton("changeColor") //
    .mousePressed(changeColor);
  createButton("toggleSelected") //
    .mousePressed(toggleSelected);
}

function toggleSelected() {
  let stu = a_students[i_student];
  if (typeof stu.selected == "undefined") {
    // if (!stu.selected) {
    stu.selected = false;
  }
  stu.selected = !stu.selected;
}

function changeColor() {
  let stu = a_students[i_student];
  stu.c = randomColor();
}

function draw() {
  background(220);
  textSize(60);
  let stu = a_students[i_student];
  let txt = "[" + i_student + "] " + stu.name;
  if (stu.selected) {
    txt = "👍🏾" + txt;
  }
  fill(stu.c);
  text(txt, width * 0.1, height * 0.5);
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function previousStudent() {
  let n = a_students.length;
  i_student = (i_student - 1 + n) % n;
  console.log("student number", i_student);
}

function nextStudent() {
  // i_student = random(a_students);
  i_student = (i_student + 1) % a_students.length;
  console.log("student number", i_student);
}

function setup_students() {
  i_student = 0;
  a_students = [
    { name: "01-Simon", c: randomColor() },
    { name: "02-Emilia", c: randomColor() },
    { name: "03-Jerome", c: randomColor() },
    { name: "04-Channing", c: randomColor() },
    { name: "05-Jackie", c: randomColor() },
    { name: "06-Olivia", c: randomColor() },
    { name: "07-RaFia", c: randomColor() },
    { name: "08-Kevin", c: randomColor() },
    { name: "09-Althea", c: randomColor() },
    { name: "10-Emily Xu", c: randomColor() },
    { name: "11-Emily Ye", c: randomColor() },
    { name: "12-Amanda", c: randomColor() },
    { name: "13-Helena", c: randomColor() },
  ];
}

// text(str, x, y, [maxWidth], [maxHeight])

// https://editor.p5js.org/jht9629-nyu/sketches/QS31TLmOi
// random 1 or 13

// https://editor.p5js.org/jht9629-nyu/sketches/D71gHB2X6
// random 1 of 13 names

// https://editor.p5js.org/jht9629-nyu/sketches/PFolm23Rc
// random 1 of 13 names norepeat
