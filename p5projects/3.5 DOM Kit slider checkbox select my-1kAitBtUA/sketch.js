// https://editor.p5js.org/jht9629-nyu/sketches/1kAitBtUA
// 3.5 DOM Kit slider checkbox select my

// Example of using DOM functions for
// - Button
// - Slider
// - Checkbox
// - Selection list

// Global variables given distinctive prefix
// to avoid conflict with hugh p5js name space
// also help do quick rename by command-D
let my = {
  x: 0,
  y: 100,
  len: 64,
  moveFlag: true,
  color: "red",
};

function setup() {
  createCanvas(400, 200).mousePressed(function () {
    my.x = mouseX;
    my.y = mouseY;
  });
  create_ui();
}

function draw() {
  background(0);
  noStroke();
  fill(my.color);
  circle(my.x, my.y, my.len);
  if (my.moveFlag) {
    my.x = (my.x + 1) % width;
  }
  update_ui();
}

function create_ui() {
  createSpan("click on canvas to move the circle");
  createElement("br");

  // Buttons to change a variable
  createButton("my.len 50").mousePressed(function () {
    my.len = 50;
  });
  createButton("my.len 100").mousePressed(function () {
    my.len = 100;
  });

  // createSlider(min, max, [value], [step])
  createSlider(0, 300, my.len).input(function () {
    my.len = this.value();
  });

  // Span used to report the value of a variable
  createSpan().id("idLen");
  createElement("br");

  // id's are used to identify DOM element
  createSpan().id("idX");
  createElement("br");

  // createCheckbox([label], [value])
  let moveChk = createCheckbox("Move", my.moveFlag);
  moveChk.changed(function () {
    my.moveFlag = this.checked();
  });
  moveChk.style("display:inline");

  // https://p5js.org/reference/#/p5/createSelect
  let sel = createSelect();
  sel.option("red");
  sel.option("green");
  sel.option("gold");
  sel.changed(function () {
    my.color = this.value();
  });
}

function update_ui() {
  // select with # is find a DOC element by id
  select("#idLen").html("[my.len=" + my.len + "] ");
  select("#idX").html("[x=" + my.x + "] ");
}

// TRY: add report of y
// TRY: add moveY checkBox
// TRY: modify move to follow mouse
// TRY: update to use classes for many circle objects

// https://editor.p5js.org/jht1493/sketches/qBt6Ty_7b
// 3.5 circleX my.len ui

// https://editor.p5js.org/jht1493/sketches/qBt6Ty_7b
// 3.5 circleX a_len ui

// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 circleX % width ui

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable circleX % width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/2-define-variables

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

// https://editor.p5js.org/jht9629-nyu/sketches/UYiQ_IKf2
// 3.5 DOM Kit slider checkbox select
