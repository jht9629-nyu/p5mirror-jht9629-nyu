// https://editor.p5js.org/jht9629-nyu/sketches/VY-KQxJkA
// DOM.js console.log bug
// run this sketch and get error:
//   "RangeError: Maximum call stack size exceeded"
// disable DOM.js include and console.log works
//
function setup() {
 console.log('in setup');
}

function draw() {
 console.log('in draw'); 
}

console.log('pre setup');