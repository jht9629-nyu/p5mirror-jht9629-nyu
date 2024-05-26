// https://editor.p5js.org/jht9629-nyu/sketches/G3arjv8UF
// test drive DOM.js v10 inputs

let counter = 0;

DOM.set({
  button: {
    id: "changeBtn",
    text: "Change",
    onclick: (event) => {
      counter++;
      myInput.value = "Button pressed " + counter;
    },
  },
});

DOM.set({ br: {} });

DOM.set({
  input: {
    id: "myInput",
    placeholder: "myInput placeholder",
    onchange: (event) => console.log("myInput onchange: " + myInput.value),
    click: (event) => console.log("myInput click " + myInput.value),
  },
});

DOM.set({ br: {} });

DOM.set({
  input: {
    id: "myInput2",
    type: "range",
    min: 0,
    max: 100,
    step: "any",
    value: 50,
    // placeholder: "myInput2 placeholder",
    oninput: (event) => {
      console.log("myInput2 oninput: " + myInput2.value);
      myInput2_span.textContent = myInput2.value;
    },
    onchange: (event) => {
      console.log("myInput2 onchange: " + myInput2.value);
      myInput2_span.textContent = myInput2.value;
    },
  },
  span: {
    id: "myInput2_span",
    text: "50",
  },
});

DOM.set({ br: {} });

DOM.set({
  input: {
    id: "myInput3",
    placeholder: "myInput3 placeholder",
    onchange: (event) => console.log("myInput3 onchange: " + myInput.value),
  },
});

myInput.style.border = "none";
// goBtn.click();

// --
// https://editor.p5js.org/jht9629-nyu/sketches/Bv2yPxl9Y
// test drive DOM.js v1
// someElement undefined
// needed to add id_main
// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#the-domset-method

// --
// https://editor.p5js.org/jht9629-nyu/sketches/2sNiJGe1x
// test drive DOM.js v2
// https://github.com/jht9629-nyu/DOM.js?tab=readme-ov-file#properties-attributes-events-and-listeners
// !!@ addEventListener does not appear to work

// --
// https://editor.p5js.org/jht9629-nyu/sketches/IJDh1-znl
// test drive DOM.js v3
// Correct addEventListener listerner --> listener
// https://github.com/lenincompres/DOM.js?tab=readme-ov-file#properties-attributes-events-and-listeners
