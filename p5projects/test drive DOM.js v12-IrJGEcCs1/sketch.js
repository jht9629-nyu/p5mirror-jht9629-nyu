// https://editor.p5js.org/jht9629-nyu/sketches/IrJGEcCs1
// test drive DOM.js v12
//
// p5.js/1.11.1/p5.js
// add id_ element id names
// use tag.id style naming
//
// https://editor.p5js.org/lac567/sketches/rwmLo-LRo
// test drive DOM.js v11 inputs copy copy

// Button
// text input
// Slider
// checkbox
// radio button row
// selection
// color, note difference Safari vs. Chrome

let counter = 0;

DOM.set({
  // Each line will be a section
  // could have been a paragraph (p:) also
  //
  section: [
    {
      // text input
      // You also can use the tag as the property name
      "input#id_input": {
        id: "id_input",
        placeholder: "id_input placeholder",
        oninput: (event) => {
          // console.log("id_input oninput: " + id_input.value)
        },
        onchange: (event) => {
          // console.log("id_input onchange: " + id_input.value)
        },
        onclick: (event) => {
          // console.log("id_input onclick " + id_input.value)
        },
      },
    },
    {
      // Button
      // You can use the id as the property name
      "button#id_button": {
        id: "id_button",
        text: "Change Button",
        onclick: (event) => {
          // !!@ console.log gives error message
          // RangeError: Maximum call stack size exceeded
          // console.log('id_button onclick');
          // !!@ console.log gives crash!
          // console.log('id_button onclick event', event);
          // console.log("id_button onclick event.target", event.target);
          counter++;
          id_input.value = "Button pressed " + counter;
          // return false;
        },
      },
    },
    {
      // You can also use selector notation for property names 
      // as: "tag#id.class"
      // You can add multiple classes separated by dots. 
      // Slider input example with id = "id_slider"
      // the class "active" is added to the input element
      //
      "input#id_slider.active": {
        id: "id_slider",
        type: "range",
        min: 0,
        max: 100,
        // step: "any",
        value: 50,
        oninput: (event) => {
          // console.log("id_slider oninput ");
          // console.log("id_slider oninput: " + id_slider.value);
          id_slider_label.textContent = id_slider.value;
        },
        onchange: (event) => {
          // console.log("id_slider onchange: " + id_slider.value);
          // id_slider_label.textContent = "id_slider onchange: " + id_slider.value;
        },
      },
      "label#id_slider_label": {
        id: "id_slider_label",
        for: "id_slider",
        text: "50",
      },
    },
    {
      // checkbox
      //
      "input#id_checkbox": {
        id: "id_checkbox",
        type: "checkbox",
        // placeholder: "id_checkbox placeholder",
        onchange: (event) => {
          // console.log("id_checkbox onchange ")
          // console.log("id_checkbox onchange: " + id_checkbox.checked)
        }
      },
      "label#id_checkbox_label": {
        for: "id_checkbox",
        text: "Checkbox",
      },
    },
    {
      // radio button row
      //
      "input#id_radio1": {
        id: "id_radio1",
        type: "radio",
        onchange: (event) => {
          // console.log("id_radio1 onchange: " + id_radio1.checked)
        }
      },
      "label#id_radio1Label": {
        for: "id_radio1",
        text: "Heuy",
      },
      "input#id_radio2": {
        id: "id_radio2",
        type: "radio",
        onchange: (event) => {
          // console.log("id_radio2 onchange: " + id_radio2.checked)
        }
      },
      "label#id_radio2Label": {
        for: "id_radio2",
        text: "Dewey",
      },
      "input#id_radio3": {
        id: "id_radio3",
        type: "radio",
        onchange: (event) => {
          // console.log("id_radio3 onchange: " + id_radio3.checked)
        }
      },
      "label#id_radio3Label": {
        for: "id_radio3",
        text: "Louie",
      },
    },
    {
      // selection
      //
      "label#id_selection_label": {
        for: "id_selection",
        text: "Choose a pet:",
      },
      "select#id_selection": {
        id: "id_selection",
        onchange: (event) => {
          // console.log("id_selection onchange: " + id_selection.value)
        },
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
      // color picker
      //
      "label#id_color_label": {
        for: "id_color",
        text: "Choose a color:",
      },
      "input#id_color": {
        id: "id_color",
        // tag: "input",
        type: "color",
        value: "#FFFF00",
        onchange: (event) => {
          console.log("id_color onchange: " + id_color.value + '')
        },
        oninput: (event) => {
          // console.log("id_color oninput: " + id_color.value + '')
        },
      },
    },
  ],
});

id_checkbox.checked = true;

function setup() {
 console.log('in setup');
}

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

// https://editor.p5js.org/jht9629-nyu/sketches/AwB8tHJ15
// test drive DOM.js v11 inputs
