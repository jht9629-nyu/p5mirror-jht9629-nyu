function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Printing n fibonacci sequence
n = 20;

for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}

// https://www.geeksforgeeks.org/javascript-program-to-display-fibonacci-sequence-using-recursion/
