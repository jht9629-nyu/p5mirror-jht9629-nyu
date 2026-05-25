// https://editor.p5js.org/jht9629-nyu/sketches/H5u5fc4HI
// BareDOM Binder v1
// code from Reactive Data
// no way to deep link to example code
// https://baredom.org/
// found:
// https://github.com/lenincompres/baredom#binding-functions

function setup() {
  createCanvas(400, 400);
  render();
}

function draw() {
  background(220);
}

function render() {
  const _fieldEnabled = new Binder(false);

  const myMain = DOM.let("main", {
    div: {
      style: {
        padding: "1em",
        background: _fieldEnabled.as({
          false: "gray",
          true: "green",
        }),
        // the key 'default' can be used for multiple values of the binder
        color: _fieldEnabled.as("silver", "lightgreen"),
        // with primitive arguments (or an array) the method returns one based on the integer value of the binder (false = 0, true = 1)
      },
      input: {
        enabled: _fieldEnabled,
        value: _fieldEnabled.as((value) => `The field is: ${value}.`),
      },
      button: {
        class: {
          enabled: _fieldEnabled,
          // classes passed as object keys can be bound as well.
        },
        text: "toggle",
        onclick: () => (_fieldEnabled.value = !_fieldEnabled.value),
      },
    },
  });

  DOM.set({
    header: {
      h1: "Example of binding",
    },
    main: myMain,
    footer: "the footer",
  });
}
