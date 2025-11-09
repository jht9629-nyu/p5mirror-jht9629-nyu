function setup() {
  createCanvas(400, 400);
}

function draw() {
  //ivory background
  background(255,246,229);
  
  //background pattern
  stroke(255,255,255)
  strokeWeight(12);
  line(40, 0, 40, 400);
  line(100, 0, 100, 400);
  line(160, 0, 160, 400);
  line(220, 0, 220, 400);
  line(280, 0, 280, 400);
   line(340, 0, 340, 400);
   line(0,60,400,60);
  line(0,130,400,130);
  line(0,200,400,200);
  line(0,270,400,270);
  line(0,340,400,340);
  
  //black hair
   fill(50, 30, 20);  
  noStroke();
  rect(100, 220, 200, 260);
  fill(50, 30, 20);
  circle(200,230,200);
  
   //body
  fill(255,182,200);
  ellipse(200,400,-300,-200)
  
  //head&face
  fill(255,242,255)
   circle(200,250,200)
  noStroke()

  //blush
  fill(255,210,210)
  circle(120,260,50)
  circle(280,260,50)
  
  //eyes
  fill(0,0,0)
  ellipse(140,240,22,36);
  ellipse(260,240,22, 36);
   
 
}
