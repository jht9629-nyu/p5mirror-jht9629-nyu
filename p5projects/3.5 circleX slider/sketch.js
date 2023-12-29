// https://editor.p5js.org/jht9629-nyu/sketches/h64xxtnIM
// 3.5 circleX slider

let circleX = 0;
let circleY = 100;
let a_len = 64;
let a_move = true;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    circleX = mouseX;
    circleY = mouseY;
  });
  create_ui();
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circleX, circleY, a_len);
  if (a_move) {
    circleX = (circleX + 1) % width;
  }
  update_ui();
}

function create_ui() {
  createSpan('click on canvas to move the circle')
  createElement('br');
  createButton('a_len 50').mousePressed(function() {
    a_len = 50;
  });
  createButton('a_len 100').mousePressed(function() {
    a_len = 100;
  });
  // createSlider(min, max, [value], [step])
  createSlider(0, 300, a_len).input(function() {
    a_len = this.value();
  });
  createSpan().id('ia_len');
  createElement('br');
  createSpan().id('icircleX');
  createElement('br');
  // createCheckbox([label], [value])
  createCheckbox('Move', a_move).changed(function() {
    a_move = this.checked();
  });
}

function update_ui() {
  select('#ia_len').html('[a_len=' + a_len + '] ')
  select('#icircleX').html('[circleX=' + circleX + '] ')
}

// https://editor.p5js.org/jht1493/sketches/qBt6Ty_7b
// 3.5 circleX a_len ui

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