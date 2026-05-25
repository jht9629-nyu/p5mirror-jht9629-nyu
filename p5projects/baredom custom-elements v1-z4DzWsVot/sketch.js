// https://editor.p5js.org/jht9629-nyu/sketches/z4DzWsVot
// baredom custom-elements v1
// not changing
//         text: this.#value.value,
//         // text: this.valueBinder,

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// https://github.com/lenincompres/baredom#custom-elements

// declares the class
class MyElement extends HTMLElement {
  #value = new Binder();

  constructor(startVal) {
    super();
    this.value = startVal;

    this.set({
      width: 'fit-content',
      padding: '2em',
      margin: '0 auto',
      display: 'block',
      textAlign: 'center',
      backgroundColor: this._value.as('red', 'green'),
      p: {
        text: this.#value
        // text: this._value.as(),
        // text: this._value.as('red', 'green'),
        // text: this.#value.value,
        // text: this.valueBinder,
        // text: 'text valueBinder' 
      },
      button: {
        text: 'toggle',
        onclick: (e) => this.toggle(),
      },
    });
  }

  set value(val) {
    this.#value.value = val;
  }

  get value() {
    return this.#value.value;
  }

  get _value(){
    return this.#value;
  }

  toggle() {
    this.value = !this.value;
  }
}
customElements.define('my-element', MyElement);

// instantiate the element

let myElement = new MyElement(true);

DOM.set({
  h1: 'Extended HTML element',
  myElement: myElement,
});

console.log('myElement.valueBinder',myElement.valueBinder)

