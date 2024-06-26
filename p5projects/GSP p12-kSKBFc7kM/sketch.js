function setup() {
  // createCanvas(480, 120);
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}


// 12 Make_Getting-Started-with-p5dotjs

// https://openlab.citytech.cuny.edu/mtec1101-hd88-sp2022/files/2019/03/Make_Getting-Started-with-p5dotjs.pdf
