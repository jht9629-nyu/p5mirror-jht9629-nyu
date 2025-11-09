// https://editor.p5js.org/jht9629-nyu/sketches/WcFLrf2hA
// https://editor.p5js.org/rafiiia/sketches/bLSgcFO09
// RaFia self portrait
// https://editor.p5js.org/lilycrandall/sketches/42bCYAAP-

function setup() {
  createCanvas(600, 600);
}

//PRINT X AND Y LOCATION WHEN MOUSE IS CLICKED
function mouseClicked() {
  console.log(mouseX, mouseY);
}
function draw() {
  //DEFINE HAIR & SKIN COLOR VARIABLES
  let skin = color(116, 67, 42);
  let hair = color(255, 221, 116);
  let hairpink = color(187, 0, 132);
  let hairgrad = color(187, 0, 132, 170);
  let silver = color(172, 166, 168);
  let gold = color(238, 199, 58);

  angleMode(DEGREES);
  background(248, 23, 230);

  //SET VARIABLES X AND Y FOR BACKGROUND PATTERN SHAPES
  for (var x = 20; x < 600; x = x + 50) {
    for (var y = 20; y < 600; y = y + 50) {
      noStroke();
      fill(252, 192, 0);
      rect(x, y, 10);
    }
  }

  //HAIR
  fill(hair);
  ellipse(300, 220, 250, 300);
  fill(hairpink);
  ellipse(300, 300, 300, 300);
  fill(hairgrad);
  ellipse(300, 250, 300, 300);

  //FACE
  fill(skin);
  ellipse(300, 300, 250, 300);

  //EARS
  fill(skin);
  ellipse(178, 300, 50, 50);
  fill(skin);
  ellipse(420, 300, 50, 50);

  //EYES
  fill(255, 255, 255, 255);
  ellipse(230, 286, 100, 50);
  fill(255, 255, 255, 255);
  ellipse(370, 286, 100, 50);
  fill(0, 0, 0, 255);
  ellipse(230, 286, 50, 50);
  fill(0, 0, 0, 255);
  ellipse(370, 286, 50, 50);

  //EYEBROWS
  fill(0, 0, 0);
  rect(180, 230, 100, 30);
  fill(0, 0, 0);
  rect(320, 230, 100, 30);

  //BANGS
  fill(hair);
  ellipse(300, 200, 100, 100);

  //NOSE
  noFill();
  strokeWeight(3);
  stroke(color(0, 0, 0));
  arc(300, 340, 30, 20, 0, 180, OPEN);
  stroke(color(0, 0, 0));
  arc(277, 340, 15, 17, 0, 180, OPEN);
  stroke(color(0, 0, 0));
  arc(323, 340, 15, 17, 0, 180, OPEN);

  //MOUTH
  fill(141, 18, 105);
  arc(300, 400, 80, 40, 180, 0);
  arc(300, 401, 80, 40, 0, 180);
  line(340, 400, 260, 400);

  //EARRINGS
  noFill();
  stroke(color(gold));
  arc(165, 335, 20, 30, 300, 270, OPEN);
  arc(435, 335, 20, 30, 270, 240, OPEN);
}
