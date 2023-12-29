// https://editor.p5js.org/jht9629-nyu/sketches/rpyY0uqRR
// ICM 2023 jht student selector
let students = [
  "01 Jiayi Wu",
  "02 Jing Cao",
  "03 Yihua Li (Cory)",
  "04 Kefan Lyu",
  "05 Jiaqi Yi",
  "06 Caroline Nivetha",
  "07 Aradhita Maheshwari",
  "08 Nathan Duker",
  "09 Qian Zhang",
  "10 Ray Cogliano",
  "11 Una Zhang",
  "12 Wendy Li",
  "13 Kairui Max Sun",
  "14 Shimeng Zhou",
  "15 An Cao",
];
let index = 0;
function setup() {
  createCanvas(500, 100);
  shuffle(students, true);
  // console.log("students", students);
  createButton("Next").mousePressed(function () {
    index = (index + 1) % students.length;
  });
  textSize(30);
}
function draw() {
  background(220);
  let str = students[index];
  text("index=" + index + " student=" + str, 10, height / 2);
}
