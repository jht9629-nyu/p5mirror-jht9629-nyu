// let variables topleft
// expressions use to draw four rects
function setup() {
  // createCanvas(300, 300);
  createCanvas(400, 400);
  console.log('width', width, 'height', height);
  background(220);
  
  let x1 = 0
  let y1 = 0
  let w1 = width*0.5
  let h1 = height*0.5
  console.log('x1', x1, 'y1', y1, 'w1', w1, 'h1', h1);
  fill('gray')
  rect(x1,y1,w1,h1)
  
  // change variable x1
  x1 += w1;
  fill('red')
  rect(x1,y1,w1,h1)
  
  x1 = 0
  y1 += h1;
  fill('yellow')
  rect(x1,y1,w1,h1)
  
  x1 += w1;
  fill('green')
  rect(x1,y1,w1,h1)
}

