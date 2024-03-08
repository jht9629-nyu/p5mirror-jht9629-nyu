// global variable pattern animation

let x1;
let y1;
let w1;
let h1;

function setup() {
  // createCanvas(300, 300);
  createCanvas(400, 400);
  console.log('width', width, 'height', height);
  
  x1 = 0;
  y1 = 0;
  w1 = width*0.25
  h1 = height*0.25
  
  // frameRate(1);
}

function draw() {
  // background(220);
  
  fill('gray')
  rect(x1,y1,w1,h1)
  
  fill('red')
  ellipse(x1+w1/2,y1+w1/2,w1,h1)
  
  x1 += w1
  if (x1 > width) {
    // noLoop();
    x1 = 0;
    y1 += h1
    if (y1 > height) {
      y1 = 0;
      // noLoop();
    }
  }
}

