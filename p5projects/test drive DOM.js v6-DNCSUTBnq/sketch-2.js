// https://editor.p5js.org/jht9629-nyu/sketches/DNCSUTBnq
// test drive DOM.js v6

// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#binding

let counter = 0

const myBinder = new Binder("Default value");

const myMain = DOM.set(
  {
    input: {
      value: myBinder,
    },
    p: {
      text: myBinder,
    },
    button: {
      text: "Go Button",
      onclick: (event) => {
        myBinder.value = "Go was clicked. " + counter++
      },
    },
  },
  "main"
);

DOM.set({
  header: {
    h1: "Example of binding",
  },
  main: myMain,
  footer: "the footer",
});

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

// !!@ p text changes, but input value does not change
// if input is edited with click
