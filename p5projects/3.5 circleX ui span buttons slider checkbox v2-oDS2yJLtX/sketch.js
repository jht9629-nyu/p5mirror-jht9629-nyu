// https://editor.p5js.org/jht9629-nyu/sketches/oDS2yJLtX
// 3.5 circleX ui span buttons slider checkbox v2

let my = {};

function setup() {
  my.circleX = 0;
  my.circleY = 100;
  my.len = 64;
  my.moveEnabled = true;

  createCanvas(400, 200).mousePressed(function () {
    my.circleX = mouseX;
    my.circleY = mouseY;
  });
  create_ui();
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(my.circleX, my.circleY, my.len);
  if (my.moveEnabled) {
    my.circleX = (my.circleX + 1) % width;
  }
  update_ui();
}

function create_ui() {
  createSpan("click on canvas to move the circle");
  createElement("br");
  createButton("len 50").mousePressed(function () {
    my.len = 50;
  });
  createButton("len 100").mousePressed(function () {
    my.len = 100;
  });
  // createSlider(min, max, [value], [step])
  createSlider(0, 300, my.len).input(function () {
    my.len = this.value();
  });
  createSpan().id("id_len");
  createElement("br");
  createSpan().id("id_circleX");
  // createElement("br");
  // createCheckbox([label], [value])
  createCheckbox("Move", my.moveEnabled)
    .changed(function () {
      my.moveEnabled = this.checked();
    })
    .style("display:inline");
}

function update_ui() {
  select("#id_len").html("[len=" + my.len + "] ");
  select("#id_circleX").html("[circleX=" + my.circleX + "] ");
}

// to prevent checkBox break use style('display:inline');
// my.runFlagChk = createCheckbox('run', my.runFlag).changed(function () {
//   my.runFlag = this.checked();
//   my.animLoop.loop = my.runFlag;
// });
// my.runFlagChk.style('display:inline');

// https://editor.p5js.org/jht1493/sketches/qBt6Ty_7b
// 3.5 circleX len ui

// https://editor.p5js.org/jht1493/sketches/qBt6Ty_7b
// 3.5 circleX a_len ui

// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 circleX % width ui

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable circleX % width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC

// https://editor.p5js.org/jht9629-nyu/sketches/bG2JhGUBX
// 3.5 circleX ui span buttons slider checkbox
