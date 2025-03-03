// https://editor.p5js.org/jht9629-nyu/sketches/gQ28Ql0zM
// https://editor.p5js.org/_o.line/sketches/NRw2trXdp
// Data Storytelling Finals

// an array of ParticleSystems
let emitters = [];

function setup() {
  createCanvas(700, 550);
  emitters.push(new Emitter(100, 60));
}

function draw() {
  background(250);
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
    emitters[i].run();
    console.log(mouseX, mouseY);
  }

  push();
  noFill();
  strokeWeight(1);
  stroke(10);
  quad(0, 0, 700, 0, 700, 550, 0, 550);
  pop();

  textAlign(CENTER);
  fill(10);
  textSize(42);
  textFont("Raleway");
  text('"Generative AI is not a', 350, 100);
  text("replacement for human creativity,", 350, 170);
  text("but rather a tool ", 350, 240);
  text('that can augment and enhance it"', 350, 310);
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
