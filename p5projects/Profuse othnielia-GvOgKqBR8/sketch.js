//  Double-click to draw the contents of the graphics buffer.

let pg;
let pg2;

function setup() {
  displayDensity(1);
  createCanvas(100, 100);
  
  background(180);

  // Create the p5.Graphics object.
  pg = createGraphics(50, 50);
  pg2 = createGraphics(99, 99);

  // Draw to the graphics buffer.
  pg.background(100);
  pg.circle(pg.width / 2, pg.height / 2, 20);

  describe('A gray square. A smaller, darker square with a white circle at its center appears when the user double-clicks.');
}

// Display the graphics buffer when the user double-clicks.
function doubleClicked() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    image(pg, 25, 25);
  }
}