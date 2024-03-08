// system variables width height 
// expressions
function setup() {
  createCanvas(300, 300);
  // createCanvas(400, 400);
  console.log('width', width, 'height', height);
  background(220);
  
  fill(100)
  // ellipse(200,200,300,300)
  ellipse(width/2,height/2,width*0.75,height*0.75)
  
  fill(255)
  // rect(100,100,200,200)
  // rect(width/4,height/4,width/2,height/2)
  rect(width*0.25,height*0.25,width*0.5,height*0.5)
}

// function draw() { 
//   background(220);
// }