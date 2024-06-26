// https://editor.p5js.org/jht9629-nyu/sketches/FGY0TBrSEf
// xpos counter

let my = { };

function setup() {
  
  my.version = 2;
  my.width = 393; // canvas width
  my.height = 600; // canvas height
  my.xpos = 0;
  my.xstep = 10;

  createCanvas(my.width, my.height);

  createDiv("Version:" + my.version);
}

function draw() {
  background(255);
  
  fill("red");
  textSize(64);
  text("Hello screen", 20, 64);
  
  fill('yellow');
  rect(my.xpos, height / 2, 10, 10);
  
  my.xpos = my.xpos + my.xstep;
  if (my.xpos > width) { 
    my.xpos = 0;
  }
}


