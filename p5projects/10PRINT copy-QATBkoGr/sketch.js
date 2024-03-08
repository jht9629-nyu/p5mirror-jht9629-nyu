// From: http://10print.org/

var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(5);
  //   frameRate(1)
  // }

  // function draw() {
  background(255);
  let cl = [random(0, 255), random(0, 255), random(0, 255)];
  stroke(cl);
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      // let cl = random(['red','green','yellow'])
      // let cl = random(0,255)
      // let cl = [random(0,255),random(0,255),random(0,255)]
      // stroke(cl);
      if (random(1) > 0.5) {
        line(x, y, x + 20, y + 20);
      } else {
        line(x, y + 20, x + 20, y);
      }
      // x += 20;
      // if (x > width) {
      //   x = 0;
      //   y += 20;
      // }
      // if (y > height) {
      //   background(255);
      //   x = 0;
      //   y = 0;
      // }
    }
  }
}
