function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

function draw() {
  background(0);
  // frameCount * TWO_PI / 360;
  // translate(width/2, height/2);
  // fill(255);
  // circle(0,trigMapped, 100);
  // fill(150)
  // circle(0,trigMapped, 50);
  for (let i = 10; i > 0; i = i - 1) {
    let x = radians(frameCount) - i / 10;
    let trig = atan(10 * sin(x)) / atan(10);
    let trigMapped = map(trig, -1, 1, -height / 4, height / 4);
    push();
    fill(i * 10, random(255), random(255));
    translate(width / 2, height / 2);
    circle(0, trigMapped, i * 10);
    pop();
    if (frameCount == 1) {
      // corrected unit to units
      saveGif("cirlce.gif", 360, { units: "frames" });
    }
  }
  //   if (trig = -1) {
  //   console.log(frameCount);
  // }
}

// https://editor.p5js.org/yc7143/sketches/aXzIm-XoW
// ccl ye

// https://editor.p5js.org/jht9629-nyu/sketches/uwdOhUe_d
