// https://editor.p5js.org/jht9629-nyu/sketches/Bv2yPxl9Y
// test drive DOM.js v1

// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#the-domset-method
// !!@ someElement undefined -- someElement --> id_main
// !!@ needed to add id_main 

 function setup() {
  
  DOM.set({
    header: {
      h1: "Page built with DOM.set",
    },
    main: {
      id: "id_main",
      article: {
        h2: "main: Basic DOM element",
        canvas: createCanvas(400,400),
        p: "<b>This</b> is a paragraph.",
      },
    },
    footer: {
      p: "footer: Made with DOM.js",
    },
  });

  id_main.set({
    h1: "Hello world",
    p: "This is a <b>paragraph</b>.",
  });
 }

// function draw() {
//   background(220);
// }

