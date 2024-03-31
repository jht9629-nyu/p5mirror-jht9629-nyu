// https://editor.p5js.org/jht9629-nyu/sketches/Bv2yPxl9Y
// test drive DOM.js v1
// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#the-domset-method

DOM.set({
  header: {
    h1: "Page built with DOM.set",
  },
  main: {
    id: "someElement",
    article: {
      h2: "main: Basic DOM element",
      p: "<b>This</b> is a paragraph.",
    },
  },
  footer: {
    p: "footer: Made with DOM.js",
  },
});

someElement.set({
  h1: "Hello world",
  p: "This is a <b>paragraph</b>.",
});
