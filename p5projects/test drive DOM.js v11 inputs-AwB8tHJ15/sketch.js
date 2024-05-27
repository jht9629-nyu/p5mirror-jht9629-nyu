// https://editor.p5js.org/jht9629-nyu/sketches/AwB8tHJ15
// test drive DOM.js v11 inputs
  // Button
  // text input
  // Slider
  // checkbox
  // radio button row
  // selection
  // color, note difference Safari vs. Chrome

// I prefer DOM.set array style, 
//  less prone to error from duplicate propery names

let counter = 0;


// function render() {
DOM.set([
  //
  // Button
  {
    tag: "button",
    id: "changeBtn",
    text: "Change Button",
    onclick: (event) => {
      counter++;
      myInput.value = "Button pressed " + counter;
    },
  },
  { tag: "br" },
  //
  // text input
  {
    tag: "input",
    id: "myInput",
    placeholder: "myInput placeholder",
    oninput: (event) => console.log("myInput oninput: " + myInput.value),
    onchange: (event) => console.log("myInput onchange: " + myInput.value),
    click: (event) => console.log("myInput click " + myInput.value),
  },
  { tag: "br" },
  //
  // Slider
  {
    tag: "input",
    id: "myInput2",
    type: "range",
    min: 0,
    max: 100,
    // step: "any",
    value: 50,
    // placeholder: "myInput2 placeholder",
    oninput: (event) => {
      console.log("myInput2 oninput: " + myInput2.value);
      // myInput2_span.textContent = myInput2.value;
      myInput2_label.textContent = "myInput2 oninput: " + myInput2.value;
    },
    onchange: (event) => {
      console.log("myInput2 onchange: " + myInput2.value);
      // myInput2_span.textContent = myInput2.value;
      // myInput2_label.textContent = myInput2.value;
    },
  },
  {
    tag: "label",
    id: "myInput2_label",
    for: "myInput2",
    text: "50",
  },
  // {
  //   tag: "span",
  //   id: "myInput2_span",
  //   text: "50",
  // },
  { tag: "br" },
  //
  // checkbox
  {
    tag: "input",
    type: "checkbox",
    id: "myInput3",
    placeholder: "myInput3 placeholder",
    onchange: (event) => console.log("myInput3 onchange: " + myInput3.checked),
  },
  {
    tag: "label",
    id: "myInput3_label",
    for: "myInput3",
    text: "Checkbox",
  },
  { tag: "br" },
  //
  // radio button row
  {
    tag: "input",
    type: "radio",
    id: "myInput4",
    name: "drone",
    onchange: (event) => console.log("myInput4 onchange: " + myInput4.checked),
  },
  {
    tag: "label",
    id: "myInput4_label",
    for: "myInput4",
    text: "Heuy",
  },
  {
    tag: "input",
    type: "radio",
    id: "myInput5",
    name: "drone",
    onchange: (event) => console.log("myInput5 onchange: " + myInput5.checked),
  },
  {
    tag: "label",
    id: "myInput5_label",
    for: "myInput5",
    text: "Dewey",
  },
  {
    tag: "input",
    type: "radio",
    id: "myInput6",
    name: "drone",
    onchange: (event) => console.log("myInput6 onchange: " + myInput6.checked),
  },
  {
    tag: "label",
    id: "myInput6_label",
    for: "myInput6",
    text: "Louie",
  },
  { tag: "br" },
  //
  // selection
  {
    tag: "label",
    id: "myInput7_label",
    for: "myInput7",
    text: "Choose a pet:",
  },
  {
    tag: "select",
    id: "myInput7",
    onchange: (event) => console.log("myInput7 onchange: " + myInput7.value),
    elements: [
      {
        tag: "option",
        value: "dog",
        text: "Dog",
      },
      {
        tag: "option",
        value: "cat",
        text: "Cat",
      },
      {
        tag: "option",
        value: "hamster",
        text: "Hamster",
      },
    ],
  },
  { tag: "br" },
  //
  // color
  {
    tag: "label",
    id: "myInput8_label",
    for: "myInput8",
    text: "Choose a color:",
  },
  {
    tag: "input",
    type: "color",
    id: "myInput8",
    value: "#FFFF00",
    onchange: (event) => console.log("myInput8 onchange: " + myInput8.value),
  },

]);

// myInput.style.border = "none";
// changeBtn.click();

myInput3.checked = true;

// }

// function setup() {
// render()
// }

/* -- DOM Reference

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
*/

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

// --
// https://editor.p5js.org/jht9629-nyu/sketches/G3arjv8UF
// test drive DOM.js v10 inputs
