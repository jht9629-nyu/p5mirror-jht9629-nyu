let x = 200
function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#4994FF");
  let c1 = color(255, 255, 55);
  fill(c1);
  noStroke();
  circle(x, 100, 250);

  stroke("#3f9b0b");
  strokeWeight(320);

  line(0, 600, 400, 600);

  let c2 = color("#f0c08a");
  fill(c2);
  noStroke();
  circle(205, 370, 55);

  stroke("#000000");
  strokeWeight(5);

  line(205, 400, 205, 425);

  stroke("#000000");
  strokeWeight(5);

  line(190, 410, 220, 410);

  stroke("#000000");
  strokeWeight(5);

  line(195, 385, 215, 385);

  stroke("#000000");
  strokeWeight(5);

  line(193, 370, 194, 370);

  stroke("#000000");
  strokeWeight(5);

  line(215, 370, 216, 370);
  
  x = x + 2;
}