// https://editor.p5js.org/jht9629-nyu/sketches/0qT4LoFse
// test drive DOM.js v5

// !!@ mySection undefined

function setup() {
  createCanvas(400, 100);

  const myParagraph = DOM.set(
    {
      padding: "0.5em 2em",
      backgroundColor: "lavender",
      text: "Some text",
    },
    "p"
  );

  DOM.set({
    header: {
      h1: "loading an element",
      p: "The element was create before the DOM is set.",
    },
    main: {
      p: myParagraph,
    },
    button: {
      id: "myButton",
      innerText: "Go",
      addEventListener: {
        type: "click",
        listerner: (event) => (myInput.value = "Button pressed"),
      },
    },
  });

  // --

  myParagraph.set(
    {
      padding: "0.5em 2em",
      backgroundColor: "lavender",
    },
    "style"
  );

  myButton.set(
    {
      warning: true,
      submit: false,
    },
    "class"
  );

  mySection.set(
    {
      id: "my-button",
    },
    "attribute"
  );

  myButton.set((e) => runMethod(), "click");
}

function draw() {
  background(220);
}

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
