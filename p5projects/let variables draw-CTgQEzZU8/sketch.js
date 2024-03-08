// let variables draw at mouseX, mouseY
// expressions use to draw four rects
function setup() {
  // createCanvas(300, 300);
  createCanvas(400, 400);
  console.log('width', width, 'height', height);
}

function draw() {
  // background(220);
  
  let x1 = mouseX
  let y1 = mouseY
  let w1 = width*0.25
  let h1 = height*0.25
  // console.log('x1', x1, 'y1', y1, 'w1', w1, 'h1', h1);
  fill('gray')
  rect(x1,y1,w1,h1)
  
  // change variable x1
  x1 += w1;
  fill('red')
  rect(x1,y1,w1,h1)
  
  x1 = mouseX
  y1 += h1;
  fill('yellow')
  rect(x1,y1,w1,h1)
  
  x1 += w1;
  fill('green')
  rect(x1,y1,w1,h1)
}

