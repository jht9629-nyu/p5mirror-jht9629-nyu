// https://editor.p5js.org/jht9629-nyu/sketches/dxElfI0pB
// async-await-setTimeout

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

// async function expression assigned to a variable
const add = async function (x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(50).then((v) => {
  console.log(v); // prints 100 after 4 seconds.
});

// async function expression used as an IIFE
(async function (x) {
  const p1 = resolveAfter2Seconds(20);
  const p2 = resolveAfter2Seconds(30);
  return x + (await p1) + (await p2);
})(11).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
