/*
Part 1: Unscramble the code below.

1. Move the statements into either the setup(), draw(), or mousePressed() functions in order to:
2. Draw a square in the center of the Canvas.
3. When the mouse is inside the square,
and you click the mouse, change the square's color.
*/


function setup() {
  
}

function draw() {
  
}


createCanvas(400, 400);

let isOn = false;

rect(width / 2, height / 2, 200);

rectMode(CENTER);

fill(0);

fill(255);

isOn = true;

function mousePressed() {

}

background(220);


if (isOn == false) {
    
} else {
   
}


if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
  
}


/*
Part 2: Add on
Toggle the state of the square.
Can you create an interaction where you flip the color back and forth from white to black and back?

If it is white, click to flip it to black.
If it is black, click to flip it to white.

Just like flipping a light switch on and off.

Extra: Can you toggle the background color at the same time, too?
*/


