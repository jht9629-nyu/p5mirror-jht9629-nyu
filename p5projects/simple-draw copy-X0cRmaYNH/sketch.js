// https://editor.p5js.org/jht9629-nyu/sketches/owix6hP8S
// simple-draw
function setup() {
  createCanvas(windowWidth, windowHeight - 30);
  createDiv("Simple Draw v1");
}
function draw() {
  fill("red");
  textSize(64);
  strokeWeight(0);
  text("Hello screen", 20, 64);
}
function mouseDragged() {
  // console.log('mouseDragged');
  strokeWeight(20);
  stroke(random(255), random(255), random(255));
  line(mouseX, mouseY, pmouseX, pmouseY);
  // Prevent canvas drag on mobile devices
  return false;
}
function keyPressed() {
  // typing a "r" key will clear the canvas
  if (key === "r") {
    background(255);
  }
}
