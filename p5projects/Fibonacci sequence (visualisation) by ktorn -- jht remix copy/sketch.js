// https://editor.p5js.org/jht9629-nyu/sketches/aY6BqcsGh
// Fibonacci sequence (visualisation) by ktorn -- jht remix

let fib;
let mult = 10;
let goldenr = 1.618;
let forn = 7; // Try ... 11
let high = 300;
let centerR = 0.65;
let nfib = { n1: 0, n2: 1 };

function setup() {
  createCanvas(high * goldenr, high);
  // fib = new Fib();
  fib = nfib;
  
  background(220);

  // translate(250, 200);
  translate(width * centerR, height * centerR);

  rect(0, 0, fib.n2 * mult, fib.n2 * mult);

  for (let i = 0; i < forn; i++) {
    // fib.next();
    nnext()
    // Why + 1 ??
    translate(fib.n1 * mult, fib.n1 * mult + 1);
    rotate(-HALF_PI);
    rect(0, 0, fib.n2 * mult, fib.n2 * mult);
  }
}

function nnext() {
  let oldN1 = nfib.n1;
  let oldN2 = nfib.n2;

  nfib.n1 = nfib.n2;
  nfib.n2 = oldN1 + oldN2;

  console.log(nfib.n2, nfib.n2 / nfib.n1);
}

// Try: replace with literal object and next function
class Fib {
  constructor() {
    this.n1 = 0;
    this.n2 = 1;

    console.log(this.n1);
    console.log(this.n2);
  }
  next() {
    let oldN1 = this.n1;
    let oldN2 = this.n2;

    this.n1 = this.n2;
    this.n2 = oldN1 + oldN2;

    console.log(this.n2, this.n2 / this.n1);
  }
}

// Goggle “p5js visualization of fibonacci sequence”
// https://editor.p5js.org/ktorn/sketches/r1dFaL5f4
// Fibonacci sequence (visualisation) by ktorn

// https://en.wikipedia.org/wiki/Golden_ratio
//
