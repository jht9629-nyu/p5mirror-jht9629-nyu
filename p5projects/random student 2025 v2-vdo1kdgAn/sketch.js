// https://editor.p5js.org/jht9629-nyu/sketches/vdo1kdgAn
// random student 2025 v2

let a_students;
let i_student;

function setup() {
  createCanvas(windowWidth, windowHeight - 60);

  setup_students();
  shuffle(a_students, true);
  
  create_button("next", nextStudent);
  // {
  //   let btn = createButton("next");
  //   btn.mousePressed(nextStudent);
  //   btn.style("font-size:28px");
  // }
  create_button("previous", previousStudent);
  create_button("changeColor", changeColor);
  // create_button("toggle 👍🏾", toggleSelected);
  create_button("toggle ✔️", toggleChecked);
}

function create_button(btnName, pressedFunc) {
    let btn = createButton(btnName);
    btn.mousePressed(pressedFunc);
    btn.style("font-size:28px");
}

function toggleChecked() {
  let stu = a_students[i_student];
  if (typeof stu.checked == "undefined") {
    stu.checked = false;
  }
  stu.checked = !stu.checked;
}

function toggleSelected() {
  let stu = a_students[i_student];
  if (typeof stu.selected == "undefined") {
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
  let txt = '[' + i_student + '] ' + stu.name;
  if (stu.selected) {
    txt = "👍🏾" + txt;
  }
  if (stu.checked) {
    txt = "✔️" + txt;
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

// https://editor.p5js.org/jht9629-nyu/sketches/DB-crS54Z
// random student 2025
