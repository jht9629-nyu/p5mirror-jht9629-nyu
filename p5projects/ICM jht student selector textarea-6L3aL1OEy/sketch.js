// https://editor.p5js.org/jht9629-nyu/sketches/6L3aL1OEy
// ICM jht student selector textarea

// use textarea for slide urls so they can stay private.

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
let links = [];

let index = 0;
let textAreaDiv;

function setup() {
  createCanvas(500, 100);
  // console.log("students", students);
  createButton("Next").mousePressed(function () {
    index = (index + 1) % students.length;
  });
  createButton("Clear").mousePressed(function () {
    localStorage.clear();
    let str = students.join("\n");
    textAreaDiv.html(str);
  });
  createButton("Links").mousePressed(create_links);
  createElement("br");

  let inputStr = localStorage.getItem("students");
  // console.log('inputStr', inputStr);
  if (!inputStr) {
    inputStr = students.join("\n");
  }

  textAreaDiv = createElement("TextArea");
  textAreaDiv.html(inputStr);
  textAreaDiv.elt.cols = 50;
  textAreaDiv.elt.rows = 20;
  
  textSize(30);
}

function create_links() {
  removeElements();
  //
  // create a-tags for each student
  let str = textAreaDiv.value();
  localStorage.setItem("students", str);
  lines = str.split("\n");
  links = [];
  for (let index = 0; index < lines.length; index++) {
    let label = students[index];
    ent = lines[index];
    links[index] = { index: index + 1, url: ent, label: label };
  }
  shuffle(links, true);
  for (let index = 0; index < links.length; index++) {
    let ent = links[index];
    // createA(href, html, [target])
    let href = ent.url;
    let ht = "[" + ent.label + "]";
    // let target = '_blank';
    let target = "slides";
    createElement("br");
    createA(href, ht, target);
  }
}

function draw() {
  background(220);
  let str = students[index];
  text("index=" + index + " student=" + str, 10, height / 2);
}

// https://editor.p5js.org/jht9629-nyu/sketches/rpyY0uqRR
// ICM 2023 jht student selector
