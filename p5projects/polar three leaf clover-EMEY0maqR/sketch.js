// https://editor.p5js.org/jht9629-nyu/sketches/EMEY0maqR
// polar three leaf clover
// google: p5js code to draw a 3 leaf clover in polar coordinates
// failse !!@

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for easier angle manipulation
  // It's often useful to translate to the center for polar coordinates
  translate(width / 2, height / 2);
}

function draw() {
  background(220);
  translate(width / 2, height / 2); // Reposition the origin to the center

  // Define the properties of the clover
  let numLeaves = 3;
  let leafRadius = 50; // Radius of each leaf
  let leafArc = 100;  // How much each leaf arc spans
  let petalOffset = 30; // How far from the center each leaf starts

  // Loop to draw the 3 leaves
  for (let i = 0; i < numLeaves; i++) {
    let angle = i * (360 / numLeaves); // Angle for each leaf (e.g., 0, 120, 240 degrees)
    
    // Convert polar to Cartesian for the start and end of the leaf arc
    let startX = cos(angle - leafArc/2) * petalOffset;
    let startY = sin(angle - leafArc/2) * petalOffset;
    
    let endX = cos(angle + leafArc/2) * petalOffset;
    let endY = sin(angle + leafArc/2) * petalOffset;

    // Set up leaf appearance
    noFill();
    stroke(0, 150, 0);
    strokeWeight(10);
    
    // Draw the leaf as an arc
    arc(0, 0, leafRadius * 2, leafRadius * 2, angle - leafArc/2, angle + leafArc/2);
  }
}

