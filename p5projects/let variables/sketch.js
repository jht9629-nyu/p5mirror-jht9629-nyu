// let variables  
// expressions
function setup() {
  createCanvas(300, 300);
  // createCanvas(400, 400);
  console.log('width', width, 'height', height);
  background(220);
  
  let x1 = width*0.25
  let y1 = height*0.25
  let w1 = width*0.5
  let h1 = height*0.5
  console.log('x1', x1, 'y1', y1, 'w1', w1, 'h1', h1);
  fill(100)
  rect(x1,y1,w1,h1)
  
  let x2 = x1 + w1/2
  let y2 = y1 + h1/2
  fill(255)
  ellipse(x2,y2,w1,h1)
}

