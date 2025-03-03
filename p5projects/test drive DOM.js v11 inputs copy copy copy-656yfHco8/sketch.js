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
DOM.set({
  // Each line will be a section, could have been a paragraph (p:) also
  section: [
    {
      // Button
      // You can use the id as the property name
      changeBtn: {
        tag: "button",
        text: "Change Button",
        onclick: (event) => {
          // console.log('changeBtn event', event);
          // console.log("changeBtn event.target", event.target);
          counter++;
          myInput.value = "Button pressed " + counter;
        },
      },
    },
    {
      // text input
      // You also can use the tag as the property name
      input: {
        id: "myInput",
        placeholder: "myInput placeholder",
        oninput: (event) => console.log("myInput oninput: " + myInput.value),
        onchange: (event) => console.log("myInput onchange: " + myInput.value),
        click: (event) => console.log("myInput click " + myInput.value),
      },
    },
    {
      // You can also use selector notation for property names (as: "tag#id.class")
      // Slider
      "input#myInput2.active": {
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
      //
      label: {
        id: "myInput2_label",
        for: "myInput2",
        text: "50",
      },
    },
    {
      //
      // checkbox
      myInput3: {
        tag: "input",
        type: "checkbox",
        placeholder: "myInput3 placeholder",
        onchange: (event) =>
          console.log("myInput3 onchange: " + myInput3.checked),
      },
      label: {
        id: "myInput3",
        for: "myInput3",
        text: "Checkbox",
      },
    },
    {
      //
      // radio button row
      myInput4: {
        tag: "input",
        type: "radio",
        name: "drone",
        onchange: (event) =>
          console.log("myInput4 onchange: " + myInput4.checked),
      },
      myInput4Label: {
        tag: "label",
        for: "myInput4",
        text: "Heuy",
      },
      myInput5: {
        tag: "input",
        type: "radio",
        name: "drone",
        onchange: (event) =>
          console.log("myInput5 onchange: " + myInput5.checked),
      },
      myInput5Label: {
        tag: "label",
        for: "myInput5",
        text: "Dewey",
      },
      myInput6: {
        tag: "input",
        type: "radio",
        name: "drone",
        onchange: (event) =>
          console.log("myInput6 onchange: " + myInput6.checked),
      },
      myInput6Label: {
        tag: "label",
        for: "myInput6",
        text: "Louie",
      },
    },
    {
      //
      // selection
      myInput7_label: {
        tag: "label",
        for: "myInput7",
        text: "Choose a pet:",
      },
      myInput7: {
        tag: "select",
        onchange: (event) =>
          console.log("myInput7 onchange: " + myInput7.value),
        option: [
          {
            value: "dog",
            text: "Dog",
          },
          {
            value: "cat",
            text: "Cat",
          },
          {
            value: "hamster",
            text: "Hamster",
          },
        ],
      },
    },
    {
      //
      // color
      myInput8Label: {
        tag: "label",
        for: "myInput8",
        text: "Choose a color:",
      },
      myInput8: {
        tag: "input",
        type: "color",
        value: "#FFFF00",
        onchange: (event) =>
          console.log("myInput8 onchange: " + myInput8.value),
      },
    },
  ],
});

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
