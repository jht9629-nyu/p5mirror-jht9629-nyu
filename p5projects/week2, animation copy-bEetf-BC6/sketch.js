//My question this week is how to adjust the speed of random. I could only adjust speed which applies to the entire sketch. How can I define the speed only for 'random'？
// background setting? 
// how to make the circle going back to the starting point 
let x = 100;
let y = 100;
let words = [
  "rain",
  "broken",
  "umbrella",
  "bear",
  "fluffy",
  "Sunday",
  "lazy morning",
];
let a, z, r, g, b;
let word = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  randomSeed(10);
}

// function draw() {

// }

function draw() {
  background(17, 77, 75);
  fill("pink");
  circle(mouseX, mouseY, 50);
 

  fill(219, 240, 127, 130);
  circle(x, y, 300);
  x++;
  y++;
  
   if (y > 400) {
    y = 0;}
  if(x >400) {
    x = 0;
  }

  fill(245, 242, 164);
  
  if (frameCount % 4 == 0) {
    word = random(words);
  }
  
  textSize(80);
  textFont("Georgia");
  text(word, 100, 500);
  describe(
    "word displayed at random. Either rain, broken, umbrella, bear, fluffy, Sunday, or lazy morning"
  );

 r = random(255);
  g = 0;
  b = random(255);
  a = random(width);
  z = random(height);
  noStroke();
  fill(r, g, b, 100);
  circle(a, z, 40);



  //   let words = ['apple', 'bear', 'cat', 'dog'];
  // let word = random(words); // select random word
  // text(word, 10, 50); // draw the word
  // describe('word displayed at random. Either apple, bear, cat, or dog.');
}

