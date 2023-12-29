/* USER INSTRUCTIONS:

Move the slider all the way to the right to see the image this was based off of, and all the way to the left to see the self portrait


*/

let img;
function preload() {
  img = loadImage('JeepBRJuly2022-1_AnushkaMenon.jpg'); // loads the initial background image
}

let slider;

function setup() {
  createCanvas(400, 400);
  background(img);

  slider = createSlider(0, 255, 100); // creates slider from value 0 to value 255, starting at 100
  slider.position(10, 10); // puts the slider at 10px in and 10px down
  slider.style('width', '80px'); // sets the slider style
  
}

function draw() {
  
//PURPLE BACKGROUND
let c = color(50,55,100);
background(c);
  
// GRID SYSTEM
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(250);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
  
// HEAD
  stroke(0);
  strokeWeight(4);
  noFill();
  fill('beige'); // skin tone
  ellipse(190,170,170,270);
  //ellipse(x, y, w, [h])
  
// HAIR
  fill('yellow')
  beginShape(TESS);
  vertex(91, 170); 
  vertex(81,108)
  vertex(100, 39); 
  vertex(190, 14); 
  vertex(281, 54); 
  vertex(288, 99); 
  vertex(245, 85);
  vertex(249, 97);
  vertex(217, 81);
  vertex(231, 95);
  vertex(187, 84);
  vertex(205, 103);
  vertex(164, 88);
  vertex(182, 109);
  vertex(143, 94);
  vertex(111, 136);
  endShape(CLOSE);
  
// NECK
  fill('beige')
  beginShape(TESS);
  vertex(108, 222);
  vertex(106, 314);
  vertex(87, 327);
  vertex(96, 345);
  vertex(135, 359);
  vertex(192, 357);
  vertex(235, 341);
  vertex(252, 317);
  vertex(241, 282);
  vertex(179, 288);
endShape(CLOSE);
  
// SHIRT
  fill('white')
beginShape(TESS);
  vertex(104, 307);
  vertex(0,361);
  vertex(0,400);
  vertex(400,400);
  vertex(400,340);
  vertex(325,322);
  vertex(249,301);
  vertex(239,340);
  vertex(195,355);
  vertex(135,359);
  vertex(96,340);
  vertex(89,330);
  vertex(104,315);
endShape(CLOSE);

// CHAIN LEFT
  fill('gold')
beginShape(TESS);
  vertex(100, 308);
  vertex(98,350);
  vertex(111,400);
  vertex(119,400);
  vertex(110,366);
  vertex(106,300);
endShape(CLOSE);
  
//CHAIN RIGHT
beginShape(TESS);
  vertex(245, 294);
  vertex(246, 344);
  vertex(249, 370);
  vertex(248, 400);
  vertex(254, 400);
  vertex(257, 370);
  vertex(251,300);
endShape(CLOSE);

// EAR
  strokeWeight(1);
  fill('beige');
  arc(110, 180, 60, 70, QUARTER_PI, 1.5+ PI + QUARTER_PI, PIE); // outer ear
  fill('black');
  arc(110, 180, 15, 17.5, QUARTER_PI, 1.5+ PI + QUARTER_PI, PIE); // inner ear
  
// EYES
  strokeWeight(1);
fill('white')
  circle (180,160,20) // eye left
  circle (250,165,20) // eye right

fill('black')
  circle (180,160,8) //pupil left
  circle (250,165,8) // pupil right
  
// EYEBROWS
strokeWeight(0);
  fill('black')
bezier(150, 156, 180, 120, 200, 120, 220, 140) // eyebrow left
bezier(235, 150, 260, 120, 280, 140, 280, 160) // eyebrow right
   
  
// NOSE
  stroke(0);
  strokeWeight(1);
  fill('yellow')
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(225, 160, 200, 220, 240, 220) // nose bottom
  fill('black')
  circle (212,215,10) // nostril left
  circle (227,215,10) // nostril left
  
// MOUSTACHE
fill('black')
  rectMode(CORNER);
  rect(175, 225, 80, 15, 50); // moustache
  rect(170, 225, 15, 74, 50); // handlebar left
  
beginShape(TESS);
vertex(250, 225);
vertex(266, 230);
vertex(249, 268);
endShape(CLOSE); // moustache handlebar right
  

// BEARD BOTTOM
beginShape(TESS);
vertex(116, 217);
vertex(202, 271);
vertex(246, 269);
vertex(246, 275); 
vertex(218, 298); 
vertex(192, 305);
vertex(156,293);
vertex(130,264);
vertex(110, 216); 
endShape(CLOSE);
  
  
// MOUTH 
  fill('pink');
rectMode(CENTER);
  rect(215, 250, 60, 15, 80); // lips
  fill('black');
  line(185,250,245,250); // lip division
  
//SLIDER OPACITY CHANGES  
 let val = slider.value(); 
  background(img);
  tint(255, 255, 255, val);  
  

// POSITION IDENTIFIER SYSTEM 
  fill('white');
  text(mouseX + "," + mouseY, mouseX+10, mouseY); // // outputs the x/y coordinates of wherever the mouse is hovering over, and the text will be 10 px to the right of the mouse cursor.
}
  