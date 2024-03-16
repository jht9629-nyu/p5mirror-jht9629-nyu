// https://editor.p5js.org/jht9629-nyu/sketches/IJDh1-znl
// test drive DOM.js v3
// Correct addEventListener listerner --> listener

function setup() {
  createCanvas(400, 100);

  DOM.set({
    input: {
      id: "myInput",
      placeholder: "Type value here",
      onchange: (event) => alert(myInput.value),
      click: (event) =>
        alert(
          "It recognized event types to add listeners; as well as event methods."
        ),
    },
    button: {
      id: "goBtn",
      innerText: "Go",
      addEventListener: {
        type: "click",
        listener: (event) => (myInput.value = "Button pressed"),
      },
    },
  });

  myInput.style.border = "none";
  goBtn.click();
}

function draw() {
  background(220);
}

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
