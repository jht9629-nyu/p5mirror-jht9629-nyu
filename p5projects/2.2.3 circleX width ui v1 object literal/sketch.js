// https://editor.p5js.org/jht9629-nyu/sketches/rXhPgZ1k6
// 2.2.3 circleX width ui

let my = {
  circleX: 0,
  circleY: 100,
  diam: 64
};
// let circleX = 0;
// let circleY = 100;
// let diam = 64;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    my.circleX = mouseX;
    my.circleY = mouseY;
  });
  create_ui();
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(my.circleX, my.circleY, my.diam);
  my.circleX = (my.circleX + 1) % width;
  update_ui();
}

function create_ui() {
  createSpan('click on canvas to move the circle')
  createElement('br');
  createButton('diam 50').mousePressed(function() {
    diam = 50;
  });
  createButton('diam 100').mousePressed(function() {
    diam = 100;
  });
  createElement('br');
  createSpan().id('id_circleX');
  createSpan().id('id_circleY');
  createElement('br');
  createSpan().id('id_mx');
  createSpan().id('id_my');
  createSpan().id('id_rgba');
}

function update_ui() {
  select('#id_circleX').html('[circleX=' + my.circleX + '] ')
  select('#id_circleY').html('[circleY=' + my.circleY + '] ')
  select('#id_mx').html('[mouseX=' + mouseX + '] ')
  select('#id_my').html('[mouseY=' + mouseY + '] ')
  select('#id_rgba').html('[RGBA=' + get(mouseX, mouseY) + '] ')
}

// https://editor.p5js.org/jht1493/sketches/UhNMB6GQO
// 2.2.3 circleX width ui

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