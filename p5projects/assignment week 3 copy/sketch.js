// take reference of https://www.youtube.com/watch?v=ig0q6vfpD38&t=50s

let slider;
let randomness = 0.5;
let lineColor = 0;

function setup() {
  createCanvas(500, 500);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(20, height + 20);
  slider.style("width", "400px");

  // write the name of slider
  textP = createP("Randomness:");
  textP.position(20, 550);
  textP.style("font-size", "16px");
  textP.style("margin", "0");
}

function draw() {
  background(255);
  fill(0);
  strokeWeight(3);
  rectMode(CENTER);

  randomness = slider.value();
  // lineColor = color(0);

  let space = 50;

  for (x = 0; x < mouseX; x += space) {
    for (y = 0; y < height + 50; y += space)
      if (random(1) < randomness) {
        strokeWeight(10);

        stroke(lineColor);
        line(x, y, x + space, y);
      } else {
        strokeWeight(1);
        line(x, y, x, y + space);
        square(x, y, 10);
        square(x + space / 2, y + space / 2, 10);
      }

    // use map to draw line color
    let hue = map(randomness, 0, 1, 0, 360);
    lineColor = color(hue, 100, 300);

    // display slider's value

    console.log("Randomness:", randomness);
  }
}
