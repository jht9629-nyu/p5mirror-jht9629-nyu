function setup() {
  createCanvas(400, 100);

  DOM.set({
    header: {
      h1: "Page built with DOM.set",
    },
    main: {
      article: {
        h2: "Basic DOM element",
        p: "<b>This</b> is a paragraph.",
      },
    },
    footer: {
      p: "Made with DOM.js",
    },
  });
}

function draw() {
  background(220);
}

// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#the-domset-method

