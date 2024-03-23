// https://editor.p5js.org/jht9629-nyu/sketches/HrxWO9hRd
// DOM.js v10 - voteCount span

let my = { voteCount: 0 };

function setup() {
  createCanvas(400, 100);

  DOM.set([
    { tag: "button", text: "Vote Up", onclick: voteUpAction },
    { tag: "button", text: "Down", onclick: voteDownAction },
    { tag: "span", id: "id_vote_count_span", text: my.voteCount },
  ]);
}

function draw() {
  background(220);
}

function voteUpAction() {
  console.log("Vote Up");
  my.voteCount++;
  id_vote_count_span.innerHTML = my.voteCount;
  // dbase_update_props({ vote_count: dbase_increment(1) });
}

function voteDownAction() {
  console.log("Vote Down");
  my.voteCount--;
  id_vote_count_span.innerHTML = my.voteCount;
  // dbase_update_props({ vote_count: dbase_increment(-1) });
}

// --
// https://editor.p5js.org/jht9629-nyu/sketches/4WpKOOBBH
// test drive DOM.js v9
// vote buttons

// --
// https://editor.p5js.org/jht9629-nyu/sketches/mLU67cNL0
// test drive DOM.js v8
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#domjs-and-p5js
// !!@ ); --> });
// !!@ someP5Element undefined
// !!@ added   let someP5Element = createDiv('one');
// !!@ TypeError: goBtn.addClass is not a function

// --
// https://editor.p5js.org/jht9629-nyu/sketches/X1REi2O0H
// test drive DOM.js v7
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#extending-the-htmlelement-class
// ?? how is this used:
//   customElements.define("my-element", MyElement);

// --
// https://editor.p5js.org/jht9629-nyu/sketches/66VL3dHNk
// test drive DOM.js v7
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#binding-functions
// !!@ Maximum call stack size exceeded

// --
// https://editor.p5js.org/jht9629-nyu/sketches/DNCSUTBnq
// test drive DOM.js v6
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#binding
// !!@ p text changes, but input value does not change
// if input is edited with click

// --
// https://editor.p5js.org/jht9629-nyu/sketches/0qT4LoFse
// test drive DOM.js v5
// !!@ mySection undefined

// --
// https://editor.p5js.org/jht9629-nyu/sketches/Hl1Tu1U1U
// test drive DOM.js v4
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#creating-an-element
// !!@ myButton undefined

// --
// https://editor.p5js.org/jht9629-nyu/sketches/IJDh1-znl
// test drive DOM.js v3
// Correct addEventListener listerner --> listener

// --
// https://editor.p5js.org/jht9629-nyu/sketches/2sNiJGe1x
// test drive DOM.js v2
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#properties-attributes-events-and-listeners
// !!@ addEventListener does not appear to work

// --

// https://editor.p5js.org/jht9629-nyu/sketches/Bv2yPxl9Y
// test drive DOM.js v1
// someElement undefined
// needed to add id_main

// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#the-domset-method
