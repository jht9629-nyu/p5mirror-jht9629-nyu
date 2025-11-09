// 
https://editor.p5js.org/jht9629-nyu/sketches/prS68eB32

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  var x = 0;
  while (x < width) {
    ellipse(x, 10, 25, 25);
    x = x + 50;
    ellipse(x, 40, 20, 20);
    x = x + 20;
    let s = 20;
    for (y = 70; y < height; y += 30) {
      console.log('y', y);
      ellipse(x, y, s, s);
      s -= 2;
    }
    // ellipse(x, 100, 18, 18);
    // ellipse(x, 130, 10, 10);
    // ellipse(x, 160, 8, 8);
    // ellipse(x, 190, 6, 6);
    // ellipse(x, 220, 5, 5);
    // ellipse(x, 250, 5, 5);
    // ellipse(x, 280, 4, 4);
    // ellipse(x, 310, 4, 4);
    // ellipse(x, 340, 3, 3);
    // ellipse(x, 370, 3, 3);
    // ellipse(x, 400, 2, 2);
  }
}
