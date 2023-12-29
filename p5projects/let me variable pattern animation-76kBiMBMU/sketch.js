// global variable pattern animation

let me = {};

function setup() {
  // createCanvas(300, 300);
  createCanvas(400, 400);
  console.log('width', width, 'height', height);
  
  me.x1 = 0;
  me.y1 = 0;
  me.w1 = width/8
  me.h1 = height/8
  
  // frameRate(1);
}

function draw() {
  // background(220);
  
  fill('gray')
  rect(me.x1,me.y1,me.w1,me.h1)
  
  fill('red')
  ellipse(me.x1+me.w1/2,me.y1+me.w1/2,me.w1,me.h1)
  
  me.x1 += me.w1
  if (me.x1 > width) {
    // noLoop();
    me.x1 = 0;
    me.y1 += me.h1
    if (me.y1 > height) {
      me.y1 = 0;
      // noLoop();
    }
  }
}

