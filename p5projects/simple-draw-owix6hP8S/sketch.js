// https://editor.p5js.org/jht9629-nyu/sketches/owix6hP8S
// simple-draw
let c;
function setup() {
  createCanvas(windowWidth, windowHeight-30);
  createDiv("Simple Draw v1");
  c = random(["green", "red", "yellow"])
}

function draw() {
  fill("red");
  textSize(64);
  text("Hello screen", 20, 64);
}

function mouseDragged() {
  // console.log('mouseDragged');
  strokeWeight(20);
  // stroke(random(255),random(255),random(255));
  // stroke('red');
  stroke(c);
  line(mouseX, mouseY, pmouseX, pmouseY);
  // circle(mouseX, mouseY, 5);
  // Prevent canvas drag on mobile devices
  return false;
}

