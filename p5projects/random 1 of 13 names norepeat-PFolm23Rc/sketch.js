// https://editor.p5js.org/jht9629-nyu/sketches/PFolm23Rc
// random 1 of 13 names norepeat

let a_students;

let i_student;

function randomColor() {
  return color(random(255), random(255), random(255));
}

function setup() {
  createCanvas(windowWidth, windowHeight - 30);

  setup_students();

  shuffle(a_students, true);

  i_student = 0;
  // selectStudent();
  let btn = createButton("selectStudent");
  btn.mousePressed(selectStudent);
  
  let btn2 = createButton("changeColor");
  btn2.mousePressed(changeColor);
}

function changeColor() {
  let stu = a_students[i_student];
  stu.c = randomColor();
}

function draw() {
  background(220);
  textSize(60);
  let stu = a_students[i_student];
  let txt = stu.name;
  // fill(randomColor())
  fill(stu.c);
  text(txt, width * 0.1, height * 0.5);
}

function selectStudent() {
  // i_student = random(a_students);
  i_student = (i_student + 1) % a_students.length;
  console.log("student number", i_student);
}

function setup_students() {
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
    { name: "12-Amanda Zhang", c: randomColor() },
    { name: "13-Helena", c: randomColor() },
  ];
}

// text(str, x, y, [maxWidth], [maxHeight])

// https://editor.p5js.org/jht9629-nyu/sketches/QS31TLmOi
// random 1 or 13

// https://editor.p5js.org/jht9629-nyu/sketches/D71gHB2X6
// random 1 of 13 names
