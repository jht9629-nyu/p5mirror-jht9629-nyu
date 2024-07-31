// https://editor.p5js.org/jht9629-nyu/sketches/N0sHpW32g
// https://editor.p5js.org/KevinWorkman/sketches/PNuKYYKmz
// Random Skulls 💀💀💀 -KevinWorkman

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Draw a random background color.
  // This is in setup() so old skulls stay on the screen.
  background(random(255), random(255), random(255));
}

function draw() {
  // Try passing in mouseX and mouseY!
  drawSkull(random(width), random(height), random(10, 100), random(10, 100));
}

function drawSkull(skullX, skullY, skullWidth, skullHeight) {
  // Change the fill color to a random color.
  fill(random(255), random(255), random(255));
  noStroke();

  // Draw the top circle part of the skull.
  ellipse(skullX, skullY, skullWidth, skullHeight);

  // Draw the bottom rectangle part of the skull.
  rect(
    skullX - skullWidth / 4,
    skullY + skullHeight / 4,
    skullWidth / 2,
    skullHeight / 2
  );

  // Change the fill color to black.
  fill(0);

  // Below, we use the skullX, skullY, skullWidth, and skullHeight
  // variables to draw the eyes and teeth inside the skull.
  // If this is confusing, try drawing out a few examples
  // with a pencil on a piece of graph paper!

  // Draw the eyes.
  var eyeSpacing = skullWidth / 4;
  var eyeWidth = skullWidth / 6;
  var eyeHeight = skullHeight / 4;
  ellipse(skullX - eyeSpacing, skullY, eyeWidth, eyeHeight);
  ellipse(skullX + eyeSpacing, skullY, eyeWidth, eyeHeight);

  // Draw the teeth.
  var teethWidth = skullWidth / 30;
  var teethHeight = skullHeight / 4;
  var teethTop = skullY + skullHeight / 2;
  var teethSpacing = skullWidth / 6;
  rect(skullX - teethSpacing, teethTop, teethWidth, teethHeight);
  rect(skullX, teethTop, teethWidth, teethHeight);
  rect(skullX + teethSpacing, teethTop, teethWidth, teethHeight);
}
