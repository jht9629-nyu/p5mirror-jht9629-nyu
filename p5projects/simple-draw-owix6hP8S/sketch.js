// https://editor.p5js.org/jht9629-nyu/sketches/owix6hP8S
// simple-draw

let my = {
  version: 2,
  width: 393, // canvas width
  height: 600, // canvas height
};

function setup() {
  createCanvas(my.width, my.height);

  createDiv("Version:" + my.version);
}

function draw() {
  fill("red");
  textSize(64);
  text("Hello screen", 20, 64);
}

function mouseDragged() {
  // console.log('mouseDragged');
  strokeWeight(20);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  // Prevent canvas drag on mobile devices
  return false;
}

